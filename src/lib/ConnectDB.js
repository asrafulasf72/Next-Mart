const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =process.env.URI;

if(!uri){
    throw new Error("Please add URI to .env.local");
}
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB(){
    await client.connect();
    return client.db("NextmartDB")
}

module.exports = connectDB;