const express = require('express');
const mysql = require('sql')

const app = express()

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const dbConfig = {
    host: "localhost",
    user: "asishtammana",
    password: "password",
    database: "posts_table"
};


const connectToDatabase = async () => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connected to MySQL database');
        return connect;
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
        throw error;
    }
};

app.get("/posts",  async (request, response) => {

    try {

        //connecting to database
        const connection = await connectToDatabase(); 

        const dbQuery = 'SELECT * FROM posts';

        // retrieving data with SQL query
        const responseData = await connection.execute(dbQuery);
        
        //stops the connection
        await connection.end();
    
        response.status(200);
        response.json(responseData);

      } catch (error) {
        response.status(500)
        response.json({ error });
      }
})