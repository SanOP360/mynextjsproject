import MeetupDetails from "../../components/meetups/meetupDetails";
import { MongoClient,ObjectId } from "mongodb";
import Head from "next/head";

const MeetupDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData
          .description}
        />
      </Head>
      <MeetupDetails
        img={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://sanjay360:odFRO8cneh3V7B9l@cluster0.mj4clg1.mongodb.net/meetups"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://sanjay360:odFRO8cneh3V7B9l@cluster0.mj4clg1.mongodb.net/meetups"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const selectedMeetups = await meetupCollection.findOne({_id: new ObjectId(meetupId)});

  client.close();

  return {
    props: {
      meetupData: {
        id:selectedMeetups._id.toString(),
        title:selectedMeetups.data.title,
        address:selectedMeetups.data.address,
        image:selectedMeetups.data.image,
        description:selectedMeetups.data.description
      }
    },
  };
}

export default MeetupDetailsPage;
