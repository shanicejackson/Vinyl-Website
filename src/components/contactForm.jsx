import React from "react";

const ContactForm = () => {
  return (
    <div id="contact">
      <form>
        <label>First Name</label>
        <input
          type="text"
          className="name"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label>Last Name</label>
        <input
          type="text"
          className="name"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label>Country</label>
        <select id="country" name="country">
          <option value="usa">USA</option>
          <option value="mexico">Mexico</option>
          <option value="canada">Canada</option>
        </select>

        <label>Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;