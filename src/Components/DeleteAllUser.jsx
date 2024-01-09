import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { userActions } from "../Redux/Slice/UserSlice";

const DeleteAllUser = () => {

    const dispatch = useDispatch();

    const deleteUsers = () => {
      dispatch(userActions.clearAllUsers());
    }
     
  

  return (
    <div>
      <Button variant="contained" onClick={deleteUsers}>Delete All User </Button>

    </div>
  )
}

export default DeleteAllUser