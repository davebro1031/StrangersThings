import React, { useState, useEffect } from 'react'

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
    const [selectedPostId, setSelectedPostId] = useState(null)

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

    function showDetails(id){
        setTrigger(true)
        setSelectedPostId(id)
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
                            <tr className='listing' key={post._id} onClick={()=>showDetails(post._id)}>
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
            <PostDetails trigger={trigger} setTrigger={setTrigger} id={selectedPostId}/>
        </div>
    )
}

export default UserPosts

function PostDetails({trigger, setTrigger, id}){
    return (
        trigger?
        <div className="popup" onClick={()=>setTrigger(false)}>
            {/* <Link to="">  WE CAN TURN THIS INTO A LINK TO THE FULL POST PAGE THAT HAS MESSAGING OPTIONS ETC.*/}
            <div className="popup-inner popup-neutral">
                
                {/* I think it makes sense to replace the "id" prop with all of post information - so lots of extra props like "name" "title" "price", etc.  */}
                Popup with all the post details! 
                {id}
            </div>
            {/* </Link> */}

        </div>:null
    )
}
