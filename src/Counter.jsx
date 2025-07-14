// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   const reset = () => setCount(0);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment} style={btnStyle}>+ Increment</button>
//       <button onClick={decrement} style={btnStyle}>- Decrement</button>
//       <button onClick={reset} style={{ ...btnStyle, backgroundColor: '#888' }}>Reset</button>
//     </div>
//   );
// };

// const btnStyle = {
//   margin: '10px',
//   padding: '10px 20px',
//   fontSize: '16px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer'
// };

// export default Counter;


// class components

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Counter: {count}</h1>
        <div>
          <button onClick={increment} style={{ ...btnStyle, backgroundColor: '#4CAF50' }}>
            + Increment
          </button>
          <button onClick={decrement} style={{ ...btnStyle, backgroundColor: '#f44336' }}>
            - Decrement
          </button>
          <button onClick={reset} style={{ ...btnStyle, backgroundColor: '#607d8b' }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f2f5',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '36px',
  marginBottom: '30px',
  color: '#333',
};

const btnStyle = {
  margin: '10px',
  padding: '12px 24px',
  fontSize: '16px',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

// Optional: Add hover effect with CSS-in-JS (not directly possible with inline styles)
// If you want hover animations, better to use external CSS or styled-components.

export default Counter;






