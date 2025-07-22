import { useState } from 'react';
import Props from './components/Props';
import Obj from './components/Obj';
import Countt from './components/Countt';
import Site from './components/Site';
import Counter from './Counter';
import Multiobj from './components/Multiobj';
import UserManagement from './components/UserManagement';
import Practice from './components/Practice';
import Api from './components/Api';
import Timer from './components/Timer';
import Useeffect from './components/Useeffect';
import Fetch from './components/Fetch';
import Timeruse from './components/Timeruse';
import Todoref from './components/Todoref';
import Focus from './components/Focus';
import Formvali from './components/Formvali';


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
      {/* <Countt/> */}
      {/* <Counter/>  */}
      {/* <Multiobj/>  */}
     {/* <UserManagement/> */}
      {/* <Site/> */}
     <Practice/>
     {/* <Api/> */}
     {/* <Timer/> */}
    {/* <Useeffect/> */}
    {/* <Fetch/> */}
    {/* <Timeruse/> */}
    {/* <Todoref/> */}
    {/* <Focus/> */}
   {/* <Formvali/> */}
    </div>
  );
};

export default App;

