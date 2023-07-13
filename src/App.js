import AddUser from './components/AddUser/AddUser'
import UserList from './components/UserList/UserList';
import React, { useState, Fragment } from 'react';
function App() {
  const [list, uplist] = useState([]);

  const update = (Uname, Uage) =>{
    uplist((pval)=>{
      return[...pval,{name: Uname, age: Uage, id: Math.random().toString()} ]
    });
  };


  return (
    <Fragment>
      <AddUser onUpdate={update}/>
      <UserList  users={list}/>
    </Fragment>
  );
}

export default App;











  // const update = (UName, UAge) =>{
  //   uplist((pval)=>{
  //     return[...pval,{name: UName, age: UAge, id: Math.random().toString()} ]
  //   });
  //   console.log(list);
  // };