import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import UserList from './UserList'
import Header from './Header'
import Posts from './Posts'
import Todos from './Todos'
import './App.css';

const demo = [{
  id: 1,
  name: "123",
  email: "123@123.com"
}]

function App() {

  // let page
  // const useReactPath = () => {
  //   const [path, setPath] = React.useState(window.location.pathname);
  //   const listenToPopstate = () => {
  //     const winPath = window.location.pathname;
  //     setPath(winPath);
  //   };
  //   React.useEffect(() => {
  //     window.addEventListener("popstate", listenToPopstate);
  //     return () => {
  //       window.removeEventListener("popstate", listenToPopstate);
  //     };
  //   }, []);
  //   return path;
  // };
  // const [page, setPage] = useState('User')

  const [users, setUsers] = useState(demo)
  // const path = useReactPath();


  // useEffect(() => {
  //   const currentPath = location.pathname;
  //   const searchParams = new URLSearchParams(location.search);
  // }, [location]);

  useEffect(() => {
    getData('users').then(response => setUsers(response))
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
            <Route path='/posts'>
              <h1>POSTS</h1>
              <Posts />
              {/* <FilmDetails posts={posts} /> */}
            </Route>
            <Route path='/todos'>
              <h1>TODOS</h1>
              <Todos />
            </Route>
            <Route path='/'>
              <UserList users={users} />
            </Route>
            <Route>
              <React.Fragment>
                <h1>Loading Users</h1>
                <NavLink className="NavLink" to='posts'>BUTTON</NavLink>
              </React.Fragment>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
