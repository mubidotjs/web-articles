import React from "react";

const Feedback = () => {
  return (
    <div style={{ marginLeft: 50 }}>
      <h2 className="heading">Feedback</h2>
      <form style={{ textAlign: "left" }}>
        <label>First Name *</label>
        <br />
        <input type="text" name="firstname" />
        <br />
        <label>Last Name *</label>
        <br />
        <input type="text" name="lastname" />
        <br />
        <label>Email (required)</label>
        <br />
        <input type="text" name="email" />
        <br />
        <label>Country *</label>
        <br />
        <input type="text" name="country" />
        <br />
        <label>Contact *</label>
        <br />
        <input type="text" name="contact" />
        <br />
        <label>Address *</label>
        <br />
        <input type="text" name="address" />
        <br />
        <textarea name="textarear" rows="10" cols="100" />
        <br />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Feedback;
