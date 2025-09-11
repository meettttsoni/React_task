import { useEffect, useState } from "react";
import Props from "./components/Props";
import Obj from "./components/Obj";
import Countt from "./components/Countt";
import Site from "./components/Site";
import Counter from "./Counter";
import Multiobj from "./components/Multiobj";
import UserManagement from "./components/UserManagement";
import Practice from "./components/Practice";
import Api from "./components/Api";
import Timer from "./components/Timer";
import Useeffect from "./components/Useeffect";
import Fetch from "./components/Fetch";
import Timeruse from "./components/Timeruse";
import Todoref from "./components/Todoref";
import Focus from "./components/Focus";
import Formvali from "./components/Formvali";
import Textspeed from "./components/Textspeed";
import Practext from "./components/Practext";
import Todoprac from "./components/Todoprac";
import Withloading from "./components/Withloading";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Page from "./components/Page";
import Api2 from"./components/Api2"
import Electro from "./components/Electro";
import Productinfo from "./components/Productinfo";
import Category from "./components/Category";
import All from "./components/All";
import AAA from "./components/AAA";
import Sign from "./components/Sign";
import Todoo from "./components/redux/Todoo"
import Display from "./components/redux/Display";
import Todo from "./components/redux1/Todo";
import Rcounter from "./components/redux1/Rcounter";
import Cart from "./components/Cart";
import Click from "./components/Click";
import Register from "./components/Register";
import Signin from "./components/Signin";
import { FirebaseError } from "firebase/app";
import Firebasedatabase from "./components/Firebasedatabase";
import Firestore from "./components/Firestore";




const UserWith = Withloading(UserList);
const App = () => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setuser([
        {
          id: 1,
          name: "sun",
        },
        {
          id: 2,
          name: "an",
        },
      ]);
      setloading(false);
    }, 2000);
  }, []);

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
      {/* <Navbar/>
  <Routes> */}
      {/* <Route path='/Todoprac' element={<Todoprac/>}/>
    <Route path='/Practext' element={<Practext/>}/>
    <Route path='/Focus' element={<Focus/>}/> */}
      {/* <Route path='/product' element={<Product/>}>
    <Route path='Electro' element={<Electro/>}/>
    </Route>
    <Route path='/:Productdetail/:id' element={<Productdetail/>}/>
    </Routes> */}
      {/* <Route path='Countt' element={<Countt/>}/>
    <Route path='Obj' element={<Obj/>}/> */}
      {/* <Page/> */}
      {/* <Api/> */}
      {/* <Api2/> */}
  
      {/* <Routes>
                              <Route path='/' element={<Product/>}/>
                                    <Route path='/:category' element={<Category/>}/>
                              
                              <Route path='/:category/:id' element={<Productinfo/>}/>
                              <Route path='/cart' element={<Cart/>}/>
                        </Routes> */}

                        {/* <Routes>
                              <Route path='/' element={<All/>}/>
                                   
                        </Routes> */}
                        {/* <AAA/> */}
                        {/* <Sign/> */}
                        {/* <Todoo/>
                      <Display/> */}
                        {/* <Todo/>
                        <Display/> */}
                        {/* <Rcounter/> */}
                        {/* <Click/> */}
                        {/* <Register/> */}
                        {/* <Signin/> */}
                        <Firebasedatabase/>
                        <Firestore/>
                     
                     
                        
    </div>
  );
};

export default App;
