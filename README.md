# 🚀 My DevOps Node.js App

[![Docker Image CI](https://github.com/ArtemRivnyi/my-devops-node-app/actions/workflows/main.yml/badge.svg )](https://github.com/ArtemRivnyi/my-devops-node-app/actions )

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
</p>

[![License](https://img.shields.io/badge/License-MIT-yellow.svg )](https://opensource.org/licenses/MIT )
[![Last Commit](https://img.shields.io/github/last-commit/ArtemRivnyi/my-devops-node-app?label=Last%20Update&style=flat-square )](https://github.com/ArtemRivnyi/my-devops-node-app/commits/main )
[![GitHub Stars](https://img.shields.io/github/stars/ArtemRivnyi/my-devops-node-app?style=social )](https://github.com/ArtemRivnyi/my-devops-node-app/stargazers )

### 🧩 DevOps Demo Project: Containerized Web Application with Local CI/CD

This project serves as a practical demonstration of core DevOps skills, covering web application development, containerization, and local CI/CD automation. It aims to provide a comprehensive example for building, testing, and deploying a simple Node.js web application.

## 📝 Table of Contents

*   [🎯 Project Goals](#-project-goals)
*   [🧠 Technologies and Practices Used](#-technologies-and-practices-used)
*   [⚙️ Running the Application Locally (with Local CI/CD)](#️-running-the-application-locally-with-local-cicd)
*   [🛠️ CI/CD Flow and Demo](#️-ci/cd-flow-and-demo)
    *   [Clone the Repository](#clone-the-repository)
    *   [Ensure Docker Desktop is running](#ensure-docker-desktop-is-running)
    *   [Run the local CI/CD pipeline](#run-the-local-cicd-pipeline)
    *   [Access the running app](#access-the-running-app)
*   [📊 Monitoring and Logging (Locally)](#-monitoring-and-logging-locally)
*   [🧹 Managing the Local Container](#-managing-the-local-container)
*   [☁️ Conceptual Cloud Deployment (No Cost Setup)](#%EF%B8%8F-conceptual-cloud-deployment-no-cost-setup)
*   [🧭 Next Steps for Project Development](#-next-steps-for-project-development)
*   [🏁 Summary](#-summary)
*   [📄 License](#-license)
*   [💡 Maintainer](#-maintainer)

## 🎯 Project Goals

*   🖥️ Develop a simple web application using **Node.js** and **Express.js**
*   🐳 Containerize the app using **Docker** for portability and isolation
*   ⚙️ Set up an automated **local CI/CD pipeline** (build, test, run)
*   ☁️ Demonstrate understanding of **cloud deployment & monitoring principles**

## 🧠 Technologies and Practices Used

| Tool / Concept | Purpose |
| :-- | :-- |
| **Node.js & Express.js** | Lightweight web server development |
| **HTML & CSS** | User interface for static pages |
| **Docker** | Containerization and image management |
| **PowerShell** | Local CI/CD automation (build & run) |
| **Git & GitHub** | Version control and remote repository |
| **morgan** | Request logging middleware for Node.js |
| **Jest & Supertest** | API testing and assertions framework |

## ⚙️ Running the Application Locally (with Local CI/CD)

This pipeline automates the **building of a Docker image** and **running a container** locally.

### Clone the repository

```shell
git clone https://github.com/YOUR_USERNAME/my-devops-node-app.git
cd my-devops-node-app
```

> 🔁 Replace `YOUR_USERNAME` with your actual GitHub username.

### Ensure Docker Desktop is running

You must have Docker installed and running before executing the script.

### Run the local CI/CD pipeline

For detailed setup and troubleshooting, see the dedicated [SETUP.md](SETUP.md) file.

Open **PowerShell (not as Administrator)** and run:

```shell
.\deploy_local.ps1
```

### Access the running app

After successful deployment, open:  
👉 [http://localhost:3000/]()

## 🛠️ CI/CD Flow and Demo

```mermaid
flowchart LR
    Push[git push] --> GA[GitHub Actions]
    GA --> Test[Run Jest Tests\n16 route tests]
    Test --> Build[Docker Build\nnode-devops-boilerplate]
    Build --> Deploy[Deploy Container]
    Deploy --> App[App Running\nlocalhost:3000]

    style GA fill:#2088FF,color:#fff
    style Test fill:#C21325,color:#fff
    style Build fill:#2496ED,color:#fff
```

## 📊 Monitoring and Logging (Locally)

To view container logs in real-time:

```shell
docker logs my-node-app-container -f
```

These logs display:

*   Request information (via `morgan`)
*   Form submission data
*   Any `console.log()` output

## 🧹 Managing the Local Container

Stop the container:

```shell
docker stop my-node-app-container
```

Remove the container:

```shell
docker rm my-node-app-container
```

Remove the Docker image:

```shell
docker rmi my-node-webapp-local
```

## ☁️ Conceptual Cloud Deployment (No Cost Setup)

While this demo runs locally, it includes a **conceptual outline for cloud deployment** (e.g., Google Cloud Platform).

### 🔧 Cloud Platform Preparation (GCP Example)

1.  Create/select a GCP project
2.  Enable APIs:
    *   Cloud Run API
    *   Artifact Registry API
3.  Create a **Service Account** with roles:
    *   _Cloud Run Admin_
    *   _Artifact Registry Writer_
    *   _Service Account User_
4.  Create a **Docker repository** in Artifact Registry

### 🚀 Service Provisioning (Cloud Run Example)

*   Deploy the Docker image from Artifact Registry
*   Configure environment variables, memory/CPU limits
*   Cloud Run auto-scales and provides a public URL

### 📈 Cloud Monitoring & Logging

*   Logs (`stdout` / `stderr`) automatically captured by **Cloud Logging**
*   Metrics (CPU, memory, latency) visualized in **Cloud Monitoring**

## 🧭 Next Steps for Project Development

✅ Add **16 route tests** using Jest & Supertest (migrated from Mocha & Chai)  
✅ Integrate **Docker Compose** into the pipeline  
✅ Extend **CI/CD to the Cloud** via GitHub Actions  
✅ Configure **real-time monitoring** (Cloud Logging / AWS CloudWatch)

## 🏁 Summary

This project demonstrates how to:

*   Build and containerize a Node.js app
*   Automate local deployment via PowerShell
*   Simulate DevOps CI/CD workflows
*   Prepare for real-world cloud deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🧰 Maintainer

**Artem Rivnyi** — DevOps Engineer

* 📧 [artemrivnyi@outlook.com](mailto:artemrivnyi@outlook.com)  
* 🔗 [LinkedIn](https://www.linkedin.com/in/artem-rivnyi/)  
* 🌐 [Personal Projects](https://personal-page-devops.onrender.com/)  
* 💻 [GitHub](https://github.com/ArtemRivnyi)
