import * as React from 'react';
import Avatar from '@mui/material/Avatar';  // הוספת ה-Avatar
import { EmailOutlined as EmailIcon, PhoneOutlined as PhoneIcon, AccountCircleOutlined as AccountCircleIcon, VisibilityOutlined as VisibilityIcon, Star as StarIcon } from '@mui/icons-material'; // אייקונים עם Outlined
import ShowDetails from './ShowDetails.jsx';
import "./One.css";
const One = ({ item, onActiveChange }) => {

  // עדכון מצב Active
  const handleActiveClick = () => {
    if (onActiveChange) {
      onActiveChange(item.id, !item.isActive); // הפיכת הערך של isActive
    }
  };

  return (
    <>
      <td>
        <Avatar alt={item.first_name} src={item.avatarUrl} className="avatar-icon" />
        {item.contact_type}
      </td>
      <td>{item.first_name} {item.last_name}</td>
      <td>{item.title}</td>
      <td className="contact-details">
        {/* אייקון פרופיל רק ל-Contractor */}
        {item.contactType === "Contractor" ? (
          <AccountCircleIcon className='contact-icon' /> // אייקון פרופיל
        ) : (
          <>
            <PhoneIcon className='contact-icon' /> {/* אייקון טלפון */}
            <EmailIcon className='contact-icon' /> {/* אייקון אימייל */}
            <AccountCircleIcon className='contact-icon' />
          </>
        )}
      </td>
      <td className="active-status">
        {/* כוכב כמצב פעיל */}
        <StarIcon
          className='star-icon'
          onClick={handleActiveClick}
          style={{ cursor: "pointer", opacity: item.isActive ? 1 : 0.5 }} // שינויים לפי אם מדובר ב-"Active"
        />
      </td>
      <td className="actions">
        <ShowDetails item={item}></ShowDetails>
      </td>
    </>
  );
};

export default One;

