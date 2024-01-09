import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import DeleteUser from "./DeleteAllUser";
import { apiUserList } from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Redux/Slice/UserSlice";
import DeleteIcon from "@mui/icons-material/Delete";

const UserDetails = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state?.user);

  const userListFunc = async () => {
    try {
      dispatch(userActions.userList());

      const res = await apiUserList();

      if (res) {
        dispatch(userActions.userListSuccess(res));
      } else {
        dispatch(userActions.userListFailed(res));
      }
    } catch (error) {
      dispatch(userActions.userListFailed(error));
      console.log(error);
    }
  };

  useEffect(() => {
    userListFunc();
    // eslint-disable-next-line
  }, []);

  const handleAddNewUser = () => {
    // const res = fakeUserData();
    // if (res) {
    //   dispatch(userActions.addUser(res));
    // }
  };

  const handleDeleteUser = (i) => {
    // dispatch(userActions.removeUser(i));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "40px",
          fontWeight: 800,
          marginTop: "20px",
        }}
      >
        List of User Details
      </div>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            marginTop: "20px",
            cursor: "pointer",
          }}
          onClick={() => handleAddNewUser()}
        >
          {" "}
          Add New User
        </Button>
      </Box>

      <hr />

      <div style={{ padding: "40px" }}>
        {userData?.list?.length > 0 ? (
          <>
            {userData?.list?.map((val, i) => (
              <>
                <Box sx={{ display: "flex" }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>{i + 1}.</span>
                    <span>{val?.name}</span>
                    <span>{val?.email}</span>
                    <span>{val?.company?.name}</span>
                  </div>
                  <DeleteIcon
                    sx={{ marginLeft: "50px" }}
                    onClick={() => handleDeleteUser(i)}
                  />
                </Box>
              </>
            ))}
          </>
        ) : (
          <span>No Data</span>
        )}
      </div>

      <hr />

      <DeleteUser />
    </>
  );
};

export default UserDetails;
