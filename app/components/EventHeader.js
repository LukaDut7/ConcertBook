"use client"; // Add this at the very top of the file

import React from 'react';
import taylorThumbPng from '../taylorThumb.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const EventHeader = ({ event }) => {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-4 p-4 border bg-white shadow-md">
      {/* Back Button */}
      <button 
        onClick={() => router.back()} 
        className="text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        ←
      </button>

      {/* Image */}
      <div className="w-16 h-16">
        <Image
          src={taylorThumbPng}
          alt={`${event.name}`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Event Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-purple-700">{event.name}</h2>
        <p className="text-sm text-gray-500">
          {event.date} • {event.day} • {event.time} • {event.year}
        </p>
        <p className="text-sm text-gray-500">
          {event.stadium}, {event.location}
        </p>

        {/* Status */}
        <div className="flex items-center mt-1">
          <span className="text-pink-600 font-medium text-xs bg-pink-100 px-2 py-0.5 rounded-full">
            {event.status.label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
