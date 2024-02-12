import MeetupList from "../components/meetups/MeetupList";


const DummyMeetups = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://picsum.photos/id/1018/200/300",
    address: "Some address 5,343,2 some city",
    description: "This is the first meetup. It will be an exciting event!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://picsum.photos/id/1025/200/300",
    address: "Another address, some city",
    description: "This is the second meetup. Don't miss it!",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image: "https://picsum.photos/id/1035/200/300",
    address: "One more address, some city",
    description: "This is the third meetup. Join us for a great time!",
  },
  {
    id: "m4",
    title: "Fourth Meetup",
    image: "https://picsum.photos/id/1043/200/300",
    address: "Fourth address, some city",
    description: "This is the fourth meetup. It will be awesome!",
  },
  {
    id: "m5",
    title: "Fifth Meetup",
    image: "https://picsum.photos/id/1050/200/300",
    address: "Fifth address, some city",
    description: "This is the fifth meetup. See you there!",
  },
];

const HomePage = (props) => {
  


   return       <MeetupList meetups={props.meetups} />;
    
  
};


export async function getStaticProps(){
  return {
    props:{
      meetups:DummyMeetups
    },
    revalidate:10
  }
}
export default HomePage;

 