import React from 'react'
function Contact() {
  return (
    <>
      <div className="form-hero">
      <h1>Contact Me</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' required/><br />
          <label htmlFor="email">Email:</label>
          <input type="email" name="" id="email" required /><br />
          <label htmlFor="number">Number:</label>
          <input type="text" id='number' /><br />
          <label htmlFor="textarea">Leave a message here:</label>
          <textarea name="" id="textarea" cols="30" rows="10"></textarea><br />
          <input type="submit" value="Submit" /> &nbsp;
           <input type="reset" value="Reset" />
        </form>
      </div>
    </>
  )
}

export default Contact;