// import TicketCard from './TicketCard';

// export default function ListingList({ initialListings, eventId }) {
//   return (
//     <div className="max-w-4xl mx-auto p-4 space-y-4 bg-gray-50">
//       {initialListings.map((listing) => (
//         <TicketCard ticket={listing} key={listing.id} />
//       ))}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import TicketCard from "./TicketCard";

export default function ListingList({ initialListings, seats }) {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(initialListings.length / itemsPerPage);

  // Calculate the items to display for the current page
  const currentItems = initialListings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 bg-gray-50">
      {currentItems.map((listing) => (
        <TicketCard ticket={listing} key={listing.id} seats={seats} />
      ))}
    </div>
  );
}
