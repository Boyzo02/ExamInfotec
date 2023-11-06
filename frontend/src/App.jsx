import React from 'react';
import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h3>Página de inicio</h3>
          <div>
          <p>Aplicación para el control del presupuesto familiar</p>
          </div> 
          <div>
            <a className='button me-2' type='submit' href="/budget">Nuevo</a>
            <a className='button ms-2' type='submit' href="/seelast">Ver último</a>
          </div>
      </header>
    </div>
  );
}

export default App;
// import React from "react";
// import axios from "axios";
// import "./App.scss";
// import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todos: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("/api")
//       .then((response) => {
//         this.setState({
//           todos: response.data.data,
//         });
//       })
//       .catch((e) => console.log("Error : ", e));
//   }

//   handleAddTodo = (value) => {
//     axios
//       .post("/api/todos", { text: value })
//       .then(() => {
//         this.setState({
//           todos: [...this.state.todos, { text: value }],
//         });
//       })
//       .catch((e) => console.log("Error : ", e));
//   };

//   render() {
//     return (
//       <div className="App container">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
//               <h1>hola</h1>
//               <div className="todo-app">
//                 <AddTodo handleAddTodo={this.handleAddTodo} />
//                 <TodoList todos={this.state.todos} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
