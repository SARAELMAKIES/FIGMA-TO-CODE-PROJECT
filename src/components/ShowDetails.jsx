
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { OneDetails } from "./OneDetails.jsx";
import { VisibilityOutlined as VisibilityIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { updateCurrentContact } from "../app/userSlice.js";

export default function ShowDetails({ item }) {
    const [state, setState] = React.useState({ right: false });
    const dispatch = useDispatch();

    const openDrawer = () => {
        dispatch(updateCurrentContact(item));
        setState({ right: true });
    };

    const closeDrawer = () => {
        setState({ right: false });
    };

    return (
        <div>
            <Button onClick={openDrawer}>
                <VisibilityIcon style={{ cursor: "pointer" }} />
            </Button>

            <Drawer
                PaperProps={{ sx: { width: "377px" } }}
                anchor="right"
                open={state.right}
                onClose={closeDrawer}
            >
                <IconButton
                    onClick={closeDrawer}
                    sx={{ position: "absolute", top: 10, right: 10 }}
                >
                    <CloseIcon />
                </IconButton>

                <Box sx={{ pt: 12, pb: 4 }}>
                    <OneDetails />
                </Box>
            </Drawer>
        </div>
    );
}
