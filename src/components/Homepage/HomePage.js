import React,{useState} from "react";
import Input from "../Input/Input";
import Card from "../Card/Card";

const HomePage = () => {
  var date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const handleDateUpdate = (e) => {
    //console.log(e.target.value)
    var currentDate = new Date(e.target.value);
    setSelectedDate((state) => e.target.value);
    console.log(e.target.value)
    
  }
  return (
    <>
      <Input selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleDateUpdate={handleDateUpdate}/>
      <Card />
    </>
  );
};

export default HomePage;
