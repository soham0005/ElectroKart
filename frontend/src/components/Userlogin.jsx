// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// // import '../styles/logins.css';

// const UserLogin = () => {
//   const [isRegistering, setIsRegistering] = useState(true); 
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = (event) => {
//     event.preventDefault();

//     axios.post('http://localhost:3001/register', { name, email, password })
//       .then(result => {
//         if (result.data === "Already registered") {
//           alert("E-mail already registered! Please Login to proceed.");
//           setIsRegistering(false);
//         } else {
//           alert("Registered successfully! Please Login to proceed.");
//           setIsRegistering(false);
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();

//     axios.post('http://localhost:3001/login', { email, password })
//       .then(result => {
//         if (result.data === "Invalid credentials") {
//           alert("Invalid email or password! Please try again.");
//         } else {
//           alert("Logged in successfully!");
//           navigate('/product');
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <>
      
//       <div className="login-form">
//         <div className="card" id="User-login">
//           <h2>{isRegistering ? 'User-Register' : 'User-Login'}</h2>
//           <form onSubmit={isRegistering ? handleRegister : handleLogin}>
//             {isRegistering && (
//               <div className="form-group">
//                 <label htmlFor="exampleInputname">Name</label>
//                 <input 
//                   type="text" 
//                   id="exampleInputname" 
//                   className="form-control" 
//                   placeholder="Enter Name" 
//                   value={name} 
//                   onChange={(e) => setName(e.target.value)} 
//                   required 
//                 />
//               </div>
//             )}
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email Id</label>
//               <input 
//                 type="email" 
//                 id="exampleInputEmail1" 
//                 className="form-control" 
//                 placeholder="Enter Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputPassword1">Password</label>
//               <input 
//                 type="password" 
//                 id="exampleInputPassword1" 
//                 className="form-control" 
//                 placeholder="Enter Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//               />
//             </div>
//             <button type="submit" className="btn">{isRegistering ? 'Register' : 'Login'}</button>
//           </form>

//           <p className="container my-2">
//             {isRegistering ? 'Already have an account?' : 'Don’t have an account?'}
//           </p>
//           <button 
//             onClick={() => setIsRegistering(!isRegistering)} 
//             className="btn btn-secondary"
//           >
//             {isRegistering ? 'Login' : 'Register'}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserLogin;
