# Contributing to High-Performance Node.js Microservice

Thank you for contributing!

## 🚀 Setup & Testing

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run test suites with coverage:
   ```bash
   npm test
   ```
3. Run containerized stack with Traefik load balancer:
   ```bash
   docker compose up -d --scale app=3
   ```
4. Run load testing:
   ```bash
   k6 run load-test.js
   ```
