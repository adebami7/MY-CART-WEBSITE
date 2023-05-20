import React from "react";

import "./contact.css";

export const Contact = () => {
  
  return (
    <div className="container">
      <h1>Contact</h1>
      <form action="/submit-contact-form" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." required />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.." required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Write something.." required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};