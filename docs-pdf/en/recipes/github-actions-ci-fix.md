---
description: "Codex and GitHub Actions case, explaining how to read logs, locate problems, automatically repair and generate PR after CI failure."
---

# Codex × GitHub Actions: actual test of automatic repair of CI failures

This article records a real test: as soon as CI is installed, Codex automatically reads the code, finds problems, makes corrections, opens PR, and waits for you to merge, without manual intervention in the whole process.

The demonstration uses a shopping cart project.

------

## What is the traditional way?

CI failure is a common occurrence in daily development, but it is not easy to deal with.

The usual process is as follows: receive an email or message notification → open the CI log and read the error report line by line → switch to local and find the problematic code → repair, submit, and push it again → wait for CI to run again, confirm the approval → open a PR, and wait for others to review and merge.

The entire link relies on people to connect it in the middle. If the error message is unclear, a period of troubleshooting time will be added. During off-hours or cross-time zone collaboration, it is normal for a CI failure to be delayed until the next day.

After the introduction of Codex, this link has changed: once CI fails, the workflow automatically triggers Codex, which reads the code, locates the problem, fixes it, and opens a PR. All you need to do is take one last look and click Merge.

------

## where the error occurred

The core logic of the project is to calculate the total price of the shopping cart and subtract 20 from the total price of 100.

There is a bug buried in the discount function: the minus sign is written as a plus sign.

```javascript
//wrong code
if (total >= 100) {
return total + 20; // should be a minus sign
}
```

The effect is: a product originally priced at 120 yuan becomes 140 yuan after discounts, and the more discounted it is, the more expensive it becomes.

------

## What error did CI report after submitting?

After the code is pushed to GitHub, CI automatically runs the test and fails after about a minute.

![image-20260514160127487](../images/image-20260514160127487.png)

Click in to see the error report:

![image-20260514160207520](../images/image-20260514160207520.png)

The test expected to get 100, but actually got 140. The error points directly to a problem with discount calculation, very clearly.

------

## What does the configuration file look like?

The key to letting Codex intervene automatically is to put a GitHub Actions workflow file in the repository. The complete configuration is as follows:

```yaml
name: Codex Auto-Fix on Failure
on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]
pertasks:
  contents: write
  pull-requests: write
jobs:
  auto-fix:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    env:
      OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
      FAILED_WORKFLOW_NAME: ${{ github.event.workflow_run.name }}
      FAILED_RUN_URL: ${{ github.event.workflow_run.html_url }}
      FAILED_HEAD_BRANCH: ${{ github.event.workflow_run.head_branch }}
      FAILED_HEAD_SHA: ${{ github.event.workflow_run.head_sha }}
    steps:
      - name: Checkout Failing Ref
        uses: actions/checkout@v4
        with:
          ref: ${{ env.FAILED_HEAD_SHA }}
          fetch-depth: 0
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm install
      - name: Run Codex
        uses: openai/codex-action@main
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt: "This is a Node.js project, using Jest for testing. Please read the repository code, run the test suite, find the smallest change that causes the test to fail, fix it, and stop. Do not modify code that is not related to the failure."
          sandbox: workspace-write
      - name: Verify tests pass
        run: npm test --silent
      - name: Create Pull Request
        if: success()
        uses: peter-evans/create-pull-request@v6
        with:
          commit-message: "fix: Codex automatically fixes failed tests"
          branch: codex/auto-fix-${{ github.event.workflow_run.run_id }}
          base: ${{ env.FAILED_HEAD_BRANCH }}
          title: "🤖 Codex automatically repairs CI failure"
          body: |
Codex detected the CI failure and automatically generated this fix PR.

Failed workflow: ${{ env.FAILED_WORKFLOW_NAME }}
Failure record link: ${{ env.FAILED_RUN_URL }}

Please check the changes and merge them after confirming they are correct.
```

A few points worth noting:

**Triggering and filtering**: Monitor the workflow named "CI" and wait for it to finish running before judging the result. `conclusion == 'failure'` ensures that it is only actually executed when it fails. If it succeeds, the job will be skipped directly without consuming resources.

**Record failure scene**: Store the branch, commit SHA, and log link of the failed run into environment variables. This information will eventually be written into the PR description, making it easier to trace later which CI triggered the fix.

**Code that failed to check out**: `ref: ${{ env.FAILED_HEAD_SHA }}` Pull the code submitted that failed to pull out, and ensure that the Codex is changing the version that actually caused the problem.

**Codex fix**: Use the official `openai/codex-action@main`, and write clear requirements in Chinese for the prompt - run tests, find the minimum scope of changes, stop after repairing, and do not touch irrelevant code. `sandbox: workspace-write` allows it to write files.

**Verify first before opening PR**: After the Codex is modified, run `npm test` first, and then execute `create-pull-request` after confirming that the test has passed. `if: success()` guarantees that if a mistake is made, a red PR will not be issued.

------

## Tell Codex what to do

After CI fails, the configured Codex workflow is automatically triggered. It does three things: read the repository code, run the test suite, locate the problem and modify it.

![image-20260514160256044](../images/image-20260514160256044.png)

The whole process takes about one minute.

------

## What problems were encountered during the repair process?

I stepped on two pitfalls in the actual test and recorded them here.

**The first pitfall: PR pertasks are not enabled**

Codex corrected the code, but an error occurred when opening the PR:

```
Error: GitHub Actions is not permitted to create or approve pull requests.
```

GitHub repository does not allow Actions to create PR by default and needs to be turned on manually in Settings.

![image-20260514160312600](../images/image-20260514160312600.png)

It triggers again after being turned on, normal.

**Second pitfall: Failure is also charged**

The debugging phase was triggered several times and the final bill was $0.40.

The API is billed by token, not by the number of successes - as long as the AI ​​starts and reads the code, the fee has been incurred. Under normal circumstances, a successful repair costs about $0.05–$0.10, and the extra cost is the debugging cost.

------

## Result after successful repair

The workflow turns green after running, and an automatically generated PR appears on the Pull Requests page.

![image-20260514160342849](../images/image-20260514160342849.png)

Click in to see what it has changed:

![image-20260514160408973](../images/image-20260514160408973.png)

Just this one character was changed, and no other line of code was changed.

Click Merge to finish.

------

## summary

This actual test verified that Codex's ability to automatically repair CI through GitHub Actions is real and usable - it can accurately locate the problem, only change the necessary code, and automatically open a PR after the repair.

There are two points worth knowing in advance: first, the PR pertasks of the GitHub repository need to be manually enabled, otherwise the last step will fail; second, the API is billed based on usage, and failures in the debugging phase will also incur fees. It is recommended to set a monthly consumption limit in the OpenAI backend.
