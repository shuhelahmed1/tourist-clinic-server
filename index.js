const express = require('express')
const app = express();
const port = 5000;
// 8XbaaY73kkorDNZg dbpass
// hellodbuser dbname


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hellodbuser:8XbaaY73kkorDNZg@cluster0.ypbjopw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
      await client.connect();
      const database = client.db("tourist-clinic");
      const hotelsCollection = database.collection("hotels");
      const hotel = {'name': 'Dhaka Radison', 'address': 'Gulshan'}
      hotelsCollection.insertOne(hotel)
       
       
  
    } finally {
      // await client.close();
    }
  }
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