import React, { useRef, useState, useCallback } from "react";
import useAPI from "../hooks/useAPI";
import goldfinch from "./images/goldfinch2.png";

function MailingListPage() {
  const emailInput = useRef(null);
  const unsubscribeInput = useRef(null);
  const { signUp } = useAPI();
  const { unsubscribe } = useAPI();
  const [err, setErr] = useState("");
  const [unsubErr, setUnsubErr] = useState("");
  const [msg, setMsg] = useState("");
  const [unsubMsg, setUnsubMsg] = useState("");

  const handleSignup = useCallback(async (e) => {
    //prevents page from refreshing so message/error does not disappear
    e.preventDefault();

    const email_address = emailInput.current.value;

    setErr("");
    if (
      email_address.length < 6 ||
      email_address.length > 30 ||
      !email_address.includes("@")
    ) {
      setErr("Invalid email address");
      return;
    }
    const json = await signUp(email_address);
    if (!json.success) {
      setErr(json.error);
    } else {
      setMsg("Thanks for signing up!");
      return;
    }
  });

  const handleUnsubscribe = useCallback(async (e) => {
    e.preventDefault();

    const email_address = unsubscribeInput.current.value;

    setUnsubErr("");
    if (
      email_address.length < 6 ||
      email_address.length > 30 ||
      !email_address.includes("@")
    ) {
      setUnsubErr("Invalid email address");
      return;
    }
    const json = await unsubscribe(email_address);
    if (!json.success) {
      setUnsubErr(json.error);
    } else {
      setUnsubMsg("You have been unsubscribed");
      return;
    }
  });

  return (
    <div className="mail-container flex-container">
      <div className="flex-item-med flex-container">
        <img src={goldfinch} alt="goldfinch" className="center" />
      </div>
      <div className="flex-item-med center">
        <h2>WANT MORE INFO?</h2>
        <form className="center padding-1 text-gray">
          <div>
            <label htmlFor="email">
              <p>Enter your email here to sign up for our mailing list</p>
            </label>
          </div>
          <input
            id="email"
            type="text"
            ref={emailInput}
            placeholder="someone@example.com"
          />
          <br />
          <br />
          <button onClick={handleSignup}>Sign up</button>
          <h4>{err}</h4>
          <h4>{msg}</h4>

          <div>
            <label htmlFor="unsubscribe">
              <p>To unsubscribe from the mailing list enter your email here</p>
            </label>
          </div>

          <input
            id="unsubscribe"
            type="text"
            ref={unsubscribeInput}
            placeholder="someone@example.com"
          />
          <br />
          <br />
          <button onClick={handleUnsubscribe}>Unsubscribe</button>
          <h4>{unsubErr}</h4>
          <h4>{unsubMsg}</h4>
        </form>
      </div>
    </div>
  );
}

export default MailingListPage;
