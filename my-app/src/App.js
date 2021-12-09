import React, { Component } from 'react'
import { Route ,Routes } from 'react-router-dom'

import Frame from './common/frame'
import Home from './user/home'
import NoPage from './NoPage'
import Settings from './user/settings'
import Login from './login'
import Detail from './user/detail'


export default class App extends Component {



  render() {
    return (
      <div>
          <Routes>


           <Route path='/user' element={<Frame/>}>
              <Route index element={<Home />}/>
              <Route path ='/user/detail/:id' element={<Detail/>}/>
           </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/404' element={<NoPage/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>

      </div>
    )
  }

}

