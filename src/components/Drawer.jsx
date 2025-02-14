
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Stack, Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from './ContactForm';

export default function FormAdd({ selectedContact, setSelectedContact }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [avatar, setAvatar] = React.useState("../assets/Avatar.svg");

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
        if (!open) setSelectedContact(null); // Reset contact on close
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
                <Button
                    onClick={() => toggleDrawer(true)}
                    variant="contained"
                    color="primary"
                    sx={{ padding: '8px 16px', fontSize: '16px' }}
                >
                    New Contact
                </Button>
            </Box>

            <Drawer PaperProps={{ sx: { width: '399px' } }}
                anchor="right"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}>

                <IconButton
                    onClick={() => toggleDrawer(false)}
                    sx={{ position: 'absolute', top: 10, right: 10 }}
                >
                    <CloseIcon />
                </IconButton>

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <input
                        type="file"
                        accept="image/*"
                        id="avatar-upload"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                    <label htmlFor="avatar-upload">
                        <Avatar
                            src={avatar}
                            sx={{ width: 104, height: 104, cursor: 'pointer' }}
                        />
                    </label>
                </Box>

                <ContactForm
                    isEditMode={!!selectedContact}
                    contactData={selectedContact}
                    onClose={() => toggleDrawer(false)}
                />
            </Drawer>
        </div>
    );
}
