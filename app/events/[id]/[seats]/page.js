// app/events/[id]/page.js

import Image from "next/image";
import StadiumPng152129115 from "../../../stadiumImgs/stadium152129115.png";
import StadiumPng152129114 from "../../../stadiumImgs/stadium152129114.png";
import StadiumPng152129116 from "../../../stadiumImgs/stadium152129116.png";
import StadiumPng152129140 from "../../../stadiumImgs/stadium152129140.png";
import StadiumPng152129141 from "../../../stadiumImgs/stadium152129141.png";
import StadiumPng152129139 from "../../../stadiumImgs/stadium152129139.png";
import StadiumPng152543798 from "../../../stadiumImgs/stadium152543798.png";
import StadiumPng152543796 from "../../../stadiumImgs/stadium152543796.png";
import StadiumPng152543797 from "../../../stadiumImgs/stadium152543797.png";
import ListingList from "../../../components/ListingList";
import EventHeader from "../../../components/EventHeader";
import listingData from "../../../data.json";

export default async function EventPage({ params }) {
  const { id, seats } = params;

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
  const initialListings = listingData[seats][id];

  return (
    <div>
      <EventHeader event={eventData} />
      <div className="flex flex-col md:flex-row">
        {/* Seat Selection Links */}
        <div className="my-4 p-4 bg-gray-100 rounded-md shadow-md absolute z-50">
          <label
            htmlFor="seatSelect"
            className="block text-base font-semibold text-gray-800 mb-3"
          >
            Select Number of Seats:
          </label>
          {seats === "1" && (
            <div className="flex space-x-4">
              <a
                href={`/events/${eventData.id}/1.html`}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 hover:border-blue-700"
              >
                1 Seat
              </a>
              <a
                href={`/events/${eventData.id}/2.html`}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 hover:text-blue-700"
              >
                2 Seats
              </a>
            </div>
          )}
          {seats === "2" && (
            <div className="flex space-x-4">
              <a
                href={`/events/${eventData.id}/1.html`}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 hover:text-blue-700"
              >
                1 Seat
              </a>
              <a
                href={`/events/${eventData.id}/2.html`}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 hover:border-blue-700"
              >
                2 Seats
              </a>
            </div>
          )}
        </div>

        {/* Left Side: Stadium Image */}
        <div className="h-[750px] md:flex-1 mt-4 md:sticky top-0">
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
          <ListingList
            initialListings={initialListings}
            eventId={id}
            seats={seats}
          />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const events = [
    { id: "152129115" },
    { id: "152129114" },
    { id: "152129116" },
    { id: "152129140" },
    { id: "152129141" },
    { id: "152129139" },
    { id: "152543798" },
    { id: "152543796" },
    { id: "152543797" },
  ];

  const paths = events.flatMap((event) => [
    { id: event.id, seats: "1" },
    { id: event.id, seats: "2" },
  ]);

  return paths;
}
