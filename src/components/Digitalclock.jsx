import React, { useState } from "react";
const Digitalclock = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  let [curtime, Settime] = useState(time);
  let [curdate, Setdate] = useState(date);
  const updatetime = () => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    Settime(time);
    Setdate(date);
  };
  setInterval(updatetime, 1000);
  return (
    <>
      <h1 className="clock">{curtime}</h1>
      <h1 className="date">{curdate}</h1>
    </>
  );
};
export default Digitalclock;
