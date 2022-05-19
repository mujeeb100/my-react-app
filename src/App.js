import React, { useEffect, useState } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>

      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

// function App() {
//   const [count, setCount] = useState(15);

//   function decrementCount() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   function incrementCount() {
//     setCount((prevCount) => prevCount + 1);
//   }
//   return (
//     <>
//       <button onClick={decrementCount}>-</button>
//       <span>{count - 10}</span>
//       <button onClick={incrementCount}>+</button>
//     </>
//   );
// }

// export default App;
