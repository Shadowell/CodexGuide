---
description: "Codex and cloud server troubleshooting cases, explaining how to remotely reproduce problems, read logs, locate Python errors and verify repair results."
---

# Codex × Cloud Server: Remotely locate and fix bugs

> Your code runs on the cloud server, and there is not a single line of local code - Codex can still help you find bugs, fix them, and run tests. This article walks you through the complete process step by step.

---

## 1. Background: What is the remote mode of Codex?

We usually use Codex CLI, which runs in local projects by default. Your code is on Mac, and Codex will help you change it on Mac.

But in reality, there is a very common scenario: the code is not on your computer, but on the remote server. **

for example:

- The project is deployed in a Docker container on the cloud server
- You only have SSH pertasks and no source code locally
- There is a bug in the online environment, which needs to be directly located and repaired remotely.

Codex's **Remote Mode** does this - you type commands locally, and Codex reads the code, changes the code, and runs tests on the remote server. The entire process does not require cloning any repository on your Mac.

The architecture is simple:

```
┌──────────────────┐ SSH Tunnel ┌───────────────────────────┐
│ Your Mac local │ ◀───────────────────▶ │ Remote server (cloud host) │
│ codex --remote │ port forwarding 9001 │ codex app-server │
│ (TUI interface) │ │ (code + running environment) │
└──────────────────┘                          └──────────────────────────┘
```

The local one is only responsible for "expressing requirements and reviewing results", while the remote one is responsible for "code, dependencies and operation". AI pertables verifiable steps in between.

---

## 2. Practical scenario: The Python script in the container reports an error

### Project introduction

I have a Docker container `codex-demo` on the Tencent Cloud server, which contains a small project `docker-health-demo`, which is used to generate container health check reports.

Project structure:

```
/workspace/docker-health-demo/
├── containers.json # Simulated container status data
├── container_health.py # Health check script (with bugs)
└── test_container_health.py # pytest test file
```

### Problem recurrence

Run the script directly:

```bash
python3 container_health.py
```

💥 Error report:

```
KeyError: 'status'
```

![image-20260512173118523](../images/image-20260512173118523.png)

Running the test also fails:

```bash
pytest -q
```

```
FAILED - KeyError: 'status'
```

The problem is obvious: a field called `status` is read in the code, but this field in the data file is called `state`. A field name is written incorrectly.

To a human this takes 30 seconds; the point of this post is to demonstrate how Codex can do the entire process remotely.

---

## 3. Complete operation steps

### Step 1: Start app-server on the remote server

Log in to your cloud server via SSH, enter the container, and start the Codex app-server in the project directory:

```bash
ssh root@your server IP
docker exec -it codex-demo bash
cd /workspace/docker-health-demo
codex app-server --listen ws://0.0.0.0:9001
```

Seeing output similar to this means the startup was successful:

```
codex app-server (WebSockets)
  listening on: ws://0.0.0.0:9001
  readyz: http://0.0.0.0:9001/readyz
  healthz: http://0.0.0.0:9001/healthz
```

![image-20260512173352946](../images/image-20260512173352946.png)

> ⚠️ Note: Do not add the `--ws-auth` parameter. When connecting through an SSH tunnel, security is ensured by SSH itself and no additional WebSocket authentication is required.

### Step 2: Set up SSH port forwarding locally

**Open a new terminal window** on Mac and establish an SSH tunnel to map the remote 9001 port to the local one:

```bash
ssh -N -L 9001:127.0.0.1:9001 root@your server IP
```

It's normal to get no output after entering the password - it's just a quiet tunnel, just hang on.

You can verify whether the tunnel is smooth:

```bash
curl -i http://127.0.0.1:9001/healthz
```

Returning `HTTP/1.1 200 OK` means there is no problem with the tunnel.

![image-20260512174346439](../images/image-20260512174346439.png)

### Step 3: Log into Codex locally (required first time only)

If you have never logged in to the Codex CLI locally, you need to log in first:

```bash
codex auth login
```

It will open the OpenAI login page in the browser and log in to your ChatGPT account. After successful login, the terminal will display `Successfully logged in`.

> 💡 This step only needs to be done once, and the login credentials will be cached locally.

### Step 4: Connect to the remote project

**Open another terminal window** and enter:

```bash
codex --remote ws://127.0.0.1:9001
```

If everything goes well, you will see the TUI interface of Codex. The directory shows the path in the remote container:

```
>_ OpenAI Codex (v0.130.0)

model:     gpt-5.5   /model to change
directory: /workspace/docker-health-demo
```

![image-20260512173621671](../images/image-20260512173621671.png)

At this point, the remote connection is successful. Your local Codex already "stands" in the remote server's project directory.

### Step 5: Let Codex fix the bug

Enter the prompt word in the Codex input box:

```
find and fix the bug in container_health.py, then run pytest to verify
```

![image-20260512174918396](../images/image-20260512174918396.png)

Codex will automatically complete the following steps:

1. Read `container_health.py` and `containers.json`
2. It was found that the field names did not match: `"status"` was used in the code, and `"state"` was used in the data.
3. Modify code
4. Run `pytest -q` to verify the repair results

Output after repair is completed:

```bash
python3 container_health.py
```

```
container_health_report
total=5
running=3
exited=2
unhealthy=redis-cache,old-api
```

```bash
pytest -q
```

```
1 passed in 0.00s
```

![image-20260512174208215](../images/image-20260512174208215.png)

Done. A complete closed loop of remote bug fixes.

---

## 5. Summary

The core value of Codex remote mode: **You don’t need to pull the code locally, you can let AI help you locate and fix problems directly in the remote environment. **

The whole process can be broken down into three things:

1. Remote start `codex app-server`
2. Local SSH tunnel forwarding port
3. Local `codex --remote` access

Once connected, the experience is exactly the same as using Codex locally - reading files, changing code, and running tests are all executed remotely.

This is particularly useful for the following scenarios:

- There is a bug in the online service and it needs to be quickly located
- The development environment is on a remote GPU server
- When multiple people collaborate, you need to change the code directly on the shared server.
- The pertableance of the local machine is not enough and the dependencies are not fully installed.

Remote mode is still in Alpha stage, and there are still some rough edges in the experience (such as WebSocket connections occasionally downgrading to HTTPS), but the core functionality is already available. With the iteration of Codex in the future, this capability will only become more stable.
