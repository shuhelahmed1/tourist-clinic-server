const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(
  cors({
  origin:true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  })
  );
  app.use(express.json())
const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ypbjopw.mongodb.net/?retryWrites=true&w=majority`

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("tourist-clinic");
    const hotelsCollection = database.collection("hotels");
    
    // post api hotels
    app.post('/addhotels', async(req,res)=>{
      const newHotel = req.body;
      const result = await hotelsCollection.insertOne(newHotel)
      res.json(result)
    })

    // get api hotels
    app.get('/hotels', async(req,res)=>{
      const cursor = hotelsCollection.find({});
      const result = await cursor.toArray();
      res.json(result)
    })
  } finally {
     // Close the MongoDB client connection
    // await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('running my server')
})

app.post('/hotels',(req,res)=>{
    res.send('running my server')
})

app.listen(port, ()=>{
    console.log('running server on', port)
})