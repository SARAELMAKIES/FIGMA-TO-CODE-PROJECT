
import ContactForm from "./ContactForm";
import { Card, CardContent, Avatar, Typography, IconButton, Divider, Grid } from "@mui/material";
import { Email, Phone, Edit, Star, Work, LocationOn } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateCurrentContact } from "../app/userSlice";

export const OneDetails = () => {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.user.currentContact);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState({});

    useEffect(() => {
        if (current) {
            setEditedContact({
                first_name: current.first_name || "",
                last_name: current.last_name || "",
                title: current.title || "",
                contact_type: current.contact_type || "",
                address: current.address || "",
                contact_details: {
                    phone: current.contact_details?.phone || "",
                    email: current.contact_details?.email || "",
                },
                isActive: current.isActive || false,
                image: current.image || "",
            });
        }
    }, [current]);

    if (!current) return <Typography>Choose a contact to display</Typography>;

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (updatedContact) => {
        dispatch(updateCurrentContact(updatedContact));
        setIsEditing(false);
    };

    return (
        <Card sx={{ maxWidth: 500, p: 2, borderRadius: 3, boxShadow: 3, position: "relative" }}>
            <IconButton size="small" sx={{ position: "absolute", top: 10, right: 10 }} onClick={handleEditClick}>
                <Edit />
            </IconButton>

            {isEditing ? (
                <ContactForm isEditing={true} editedContact={editedContact} />
            ) : (
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={3}>
                            <Avatar src={editedContact.image} sx={{ width: 70, height: 70 }} />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6">{editedContact.first_name} {editedContact.last_name}</Typography>
                            <Typography variant="body2" color="textSecondary">{editedContact.title}</Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Work fontSize="small" /></Grid>
                        <Grid item><Typography variant="body2">{editedContact.contact_type}</Typography></Grid>
                    </Grid>

                    <Grid container alignItems="center" spacing={1} mt={1}>
                        <Grid item><LocationOn fontSize="small" /></Grid>
                        <Grid item><Typography variant="body2">{editedContact.address}</Typography></Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Phone fontSize="small" /></Grid>
                        <Grid item><Typography variant="body2" color="primary">{editedContact.contact_details?.phone}</Typography></Grid>
                    </Grid>

                    <Grid container alignItems="center" spacing={1} mt={1}>
                        <Grid item><Email fontSize="small" /></Grid>
                        <Grid item><Typography variant="body2" color="primary">{editedContact.contact_details?.email}</Typography></Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    {editedContact.isActive && (
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <IconButton size="small"><Star /></IconButton>
                                <Typography variant="body2">MAIN CONTACT</Typography>
                            </Grid>
                        </Grid>
                    )}
                </CardContent>
            )}
        </Card>
    );
};
