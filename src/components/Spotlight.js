import React from "react";

function Spotlight({ event, reverse = false }) {
  return (
    <section
      className={`spotlight d-flex flex-column flex-md-row ${
        reverse ? "flex-md-row-reverse" : ""
      } align-items-center my-5 p-4 border rounded shadow-sm`}
      id={`spotlight-${event.id}`}
    >
      <div className="content col-md-6 text-start">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p><strong>Date:</strong> {event.date} at {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <a  className="btn btn-primary">Register</a>
      </div>
      <div className="image col-md-6 text-center">
        <img
          src={event.image}
          alt={event.name}
          className="img-fluid rounded"
          style={{ width: "90%", height: "100%", objectFit: "cover" }}

        />
      </div>
    </section>
  );
}

export default Spotlight;
