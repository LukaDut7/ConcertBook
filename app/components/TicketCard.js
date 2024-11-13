import React from 'react';
import Image from 'next/image';

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex border rounded-lg shadow-lg p-4 space-x-4 bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative w-32 h-24">
        <Image
          src={ticket.imgUrl}
          alt={ticket.section}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Ticket Details */}
      <div className="flex-1">
        <h2 className="text-lg font-bold text-gray-800">{ticket.section}</h2>
        <p className="text-sm text-gray-500">{ticket.tickets} tickets</p>

        {/* Labels */}
        <div className="space-y-1 text-sm mt-2">
          {ticket.instantDownload && (
            <p className="flex items-center text-blue-600 font-medium">
              ⚡ <span className="ml-1">Instant Download</span>
            </p>
          )}
          {ticket.obstructedView && (
            <p className="text-yellow-600">Limited or obstructed view (printed on ticket)</p>
          )}
          {ticket.standingOnly && <p className="text-red-500">Standing room only (SRO)</p>}
          {ticket.oneOfTheBest && (
            <p className="text-pink-600 font-medium">One of the best-selling sections</p>
          )}
          {ticket.cheapest && (
            <p className="flex items-center text-green-600 font-medium">
              💲 <span className="ml-1">Cheapest</span>
            </p>
          )}
        </div>
      </div>

      {/* Price and Rating */}
      <div className="flex flex-col items-end">
        <p className="text-xl font-semibold text-gray-800">${ticket.currentPrice > 650 ? 650 : ticket.currentPrice.toLocaleString()}</p>
        <p className="text-xs text-gray-500">each</p>

        <div className="flex items-center mt-2">
          {ticket.rating && (
            <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">
              {ticket.rating.toFixed(1)}
            </span>
          )}
          <span className="ml-2 text-sm text-gray-600">{ticket.ratingLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
