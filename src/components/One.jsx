//של ציפי 
// import "./One.css"
// import star from '../assets/Star 8.svg';
// import eye from '../assets/Icons set.svg';
// import set4 from '../assets/Icons set (4).svg'
// import set3 from '../assets/Icons set (3).svg'
// import set2 from '../assets/Icons set (2).svg'

// const One = ({item}) => {

//     function aaa(){
//         //לגרום לפיתחה של הside עם הפרטים של item
//         //האם לשלוח בפורפס או לשמור את זה כuser נוכחי שנבחר לתצוה
//         //ואז השאלה איך מתמודדים עם זה שזה לא כל פעם User אחד?????
//     }
//     return (<>
// <div id="contacts-type"></div>
//         <frame id="frame-72">
//             <frame id="frame-69">

//                 <img src={eye} id='eye' onClick={aaa}/>
//                 <div id='div-stars'>
//                     <img src={star} id='star' />
//                 </div>

//             </frame>
//             <frame id="frame-68">
//                 <frame id="frame-67">
//                     <img src={set4} id='set4' />
//                     <img src={set3} id='set3' />
//                     <img src={set2} id='set2' />
//                 </frame>
//             </frame>
//             <frame id="frame-159">
//                 <h1 id="Manager">{item.first_name}</h1>
//             </frame>
//         </frame>

//     </>);
// }

// export default One;

















//מציג את הפרטים בלחיצה על העין +
// import "./One.css";
// import star from '../assets/Star 8.svg';
// import eye from '../assets/Icons set.svg';
// import set4 from '../assets/Icons set (4).svg';
// import set3 from '../assets/Icons set (3).svg';
// import set2 from '../assets/Icons set (2).svg';

// const One = ({ item, onClick }) => {

//   return (
//     <>
//       <div id="contacts-type"></div>
//       <frame id="frame-72">
//         <frame id="frame-69">

//           {/* תיבת התמונה עם אירוע לחיצה */}
//           <img
//             src={eye}
//             id="eye"
//             onClick={onClick} // מפעילים את הפונקציה שנשלחת מהקומפוננטה List
//             alt="View details"
//             style={{ cursor: "pointer", width: "24px", height: "24px" }}
//           />

//           <div id='div-stars'>
//             <img src={star} id='star' />
//           </div>

//         </frame>
//         <frame id="frame-68">
//           <frame id="frame-67">
//             <img src={set4} id='set4' />
//             <img src={set3} id='set3' />
//             <img src={set2} id='set2' />
//           </frame>
//         </frame>
//         <frame id="frame-159">
//           <h1 id="Manager">{item.first_name}</h1>
//         </frame>
//       </frame>
//     </>
//   );
// };

// export default One;









//שעה 20:00

// import "./One.css";
// import star from '../assets/Star 8.svg';
// import eye from '../assets/Icons set.svg';
// import set4 from '../assets/Icons set (4).svg';
// import set3 from '../assets/Icons set (3).svg';
// import set2 from '../assets/Icons set (2).svg';

// const One = ({ item, onClick }) => {
//   return (
//     <>
//       <td>Contractor</td>
//       <td>{item.first_name} {item.last_name}</td>
//       <td>Manager</td>
//       <td className="contact-details">
//         <img src={set4} className='contact-icon' alt="User" />
//         <img src={set3} className='contact-icon' alt="Phone" />
//         <img src={set2} className='contact-icon' alt="Email" />
//       </td>
//       <td className="main-contact">
//         <img src={star} className='star-icon' alt="Main Contact" />
//       </td>
//       <td className="actions">
//         <img 
//           src={eye} 
//           className='eye-icon' 
//           alt="View details" 
//           onClick={() => onClick(item)} 
//           style={{ cursor: "pointer" }}
//         />
//       </td>
//     </>
//   );
// };

// export default One;

//21;00
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import "./One.css";
// import star from '../assets/Star 8.svg';
// import eye from '../assets/Icons set.svg';
// import set4 from '../assets/Icons set (4).svg';
// import set3 from '../assets/Icons set (3).svg';
// import set2 from '../assets/Icons set (2).svg';

// const One = ({ item, onClick, onActiveChange }) => {
//   const [rating, setRating] = React.useState(item.mainContactRating || 1); // ערך ברירת מחדל לשדה הדירוג

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
//       <td>Contractor</td>
//       <td>{item.first_name} {item.last_name}</td>
//       <td>Manager</td>
//       <td className="contact-details">
//         <img src={set4} className='contact-icon' alt="User" />
//         <img src={set3} className='contact-icon' alt="Phone" />
//         <img src={set2} className='contact-icon' alt="Email" />
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
//         <img 
//           src={eye} 
//           className='eye-icon' 
//           alt="View details" 
//           onClick={() => onClick(item)} 
//           style={{ cursor: "pointer" }}
//         />
//       </td>
//     </>
//   );
// };

// export default One;
//אייקונים שחורים





///15:00
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import "./One.css";
// import star from '../assets/Star 8.svg';
// import eye from '../assets/Icons set.svg';
// import { EmailOutlined as EmailIcon, PhoneOutlined as PhoneIcon, AccountCircleOutlined as AccountCircleIcon, VisibilityOutlined as VisibilityIcon } from '@mui/icons-material'; // אייקונים עם Outlined

// const One = ({ item, onClick, onActiveChange }) => {
//   const [rating, setRating] = React.useState(item.mainContactRating || 1); // ערך ברירת מחדל לשדה הדירוג

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
//       <td>Contractor</td>
//       <td>{item.first_name} {item.last_name}</td>
//       <td>Manager</td>
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
//         <VisibilityIcon 
//           className='eye-icon' 
//           alt="View details" 
//           onClick={() => onClick(item)} 
//           style={{ cursor: "pointer" }} 
//         />
//       </td>
//     </>
//   );
// };

// export default One;
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';  // הוספת ה-Avatar
import "./One.css";
import star from '../assets/Star 8.svg';
import eye from '../assets/Icons set.svg';
import { EmailOutlined as EmailIcon, PhoneOutlined as PhoneIcon, AccountCircleOutlined as AccountCircleIcon, VisibilityOutlined as VisibilityIcon } from '@mui/icons-material'; // אייקונים עם Outlined

const One = ({ item, onClick, onActiveChange }) => {
  const [rating, setRating] = React.useState(item.mainContactRating || 1); // ערך ברירת מחדל לשדה הדירוג

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
  Contractor
</td>
      <td>{item.first_name} {item.last_name}</td>
      <td>Manager</td>
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
        <img 
          src={star} 
          className='star-icon' 
          alt="Active Status"
          onClick={handleActiveClick} 
          style={{ cursor: "pointer", opacity: item.isActive ? 1 : 0.5 }} // שינויים לפי אם מדובר ב-"Active"
        />
      </td>
      <td className="actions">
        <VisibilityIcon 
          className='eye-icon' 
          alt="View details" 
          onClick={() => onClick(item)} 
          style={{ cursor: "pointer" }} 
        />
      </td>
    </>
  );
};

export default One;
