// app/events/[id]/page.js

// import { getEventDetails, getEventListings } from '../../utils/getEventData';
import Image from "next/image";
import StadiumPng152129115 from "../../stadiumImgs/stadium152129115.png";
import StadiumPng152129114 from "../../stadiumImgs/stadium152129114.png";
import StadiumPng152129116 from "../../stadiumImgs/stadium152129116.png";
import StadiumPng152129140 from "../../stadiumImgs/stadium152129140.png";
import StadiumPng152129141 from "../../stadiumImgs/stadium152129141.png";
import StadiumPng152129139 from "../../stadiumImgs/stadium152129139.png";
import StadiumPng152543798 from "../../stadiumImgs/stadium152543798.png";
import StadiumPng152543796 from "../../stadiumImgs/stadium152543796.png";
import StadiumPng152543797 from "../../stadiumImgs/stadium152543797.png";
import ListingList from "../../components/ListingList";
import EventHeader from "../../components/EventHeader";
import listingData from "../../data.json";

export default async function EventPage({ params }) {
  const { id } = params;
  const events = {
    152129115: {
      id: 152129115,
      StadiumPng: StadiumPng152129115,
      date: "NOV 14",
      day: "THU",
      time: "7:00 PM",
      week: "This week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
      status: {
        label: "Selling fast",
        icon: "🔥",
      },
    },
    152129114: {
      id: 152129114,
      StadiumPng: StadiumPng152129114,
      date: "NOV 15",
      day: "FRI",
      time: "7:00 PM",
      week: "This week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
      status: {
        label: "Selling fast",
        icon: "🔥",
      },
    },
    152129116: {
      id: 152129116,
      StadiumPng: StadiumPng152129116,
      date: "NOV 16",
      day: "SAT",
      time: "7:00 PM",
      week: "This weekend",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    152129140: {
      id: 152129140,
      StadiumPng: StadiumPng152129140,
      date: "NOV 21",
      day: "THU",
      time: "7:00 PM",
      week: "Next week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    152129141: {
      id: 152129141,
      StadiumPng: StadiumPng152129141,
      date: "NOV 22",
      day: "FRI",
      time: "7:00 PM",
      week: "Next week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    152129139: {
      id: 152129139,
      StadiumPng: StadiumPng152129139,
      date: "NOV 23",
      day: "SAT",
      time: "7:00 PM",
      week: "Next weekend",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    152543798: {
      id: 152543798,
      StadiumPng: StadiumPng152543798,
      date: "DEC 06",
      day: "FRI",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
    152543796: {
      id: 152543796,
      StadiumPng: StadiumPng152543796,
      date: "DEC 07",
      day: "SAT",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
    152543797: {
      id: 152543797,
      StadiumPng: StadiumPng152543797,
      date: "DEC 08",
      day: "SUN",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
  };

  const eventData = events[id];
  // const event = await getEventDetails(id);
  // const initialListings = await getEventListings(id);
  const initialListings = listingData[1][id];

  return (
    <div>
      <EventHeader event={eventData} />
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Stadium Image */}
        <div className="h-[750px] md:flex-1 mt-16 sticky top-0">
          <Image
            src={eventData.StadiumPng}
            alt={eventData.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Right Side: Event Details and Listings */}
        <div
          className="md:w-[512px] overflow-y-auto max-h-screen"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#d3d3d3 #f1f1f1",
          }}
        >
          <ListingList initialListings={initialListings} eventId={id} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const events = [
    {
      id: "152129115",
      StadiumPng: "../../stadiumImgs/stadium152129115.png",
      date: "NOV 14",
      day: "THU",
      time: "7:00 PM",
      week: "This week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
      status: {
        label: "Selling fast",
        icon: "🔥",
      },
    },
    {
      id: "152129114",
      StadiumPng: "../../stadiumImgs/stadium152129114.png",
      date: "NOV 15",
      day: "FRI",
      time: "7:00 PM",
      week: "This week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
      status: {
        label: "Selling fast",
        icon: "🔥",
      },
    },
    {
      id: "152129116",
      StadiumPng: "../../stadiumImgs/stadium152129116.png",
      date: "NOV 16",
      day: "SAT",
      time: "7:00 PM",
      week: "This weekend",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    {
      id: "152129140",
      StadiumPng: "../../stadiumImgs/stadium152129140.png",
      date: "NOV 21",
      day: "THU",
      time: "7:00 PM",
      week: "Next week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    {
      id: "152129141",
      StadiumPng: "../../stadiumImgs/stadium152129141.png",
      date: "NOV 22",
      day: "FRI",
      time: "7:00 PM",
      week: "Next week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    {
      id: "152129139",
      StadiumPng: "../../stadiumImgs/stadium152129139.png",
      date: "NOV 23",
      day: "SAT",
      time: "7:00 PM",
      week: "Next weekend",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    {
      id: "152543798",
      StadiumPng: "../../stadiumImgs/stadium152543798.png",
      date: "DEC 06",
      day: "FRI",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
    {
      id: "152543796",
      StadiumPng: "../../stadiumImgs/stadium152543796.png",
      date: "DEC 07",
      day: "SAT",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
    {
      id: "152543797",
      StadiumPng: "../../stadiumImgs/stadium152543797.png",
      date: "DEC 08",
      day: "SUN",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
  ];

  return events;
}
