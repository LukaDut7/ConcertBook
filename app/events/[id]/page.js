// app/events/[id]/page.js

// import { getEventDetails, getEventListings } from '../../utils/getEventData';
import Image from 'next/image';
import StadiumPng from '../../stadium.png'
import ListingList from '../../components/ListingList';
import EventHeader from '../../components/EventHeader';

export default async function EventPage({ params }) {
  const { id } = params;
  const eventData = {
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
  }
  // const event = await getEventDetails(id);
  // const initialListings = await getEventListings(id);
  const event = {
    name: "Taylor"
  }
  const initialListings = [
    {
      section: "Upper",
      id: 1,
      row: 2,
      currentPrice: 123,
      rating: 3,
      clearview: false,
      instantDownload: false,
      restrictedView: false,
      sideView: false,
      obstructedView: false,
      rearView: false,
      zone: "testes",
      under15s: false,
      standingOnly: false,
      oneOfTheBest: false,
      cheapest: true,
      lastTickets: false,
      imageUrl: "https://img.vggcdn.net/img/vfsnew/2d/4169/278610.jpg?im=Resize=(500,271)",
    }
  ]

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
          <h1>{event.name}</h1>
          <ListingList initialListings={initialListings} eventId={id} />
        </div>
      </div>
    </div>
  );
}
