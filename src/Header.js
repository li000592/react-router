import React from 'react'
import './Header.css'
import { useLocation } from "react-router-dom";

function Header(props) {
    const [pages, setPages] = React.useState()
    let location = useLocation().pathname
    React.useEffect(() => {
        if (location === '/') setPages('USER')
        else if (location.includes('posts')) setPages('POST')
        else setPages('TODO')
    }, [location])
    return (
        <header>
            <h1>{pages}</h1>
        </header>
    )
}

export default Header
