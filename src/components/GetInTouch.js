import React from 'react';

const GetInTouch = () => {
  const handleSendEmail = () => {
    const recipient = 'ayushraj763@gmail.com';
    const subject = 'Message from your website';
    const body = 'Please replace this text with your message.';

    const mailToUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailToUrl;
  };

  return (
    <div style={{ backgroundColor: "#00000000", padding: "50px" }}>
        
      <h2 style={{ textAlign: "center", marginBottom: "30px",color:"#64ffda " }}>Get in Touch</h2>
            <p style={{ textAlign: "center", marginBottom: "3px",color:"#64ffda " }}>Feel free to get in touch with me anytime! Whether you have a question, a project you'd like to discuss, <br/>or just want to say hi, I'd love to hear from you and will do my best to get back to you as soon as possible</p>
            <br></br>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         <button type="button" style={{ padding: "10px 30px", backgroundColor: "#00ed64", color: "#000000", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={handleSendEmail}> Say Hello !</button>
      </form>
    </div>
  );
}

export default GetInTouch;
