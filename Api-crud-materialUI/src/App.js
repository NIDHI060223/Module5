import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AddUser from './AddUser';
import { useState, useEffect } from 'react';
import EditUser from './EditUser';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home users={users} setUsers={setUsers} />} />
          <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/edit-user/:id" element={<EditUser users={users} setUsers={setUsers} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
