import { useEffect, useRef, useState } from "react";

import CountDownCard from "./CountDownCard";
import "./CountDownTimer.css";

const futureDate = new Date("2030-06-09T00:00:00");
const currentDate = new Date();
const diff = futureDate.getTime() - currentDate.getTime(); // in milliseconds
const secondsLeft = Math.floor(diff / 1000) % 60;
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24) % 365;
const yearsLeft = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

const CountDownTimer = () => {
  //card ref
  const SecondsCardRef = useRef<HTMLInputElement>(null);
  const MinutesCardRef = useRef<HTMLInputElement>(null);
  const HoursCardRef = useRef<HTMLInputElement>(null);
  const DaysCardRef = useRef<HTMLInputElement>(null);
  const YearsCardRef = useRef<HTMLInputElement>(null);
  //state
  const [days, setDays] = useState(daysLeft);
  const [hours, setHours] = useState(hoursLeft);
  const [minutes, setMinutes] = useState(minutesLeft);
  const [seconds, setSeconds] = useState(secondsLeft);
  const [years, setYears] = useState(yearsLeft);

  useEffect(() => {
    seconds === 0 && setSeconds(59);
    minutes === 0 && setMinutes(59);
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        SecondsCardRef.current?.classList.toggle("rotate");
      }, 1000);
    }
    if (seconds === 0 && minutes > 0) {
      setMinutes(minutes - 1);
      MinutesCardRef.current?.classList.toggle("rotate");
    }
  }, [seconds, minutes]);
  useEffect(() => {
    hours === 0 && setHours(23);
    if (minutes === 0 && hours > 0) {
      setHours(hours - 1);
      HoursCardRef.current?.classList.toggle("rotate");
    }
  }, [minutes, hours]);
  useEffect(() => {
    if (hours === 0) {
      setDays(days - 1);
      DaysCardRef.current?.classList.toggle("rotate");
    }
  }, [hours, days]);

  useEffect(() => {
    if (days === 0) {
      setYears(years - 1);
      YearsCardRef.current?.classList.toggle("rotate");
    }
  }, [days, years]);
  return (
    <div className="countdown__container">
      <CountDownCard label="years" number={years} cardRef={YearsCardRef} />
      <CountDownCard label="days" number={days} cardRef={DaysCardRef} />
      <CountDownCard label="hours" number={hours} cardRef={HoursCardRef} />
      <CountDownCard
        label="minutes"
        number={minutes}
        cardRef={MinutesCardRef}
      />
      <CountDownCard
        label="seconds"
        number={seconds}
        cardRef={SecondsCardRef}
      />
    </div>
  );
};

export default CountDownTimer;
