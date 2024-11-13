// app/page.js

// import { getTaylorSwiftEvents } from './utils/getTaylorSwiftEvents';
const styles = {
  link: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #e2e2e2',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    textDecoration: 'none',
    backgroundColor: 'white',
    color: 'inherit',
    gap: '16px',
  },
  dateSection: {
    textAlign: 'center',
    paddingRight: '16px',
    borderRight: '1px solid #e2e2e2',
  },
  date: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
  },
  dayTime: {
    fontSize: '0.875rem',
  },
  week: {
    fontSize: '0.75rem',
    color: '#6b7280',
  },
  eventDetails: {
    flex: 1,
  },
  eventName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: 0,
  },
  stadium: {
    color: '#4b5563',
    fontSize: '0.875rem',
    margin: '4px 0',
  },
  location: {
    color: '#6b7280',
    fontSize: '0.875rem',
  },
  button: {
    backgroundColor: '#7c3aed',
    color: 'white',
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
  },
  buttonHover: {
    backgroundColor: '#6d28d9',
  },
};
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
            <a
              href={`./events/${event.id}.html`}
              style={styles.link}
            >
              {/* Date Section */}
              <div style={styles.dateSection}>
                <p style={styles.date}>{event.date}</p>
                <p style={styles.dayTime}>{event.day}</p>
                <p style={styles.dayTime}>{event.time}</p>
                <p style={styles.week}>{event.week}</p>
              </div>

              {/* Event Details */}
              <div style={styles.eventDetails}>
                <h2 style={styles.eventName}>{event.name}</h2>
                <p style={styles.stadium}>{event.stadium}</p>
                <p style={styles.location}>{event.location}</p>
              </div>

              {/* Action Button */}
              <div>
                <button style={styles.button}>See tickets</button>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
