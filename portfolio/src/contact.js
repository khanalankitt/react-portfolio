import React from 'react'
const formStyles={
  height:"460px",
  width:"500px",
  margin:"auto",
  color:"$text-color"
}
const textAreaStyle={
  padding:'10px',
  borderRadius: '20px',
  outline:'none',
  border:'none',
  margin:'10px 0px 0px 0px'
}
const inputStyle={
  height:'35px',
  width:"200px",
  borderRadius: '20px',
  outline:'none',
  border:'none',
  fontize: '14px',
  margin:'10px 0px 10px 0px',
  padding:'0px 15px 0px 15px',
  boxShadow: "2px 1px 1px 1px $color"
}
const SubmitButton={
  cursor:'pointer',
  height:'35px',
  width:"200px",
  borderRadius: '20px',
  outline:'none',
  border:'none',
  fontSize: '16px',
  fontWeight:500,
  marginLeft:"10px",
  marginTop:"20px"
}
function Contact() {
  return (
    <>
      <div className="form-hero">
        <form style={formStyles} name="myForm">
          <div className="form-container">
            <h1 style={{height:'25px'}}>Contact Me</h1>
            <label style={{fontSize:"14px"}} htmlFor="name">Name:</label><br />
            <input style={inputStyle} type="text" id='name' name="name" required/><br />
            <label style={{fontSize:"14px"}} htmlFor="email">Email:</label><br />
            <input style={inputStyle} type="email" name="email" id="email" required /><br />
            <label style={{fontSize:"14px"}} htmlFor="textarea">Leave a message here:</label><br />
            <textarea name="" id="textarea" cols="26" rows="7" style={textAreaStyle}></textarea><br />
            <input style={SubmitButton} type="submit" id="submit" value="Submit" /> &nbsp;<br />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;