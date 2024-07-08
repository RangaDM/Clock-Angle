import React from "react";

const Clock = () => {
  const [degree, setDegree] = React.useState(0);
  const handleSubmit = () => {
    const timeInput = document.getElementById("time");
    const minute = timeInput.value.split(":")[1];
    const hour = timeInput.value.split(":")[0];
    console.log("hour : ", hour);
    console.log("minute : ", minute);

    const hourDegree = hour * 30 + minute * 0.5;
    const minuteDegree = minute * 6;

    console.log("hourDegree : ", hourDegree);
    console.log("minuteDegree : ", minuteDegree);

    setDegree(Math.abs(hourDegree - minuteDegree));
    console.log("degree : ", degree);
  };

return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Enter the time:</h2>
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

        <h2>Result: {degree}° </h2>
    </div>
);
};

export default Clock;
