import MeetupDetails from "../../components/meetups/meetupDetails";


const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetails
      meetupData={props.meetupData} 
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
      { params: { meetupId: "m4" } },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        img: "https://picsum.photos/id/1050/200/300",
        title: "A first meetup",
        address: "some street 345 new Coast",
        description: "the Meetup Description",
      },
    },
  };
}

export default MeetupDetailsPage;
