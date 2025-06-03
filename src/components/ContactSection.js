import React, { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been submitted. Thank you!");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>

      <div className="row align-items-start">
        
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="query" className="form-label fw-semibold">Your Query</label>
              <textarea
                className="form-control"
                id="query"
                name="query"
                rows="4"
                required
                value={formData.query}
                onChange={handleChange}
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>

       
      </div>
    </div>
  );
}

export default ContactSection;
