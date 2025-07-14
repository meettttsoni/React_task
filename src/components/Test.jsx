import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// function Test() {
//   const [arr, setArr] = useState([
//     { product: "Laptop", price: 10000 },
//     { product: "Mobile", price: 30000 },
//     { product: "Headphones", price: 40000 },
//     { product: "Smartwatch", price: 20000 },
//     { product: "Camera", price: 60000 },
//   ]);

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4 text-center">Product List</h2>
//       <ul className="list-group">
//         {arr.map((item, index) => (
//           <li
//             key={index}
//             className="list-group-item d-flex justify-content-between align-items-center"
//           >
//             <div>
//               <strong>Product:</strong> {item.product}
//             </div>
//             <span className="badge bg-success rounded-pill">₹{item.price}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




// 1 : function Test() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(prev => !prev);
//   };

//   return (
//     <div style={{ 
//       maxWidth: '600px', 
//       margin: '40px auto', 
//       padding: '20px', 
//       border: '1px solid #999', 
//       borderRadius: '8px' 
//     }}>
//       <h3 style={{ cursor: 'pointer' }} onClick={toggle}>
//         What is your name?
//       </h3>
//       {isOpen && (
//         <p style={{ marginTop: '10px' }}>
//          My name is Lakhan
//         </p>
//       )}
//     </div>
//   );
// }




// 2 : const faqData = [
//   {
//     id: 1,
//     question: "What is React?",
//     answer: "React is a JavaScript library for building user interfaces.",
//   },
//   {
//     id: 2,
//     question: "What is a component?",
//     answer: "Components are the building blocks of a React application's UI.",
//   },
//   {
//     id: 3,
//     question: "What is useState?",
//     answer: "useState is a React Hook that lets you add state to functional components.",
//   },
// ];

// function Test() {
//   const [openId, setOpenId] = useState(null);

//   const toggle = (id) => {
//     setOpenId(prevId => (prevId === id ? null : id));
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '50px auto' }}>
//       <h2> FAQ</h2>
//       {faqData.map((faq) => (
//         <div key={faq.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
//           <h4
//             style={{ cursor: 'pointer' }}
//             onClick={() => toggle(faq.id)}
//           >
//             {faq.question} {openId === faq.id }
//           </h4>
//           {openId === faq.id && (
//             <p style={{ marginTop: '8px' }}>{faq.answer}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }





// 3 : function Test() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleLoginLogout = () => {
//     if (isLoggedIn) {
//       setIsLoggedIn(false);
//       setMessage('You have logged out.');
//     } else {
//       setIsLoggedIn(true);
//       setMessage('Welcome to login!');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <button onClick={handleLoginLogout} style={{ padding: '10px 20px', fontSize: '16px' }}>
//         {isLoggedIn ? 'Logout' : 'Login'}
//       </button>
//       <p style={{ marginTop: '20px', fontSize: '18px' }}>{message}</p>
//     </div>
//   );
// }


//   function Test() {
//   const [password, setPassword] = useState('');
//   const [show, setShow] = useState(false);

//   const toggleShow = () => {
//     setShow(prev => !prev);
//   };

//   return (
//     <div style={{
//       maxWidth: '400px',
//       margin: '100px auto',
//       padding: '20px',
//       border: '1px solid #ccc',
//       borderRadius: '10px',
//       textAlign: 'center',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <h2>Login</h2>

//       <div style={{ marginBottom: '15px' }}>
//         <input
//           type={show ? 'text' : 'password'}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password"
//           style={{
//             padding: '10px',
//             width: '80%',
//             fontSize: '16px',
//             borderRadius: '5px',
//             border: '1px solid #aaa'
//           }}
//         />
//       </div>

//       <button
//         onClick={toggleShow}
//         style={{
//           padding: '8px 16px',
//           fontSize: '14px',
//           cursor: 'pointer',
//           backgroundColor: '#007bff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px'
//         }}
//       >
//         {show ? 'Hide Password' : 'Show Password'}
//       </button>
//     </div>
//   );
// }





// export default Test;
