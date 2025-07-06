import './App.css';
import WeatherApp from './WeatherApp';

function App() {
  let handleClick = () => {
    console.log("button was clicked");
  }
  return (
    <>
      <WeatherApp></WeatherApp>
    </>
  )
}

export default App
