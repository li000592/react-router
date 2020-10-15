import React from 'react'
import './Header.css'
import { useLocation } from "react-router-dom";

function Header(props) {
    const [pages, setPages] = React.useState()
    let location = useLocation().pathname
    React.useEffect(() => {
        if (location === '/') setPages('USER')
        else setPages(location.slice(1, location.length).toUpperCase())
    }, [location])
    return (
        <header>
            <h1>{pages}</h1>
        </header>
    )
}

export default Header
