const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

// app.use(cors())

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 


app.use(express.json())
const { MongoClient, ServerApiVersion } = require('mongodb');

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//     try {
//       await client.connect();
//       const database = client.db("");
//       const hotelsCollection = database.collection("");
//       const hotel = {'name': 'Dhaka Radison', 'address': 'Gulshan'}
//       hotelsCollection.insertOne(hotel)
       
       
  
//     } finally {
//       // await client.close();
//     }
//   }
//   run().catch(console.dir);

  // import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ypbjopw.mongodb.net/?retryWrites=true&w=majority`

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("tourist-clinic");
    const hotelsCollection = database.collection("hotels");
    
    app.post('/addhotels', async(req,res)=>{
      const newHotel = req.body;
      const result = await hotelsCollection.insertOne(newHotel)
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