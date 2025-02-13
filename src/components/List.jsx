
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import One from "./One";
import { updateUserActiveStatus } from "../app/userSlice";
import { TextField, IconButton, Box, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt"; // אייקון פילטר חדש - מסננת רחבה למעלה וצרה למטה


const List = () => {
  let users = useSelector((state) => state.user.arr) || [];
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (users.length > 0) {
      const result = users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(result);
    }
  }, [searchQuery, users]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // עדכון מצב Active
  const handleActiveChange = (userId, newIsActive) => {
    dispatch(updateUserActiveStatus({ userId, newIsActive }));
  };

  return (
    <>
      {/* שדה חיפוש עם אייקון פילטר */}
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="חפש לפי שם"
          variant="outlined"
          sx={{ width: "180px", mr: 1 }}
        />
        <IconButton color="primary">
          <FilterAltIcon />
        </IconButton>
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
                  onClick={() => handleUserClick(item)} 
                  onActiveChange={handleActiveChange}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      

      {/* הצגת פרטי משתמש בלחיצה */}
      {selectedUser && (
        <Paper className="side-panel" sx={{ p: 2, mt: 2 }}>
          <h2>פרטי המשתמש</h2>
          <p><strong>שם:</strong> {selectedUser.first_name} ${selectedUser.last_name}</p>
          <p><strong>תפקיד:</strong> {selectedUser.title}</p>
          <p><strong>סוג קשר:</strong> {selectedUser.contact_type}</p>
          <p><strong>טלפון:</strong> {selectedUser.contact_details.phone}</p>
          <p><strong>אימייל:</strong> {selectedUser.contact_details.email}</p>
        </Paper>
      )}
    </>
  );
};

export default List;