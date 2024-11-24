import React, { useState } from "react";
import PageTemplate from '../components/templateSignIn';
// import { auth } from "../config/firebase";
// import { createUserWithEmailAndPassword} from "firebase/auth";

const SignInPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  
//   const signIn = async (params) => {
//     try{
//         await createUserWithEmailAndPassword(auth, email, password);
    
//     } catch (err){
//         console.log(err);
//     }
//   }
  return (
    <PageTemplate/>
  );
};
export default SignInPage;