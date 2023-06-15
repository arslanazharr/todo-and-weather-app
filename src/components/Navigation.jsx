import { NavLink } from "react-router-dom";

const Navigation = () => {
  const style = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <>
      <div className="flex justify-center space-x-3 text-3xl mt-6">
        <NavLink to="/TodoApp" style={style}>
          <h3>To-do App</h3>
        </NavLink>
        <NavLink to="/WeatherApp" style={style}>
          <h3>Weather App</h3>
        </NavLink>
      </div>
    </>
  );
};

export default Navigation;
