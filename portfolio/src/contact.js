import React from 'react'
function Contact() {
  return (
    <>
      <div className="form-hero">
        <form name="myForm">
          <div className="form-container">
            <h1 style={{height:'25px'}}>Contact Me</h1>
            <label style={{fontSize:"14px"}} htmlFor="name">Name:</label><br />
            <input type="text" id='name' name="name" required/><br />
            <label style={{fontSize:"14px"}} htmlFor="email">Email:</label><br />
            <input type="email" name="email" id="email" required /><br />
            <label style={{fontSize:"14px"}} htmlFor="textarea">Leave a message here:</label><br />
            <textarea name="" id="textarea" cols="26" rows="7"></textarea><br />
            <input type="submit" id="submit" value="Submit"/> &nbsp;<br />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;