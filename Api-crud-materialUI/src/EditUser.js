import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser({users, setUsers}) {
    const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userToEdit = users.find((user) => user.id === parseInt(id));
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [id, users]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    setUsers(updatedUsers);
    navigate('/');
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Edit Users</h1>

            <Box
             sx={{ justifyContent: 'flex-start', m: 2 }}>
              <div>
              <TextField
                label="Name"
                name="name"
                value={user.name}
                  onChange={handleInputChange}
                sx={{ my: 2,width:"500px" }}
              />
              </div>
              
              <div>
              <TextField
                label="Email"
                name="email"
                value={user.email}
                  onChange={handleInputChange}
                sx={{ my: 2,width:"500px" }}
              />
              </div>
              
              <div>
                <Button  onClick={handleUpdate} style={{ width: "100px", marginTop: "20px" }} variant="contained" size="medium">UPDATE</Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser
