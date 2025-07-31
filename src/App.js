import { useEffect, useState } from 'react';
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
import Textspeed from './components/Textspeed';
import Practext from './components/Practext';
import Todoprac from './components/Todoprac';
import Withloading from './components/Withloading';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"

const UserWith=Withloading(UserList)
const App = () => {
  const[loading,setloading]=useState(true)
  const[user,setuser]=useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setuser([
        {
        id:1,name:'sun',
      },
      {
        id:2,name:'an'
      }
      
    ])
    setloading(false)
    },2000)
  },[])

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
     {/* <Practice/> */}
     {/* <Api/> */}
     {/* <Timer/> */}
    {/* <Useeffect/> */}
    {/* <Fetch/> */}
    {/* <Timeruse/> */}
    {/* <Todoref/> */}
    {/* <Focus/> */}
   {/* <Formvali/> */}
   {/* <Textspeed/> */}
   {/* <Practext/> */}
  {/* <Todoprac/> */}
 
  {/* <UserWith isLoading={loading} user={user}/> */}
    <Navbar/>
  <Routes>
    <Route path='/Todoprac' element={<Todoprac/>}/>
    <Route path='/Practext' element={<Practext/>}/>
    <Route path='/Focus' element={<Focus/>}/>
  </Routes>
    </div>
  );
};

export default App;

