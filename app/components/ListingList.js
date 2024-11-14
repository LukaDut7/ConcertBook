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

import { useState } from 'react';
import TicketCard from './TicketCard';

export default function ListingList({ initialListings, eventId }) {
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
        <TicketCard ticket={listing} key={listing.id} />
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
