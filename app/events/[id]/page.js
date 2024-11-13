// app/events/[id]/page.js

// import { getEventDetails, getEventListings } from '../../utils/getEventData';
import Image from 'next/image';
import StadiumPng from '../../stadium.png'
import ListingList from '../../components/ListingList';
import EventHeader from '../../components/EventHeader';
import listingData from '../../data.json';

export default async function EventPage({ params }) {
  const { id } = params;
  const events = 
  {
    152129115: {
      "id": 152129115,
      "date": "NOV 14",
      "day": "THU",
      "time": "7:00 PM",
      "week": "This week",
      "name": "Taylor Swift",
      "stadium": "Rogers Centre",
      "location": "Toronto, Canada",
      "status": {
        "label": "Selling fast",
        "icon": "🔥"
      }
    },
    152129114: {
      "id": 152129114,
      "date": "NOV 15",
      "day": "FRI",
      "time": "7:00 PM",
      "week": "This week",
      "name": "Taylor Swift",
      "stadium": "Rogers Centre",
      "location": "Toronto, Canada",
      "status": {
        "label": "Selling fast",
        "icon": "🔥"
      }
    },
    152129116: {
      "id": 152129116,
      "date": "NOV 16",
      "day": "SAT",
      "time": "7:00 PM",
      "week": "This weekend",
      "name": "Taylor Swift",
      "stadium": "Rogers Centre",
      "location": "Toronto, Canada"
    },
    152129140: {
      "id": 152129140,
      "date": "NOV 21",
      "day": "THU",
      "time": "7:00 PM",
      "week": "Next week",
      "name": "Taylor Swift",
      "stadium": "Rogers Centre",
      "location": "Toronto, Canada"
    },
    152129141: {
      "id": 152129141,
      "date": "NOV 22",
      "day": "FRI",
      "time": "7:00 PM",
      "week": "Next week",
      "name": "Taylor Swift",
      "stadium": "Rogers Centre",
      "location": "Toronto, Canada"
    },
    152129139: {
      "id": 152129139,
      "date": "NOV 23",
      "day": "SAT",
      "time": "7:00 PM",
      "week": "Next weekend",
      "name": "Taylor Swift",
      "stadium": "Rogers Centre",
      "location": "Toronto, Canada"
    },
    152543798: {
      "id": 152543798,
      "date": "DEC 06",
      "day": "FRI",
      "time": "7:00 PM",
      "name": "Taylor Swift",
      "stadium": "BC Place Stadium",
      "location": "Vancouver, Canada"
    },
    152543796: {
      "id": 152543796,
      "date": "DEC 07",
      "day": "SAT",
      "time": "7:00 PM",
      "name": "Taylor Swift",
      "stadium": "BC Place Stadium",
      "location": "Vancouver, Canada"
    },
    152543797: {
      "id": 152543797,
      "date": "DEC 08",
      "day": "SUN",
      "time": "7:00 PM",
      "name": "Taylor Swift",
      "stadium": "BC Place Stadium",
      "location": "Vancouver, Canada"
    }
  }

  const eventData = events[id]
  // const event = await getEventDetails(id);
  // const initialListings = await getEventListings(id);
  const initialListings = listingData[id]

  return (
    <div>
      <EventHeader event={eventData} />
      <div className='flex flex-col md:flex-row'>
        {/* Left Side: Stadium Image */}
        <div className='relative h-80 md:flex-1'>
          <Image src={StadiumPng} alt='test' layout='fill' objectFit='contain' />
        </div>
        {/* Right Side: Event Details and Listings */}
        <div className='md:w-[512px]'>
          <ListingList initialListings={initialListings} eventId={id} />
        </div>
      </div>
    </div>
  );
}
