import React, { useState } from "react";
import { Popover, IconButton, Box, Typography, MenuItem, Select, Switch, Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux"; // אם אתה משתמש ב-Redux
import { updateFilteredContacts } from "../app/userSlice"; // הפונקציה שתעדכן את המידע ב-Redux

const CustomFilterMenu = ({ contacts }) => {
  const dispatch = useDispatch(); // חיבור ל-Redux
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
    const filteredContacts = contacts.filter(contact => {
      // סינון לפי contactType
      const matchesContactType = filters.contactType === "All" || contact.contact_type === filters.contactType;
      
      // סינון לפי TAG
      const matchesTag = filters.tags === "All" || contact.TAG === filters.tags;
      
      // סינון לפי status (אם active בחרו)
      const matchesStatus = filters.active === "All" || (filters.active === "Yes" ? contact.isActive : !contact.isActive);
      
      // סינון לפי Main Contact (אם יש צורך)
      const matchesMainContact = !filters.mainContact || contact.isActive; // מניח ש mainContact קשור ל-active

      return matchesContactType && matchesTag && matchesStatus && matchesMainContact;
    });

    // עדכון המידע ב-Redux או שליחת המידע המסונן
    dispatch(updateFilteredContacts(filteredContacts)); // עדכון ב-RRedux
    handleClose();
  };

  const handleClearAll = () => {
    setFilters({
      contactType: "All",
      tags: "All",
      active: "All",
      mainContact: false,
    });
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

          <Box display="flex" justifyContent="flex-start" mt={1}> {/* Align to right */}
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
