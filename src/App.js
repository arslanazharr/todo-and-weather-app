import TodoApp from "./Apps/todoApp/TodoApp";
import WeatherApp from "./Apps/weatherApp/WeatherApp";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/WeatherApp" element={<WeatherApp />} />
      </Routes>
    </>
  );
};

export default App;
