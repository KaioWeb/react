import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//  import Form from './module/form';
//  import List from './module/list';
//  import Edit from './module/edit';

import { render } from 'react-dom';

import restProvider from 'ra-data-simple-rest';
import { UserList, UserEdit, UserCreate, UserIcon } from './crud/users';
import { EmployeeList, EmployeeEdit, EmployeeCreate, EmployeeIcon } from './crud/employee';



function App(){
  return (  
    <div className="App">
    <Admin dataProvider={jsonServerProvider('http://localhost:4000')}>
      <Resource name="employee" list={EmployeeList}></Resource>
    </Admin>    
    </div>
  );
}
export default App

// function App() {

//   return (
//     <Router>
//       <div className="App">
        
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           <a class="navbar-brand" href="https://localhost:4000/" style={{color:'orange',fontWeight:'bold'}}>concurseiro.com</a>
//           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav mr-auto">
//               <li class="nav-item active">
//                 <Link class="nav-link" to="/"> Employee List </Link>
//               </li>
//             </ul>
//             <Link class="btn btn-info "  to="/form">Add Employee</Link>
//           </div>
//         </nav>

//         <div class="container py-4">
//           <div class="row">

//             <p>// Add component list, form, edit.</p>

//             <Route path="/" exact component={List} />
//             <Route path="/form" component={Form} />
//             <Route path="/edit/:employeeId" component={Edit} />

//           </div>
//         </div>

//       </div>
//       </Router>
//   );
// }
//export default App