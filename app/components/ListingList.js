import TicketCard from './TicketCard';

export default function ListingList({ initialListings, eventId }) {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 bg-gray-50">
      {initialListings.map((listing) => (
        <TicketCard ticket={listing} key={listing.id} />
      ))}
    </div>
  );
}
