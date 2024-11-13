// app/components/ListingList.js

'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import TicketCard from './TicketCard';

export default function ListingList({ initialListings, eventId }) {
  const [listings, setListings] = useState(initialListings);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Infinite Scroll Handler
  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        !isFetching
      ) {
        setIsFetching(true);
        const nextPage = page + 1;
        const newListings = await fetchMoreListings(eventId, nextPage);
        setListings((prev) => [...prev, ...newListings]);
        setPage(nextPage);
        setIsFetching(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching, page, eventId]);

  // Seat Selection Handler
  const handleSeatSelection = (listingId) => {
    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(listingId)) {
        // Deselect seat
        return prevSelected.filter((id) => id !== listingId);
      } else if (prevSelected.length < 4) {
        // Select seat
        return [...prevSelected, listingId];
      } else {
        alert('You can select up to 4 seats.');
        return prevSelected;
      }
    });
  };

  return (
    <div>
      {listings.map((listing) => <TicketCard ticket={listing} key={listing.id} />)}
      {isFetching && <p>Loading more listings...</p>}
      <button onClick={() => proceedToCheckout(selectedSeats)}>
        Proceed to Checkout
      </button>
    </div>
  );
}

// Fetch more listings
async function fetchMoreListings(eventId, page) {
  try {
    const response = await axios.get(`/api/events/${eventId}/listings`, {
      params: {
        start: page * 20,
        rows: 20,
      },
    });
    return response.data.listings;
  } catch (error) {
    console.error('Error fetching more listings:', error);
    return [];
  }
}

// Proceed to checkout
function proceedToCheckout(selectedSeats) {
  // Handle checkout logic
  console.log('Selected Seats:', selectedSeats);
}
