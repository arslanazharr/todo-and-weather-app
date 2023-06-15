import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) {
      fetchApi();
    }
  }, []);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=16bfa98849718de13b6e8978b87d47b8`
      );
      setData(response.data);

      setTimeout(() => {
        setLoading(false);
      }, 250);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEvent = () => {
    setLoading(true);
    fetchApi();
  };

  return (
    <div className="flex text-center justify-center mt-20 ">
      <div className="shadow-2xl rounded w-auto bg-green-500 pt-3 pb-3 pl-6 pr-6">
        <h1 className="container text-2xl p-4 font-bold text-slate-100">
          Weather App
        </h1>
        <div className="container w-96  p-4">
          <div className="mb-4 flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleEvent}
            >
              Search
            </button>
          </div>
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="rounded-full h-6 w-6 border-2 border-white animate-spin">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          ) : (
            <div className="mb-4 text-slate-100">
              <h1 className="text-2xl font-semibold ">{data.name}</h1>
              <p className="text-xl">
                {((data.main?.temp - 32) * (5 / 9)).toFixed()}°C
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
