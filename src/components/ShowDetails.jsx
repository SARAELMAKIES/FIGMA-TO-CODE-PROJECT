import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IconButton, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // אייקון סגירה
import { OneDetails } from './OneDetails.jsx';
import { VisibilityOutlined as VisibilityIcon } from '@mui/icons-material'; // אייקונים עם Outlined
import { useDispatch } from 'react-redux';
import { updateCurrentContact } from '../app/userSlice.js';

export default function ShowDetails({ item }) {
    const [state, setState] = React.useState({
        right: false,
    });
    const [openEye, setOpenEye] = React.useState(false);
    let dispatch = useDispatch();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <VisibilityIcon
                            className='eye-icon'
                            alt="View details"
                            onClick={() => {
                                setOpenEye(true);
                                console.log(item);
                                dispatch(updateCurrentContact(item));
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </Button>

                    {openEye && (
                        <Drawer
                            PaperProps={{ sx: { width: "377px" } }}
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {/* כפתור X בסגירת ה-Drawer */}
                            <IconButton
                                onClick={() => {
                                    toggleDrawer(anchor, false);
                                    setOpenEye(false);
                                }}
                                sx={{ position: 'absolute', top: 10, right: 10 }}
                            >
                                <CloseIcon />
                            </IconButton>


                            <Box sx={{ pt: 12, pb: 4 }}>
                                <OneDetails />
                            </Box>
                        </Drawer>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
// ShowDetails.jsx
// import * as React from "react";
// import { Box, Drawer, Button, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { VisibilityOutlined as VisibilityIcon, Edit as EditIcon } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { updateCurrentContact } from "../app/userSlice.js";
// import ContactForm from "./ContactForm";
// import OneDetails from "./OneDetails";

// export default function ShowDetails({ item }) {
//     const [state, setState] = React.useState({ right: false });
//     const [isEditing, setIsEditing] = React.useState(false);
//     const dispatch = useDispatch();

//     const toggleDrawer = (anchor, open, editing = false) => (event) => {
//         if (event?.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//             return;
//         }
//         if (open) {
//             dispatch(updateCurrentContact(item));
//         }
//         setIsEditing(editing);
//         setState({ ...state, [anchor]: open });
//     };

//     return (
//         <div>
//             <Button onClick={toggleDrawer("right", true, false)}>
//                 <VisibilityIcon style={{ cursor: "pointer" }} />
//             </Button>
//             <Button onClick={toggleDrawer("right", true, true)}>
//                 <EditIcon style={{ cursor: "pointer" }} />
//             </Button>
//             <Drawer PaperProps={{ sx: { width: "377px" } }} anchor="right" open={state.right} onClose={toggleDrawer("right", false)}>
//                 <IconButton onClick={toggleDrawer("right", false)} sx={{ position: "absolute", top: 10, right: 10 }}>
//                     <CloseIcon />
//                 </IconButton>
//                 <Box sx={{ pt: 12, pb: 4 }}>
//                     {isEditing ? <ContactForm isEditing={isEditing} /> : <OneDetails />}
//                 </Box>
//             </Drawer>
//         </div>
//     );
// }
