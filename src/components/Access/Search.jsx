import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Search({query,setQuery}) {

    const [searchItems, setSearchItems] = useState("")
    // const [query, setQuery] = useState("")
    const location=useLocation()
    
    useEffect(()=>{
        if(location.pathname==="/"){
            setSearchItems("posts")
        }else if(location.pathname==="/messages"){
            setSearchItems("messages")
        }
    },[location])

    return (
        <input type="text" placeholder={['search',searchItems].join(" ")} value={query} onChange={(e)=>setQuery(e.target.value)}/>
    )
}

export default Search
