import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import data from "./data.json";

const App = () => {
  const [jsonData, setJsonData] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState("UTC-0");
  const [jsonDataIndex, setJsonDataIndex] = useState(0);

  const timeArr = [
    { time1: "08:00" },
    { time1: "08:30" },
    { time1: "09:00" },
    { time1: "09:30" },
    { time1: "10:00" },
    { time1: "10:30" },
    { time1: "11:00" },
    { time1: "11:30" },
    { time1: "12:00" },
    { time1: "12:30" },
    { time1: "13:00" },
    { time1: "13:30" },
    { time1: "14:00" },
    { time1: "14:30" },
    { time1: "15:00" },
    { time1: "15:30" },
    { time1: "16:00" },
    { time1: "16:30" },
    { time1: "17:00" },
    { time1: "17:30" },
    { time1: "18:00" },
    { time1: "18:30" },
    { time1: "19:00" },
    { time1: "19:30" },
    { time1: "20:00" },
    { time1: "20:30" },
    { time1: "21:00" },
    { time1: "21:30" },
    { time1: "22:00" },
    { time1: "22:30" },
    { time1: "23:00" },
    { time1: "23:30" },
  ];

  const addTimes = (timeOne, timeTwo) => {
    const [hours1, minutes1] = timeOne.split(":").map(Number);
    const [hours2, minutes2] = timeTwo.split(":").map(Number);

    let totalHours = hours1 + hours2;
    let totalMinutes = minutes1 + minutes2;

    if (totalMinutes >= 60) {
      totalHours += Math.floor(totalMinutes / 60);
      totalMinutes %= 60;
    }

    totalHours %= 24;

    const formattedHours = String(totalHours).padStart(2, "0");
    const formattedMinutes = String(totalMinutes).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}`;
  };


  useEffect(() => {
    setJsonData(data.data);
  }, []);


  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  const handleNext = () => {
    if (jsonDataIndex < 32 && jsonDataIndex === 30) return;
    else {
      setJsonDataIndex(jsonDataIndex + 5);
    }
  };
  const handlePrev = () => {
    if (jsonDataIndex === 0) return;
    else {
      setJsonDataIndex(jsonDataIndex - 5);
    }
  };
  return (
    <>
      <div className="mainContainer">
        <div className="week-header w-full d-flex justify-content-between align-items-center border  p-2">
          <button onClick={() => handlePrev()} className="btn btn-secondary">
            Previous Week
          </button>
          <p className=" m-0 ">{moment(Date.now()).format("MMM D YYYY")}</p>
          <button onClick={() => handleNext()} className="btn btn-primary">
            Next Week
          </button>
        </div>
        <div className="time-zone p-2 d-grid gap-2">
          <p className="m-0">Timezone</p>
          <select
            className="form-select "
            aria-label="Default select example"
            onChange={handleTimezoneChange}
            value={selectedTimezone}
          >
            <option value="UTC-0">UTC-0</option>
            <option value="Asia/Kolkata">UTC+5:30 (Asia/Kolkata)</option>
          </select>
        </div>
        <div className="weekContainer border mt-1">
          {/* Mon */}
          <ul className="d-flex days border">
            <div className=" p-3 border">
              <li className="text-danger list-unstyled">Mon</li>
              <p>
                {jsonData[jsonDataIndex] !== undefined &&
                  jsonData[jsonDataIndex].Date}
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2 border border-secondary p-4 w-100">
              {timeArr.map((time, i) => (
                <div key={i}>
                  {jsonData[jsonDataIndex] !== undefined &&
                  jsonData[jsonDataIndex].Time === time.time1 ? (
                    <input type="checkbox" checked />
                  ) : (
                    <input type="checkbox" />
                  )}
                  {selectedTimezone === "UTC-0"
                    ? addTimes(time.time1, "00:00")
                    : addTimes(time.time1, "05:30")}
                </div>
              ))}
            </div>
          </ul>
          {/* Tue */}
          <ul className="d-flex days border">
            <div className=" p-3 border">
              <li className="text-danger list-unstyled">Tue</li>
              <p>
                {jsonData[jsonDataIndex + 1] !== undefined &&
                  jsonData[jsonDataIndex + 1].Date}
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2 border border-secondary p-4 w-100">
              {timeArr.map((time, i) => (
                <div key={i}>
                  {jsonData[jsonDataIndex + 1] !== undefined &&
                  jsonData[jsonDataIndex + 1].Time === time.time1 ? (
                    <input type="checkbox" checked />
                  ) : (
                    <input type="checkbox" />
                  )}
                  {selectedTimezone === "UTC-0"
                    ? addTimes(time.time1, "00:00")
                    : addTimes(time.time1, "05:30")}
                </div>
              ))}
            </div>
          </ul>
          {/* Wed */}
          <ul className="d-flex days border">
            <div className=" p-3 border">
              <li className="text-danger list-unstyled">Wed</li>
              <p>
                {jsonData[jsonDataIndex + 2] !== undefined &&
                  jsonData[jsonDataIndex + 2].Date}
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2 border border-secondary p-4 w-100">
              {timeArr.map((time, i) => (
                <div key={i}>
                  {jsonData[jsonDataIndex + 2] !== undefined &&
                  jsonData[jsonDataIndex + 2].Time === time.time1 ? (
                    <input type="checkbox" checked />
                  ) : (
                    <input type="checkbox" />
                  )}
                  {selectedTimezone === "UTC-0"
                    ? addTimes(time.time1, "00:00")
                    : addTimes(time.time1, "05:30")}
                </div>
              ))}
            </div>
          </ul>
          {/* Thu */}
          <ul className="d-flex days border">
            <div className=" p-3 border">
              <li className="text-danger list-unstyled">Thu</li>
              <p>
                {jsonData[jsonDataIndex + 3] !== undefined &&
                  jsonData[jsonDataIndex + 3].Date}
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2 border border-secondary p-4 w-100">
              {timeArr.map((time, i) => (
                <div key={i}>
                  {jsonData[jsonDataIndex + 3] !== undefined &&
                  jsonData[jsonDataIndex + 3].Time === time.time1 ? (
                    <input type="checkbox" checked />
                  ) : (
                    <input type="checkbox" />
                  )}
                  {selectedTimezone === "UTC-0"
                    ? addTimes(time.time1, "00:00")
                    : addTimes(time.time1, "05:30")}
                </div>
              ))}
            </div>
          </ul>
          {/* Fri*/}
          <ul className="d-flex days border">
            <div className=" p-3 border">
              <li className="text-danger list-unstyled">Fri</li>
              <p>
                {jsonData[jsonDataIndex + 4] !== undefined &&
                  jsonData[jsonDataIndex + 4].Date}
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2 border border-secondary p-4 w-100">
              {timeArr.map((time, i) => (
                <div key={i}>
                  {jsonData[jsonDataIndex + 4] !== undefined &&
                  jsonData[jsonDataIndex + 4].Time === time.time1 ? (
                    <input type="checkbox" checked />
                  ) : (
                    <input type="checkbox" />
                  )}
                  {selectedTimezone === "UTC-0"
                    ? addTimes(time.time1, "00:00")
                    : addTimes(time.time1, "05:30")}
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;

