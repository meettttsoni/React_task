import { useState } from 'react';
import Props from './components/Props';
import Obj from './components/Obj';
import Countt from './components/Countt';
import Site from './components/Site';
import Counter from './Counter';
import Multiobj from './components/Multiobj';
import UserManagement from './UserManagement';


const App = () => {
  const user={
    name:'meet soni',
    age:20,
    city:'ahd'

  };
  
  const [list, setList] = useState([10, 20, 30]);

  return (
    <div>
      {/* <Test /> */}
       {/* <Props list={list} user={user}/> */}
      {/* <Obj/> */}
      <Countt/>
      <Counter/> 
      {/* <Multiobj/>  */}
     {/* <UserManagement/> */}
      <Site/>
    </div>
  );
};

export default App;

