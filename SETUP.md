# ⚙️ Local CI/CD Setup Details (PowerShell)

This document provides detailed information and troubleshooting steps for the local CI/CD pipeline implemented using PowerShell.

## 📝 Prerequisites

*   **Docker Desktop** must be installed and running.
*   **PowerShell** (version 5.1 or later on Windows, or PowerShell Core on other OS).

## 🚀 Running the Local CI/CD Pipeline

The local CI/CD pipeline is executed via the `deploy_local.ps1` script.

### Execution Steps

1.  **Clone the Repository:**
    ```shell
    git clone https://github.com/YOUR_USERNAME/my-devops-node-app.git
    cd my-devops-node-app
    ```
    > 🔁 Replace `YOUR_USERNAME` with your actual GitHub username.

2.  **Run the Script:**
    Open **PowerShell (not as Administrator)** and run:
    ```shell
    cd C:\path\to\my-devops-node-app
    .\deploy_local.ps1
    ```

### ⚠️ Troubleshooting: Execution Policy Error

If you encounter an execution policy error, such as:

> _"The term ".\\deploy\_local.ps1" is not recognized..."_

This means PowerShell's execution policy is preventing the script from running.

**Solution:**

Run the following command **once as Administrator** to allow local scripts to run:

```shell
Set-ExecutionPolicy RemoteSigned
```

Then, rerun the script (`.\deploy_local.ps1`) in a normal PowerShell window.

## 💡 Script Functionality (`deploy_local.ps1`)

The `deploy_local.ps1` script performs the following steps, simulating a CI/CD flow:

1.  **Cleanup:** Stops and removes any existing Docker container and image with the same name (`my-node-webapp-local`).
2.  **Build:** Builds a new Docker image from the `Dockerfile` in the root directory.
3.  **Run:** Starts a new Docker container, mapping port 3000 on the host to port 3000 in the container.

## 🧹 Managing the Local Container (Manual Commands)

These commands are useful for manual cleanup or debugging:

| Action | Command |
| :--- | :--- |
| **Stop Container** | `docker stop my-node-app-container` |
| **Remove Container** | `docker rm my-node-app-container` |
| **Remove Image** | `docker rmi my-node-webapp-local` |
| **View Logs** | `docker logs my-node-app-container -f` |
