# 🚀 My DevOps Node.js App  
### 🧩 DevOps Demo Project: Containerized Web Application with Local CI/CD  

This project serves as a **practical demonstration of core DevOps skills**, covering web application development, containerization, and local CI/CD automation.

---

## 🎯 Project Goals

- 🖥️ Develop a simple web application using **Node.js** and **Express.js**  
- 🐳 Containerize the app using **Docker** for portability and isolation  
- ⚙️ Set up an automated **local CI/CD pipeline** (build, test, run)  
- ☁️ Demonstrate understanding of **cloud deployment & monitoring principles**

---

## 🧠 Technologies and Practices Used

| Tool / Concept | Purpose |
|----------------|----------|
| **Node.js & Express.js** | Lightweight web server development |
| **HTML & CSS** | User interface for static pages |
| **Docker** | Containerization and image management |
| **PowerShell** | Local CI/CD automation (build & run) |
| **Git & GitHub** | Version control and remote repository |
| **morgan** | Request logging middleware for Node.js |
| **Mocha & Chai** *(optional)* | Testing and assertions framework |

---

## 🗂️ Project Structure

```text
my-devops-node-app/
├── .git/                               # Git repository folder
├── .github/                            # GitHub Actions configuration (for future cloud steps)
│   └── workflows/
│       └── main.yml                    # Placeholder for GitHub Actions CI/CD pipeline
├── ansible/                            # (Optional) Example of Ansible usage
├── node_modules/                       # Installed Node.js dependencies
├── public/                             # Static files (HTML, CSS)
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── style.css
├── test/                               # Placeholder for test files
│   └── app.test.js
├── .dockerignore                       # Files and folders ignored during Docker image build
├── deploy_local.ps1                    # PowerShell script for local CI/CD pipeline
├── docker-compose.yml                  # Example Docker Compose service definitions
├── Dockerfile                          # Instructions for building the Docker image
├── index.js                            # Main Node.js application file
├── package.json                        # Project description and dependencies
├── package-lock.json                   # Locked dependency versions
└── README.md                           # This file
```

---

## ⚙️ Running the Application Locally (with Local CI/CD)

This pipeline automates the **building of a Docker image** and **running a container** locally.

### 🧩 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/my-devops-node-app.git
cd my-devops-node-app
```

> 🔁 Replace `YOUR_USERNAME` with your actual GitHub username.

---

### 🐋 2. Ensure Docker Desktop is running

You must have Docker installed and running before executing the script.

---

### 💻 3. Run the local CI/CD pipeline

Open **PowerShell (not as Administrator)** and run:

```bash
cd C:\path\to\my-devops-node-app
.\deploy_local.ps1
```

If you get an execution policy error like:  
> *"The term '.\deploy_local.ps1' is not recognized..."*

Run this once as Administrator:
```bash
Set-ExecutionPolicy RemoteSigned
```
Then rerun the script in a normal PowerShell window.

---

### 🌐 4. Access the running app

After successful deployment, open:  
👉 [http://localhost:3000/](http://localhost:3000/)

---

## 📊 Monitoring and Logging (Locally)

To view container logs in real-time:

```bash
docker logs my-node-app-container -f
```

These logs display:
- Request information (via `morgan`)
- Form submission data
- Any `console.log()` output

---

## 🧹 Managing the Local Container

Stop the container:
```bash
docker stop my-node-app-container
```

Remove the container:
```bash
docker rm my-node-app-container
```

Remove the Docker image:
```bash
docker rmi my-node-webapp-local
```

---

## ☁️ Conceptual Cloud Deployment (No Cost Setup)

While this demo runs locally, it includes a **conceptual outline for cloud deployment** (e.g., Google Cloud Platform).

### 🔧 Cloud Platform Preparation (GCP Example)

1. Create/select a GCP project  
2. Enable APIs:  
   - Cloud Run API  
   - Artifact Registry API  
3. Create a **Service Account** with roles:  
   - *Cloud Run Admin*  
   - *Artifact Registry Writer*  
   - *Service Account User*  
4. Create a **Docker repository** in Artifact Registry  

---

### 🚀 Service Provisioning (Cloud Run Example)

- Deploy the Docker image from Artifact Registry  
- Configure environment variables, memory/CPU limits  
- Cloud Run auto-scales and provides a public URL  

---

### 📈 Cloud Monitoring & Logging

- Logs (`stdout` / `stderr`) automatically captured by **Cloud Logging**  
- Metrics (CPU, memory, latency) visualized in **Cloud Monitoring**  

---

## 🧭 Next Steps for Project Development

✅ Add **unit/integration tests** using Mocha & Chai  
✅ Integrate **Docker Compose** into the pipeline  
✅ Extend **CI/CD to the Cloud** via GitHub Actions  
✅ Configure **real-time monitoring** (Cloud Logging / AWS CloudWatch)  

---

## 🏁 Summary

This project demonstrates how to:
- Build and containerize a Node.js app  
- Automate local deployment via PowerShell  
- Simulate DevOps CI/CD workflows  
- Prepare for real-world cloud deployment  

---

### 💡 Author
**Artem Rivnyi** — _DevOps Enthusiast & Node.js Developer_  
📫 [GitHub Profile](https://github.com/ArtemRivnyi)

---

