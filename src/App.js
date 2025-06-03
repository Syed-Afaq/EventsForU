import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Spotlight from "./components/Spotlight";
import ContactSection from "./components/ContactSection";
import 'bootstrap/dist/js/bootstrap.bundle.min';



const dummyEvents = [
  {
    id: 1,
    name: "Nust Welcome 2025",
    date: "Aug 25, 2025",
    time: "10:00 AM",
    location: "NUST ",
    description: "The NUST Welcome 2025 event is designed to introduce new students to the university's vibrant community and innovative environment. Attendees can expect to explore the latest in technology and innovation, network with fellow students, and engage with faculty members.",
    image: "/welcome.jpg"
  },
  {
    id: 2,
    name: "Olympiad",
    date: "Sep 25, 2025",
    time: "5:00 PM",
    location: "Nust",
    description: "The NUST Olympiad is an annual event organized by the National University of Sciences and Technology (NUST) that aims to promote academic excellence, critical thinking, and innovation among students. It features a series of competitions in various disciplines, including science, technology, engineering, and mathematics (STEM).",
    image: "/Olympiad.jpeg"
  },
  {
    id: 3,
    name: "Concert By Havi",
    date: "June 20, 2025",
    time: "6:30 PM",
    location: "Golberg Greens",
    description: "The Havvi Concert is an exciting musical event that showcases a variety of performances, featuring both established and emerging artists. It aims to celebrate music and culture while providing a platform for artists to connect with audiences.",
    image: "/Havi.jpeg"
  }
];


function App() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setEvents(dummyEvents);
    }, 500);
  }, []);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <>
    <Navbar />
    <section id="home">
      <Hero />
    </section>
    
    
<section id="events">
      <div className="container my-4">
      
       
      <h2 className="text-center fw-bold my-4">Featured Events</h2>
       <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {filteredEvents.map((event, index) => (
        <Spotlight key={event.id} event={event} reverse={index % 2 !== 0} />
      ))}
      
    </div>
  </section> 
    <section id="contact">
     <ContactSection />
  </section>
  

    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-0">&copy; Made By Syed Muhammad Afaq</p>
    </footer>
  </>
);

}

export default App;
