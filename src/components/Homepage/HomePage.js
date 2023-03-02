import React, { useState } from "react";
import Input from "../Input/Input";
import Card from "../Card/Card";
import ParticlesBg from "particles-bg";
import Confettis from "../Confettis";

const HomePage = () => {
  var date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const [isExploding,setIsExploding] = useState(false)
  const handleDateUpdate = (e) => {
  
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
          setIsExploding={setIsExploding}
        />
        <div style={{position:'absolute' ,height:'100vh', width:'100vw',display:'flex',justifyContent:'center'}}>
        <Confettis isExploding={isExploding}/>
        </div>
        <Card />
      </div>
    </>
  );
};

export default HomePage;
