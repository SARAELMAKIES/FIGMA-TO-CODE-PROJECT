
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Stack, Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // אייקון סגירה
import ContactForm from './ContactForm';

export default function FormAdd() {
    const [state, setState] = React.useState({
        right: false,
    });
    const [avatar, setAvatar] = React.useState("../assets/Avatar.svg");

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
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
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* כפתור New Contact בצד ימין למעלה */}
                    <Box sx={{
                        position: 'fixed',
                        top: 20,
                        right: 20,
                        zIndex: 1000
                    }}>
                        <Button
                            onClick={toggleDrawer(anchor, true)}
                            variant="contained"
                            color="primary" // צבע כחול
                            sx={{
                                padding: '8px 16px',
                                fontSize: '16px',
                                backgroundColor: '#1976d2', // כחול
                                '&:hover': { backgroundColor: '#1565c0' } // צבע כחול כהה לה-hover
                            }}
                        >
                            New Contact
                        </Button>
                    </Box>

                    {/* Drawer בצד ימין */}
                    <Drawer PaperProps={{ sx: { width: '399px' } }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}>

                        {/* כפתור X לסגירת ה-Drawer */}
                        <IconButton
                            onClick={toggleDrawer(anchor, false)}
                            sx={{ position: 'absolute', top: 10, right: 10 }}
                        >
                            <CloseIcon />
                        </IconButton>

                        {/* תמונת פרופיל עם אפשרות העלאה */}
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

                        {/* טופס יצירת קשר */}
                        <ContactForm />
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
