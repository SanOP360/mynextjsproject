import { MongoClient } from "mongodb";

async function handler(req,res){
    if(req.method==='POST'){
        const data= req.body;

        
       const client=await  MongoClient.connect(
          "mongodb+srv://sanjay360:odFRO8cneh3V7B9l@cluster0.mj4clg1.mongodb.net/meetups"
        );
        const db=client.db();

        const meetupCollection = db.collection('meetups');

        const result =await meetupCollection.insertOne({data})
        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted'});


    }

}

export default handler;