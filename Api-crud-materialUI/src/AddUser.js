import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddUser({ users, setUsers }) {
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
   
  };

  const addUser = () => {
    const updatedUsers = [...users, { ...newUser, id: users.length + 1 }];
    setUsers(updatedUsers);
    setNewUser({ name: '', email: '' }); // Clear the form
    navigate('/');
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Add New Users</h1>

            <Box sx={{ justifyContent: 'flex-start', m: 2 }}>
              <div>
              <TextField
                label="Name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                sx={{ my: 2,width:"500px" }}
              />
              </div>
              
              <div>
              <TextField
                label="Email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                sx={{ my: 2,width:"500px" }}
              />
              </div>
              
              <div>
                <Button onClick={addUser} style={{ width: "100px", marginTop: "20px" }} variant="contained" size="medium">ADD</Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
