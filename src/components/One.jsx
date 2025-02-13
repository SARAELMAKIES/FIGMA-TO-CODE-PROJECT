import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';  // הוספת ה-Avatar
import { updateCurrentContact } from '../app/userSlice.js';
import { EmailOutlined as EmailIcon, PhoneOutlined as PhoneIcon, AccountCircleOutlined as AccountCircleIcon, VisibilityOutlined as VisibilityIcon, Star as StarIcon } from '@mui/icons-material'; // אייקונים עם Outlined
import { useDispatch, useSelector } from 'react-redux';
import FormAdd from './FormAdd.jsx';
import "./One.css";
const One = ({ item, onClick, onActiveChange }) => {
  const [rating, setRating] = React.useState(item.mainContactRating || 1);
  let dispatch = useDispatch();

  // עדכון הדירוג במקרה של שינוי
  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
    if (onRatingChange) {
      onRatingChange(item.id, newValue); // שליחת השינוי להורה
    }
  };

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
        <FormAdd item={item}></FormAdd>
      </td>
    </>
  );
};

export default One;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';  // הוספת ה-Avatar
// import "./One.css";
// // import star from '../assets/Star 8.svg';
// // import eye from '../assets/Icons set.svg';
// import { updateCurrentContact } from '../app/userSlice.js'
//import { EmailOutlined as EmailIcon, PhoneOutlined as PhoneIcon, AccountCircleOutlined as AccountCircleIcon, VisibilityOutlined as VisibilityIcon, Star as StarIcon } from '@mui/icons-material'; // אייקונים עם Outlined
// import { useDispatch, useSelector } from 'react-redux';
// import FormAdd from './FormAdd.jsx'

// const One = ({ item, onClick, onActiveChange }) => {

//   // let [change, setChange] = React.useState(false)
//   const [rating, setRating] = React.useState(item.mainContactRating || 1);
//   let dispatch = useDispatch()

//   // ערך ברירת מחדל לשדה הדירוג

//   // עדכון הדירוג במקרה של שינוי
//   const handleRatingChange = (event, newValue) => {
//     setRating(newValue);
//     if (onRatingChange) {
//       onRatingChange(item.id, newValue); // שליחת השינוי להורה
//     }
//   };

//   // עדכון מצב Active
//   const handleActiveClick = () => {
//     if (onActiveChange) {
//       onActiveChange(item.id, !item.isActive); // הפיכת הערך של isActive
//     }
//   };

//   return (
//     <>
//       <td>
//         <Avatar alt={item.first_name} src={item.avatarUrl} className="avatar-icon" />
//         {item.contact_type}
//       </td>
//       <td>{item.first_name} {item.last_name}</td>
//       <td>{item.title}</td>
//       <td className="contact-details">
//         {/* אייקון פרופיל רק ל-Contractor */}
//         {item.contactType === "Contractor" ? (
//           <AccountCircleIcon className='contact-icon' /> // אייקון פרופיל
//         ) : (
//           <>
//             <PhoneIcon className='contact-icon' /> {/* אייקון טלפון */}
//             <EmailIcon className='contact-icon' /> {/* אייקון אימייל */}
//             <AccountCircleIcon className='contact-icon' />
//           </>
//         )}
//       </td>
//       <td className="active-status">
//         {/* כוכב כמצב פעיל */}
//         <img
//           src={star}
//           className='star-icon'
//           alt="Active Status"
//           onClick={handleActiveClick}
//           style={{ cursor: "pointer", opacity: item.isActive ? 1 : 0.5 }} // שינויים לפי אם מדובר ב-"Active"
//         />
//       </td>
//       <td className="actions">
       
//         <FormAdd item={item}></FormAdd>
//       </td>
      
//     </>
//   );
// };

// export default One;
