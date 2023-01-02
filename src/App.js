import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [angle, setAngle] = useState("180deg")

  useEffect(() => {
    const mouseMoveAnimation = (event) => {
      const absolute_x = event.x;
      const absolute_y = window.innerHeight - event.y;
      const screen_x = window.innerWidth;
      const screen_y = window.innerHeight;
      const x = absolute_x - (screen_x / 2)
      const y = absolute_y - (screen_y / 2)
      const theta_prime = Math.atan(x / y) * (180 / Math.PI)
      if (x > 0 && y > 0) {
        setAngle(`${theta_prime}deg`)
      } else if (x > 0 && y < 0) {
        setAngle(`${180 + theta_prime}deg`)
      } else if (x < 0 && y < 0) {
        setAngle(`${180 + theta_prime}deg`)
      } else if (x < 0 && y > 0) {
        setAngle(`${theta_prime}deg`)
      }

    }

    const screen = document.getElementsByClassName("App")[0]
    screen.addEventListener("mousemove", mouseMoveAnimation)
  }, [])

  return (
    <div className="App">
      <div className='border-wrap' style={{ background: `linear-gradient(${angle}, red, #1d1d20` }}>
        <div className="container">
          <div className='header'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
