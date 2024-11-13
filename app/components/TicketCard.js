import React from 'react';
import Image from 'next/image';
const styles = {
  ticketContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '16px',
    border: '1px solid #e2e2e2',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  ticketImage: {
    position: 'relative',
    width: '128px',
    height: '96px',
  },
  image: {
    borderRadius: '8px',
  },
  ticketDetails: {
    flex: 1,
  },
  ticketSection: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    margin: 0,
  },
  ticketCount: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '4px',
  },
  ticketLabels: {
    marginTop: '8px',
    fontSize: '0.875rem',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
  },
  labelText: {
    marginLeft: '4px',
  },
  bestSelling: {
    color: '#db2777',
    fontWeight: '500',
  },
  cheapest: {
    color: '#10b981',
    fontWeight: '500',
  },
  ticketPrice: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: 0,
  },
  priceEach: {
    fontSize: '0.75rem',
    color: '#6b7280',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
  },
  rating: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '9999px',
  },
  ratingLabel: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginLeft: '8px',
  },
};

const TicketCard = ({ ticket }) => {
  return (
    <div style={styles.ticketContainer}>
      {/* Image Section */}
      <div style={styles.ticketImage}>
        <Image
          src={ticket.imgUrl}
          alt={ticket.section}
          layout="fill"
          objectFit="cover"
          style={styles.image}
        />
      </div>

      {/* Ticket Details */}
      <div style={styles.ticketDetails}>
        <h2 style={styles.ticketSection}>{ticket.section}</h2>
        <p style={styles.ticketCount}>{ticket.tickets} tickets</p>

        {/* Labels */}
        <div style={styles.ticketLabels}>
          {ticket.instantDownload && (
            <p style={styles.label}>
              ⚡ <span style={styles.labelText}>Instant Download</span>
            </p>
          )}
          {ticket.obstructedView && (
            <p style={styles.label}>Limited or obstructed view (printed on ticket)</p>
          )}
          {ticket.standingOnly && <p style={styles.label}>Standing room only (SRO)</p>}
          {ticket.oneOfTheBest && (
            <p style={{ ...styles.label, ...styles.bestSelling }}>One of the best-selling sections</p>
          )}
          {ticket.cheapest && (
            <p style={{ ...styles.label, ...styles.cheapest }}>
              💲 <span style={styles.labelText}>Cheapest</span>
            </p>
          )}
        </div>
      </div>

      {/* Price and Rating */}
      <div style={styles.ticketPrice}>
        <p style={styles.price}>${ticket.currentPrice.toLocaleString()}</p>
        <p style={styles.priceEach}>each</p>

        <div style={styles.ratingContainer}>
          {ticket.rating && (
            <span style={styles.rating}>{ticket.rating.toFixed(1)}</span>
          )}
          <span style={styles.ratingLabel}>{ticket.ratingLabel}</span>
        </div>
      </div>
    </div>  );
};

export default TicketCard;
