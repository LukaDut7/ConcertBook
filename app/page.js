// app/page.js

import Script from "next/script";
import Banner from "./banner.png";
import Logo from "./logo.png";
import Image from "next/image";
import mainImg from "./main.jpg";

export default async function Home() {
  const events = [
    {
      id: 152129115,
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
      id: 152129114,
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
      id: 152129116,
      date: "NOV 16",
      day: "SAT",
      time: "7:00 PM",
      week: "This weekend",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    {
      id: 152129140,
      date: "NOV 21",
      day: "THU",
      time: "7:00 PM",
      week: "Next week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    {
      id: 152129141,
      date: "NOV 22",
      day: "FRI",
      time: "7:00 PM",
      week: "Next week",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    {
      id: 152129139,
      date: "NOV 23",
      day: "SAT",
      time: "7:00 PM",
      week: "Next weekend",
      name: "Taylor Swift",
      stadium: "Rogers Centre",
      location: "Toronto, Canada",
    },
    {
      id: 152543798,
      date: "DEC 06",
      day: "FRI",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
    {
      id: 152543796,
      date: "DEC 07",
      day: "SAT",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
    {
      id: 152543797,
      date: "DEC 08",
      day: "SUN",
      time: "7:00 PM",
      name: "Taylor Swift",
      stadium: "BC Place Stadium",
      location: "Vancouver, Canada",
    },
  ];

  return (
    <div>
      <div className="absolute left-8 top-8 z-40 rounded-lg overflow-hidden shadow-lg">
        <Image src={Logo} alt="Logo" width={200} height={50} />
      </div>
      <div className="absolute left-8 top-[45%] transform -translate-y-1/2 z-30 rounded-lg overflow-hidden shadow-lg">
        <Image src={Banner} alt="Banner" width={500} height={250} />
      </div>
      <div className="absolute right-12 top-[40%] transform -translate-y-1/2 z-30 rounded-lg overflow-hidden shadow-lg">
        <Image src={mainImg} alt="Banner" width={350} height={250} />
      </div>
      <div className="relative w-full h-[350px] overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="./videos/sonny video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative min-h-screen py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
            9 events in all locations
          </h1>
          <ul className="space-y-6">
            {events.map((event) => (
              <li
                key={event.id}
                className="shadow-lg rounded-lg overflow-hidden bg-white"
              >
                <a
                  className="flex items-center p-6 hover:bg-purple-50 transition duration-200"
                  href={`/events/${event.id}/1.html`}
                >
                  {/* Date Section */}
                  <div className="text-center border-r border-gray-200 pr-6 mr-6">
                    <p className="text-lg font-bold text-gray-900">
                      {event.date}
                    </p>
                    <p className="text-sm text-gray-600">{event.day}</p>
                    <p className="text-sm text-gray-600">{event.time}</p>
                    <p className="text-xs text-gray-500">{event.week}</p>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {event.name}
                    </h2>
                    <p className="text-gray-600">{event.stadium}</p>
                    <p className="text-gray-500">{event.location}</p>
                    {event.status && (
                      <p className="text-red-600 mt-2 flex items-center">
                        <span className="mr-1">{event.status.icon}</span>
                        {event.status.label}
                      </p>
                    )}
                  </div>

                  {/* Action Button */}
                  <div>
                    <button className="bg-purple-600 text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition duration-200">
                      See tickets
                    </button>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Script id="liveChat1">
          {`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/673643a52480f5b4f59e14f4/1iclvgg05';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    `}
        </Script>
      </div>
    </div>
  );
}
