# 📝 Medium Clone

A fully functional **Medium-like platform** built using modern web technologies. This project focuses on providing a rich, interactive experience for users to create and share content, following the same core principles as Medium.

---

## 📑 Table of Contents

1. [Overview](#-overview)
2. [Technologies](#-technologies)
3. [Packages & Libraries Used](#-packages--libraries-used)
4. [Getting Started](#-getting-started)
5. [Setup](#-setup)
6. [Features](#-features)
7. [Demo & Screenshots](#-demo--screenshots)
8. [Acknowledgments](#-acknowledgments)
9. [License](#-license)

---

## 🌟 Overview

A modern web application inspired by **Medium**, allowing users to create, share, and interact with content. This project incorporates user authentication, rich text editing, and a sleek UI, making it a robust and scalable platform.

---

## 💻 Technologies

Below is a breakdown of the core technologies used in this project.

| 🌐 Web Framework | Backend               | Database         | Language       |
| ---------------- | --------------------- | ---------------- | -------------- |
| **React.js**     | **Cloudflare Worker** | **Postgres SQL** | **TypeScript** |

---

## 📦 Packages / Libraries Used

This project uses the following essential libraries and packages:

| Package / Library    | Purpose                   |
| -------------------- | ------------------------- |
| `Hono`               | Lightweight web framework |
| `Prisma ORM`         | Database ORM              |
| `Prisma Accelerates` | Optimized Prisma Pooling  |
| `Axios`              | API requests              |
| `React-Router-Dom`   | Frontend routing          |
| `Tailwind CSS`       | Styling framework         |
| `zod`                | Schema validation         |

---

## 🚀 Getting Started

Follow these steps to set up the project in your local environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/Jenil-Desai/medium-clone.git
   ```
2. Install dependencies:
   ```bash
   cd common
   npm install
   cd ../backend
   npm install
   cd ../frontend
   npm install
   ```
3. Configure Envirmental Variables by creating `.env` and add :
   ```env
   DATABASE_URL="Your Postgres Database Direct URL"
   ```
4. Add Other ENVs into `backend/wrangler.toml` as :
   ```toml
   [vars]
   DATABASE_URL="Your Prisma Accelrated URL"
   JWT_SECRET="Unique JWT Secret"
   ```

---

## ⚙️ Setup

1. Start the project backend:
   ```bash
   cd backend
   npm run dev
   ```
2. Start the project frontend:
   ```bash
   ccd frontend
   npm run dev
   ```
3. Access the application at `localhost:5173` and explore the website.

---

## 🎯 Features

Explore the unique features available in this application:

1. 🔐 **User Authentication with JWT**:
   - Secure login and signup process using JSON Web Tokens.
2. ✍️ **Create and Read Articles**:
   - Rich functionality for users to create articles and read published ones.
3. 📝 **Rich Text Editing**:
   - Intuitive text editor for drafting articles.

---

## 🔗 Demo & Screenshots

- [Demo](https://medium-clone-two-pi.vercel.app/)

---

## 🙏 Acknowledgments

We’d like to thank the following resources:

- **[Harkirat 100xDevs Course](https://100xdevs.com/)** - Backend development.
- **[Hono Docs](https://hono.dev/docs)** - Framework documentation.
- **[Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)** - Serverless platform documentation.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

---

### Enjoy exploring and contributing to the Medium Clone!
