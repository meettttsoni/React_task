import React, { useRef,useState } from 'react'

export default function Formvali() {
    const nameref=useRef(null)
    const emailref=useRef(null)
    const passref=useRef(null)
    const cpassref=useRef(null)
    const pref=useRef(null)
    
    const [errorMsg,error] = useState('');
    function handle(e){
      e.preventDefault();

      const name=nameref.current.value;
      const email=emailref.current.value;
      const password=passref.current.value;
      const cpass=cpassref.current.value;

      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email)) {
            error("Please enter a valid email address.");
            return;
        }
        if (password !== cpass) {
         error("Passwords do not match.");
          return;
      }
     error("Form submitted successfully!");
     
    }
  return (
    <div>
        <form onSubmit={handle}>
        Name: <input type="text" ref={nameref}/><br />
     Email: <input type="email" ref={emailref}/><br />
     Password: <input type="text" ref={passref}/><br />
     Confirm Password: <input type="text" ref={cpassref} /><br />
     <input type="submit" />
        </form>
        <p ref={pref}>{errorMsg}</p>

    
    </div>
  )
}










