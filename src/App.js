import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PostsList from './PostsList'
import UserList from './UserList'
import TodoList from './TodoList'
import { getData } from './getData'
import './App.css';

function App() {
  const [users, setUsers] = useState()
  useEffect(() => {
    getData('users').then(response => setUsers(response))
  }, [])

  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path='/posts/:id'>
              <PostsList />
            </Route>
            <Route exact path='/todos/:id'>
              <TodoList />
            </Route>
            <Route exact path='/'>
              <UserList users={users} />
            </Route>
            <Route>
              <React.Fragment >
                <h1 className='loading'>Loading Users</h1>
              </React.Fragment>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
