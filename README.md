# 🚀 Medium Clone

A fully functional Medium-like platform built using modern web technologies. This project is focused on providing a rich, interactive experience for users to create and share content, following the same core principles as Medium.

## 🌟 Features

- 🔐 User authentication with JWT
- ✍️ Create, read, update, and delete (CRUD) articles
- 📝 Rich text editing for articles

## 🛠️ Tech Stack

### 💻 Frontend

- ⚛️ **React**: A JavaScript library for building user interfaces.
- 🟦 **TypeScript**: Adds static typing to JavaScript, improving the developer experience and reducing bugs.
- 🔍 **Zod**: For schema validation and type inference, providing type safety for frontend types.

### ⚙️ Backend

- ☁️ **Cloudflare Workers**: Serverless execution environment for backend logic.
- ⚡ **Hono**: A web framework for Cloudflare Workers, ensuring efficient and quick routing.
- 🗄️ **Prisma**: An ORM that simplifies database operations and provides connection pooling to handle large traffic efficiently.
- 🐘 **PostgreSQL**: A robust relational database used for storing articles, user data.
- 🔐 **JWT (JSON Web Tokens)**: Used for secure user authentication.

## 🚀 Getting Started

### 📋 Prerequisites

- 🟢 **Node.js**: Ensure that you have Node.js installed on your machine.
- 🐘 **PostgreSQL**: Set up a PostgreSQL database for local development.
- ☁️ **Cloudflare Account**: Required to deploy the backend on Cloudflare Workers.

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jenil-Desai/Medium-Clone.git
   cd Medium-Clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory. The required variables include:

   ```env
   DATABASE_URL=your_postgres_database_url
   JWT_SECRET=your_jwt_secret
   CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
   ```

4. Initialize the Prisma ORM:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

### 🚀 Deployment

To deploy the backend to Cloudflare Workers:

1. Log in to your Cloudflare account using the CLI:

   ```bash
   wrangler login
   ```

2. Deploy the backend:

   ```bash
   npm run deploy
   ```

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📄 License

This project is licensed under the MIT License.
