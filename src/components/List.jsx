
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import One from "./One";
import { updateUserActiveStatus } from "../app/userSlice";
import { TextField, IconButton, Box, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import CustomFilterMenu from './CustomFilterMenu';

const List = () => {
  let users = useSelector((state) => state.user.arr) || [];
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (users.length > 0) {
      const result = users.filter(
        (u) =>
          u.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.last_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(result);
    }
  }, [searchQuery, users]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // const handleUserClick = (user) => {
  //   setSelectedUser(user);
  // };

  // עדכון מצב Active
  const handleActiveChange = (userId, newIsActive) => {
    dispatch(updateUserActiveStatus({ userId, newIsActive }));
  };

  return (
    <>
      <Box display="flex" alignItems="center" mb={2} justifyContent="flex-start" sx={{ ml: 6 }}>
        <TextField
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="search by name"
          variant="outlined"
          sx={{ width: "180px", mr: 1 }}
        />
        <CustomFilterMenu setFilteredUsers={setFilteredUsers} />
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Contact Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Contact Details</TableCell>
            <TableCell>Active Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((item, index) => (
            <TableRow key={index}>
              <One
                item={item}
                //  onClick={handleUserClick} 
                onActiveChange={handleActiveChange}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>




    </>
  );
};

export default List;