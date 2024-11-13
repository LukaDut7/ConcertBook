// app/page.js

// import { getTaylorSwiftEvents } from './utils/getTaylorSwiftEvents';

export default async function Home() {
  // const events = await getTaylorSwiftEvents();
  const events = 
      [
        {
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
        {
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
        {
          "id": 152129116,
          "date": "NOV 16",
          "day": "SAT",
          "time": "7:00 PM",
          "week": "This weekend",
          "name": "Taylor Swift",
          "stadium": "Rogers Centre",
          "location": "Toronto, Canada"
        },
        {
          "id": 152129140,
          "date": "NOV 21",
          "day": "THU",
          "time": "7:00 PM",
          "week": "Next week",
          "name": "Taylor Swift",
          "stadium": "Rogers Centre",
          "location": "Toronto, Canada"
        },
        {
          "id": 152129141,
          "date": "NOV 22",
          "day": "FRI",
          "time": "7:00 PM",
          "week": "Next week",
          "name": "Taylor Swift",
          "stadium": "Rogers Centre",
          "location": "Toronto, Canada"
        },
        {
          "id": 152129139,
          "date": "NOV 23",
          "day": "SAT",
          "time": "7:00 PM",
          "week": "Next weekend",
          "name": "Taylor Swift",
          "stadium": "Rogers Centre",
          "location": "Toronto, Canada"
        },
        {
          "id": 152543798,
          "date": "DEC 06",
          "day": "FRI",
          "time": "7:00 PM",
          "name": "Taylor Swift",
          "stadium": "BC Place Stadium",
          "location": "Vancouver, Canada"
        },
        {
          "id": 152543796,
          "date": "DEC 07",
          "day": "SAT",
          "time": "7:00 PM",
          "name": "Taylor Swift",
          "stadium": "BC Place Stadium",
          "location": "Vancouver, Canada"
        },
        {
          "id": 152543797,
          "date": "DEC 08",
          "day": "SUN",
          "time": "7:00 PM",
          "name": "Taylor Swift",
          "stadium": "BC Place Stadium",
          "location": "Vancouver, Canada"
        }
      ]

  return (
    <div>
      <h1>Taylor Swift Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <a className="flex items-center border rounded-lg shadow p-4 space-x-4 bg-white" href={`/events/${event.id}`}>
              {/* Date Section */}
              <div className="text-center border-r pr-4">
                <p className="text-lg font-bold">{event.date}</p>
                <p className="text-sm">{event.day}</p>
                <p className="text-sm">{event.time}</p>
                <p className="text-xs text-gray-500">{event.week}</p>
              </div>
              
              {/* Event Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <p className="text-gray-600">{event.stadium}</p>
                <p className="text-gray-500">{event.location}</p>
              </div>
              
              {/* Action Button */}
              <div>
                <button className="bg-purple-600 text-white rounded-lg py-2 px-4 hover:bg-purple-700">
                  See tickets
                </button>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
