const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
const objectId = require ('mongodb').objectId

// user: webdbuser ,  Password: vq0JE8GnQDa5Dkn9

//


const uri = "mongodb+srv://webdbuser:vq0JE8GnQDa5Dkn9@cluster0.4jfbz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{
            await client.connect();
            const userCollection = client.db("foodExprss").collection("user");

            app.get('/user',async(req,res)=>{
                const query = {};
                const  cursor = userCollection.find(query)
                const users= await cursor.toArray();
                res.send(users)

            })

             //post user : add new user       
            app.post('/user',async(req,res)=>{
                const newUser =req.body;
                console.log('adding new user',newUser)
                const result= await userCollection.insertOne(newUser)
                res.send(newUser)

            })


          // delete user a

              app.delete('/user/:id',async(req,res)=>{
                const id =req.params.id;
                const query = {_id: objectId (id) }
              })
    }
    finally{
       // await client.close()
    }

}
run().catch(console.dir)



// use middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running my node CRUD  server");
});

app.listen(port, () => {
  console.log("Crud Server is running ", port);
});
