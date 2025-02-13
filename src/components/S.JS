import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addArrUserToState } from "../app/userSlice";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const StyledAccordion = styled(Accordion)(({ theme }) => ({
  '& .MuiAccordionSummary-root': {
    backgroundColor: '#f0f0f5', // Light gray background for summary
  },
  border: `1px solid #e0e0e0`, // Add border to Accordion
  marginBottom: theme.spacing(1), // Add spacing between Accordions
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ContactForm() {
  // ... (rest of the code is the same as the previous response)

  return (
    <Box sx={{ flexGrow: 1, p: 4, bgcolor: '#f5f5f5' }}> {/* Page background color */}
      <Paper elevation={3} sx={{ padding: 4 }}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
          <Grid container spacing={2}>
            {/* ... (First Name, Last Name, Role, Contact Type, Language -  inside Grid.item) */}

            <Grid item xs={12}>
              <StyledAccordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h6">Contact Details</Typography> {/* Heading style */}
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    {/* Phones */}
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6">Phones</Typography> {/* Heading style */}
                      {phoneFields.map((field, index) => (
                        <Grid container key={field.id} spacing={2} alignItems="center" sx={{ mb: 1 }}> {/* Add margin bottom */}
                          <Grid item xs={6}>
                            <FormControl fullWidth>
                              <InputLabel>Contact Type</InputLabel>
                              <Select
                                {...register(`contact_details.phone.${index}.contact_type`)}
                                defaultValue={field.contact_type}
                                label="Contact Type"
                              >
                                {contactTypes.map(type => (
                                  <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={5}> {/* Adjust width for text field */}
                            <TextField
                              {...register(`contact_details.phone.${index}.value`, {
                                required: "Phone number is required",
                                pattern: {
                                  value: /^[0-9]{10}$/,
                                  message: "Phone number must be exactly 10 digits"
                                }
                              })}
                              label="Phone"
                              fullWidth
                              error={!!errors.contact_details?.phone?.[index]?.value}
                              helperText={errors.contact_details?.phone?.[index]?.value?.message}
                            />
                          </Grid>
                          <Grid item xs={1}> {/* For delete button */}
                            {phones.length > 1 && (
                              <IconButton onClick={() => removePhone(index)} aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                            )}
                          </Grid>
                        </Grid>
                      ))}
                      <Button variant="outlined" onClick={() => addPhone({ value: "", contact_type: "WORK" })}>+ add</Button>
                    </Grid>

                    {/* Emails */}
                    {/* ... (Similar structure as Phones with Delete IconButtons) */}
                  </Grid>
                </AccordionDetails>
              </StyledAccordion>
            </Grid>

            {/* ... (Billing Information, Mailing Address - Similar structure with styled Accordions and Grid) */}


            <Grid item xs={12}>
              <Button type="submit" variant="contained">Save</Button>
              <Button type="button" variant="outlined" onClick={handleCancel} sx={{ ml: 2 }}>Cancel</Button>
              <Button type="button" variant="text" sx={{ ml: 2 }}> &lt; 3/17 &gt; </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}