import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    // console.log(name, email);

    const user = { name, email };

    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert("User is added successfully");
          form.reset();
        }
      }); 
};

return (
  <>
    <h1>Simple CRUD</h1>
    <form onSubmit={handleAddUser}>
      <input type="text" name="name" id="name" placeholder="Enter Name" />

      <br />

      <input type="email" name="email" id="email" placeholder="Enter Email" />

      <br />

      <input type="submit" value="Add User" />
    </form>
    <br />
    <Link to="/users"><button>Go to Added Users</button></Link>
  </>
)
}

export default App
