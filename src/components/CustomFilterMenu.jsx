
import React, { useState } from "react";
import { Popover, IconButton, Box, Typography, MenuItem, Select, Switch, Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux"; // הוספתי את useSelector לשלוף את contacts מ-Redux
import { updateFilteredContacts } from "../app/userSlice"; // הפונקציה שתעדכן את המידע ב-Redux

const CustomFilterMenu = ({ setFilteredUsers }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.user.arr); // שליפת הקונטקטים מה-Redux
  const [anchorEl, setAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    contactType: "All",
    tags: "All",
    active: "All",
    mainContact: false,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    if (!contacts || contacts.length === 0) {
      console.error("No contacts data available for filtering");
      return;
    }

    const filteredContacts = contacts.filter((contact) => {
      // מבצע סינון לפי כל התנאים יחד
      const matchesContactType = filters.contactType === "All" || contact.contact_type === filters.contactType;
      const matchesTag = filters.tags === "All" || contact.TAG === filters.tags;
      const matchesStatus = filters.active === "All" || (filters.active === "Yes" ? contact.isActive : !contact.isActive);
      const matchesMainContact = !filters.mainContact || contact.isActive; // אם mainContact True, סינון רק על פעילים

      return matchesContactType && matchesTag && matchesStatus && matchesMainContact;
    });

    console.log("Filtered Contacts:", filteredContacts); // בודק את הקונטקטים המסוננים
    setFilteredUsers(filteredContacts)
    // dispatch(updateFilteredContacts(filteredContacts)); // עדכון המידע ב-Redux
    handleClose();
  };

  const handleClearAll = () => {
    setFilters({
      contactType: "All",
      tags: "All",
      active: "All",
      mainContact: false,
    });
    setFilteredUsers(contacts)
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <FilterAltIcon />
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ p: 2, width: 250 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Filter</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box display="flex" justifyContent="flex-start" mt={1}>
            <Button
              onClick={handleClearAll}
              variant="contained"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#bdbdbd",
                color: "black",
                textTransform: "none",
                padding: "4px 8px",
                fontSize: "0.8rem",
                "&:hover": { backgroundColor: "#afafaf" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <CloseIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
              Clear all
            </Button>
          </Box>

          <Typography variant="body2" mt={2}>Contact Type</Typography>
          <Select fullWidth value={filters.contactType} onChange={(e) => setFilters({ ...filters, contactType: e.target.value })}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
          </Select>

          <Typography variant="body2" mt={2}>Tags</Typography>
          <Select fullWidth value={filters.tags} onChange={(e) => setFilters({ ...filters, tags: e.target.value })}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Customer">Customer</MenuItem>
            <MenuItem value="Vendor">Vendor</MenuItem>
            <MenuItem value="Staff">Staff</MenuItem>
            <MenuItem value="Associate">Associate</MenuItem>
            <MenuItem value="Affiliate">Affiliate</MenuItem>
          </Select>

          <Typography variant="body2" mt={2}>Active Contact</Typography>
          <Select fullWidth value={filters.active} onChange={(e) => setFilters({ ...filters, active: e.target.value })}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>

          <Typography variant="body2" mt={2}>Main Contact</Typography>
          <Switch checked={filters.mainContact} onChange={(e) => setFilters({ ...filters, mainContact: e.target.checked })} />

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export default CustomFilterMenu;
