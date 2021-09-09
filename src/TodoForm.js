// import React, { useState } from 'react';

// const TodoForm = ({addTodo}) => {
//     const [value, setValue] = useState('');

//   const handleChange = (e) => {
//       setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       if(!value)  //if the value doesnot exist then return Nothing
//       return;
//       addTodo(value);
//       setValue('');
//   };

//   return(
//       <div className="container">
//           <div className="app-title text-center">Another Todo App</div>
//           <form onSubmit={handleSubmit} className="form-group row todo-form">
//               <input type="text" className="form-control col-md-8" type="text" placeholder="Add a todo"
//               value={value} onChange={handleChange}/>
//               <input className="form-control btn-primary col-md-4 submit button" type="submit" value="Add"/>
//           </form>
//       </div>
//   )
// };

// export default TodoForm;
