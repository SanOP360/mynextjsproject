import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";




const HomePage = (props) => {


   return <MeetupList meetups={props.meetups} />;
    
  
};


export async function getStaticProps(){
      
       const client = await MongoClient.connect(
         "mongodb+srv://sanjay360:odFRO8cneh3V7B9l@cluster0.mj4clg1.mongodb.net/meetups"
       );
       const db = client.db();

       const meetupCollection = db.collection("meetups");

      const meetups= await meetupCollection.find().toArray();
      console.log(meetups);

      
      client.close();

  


        return {
          props: {
            meetups: meetups.map((meetup) => ({
              title: meetup.data.title,
              address: meetup.data.address,
              description: meetup.data.description,
              image: meetup.data.image,
              id: meetup._id.toString(),
            })),
          },
          revalidate: 10,
        };

}
export default HomePage;

 