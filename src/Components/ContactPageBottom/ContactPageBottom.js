import React, { useState } from "react";
import db from "../../util/firebase";
import "./ContactPageBottom.css";
import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function ContactPageBottom() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("mail").add({
      to: ["landry@landrycarroll.com"],
      message: {
        subject: "Message from Kevin Langley Project Page",
        html: `<em>${name}</em> has sent you a message from Kevin Langely Project.<br /><br /><em>${message}</em>`,
        from: emailAddress,
      },
    });

    setName(" ");
    setEmailAddress(" ");
    setMessage(" ");
  };

  return (
    <section className="contact__container">
      <div className="contact">
        <div className="contact__left">
          <h3>Let's Talk</h3>
          <p>
            We want to hear from you! If there is anything we can do to help,
            let us know. We are ready to help you begin your next steps.
          </p>
        </div>
        <div className="contact__right">
          <div className="contact__form">
            <form onSubmit="return false;">
              <TextField
                style={{ width: "100%" }}
                margin="dense"
                id="name"
                label="Name"
                value={name}
                onChange={handleNameChange}
                variant="outlined"
              />
              <TextField
                style={{ width: "100%" }}
                margin="dense"
                id="email"
                label="Email"
                value={emailAddress}
                onChange={handleEmailAddressChange}
                variant="outlined"
                required
              />
              <TextField
                style={{ width: "100%" }}
                margin="dense"
                id="message"
                label="Message"
                value={message}
                onChange={handleMessageChange}
                variant="outlined"
                multiline
                rows={4}
              />

              <button onClick={sendMessage} type="submit">
                {" "}
                <span>Send</span>
                <SendIcon />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <MessagePractice /> */}
    </section>
  );
}

export default ContactPageBottom;
