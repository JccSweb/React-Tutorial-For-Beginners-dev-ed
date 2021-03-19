import React, { useState } from "react"
import Tweet from "./Tweet"

function App() {
  /*
  const sayHello = () => console.log("hello")
  */

  /*
  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0)


  const increment = () => {
    setCount(count + 1)
    setRed(!isRed)
  }
  */

  const [users, setUser] = useState([
    { name: "ed", message: "Hello there" },
    { name: "Jonh", message: "I am jonh snow" },
    { name: "traversy", message: "i am awesome" }
  ])

  return (
    /*
    <div className="app">

      
      <h1 className={isRed ? "red" : ""}>Change my Color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

    </div>

    */

    <div className="app">
      {users.map(user => {
        <Tweet name={user.name} message={user.message} />
      })}
    </div>
    /*
    
    <div className="app">
      <Tweet name="Dev-Ed" message="This is a random tweet" />
      <Tweet name="Jonh snow" message="I am the true king" />
      <Tweet name="Traversy Media" message="700k my dudes" />
      <Tweet name="Mosh" message="My new course is available" />
    </div>
    */
  );
}

export default App