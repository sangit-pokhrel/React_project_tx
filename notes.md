1. what is react?   
=> React is a javascript library which is a client side application used to build fast and interactive user  interfaces for web applications.


function Parent() {
  const showMessage = (msg) => alert(msg);
  return <Child send={showMessage} />;
}

function Child({ send }) {
  return <button onClick={() => send("Hello Parent!")}>Click</button>;
}

Props are read-only

Props flow one-way (Parent → Child)

Props help reuse components

Props make components dynamic

Props cannot be modified (use state instead)




import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h2>User ID: {id}</h2>;
}

export default User;

