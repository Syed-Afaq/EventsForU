import React from 'react';

function EventCard({ event }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={event.image}
          alt={event.name}
          className="card-img-top"
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text text-muted">{event.date} | {event.time}</p>
          <p className="card-text"><strong>Location:</strong> {event.location}</p>
          <p className="card-text">{event.description}</p>
          <div className="mt-auto">
            <a href="#" className="btn btn-primary w-100">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default EventCard;
