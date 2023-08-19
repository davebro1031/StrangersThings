import React, { useState, useEffect } from 'react'
import SelectedUserPostPopup from './SelectedUserPostPopup';

const BASE_URL = import.meta.env.VITE_STRANGERS_THINGS_BASE_API

function UserPosts({query}) {

    const getFilteredItems = (query, items) => {
        if(query===""){
            return items;
        }

        return (
            items.filter((post) => 
                post.title.toLowerCase().includes(query.toLowerCase())
            )
        )
    };

    const [userPosts, setUserPosts] = useState([]);
    const filteredItems = getFilteredItems(query, userPosts)
    
    const [trigger, setTrigger] = useState(false)
    const [selId, setSelId] = useState(null)
    const [selTitle, setSelTitle] = useState(null)
    const [selPrice, setSelPrice] = useState(null)
    const [selDeliver, setSelDeliver] = useState(null)
    const [selLocation, setSelLocation] = useState(null)
    const [selDescription, setSelDesciption] = useState(null)
    const [selCreated, setSelCreated] = useState(null)
    const [selUpdated, setSelUpdated] = useState(null)

    useEffect(()=>{
        
        getPosts()

    },[])
    
    async function getPosts() {
        try {
            const response = await fetch(`${BASE_URL}/users/me`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const result = await response.json();
            setUserPosts(result.data.posts)
        } catch (err) {
            console.error(err);
        }
    };

    function showDetails(id, title, description, price, deliver, created, updated, location){
        setTrigger(true)
        setSelId(id)
        setSelTitle(title)
        setSelDesciption(description)
        setSelPrice(price)
        setSelDeliver(deliver)
        setSelCreated(created)
        setSelUpdated(updated)
        setSelLocation(location)
    }


    return (
        <div className='content-block'>
            <table>
                <thead>
                    <tr>
                        <th>Listing</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {userPosts?
                    filteredItems.map((post)=>{
                        return(
                            <tr className='listing' key={post._id} onClick={()=>showDetails(post._id, post.title, post.description, post.price, post.willDeliver, post.createdAt, post.updatedAt, post.location)}>
                                <td>{post.title}</td>
                                <td>${post.price}</td>
                            </tr>
                        )
                    })
                    :
                    <div>No posts</div>
                    }
                </tbody>
            </table>
            <SelectedUserPostPopup 
                trigger={trigger} 
                setTrigger={setTrigger} 
                id={selId} 
                title={selTitle} 
                description={selDescription}
                price={selPrice}
                deliver={selDeliver}
                created={selCreated}
                updated={selUpdated}
                location={selLocation}
            />
        </div>
    )
}

export default UserPosts
