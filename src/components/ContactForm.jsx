

import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addArrUserToState, addUserToArr } from "../app/userSlice";
import * as React from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Accordion, AccordionSummary, AccordionDetails, Divider, IconButton, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
const languages = [
  { code: "he", label: "עברית", flag: "https://flagcdn.com/w40/il.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "es", label: "Español", flag: "https://flagcdn.com/w40/es.png" },
  { code: "de", label: "Deutsch", flag: "https://flagcdn.com/w40/de.png" }
];
 export default function ContactForm({ isEditing, editedContact }) {
//   let dispatch = useDispatch();
//   const { register, control, handleSubmit, reset, watch, formState: { errors } } = useForm({export default function ContactForm({ isEditing, editedContact }) {
    let dispatch = useDispatch();
    const { register, control, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      role: "",
      contact_type: "",
      language: "",
      contact_details: {
        phone: [{ value: "", contact_type: "WORK" }],
        email: [{ value: "", contact_type: "WORK" }],
      },
      billing: {
        billing_name: "",
        invoice_number: "",
        vat_number: ""
      },
      address: "",
      message: "",
    },
  });

  const { fields: phoneFields, append: addPhone, remove: removePhone } = useFieldArray({
    control,
    name: "contact_details.phone",
  });

  const { fields: emailFields, append: addEmail, remove: removeEmail } = useFieldArray({
    control,
    name: "contact_details.email",
  });

  const phones = watch("contact_details.phone");
  const emails = watch("contact_details.email");
  const contactTypes = [
    { value: "WORK", label: "Work" },
    { value: "PRIVATE", label: "Private" },
    { value: "HOME", label: "Home" },
  ];

  // אתחול מחדש כאשר `editedContact` משתנה
  React.useEffect(() => {
    if (editedContact) {
      reset(editedContact);
    }
  }, [editedContact, reset]);

  
  const onSubmit = (data) => {
    //   data.להוסיף פה שדוץת שלא נדרשים בטופס וכן צריך להציג אותם
    data.contact_details.phone = ""
    data.contact_details.email = ""
    dispatch(addUserToArr(data));
    reset();

    dispatch(addUserToArr(data));  // הוספת הקונטקט החדש
    console.log(data);
    reset();  // איפוס הטופס לאחר שליחה
  };

  const handleCancel = () => {
    reset({
      first_name: "",
      last_name: "",
      role: "",
      contact_type: "",
      language: "",
      contact_details: {
        phone: [{ value: "", contact_type: "WORK" }],
        email: [{ value: "", contact_type: "WORK" }],
      },
      billing: {
        billing_name: "",
        invoice_number: "",
        vat_number: ""
      },
      address: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      <Typography variant="h6" mb={2}>New Contact</Typography>

      {/* שם פרטי */}
      <Box display="flex" gap={1} mb={2}>
        <TextField
          {...register("first_name", {
            required: "First name is required",
            minLength: { value: 2, message: "First name must be at least 2 characters long" }
          })}
          label="First Name"
          fullWidth
          error={!!errors.first_name}
          helperText={errors.first_name?.message}
          disabled={isEditing}
        />
        <TextField
          {...register("last_name", {
            required: "Last name is required",
            minLength: { value: 2, message: "Last name must be at least 2 characters long" }
          })}
          label="Last Name"
          fullWidth
          error={!!errors.last_name}
          helperText={errors.last_name?.message}
          disabled={isEditing}
        />
      </Box>

      {/* תפקיד */}
      <TextField
        {...register("role", { required: "Role is required" })}
        label="Role"
        fullWidth
        error={!!errors.role}
        helperText={errors.role?.message}
      
      />

      {/* סוג קשר */}
      <TextField
        {...register("contact_type", { required: "Contact Type is required" })}
        label="Contact Type"
        fullWidth
        error={!!errors.contact_type}
        helperText={errors.contact_type?.message}
        disabled={isEditing}
      />

      <InputLabel>Language</InputLabel>
      <Select {...register("language", { required: "Language is required" })}>
        {languages.map(({ code, label, flag }) => (
          <MenuItem key={code} value={code}>
            <Box display="flex" alignItems="center" gap={1}>
              <img src={flag} alt={label} width={20} height={15} />
              {label}
            </Box>
          </MenuItem>
        ))}
      </Select>

      {/* פרטי קשר */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h3>Contact Details</h3>
        </AccordionSummary>
        <AccordionDetails>
          {/* טלפונים */}
          <Box mb={2}>
            <Typography variant="subtitle1">Phones</Typography>
            {phoneFields.map((field, index) => (
              <Box display="flex" gap={1} alignItems="center" mb={1} key={field.id}>
                <TextField
                  {...register(`contact_details.phone.${index}.value`, {
                    required: "Phone number is required",
                    pattern: { value: /^[0-9]{10}$/, message: "Phone number must be exactly 10 digits" }
                  })}
                  label="Phone"
                  fullWidth
                  error={!!errors.contact_details?.phone?.[index]?.value}
                  helperText={errors.contact_details?.phone?.[index]?.value?.message}
                />
                <FormControl fullWidth>
                  <InputLabel>Contact Type</InputLabel>
                  <Select
                    {...register(`contact_details.phone.${index}.contact_type`)}
                    defaultValue={field.contact_type}
                  >
                    {contactTypes.map(type => (
                      <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <IconButton onClick={() => removePhone(index)} disabled={phoneFields.length <= 1}><DeleteIcon /></IconButton>
              </Box>
            ))}
            <Button variant="outlined" onClick={() => addPhone({ value: "", contact_type: "WORK" })}>+ Add Phone</Button>
          </Box>

          {/* מיילים */}
          <Box mb={2}>
            <Typography variant="subtitle1">Emails</Typography>
            {emailFields.map((field, index) => (
              <Box display="flex" gap={1} alignItems="center" mb={1} key={field.id}>
                <TextField
                  {...register(`contact_details.email.${index}.value`, {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }
                  })}
                  label="Email"
                  fullWidth
                  error={!!errors.contact_details?.email?.[index]?.value}
                  helperText={errors.contact_details?.email?.[index]?.value?.message}
                
                  
                />
                <FormControl fullWidth>
                  <InputLabel>Contact Type</InputLabel>
                  <Select
                    {...register(`contact_details.email.${index}.contact_type`)}
                    defaultValue={field.contact_type}
                  >
                    {contactTypes.map(type => (
                      <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <IconButton onClick={() => removeEmail(index)} disabled={emailFields.length <= 1}><DeleteIcon /></IconButton>
              </Box>
            ))}
            <Button variant="outlined" onClick={() => addEmail({ value: "", contact_type: "WORK" })}>+ Add Email</Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* פרטי חיוב */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h3>Billing Information</h3>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            {...register("billing.billing_name", { required: "Billing name is required" })}
            label="Billing Name"
            fullWidth
            error={!!errors.billing?.billing_name}
            helperText={errors.billing?.billing_name?.message}
          />
          <TextField
            {...register("billing.invoice_number", {
              required: "Invoice number is required",
              pattern: { value: /^[0-9]+$/, message: "Invoice number must be numeric" }
            })}
            label="Invoice Number"
            fullWidth
            error={!!errors.billing?.invoice_number}
            helperText={errors.billing?.invoice_number?.message}
          />
          <TextField
            {...register("billing.vat_number", {
              required: "VAT number is required",
              pattern: { value: /^[0-9]+$/, message: "VAT number must be numeric" }
            })}
            label="VAT Number"
            fullWidth
            error={!!errors.billing?.vat_number}
            helperText={errors.billing?.vat_number?.message}
          />
        </AccordionDetails>
      </Accordion>

      {/* Mailing Address */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h3>Mailing Address</h3>
        </AccordionSummary>
        <AccordionDetails>
          <TextField {...register("address")}disabled={isEditing} label="Address" fullWidth multiline rows={4} />
          <TextField {...register("message")} label="Message" fullWidth multiline rows={4} />
        </AccordionDetails>
      </Accordion>

      {/* כפתורים */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button type="button" variant="outlined" onClick={handleCancel}>Cancel</Button>
        <Button type="submit" variant="contained">Submit</Button>
      </Box>
    </form>
  );
}































  
  
 
  
  