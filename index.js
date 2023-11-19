const express = require('express')
const app = express();
const port = 5000;
// 8XbaaY73kkorDNZg dbpass
// hellodbuser dbname


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
const uri = "mongodb+srv://hellodbuser:8XbaaY73kkorDNZg@cluster0.ypbjopw.mongodb.net/?retryWrites=true&w=majority";

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("tourist-clinic");
    const hotelsCollection = database.collection("hotels");
    
    // Create a document to insert
    const hotel = {'name': 'Sylhet BlueWater', 'address': 'Zindabazar'}
    // Insert the defined document into the "haiku" collection
    const result = await hotelsCollection.insertOne(hotel);

    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
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