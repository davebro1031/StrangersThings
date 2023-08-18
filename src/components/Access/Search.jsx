import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Search() {

    const location=useLocation()
    const [searchItems, setSearchItems] = useState("")
    
    useEffect(()=>{
        if(location.pathname==="/"){
            setSearchItems("posts")
        }else if(location.pathname==="/messages"){
            setSearchItems("messages")
        }
    },[location])

    return (
        <input type="text" placeholder={['search',searchItems].join(" ")}/>
    )
}

export default Search
