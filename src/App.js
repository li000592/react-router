import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PostsList from './PostsList'
import './App.css';
import UserList from './UserList'
import TodoList from './TodoList'
import { getData } from './getData'

const demo = [{
  id: 1,
  name: "123",
  email: "123@123.com",
  title: '123'
}]

function App() {
  const [users, setUsers] = useState(demo)
  useEffect(() => {
    getData('users').then(response => setUsers(response))
  }, [])

  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Switch>
            {/* <Route /> with no path will always match. Using it as the last 
          item in the <Switch /> block will make it the default fall-back if
          no other <Route /> matches. */}
            <Route path='/posts/:id'>
              <PostsList />
            </Route>
            <Route path='/todos/:id'>
              <TodoList />
            </Route>
            <Route path='/'>
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
