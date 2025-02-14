
import { Card, CardContent, Avatar, Typography, IconButton, Divider, Grid, TextField, Button } from "@mui/material";
import { Email, Phone, Edit, Star, Work, LocationOn, Receipt, LocalAtm, Save } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateCurrentContact } from "../app/userSlice";

export const OneDetails = () => {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.user.currentContact);
    // const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState(current || {});

    if (!current) return <Typography>Choose a contact to display</Typography>;

    const handleEditClick = () => {
        setEditedContact(current);
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        dispatch(updateCurrentContact(editedContact));
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    };

    return (
        <Card sx={{ maxWidth: 400, p: 2, borderRadius: 3, boxShadow: 3, position: "relative" }}>
            <IconButton size="small" sx={{ position: "absolute", top: 10, right: 10 }} onClick={handleEditClick}>
                <Edit />
                
            </IconButton>
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                        <Avatar src={current?.image} sx={{ width: 70, height: 70 }} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h6">{current?.first_name} {current?.last_name}</Typography>
                        <Typography variant="body2" color="textSecondary">{current?.title}</Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Grid container alignItems="center" spacing={1}>
                    <Grid item><Work fontSize="small" /></Grid>
                    <Grid item><Typography variant="body2">{current?.contact_type}</Typography></Grid>
                </Grid>

                <Grid container alignItems="center" spacing={1} mt={1}>
                    <Grid item><LocationOn fontSize="small" /></Grid>
                    <Grid item><Typography variant="body2">{current?.address}</Typography></Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Grid container alignItems="center" spacing={1}>
                    <Grid item><Phone fontSize="small" /></Grid>
                    <Grid item>
                        <Typography variant="body2" color="primary">{current?.contact_details.phone}</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton size="small"><Phone /></IconButton>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={1} mt={1}>
                    <Grid item><Email fontSize="small" /></Grid>
                    <Grid item>
                        <Typography variant="body2" color="primary">{current?.contact_details.email}</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton size="small"><Email /></IconButton>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Grid container alignItems="center" spacing={1}>
                    <Grid item><Receipt fontSize="small" /></Grid>
                    <Grid item><Typography variant="body2">Invoice: {current?.invoice_number}</Typography></Grid>
                </Grid>

                <Grid container alignItems="center" spacing={1} mt={1}>
                    <Grid item><LocalAtm fontSize="small" /></Grid>
                    <Grid item><Typography variant="body2">VAT: {current?.vat_number}</Typography></Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        {current?.isActive && (
                            <>
                                <IconButton size="small"><Star /></IconButton>
                                <Typography variant="body2">MAIN CONTACT</Typography>
                            </>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};



