import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import List from './pages/List'
import Create from './pages/Create'
import Edit from './pages/Edit'


export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" component={Create} />
      </Switch>
    </>
  )
}
