import React from 'react'

import {
    BrowserRouter,
    Switch, // Just Use Routes instead of "Switch"
    Route,
  } from "react-router-dom";
import Home from './Home'
import Book from './Book'
import Search from './Search'
import Choosecar from './Choosecar'
import Service  from './Service'
import Contact_Us from './contact_us';
import Admin_Login from './admin_login'
import About_Us from './about_us';
export default function RouterPage(){
    return(<div>
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />}>
          <Home/>
        </Route>
        <Route exact path="/Book" element={<Book />}>
          <Book/>
        </Route>
        <Route exact path="/Search" element={<Search />}>
          <Search/>
        </Route>
        <Route exact path="/Choosecar" element={<Choosecar />}>
          <Choosecar/>
        </Route>
        <Route exact path="/Service" element={<Service />}>
          <Service/>
          </Route>
          <Route exact path="/admin_login" element={<Admin_Login />}>
          <Admin_Login/>
        </Route>
        <Route exact path="/about_us" element={<About_Us />}>
          <About_Us/>
        </Route>
        <Route exact path="/contact_us" element={<Contact_Us />}>
          <Contact_Us/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>)
} 