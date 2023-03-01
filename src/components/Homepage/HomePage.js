import React, { useState } from "react";
import Input from "../Input/Input";
import Card from "../Card/Card";
import ParticlesBg from "particles-bg";

const HomePage = () => {
  var date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const handleDateUpdate = (e) => {
    //console.log(e.target.value)
    setSelectedDate((state) => e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <Input
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleDateUpdate={handleDateUpdate}
        />
        <Card />
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </>
  );
};

export default HomePage;
