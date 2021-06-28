// import React, { useEffect, useState } from "react";

// const Lecturer = props => {
//   const [formState, setFormState] = useState("");

//   const handleNameChange = e => {
//     setFormState(e.target.value);
//   };

//   const resetForm = () => {
//     setFormState("");
//   };

//   useEffect(() => {
//     if (props.reset && props.activeTab) {
//       resetForm();
//     }
//   }, [props.reset, props.activeTab]);

//   const classes = ["tab-component", props.activeTab && "active"]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <div className={classes}>
//       <h4>Lecturer Tab Content</h4>
//       <form class="form">
//         <label>
//           Lecturer Input form:{" "}
//           <input
//             name="lecturer-name"
//             value={formState}
//             onChange={handleNameChange}
//           />
//         </label>
//       </form>
//     </div>
//   );
// };

// export default Lecturer;

import React, { useState } from "react";


function Input(props)  {
  const [inputState, setInputState] = useState(0);

  const handleInputChange = e => {
    setInputState(e.target.valueAsNumber);
  };

  return (
    <div>
    <p>Positive: {inputState} </p>
    <input type="number" pattern="/^[0-9\b]+$/;" onChange ={handleInputChange}></input>
  </div>
  );
};


export default Input;

