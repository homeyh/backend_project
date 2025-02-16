# Teacher Resources Backend

This is the backend for the Teacher Resources platform, built with:
- **Node.js & Express.js**
- **GraphQL API**
- **MongoDB**
- **JWT Authentication**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/teacher-resources-backend.git
   cd teacher-resources-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add the following:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. Start the server:
   ```sh
   npm start
   ```

## Deployment

To deploy on **Render**, follow these steps:
1. Push the repository to GitHub.
2. Create a new Web Service on Render.
3. Set up **Environment Variables** with your MongoDB URI and JWT Secret.
4. Deploy! 🚀

## License

This project is licensed under the MIT License.
