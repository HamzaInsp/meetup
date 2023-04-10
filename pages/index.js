import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: "A First Meetup",
    image: "https://i.tribune.com.pk/media/images/1008232-faisalmain-1450079992/1008232-faisalmain-1450079992.jpg",
    address: "xyz street islambad, Pakistan",
    description: "this is a first meetup"
  },
  {
    id: 'm2',
    title: "A second Meetup",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3vyt6ZcBnBVmOg29p7AehwfRxbjERm49sQ&usqp=CAU",
    address: "xyz street Lahore, Pakistan",
    description: "this is a second meetup"
  }
]
export default function HomePage() {
  const {loadedMeetups, setLoadedMeetups} = useState()

  useEffect(()=>{
    //send the http req and fetch the data
    // setLoadedMeetups()
  },[])
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  )
}