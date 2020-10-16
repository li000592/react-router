import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink, useLocation } from 'react-router-dom'
import Header from './Header'
import PostsList from './PostsList'
import './App.css';
import UserList from './UserList'
import TodoList from './TodoList'

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
  const [posts, setPosts] = useState(demo)
  useEffect(() => {
    getData('posts').then(response => setPosts(response))
  }, [])
  const [todos, setTodos] = useState(demo)
  useEffect(() => {
    getData('todos').then(response => setTodos(response))
  }, [])
  async function getData(type) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/' + type)
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    } catch (error) {
      console.error(error);
    }
  }
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
              <h1>POSTS</h1>
              <PostsList posts={posts} />
            </Route>
            <Route path='/todos/:id'>
              <h1>TODOS</h1>
              <TodoList todos={todos} />
            </Route>
            <Route path='/'>
              <UserList users={users} />
            </Route>
            <Route>
              <React.Fragment>
                <h1>Loading Users</h1>
              </React.Fragment>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
