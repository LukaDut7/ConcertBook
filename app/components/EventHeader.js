"use client"; // Add this at the very top of the file

import React from 'react';
import taylorThumbPng from '../taylorThumb.jpg';
import Image from 'next/image';
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    border: '1px solid #e2e2e2',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  backButton: {
    color: '#4b5563',
    cursor: 'pointer',
    fontSize: '1rem',
    background: 'none',
    border: 'none',
  },
  backButtonHover: {
    color: '#374151',
  },
  imageContainer: {
    width: '64px',
    height: '64px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  details: {
    flex: 1,
  },
  eventName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#6d28d9',
    margin: 0,
  },
  eventInfo: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
  },
  statusLabel: {
    color: '#db2777',
    fontWeight: '500',
    fontSize: '0.75rem',
    backgroundColor: '#fce7f3',
    padding: '2px 8px',
    borderRadius: '9999px',
  },
};
const EventHeader = ({ event }) => {

  return (
    <div style={styles.container}>
      {/* Back Button */}
      {/* <button
        onClick={() => {if (window && window.history) window.history.back()}}
        style={styles.backButton}
        onMouseEnter={(e) => (e.target.style.color = styles.backButtonHover.color)}
        onMouseLeave={(e) => (e.target.style.color = styles.backButton.color)}
      >
        ←
      </button> */}

      {/* Image */}
      <div style={styles.imageContainer}>
        <Image src={taylorThumbPng} alt={`${event.name}`} style={styles.image} />
      </div>

      {/* Event Details */}
      <div style={styles.details}>
        <h2 style={styles.eventName}>{event.name}</h2>
        <p style={styles.eventInfo}>
          {event.date} • {event.day} • {event.time} • {event.year}
        </p>
        <p style={styles.eventInfo}>
          {event.stadium}, {event.location}
        </p>

        {/* Status */}
        {event.status && (
          <div style={styles.status}>
            <span style={styles.statusLabel}>{event.status.label}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventHeader;
