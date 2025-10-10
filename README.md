My DevOps Node.js App
DevOps Demo Project: Containerized Web Application with Local CI/CD
This project serves as a practical demonstration of key DevOps skills, covering web application development, containerization, and CI/CD automation for a local environment.
Project Goals

Develop a simple web application using Node.js with Express.js.
Containerize the application using Docker for portability and isolation.
Set up an automated CI/CD pipeline for a local environment, including building a Docker image and running a container.
Demonstrate an understanding of cloud deployment and monitoring principles (conceptually).

Technologies and Practices Used

Node.js & Express.js: For developing a lightweight web server.
HTML & CSS: For creating the user interface.
Docker: For containerizing the application, ensuring portability and isolation.
PowerShell: For automating the local CI/CD pipeline (build, run).
Git & GitHub: For version control and repository hosting.
morgan (Node.js middleware): For HTTP request logging in the application console.
Mocha & Chai: (Optional/Placeholder) Testing framework and assertion library intended for unit testing the application.

Project Structure
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
├── docker-compose.yml                  # Example Docker Compose service definitions (not used in current local pipeline)
├── Dockerfile                          # Instructions for building the Docker image
├── index.js                            # Main Node.js application file
├── package.json                        # Project description and dependencies
├── package-lock.json                   # Locked dependency versions
└── README.md                           # This file

Running the Application Locally (with Local CI/CD Pipeline)
This pipeline automates the building of a Docker image and running a container on your local machine.

Clone the repository (if you haven’t already):
git clone https://github.com/YOUR_USERNAME/my-devops-node-app.git
cd my-devops-node-app

Replace YOUR_USERNAME with your actual GitHub username.

Ensure Docker Desktop is running on your computer.

Run the local CI/CD pipeline using PowerShell:

Open a regular PowerShell window (not as administrator).

Navigate to the project’s root directory (if not already there):
cd C:\path\to\my-devops-node-app # Replace with the actual path to your project


Execute the script:
.\deploy_local.ps1

If PowerShell throws an error like "The term '.\deploy_local.ps1' is not recognized...", you need to change the script execution policy. Open PowerShell as administrator and run Set-ExecutionPolicy RemoteSigned, confirm the action, then close the administrator window and retry running the script in a regular PowerShell window.



After the script runs successfully, your application will be available at:http://localhost:3000/


Monitoring and Logging (Locally)

To view the logs of the running container in real-time (e.g., form submission data), open a new PowerShell window and run:
docker logs my-node-app-container -f


These logs display console.log output from your Node.js application, including request information (thanks to morgan) and feedback form data.


Managing the Local Container

To stop the running container (when no longer needed to free up port 3000):
docker stop my-node-app-container


To remove the container (after stopping it):
docker rm my-node-app-container


To remove the image (after removing the container):
docker rmi my-node-webapp-local



Conceptual Cloud Deployment (Without Actual Costs)
Although this project is not deployed to a real cloud environment due to its focus on local DevOps, the approach for cloud deployment is outlined below.
Cloud Platform Preparation (e.g., Google Cloud Platform)

Project: Create or select a project in GCP.
API: Enable required APIs (Cloud Run API, Artifact Registry API, Service Usage API).
Service Account: Create a service account with minimal required permissions (Cloud Run Admin, Artifact Registry Writer, Service Account User).
Image Repository: Create a Docker repository in Google Artifact Registry.

Service Provisioning (e.g., Google Cloud Run)

Container Deployment: Use Cloud Run to deploy the container from an image stored in Artifact Registry. Cloud Run automatically scales the application, handles requests, and provides a public URL.
Configuration: Set up environment variables, memory/CPU limits, and other parameters.

Monitoring and Logging (in the Cloud)

In a cloud environment (e.g., Google Cloud), application logs output to stdout/stderr are automatically collected by Cloud Logging.
Performance metrics (request count, latency, CPU/memory usage) are automatically tracked in Cloud Monitoring, where dashboards and alerts can be configured.

Next Steps for Project Development

Add Comprehensive Tests: Implement unit and/or integration tests using Mocha/Chai for the Node.js application and integrate them into deploy_local.ps1 or a future CI/CD pipeline.
Integrate Docker Compose: Update deploy_local.ps1 to use docker-compose up -d --build for managing the application, useful for multi-component projects.
Extend CI/CD to the Cloud: Set up a real CI/CD pipeline with GitHub Actions for automatic deployment of the Docker image to the cloud (e.g., Google Cloud Run or AWS EC2) on every repository push.
Integrate Real Monitoring and Logging Tools: For cloud deployment, configure automatic log collection and advanced monitoring through relevant cloud services (e.g., Google Cloud Logging/Monitoring, AWS CloudWatch).
