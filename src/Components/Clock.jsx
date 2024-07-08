import React from "react";

const Clock = () => {
  const [degree, setDegree] = React.useState(0);
  const handleSubmit = () => {
    const timeInput = document.getElementById("time");
    const minute = timeInput.value.split(":")[1];
    const hour = timeInput.value.split(":")[0];

    const hourDegree = hour * 30 + minute * 0.5;
    const minuteDegree = minute * 6;

    setDegree(Math.abs(hourDegree - minuteDegree));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Calculate the angle between hands of a clock</h2>
      <h3>Enter the time</h3>
      <input
        type="time"
        id="time"
        name="time"
        style={{ marginRight: "10px", fontSize: "23px" }}
      />
      <button
        onClick={handleSubmit}
        style={{
          background: "blue",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      <h4 style={{ marginTop: "20px" }}>
        The angle between the hands of the clock is {degree}° at the given time
      </h4>
    </div>
  );
};

export default Clock;
