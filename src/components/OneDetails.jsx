// import { Card, CardContent, Avatar, Typography, IconButton, Divider, Grid } from "@mui/material";
// import { Email, Phone, Edit, Star, Work, LocationOn, Receipt, LocalAtm } from "@mui/icons-material";
// import { useSelector } from "react-redux";

// export const OneDetails = () => {
//   const current = useSelector((state) => state.user.currentContact);
//   if (!current) return <Typography>בחר איש קשר להצגה</Typography>;

//   return (
//     <Card sx={{ maxWidth: 400, p: 2, borderRadius: 3, boxShadow: 3 }}>
//       <CardContent>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={3}>
//             <Avatar src={current.image} sx={{ width: 70, height: 70 }} />
//           </Grid>
//           <Grid item xs={9}>
//             <Typography variant="h6">{current.first_name} {current.last_name}</Typography>
//             <Typography variant="body2" color="textSecondary">{current.title}</Typography>
//           </Grid>
//         </Grid>

//         <Divider sx={{ my: 2 }} />

//         <Grid container alignItems="center" spacing={1}>
//           <Grid item><Work fontSize="small" /></Grid>
//           <Grid item><Typography variant="body2">{current.contact_type}</Typography></Grid>
//         </Grid>

//         <Grid container alignItems="center" spacing={1} mt={1}>
//           <Grid item><LocationOn fontSize="small" /></Grid>
//           <Grid item><Typography variant="body2">{current.address}</Typography></Grid>
//         </Grid>

//         <Divider sx={{ my: 2 }} />

//         <Grid container alignItems="center" spacing={1}>
//           <Grid item><Phone fontSize="small" /></Grid>
//           <Grid item>
//             <Typography variant="body2" color="primary">{current.contact_details.phone}</Typography>
//           </Grid>
//           <Grid item>
//             <IconButton size="small"><Phone /></IconButton>
//           </Grid>
//         </Grid>

//         <Grid container alignItems="center" spacing={1} mt={1}>
//           <Grid item><Email fontSize="small" /></Grid>
//           <Grid item>
//             <Typography variant="body2" color="primary">{current.contact_details.email}</Typography>
//           </Grid>
//           <Grid item>
//             <IconButton size="small"><Email /></IconButton>
//           </Grid>
//         </Grid>

//         <Divider sx={{ my: 2 }} />

//         <Grid container alignItems="center" spacing={1}>
//           <Grid item><Receipt fontSize="small" /></Grid>
//           <Grid item><Typography variant="body2">Invoice: {current.invoice_number}</Typography></Grid>
//         </Grid>

//         <Grid container alignItems="center" spacing={1} mt={1}>
//           <Grid item><LocalAtm fontSize="small" /></Grid>
//           <Grid item><Typography variant="body2">VAT: {current.vat_number}</Typography></Grid>
//         </Grid>

//         <Divider sx={{ my: 2 }} />

//         <Grid container justifyContent="space-between" alignItems="center">
//           <Grid item>
//             <IconButton size="small"><Star /></IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton size="small"><Edit /></IconButton>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };
import { Card, CardContent, Avatar, Typography, IconButton, Divider, Grid } from "@mui/material";
import { Email, Phone, Edit, Star, Work, LocationOn, Receipt, LocalAtm } from "@mui/icons-material";
import { useSelector } from "react-redux";

export const OneDetails = () => {
    const current = useSelector((state) => state.user.currentContact);
    if (!current) return <Typography>choose contact to display</Typography>;

    return (
        <Card sx={{ maxWidth: 400, p: 2, borderRadius: 3, boxShadow: 3, position: "relative" }}>
            <IconButton size="small" sx={{ position: "absolute", top: 10, right: 10 }}>
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
