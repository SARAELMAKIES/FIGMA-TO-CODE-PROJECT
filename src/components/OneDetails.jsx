
import ContactForm from "./ContactForm";
import { Card, CardContent, Avatar, Typography, IconButton, Divider, Grid, Box } from "@mui/material";
import { Email, Phone, Edit, Star, Work, LocationOn, Language, Business, Home } from "@mui/icons-material";
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
                preferred_language: current.preferred_language || "",
                company: current.company || "",
                contact_details: {
                    phone: current.contact_details?.phone || "",
                    email: current.contact_details?.email || "",
                    private_email: current.contact_details?.private_email || "",
                },
                isActive: current.isActive || false,
                image: current.image || "",
                invoice_number: current.invoice_number || "",
                vat_number: current.vat_number || "",
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
                    <Typography variant="h6" gutterBottom>Contact Details</Typography>
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

                    <Typography variant="body2" fontWeight="bold">Name</Typography>
                    <Typography variant="body2">{editedContact.first_name} {editedContact.last_name}</Typography>

                    <Typography variant="body2" fontWeight="bold" mt={1}>Role</Typography>
                    <Typography variant="body2">{editedContact.title}</Typography>

                    <Typography variant="body2" fontWeight="bold" mt={1}>Contact Type</Typography>
                    <Typography variant="body2">{editedContact.contact_type}</Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" fontWeight="bold">Preferred Language</Typography>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Language fontSize="small" /></Grid>
                        <Grid item><Typography variant="body2">{editedContact.preferred_language}</Typography></Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" fontWeight="bold">Phone</Typography>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Phone fontSize="small" /></Grid>
                        <Grid item><Typography variant="body2" color="primary">{editedContact.contact_details?.phone}</Typography></Grid>
                    </Grid>

                    <Typography variant="body2" fontWeight="bold" mt={1}>Email</Typography>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Email fontSize="small" /></Grid>
                        <Grid item><Typography variant="body2" color="primary">{editedContact.contact_details?.email}</Typography></Grid>
                    </Grid>
                    {editedContact.contact_details?.private_email && (
                        <Grid container alignItems="center" spacing={1} mt={1}>
                            <Grid item><Email fontSize="small" /></Grid>
                            <Grid item><Typography variant="body2" color="primary">{editedContact.contact_details.private_email}</Typography></Grid>
                        </Grid>
                    )}

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" fontWeight="bold">Address</Typography>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Home fontSize="small" /></Grid>
                        <Grid item><Typography variant="body2">{editedContact.address}</Typography></Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />


                    <Typography variant="body2" fontWeight="bold">Accounting Ref</Typography>
                    <Typography variant="body2">{editedContact.invoice_number}</Typography>

                    {editedContact.isActive && (
                        <Box mt={2} display="flex" alignItems="center">
                            <Star fontSize="small" color="warning" />
                            <Typography variant="body2" ml={1}>Main Contact</Typography>
                        </Box>
                    )}
                </CardContent>
            )}
        </Card>
    );
};
