import { useState, useEffect } from "react";

const Base_URL = '2305-FTB-MT-WEB-PT'
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`

const getFilteredItems = (query, items) => {
    if(query===""){
        return items;
    }

    return (
        items.filter((post) => 
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.author.username.toLowerCase().includes(query.toLowerCase())
        )
    )
};

export default function Posts({query}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch(full_url)
                const result = await response.json();
                // console.log(result)
                setPosts(result.data.posts)
                return result

            } catch (err) {
                console.error(err);
            }
        }
        getPosts()
    }
    , [])

    const filteredItems = getFilteredItems(query, posts)
    const [trigger, setTrigger] = useState(false)
    const [postId, setPostId] = useState(null)

    function showDetails(id){
        setTrigger(true)
        setPostId(id)
    }

    return (
        <>
            <table className="content-block">
                {/* Added table headers to save space and reduce redundancy! */}
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Listing</th>
                    </tr>
                </thead>
                <tbody>{
                    // Changed the list so that it only shows filtered items -- the page now responds to search inputs
                    filteredItems.map((post)=>{
                        return(
                            // Added a "listing" styling so that each listing appears as a link when 
                            <tr className="listing" key={post._id} onClick={()=>showDetails(post._id)}>
                                <td>{post.author.username}</td>
                                <td>{post.title}</td>

                                {/* <td>Description: {post.description}</td>
                                <td>Price: {post.price}</td>
                                <td>location: {post.location}</td>
                                <td>Will Deliver:{post.willDeliver}</td>
                                <td>Message:{post.message}</td>

                                <td>Created At: {post.createdAt}</td> */}
                            
                            </tr>
                        )
                    })
                    
                    
                    }

                </tbody>
            </table>
            <PostDetails trigger={trigger} setTrigger={setTrigger} id={postId}/>

        </>
    )


}



function PostDetails({trigger, setTrigger, id}){
    return (
        trigger?
        <div className="popup" onClick={()=>setTrigger(false)}>
            <div className="popup-inner popup-neutral">
                
                {/* I think it makes sense to replace the "id" prop with all of post information - so lots of extra props like "name" "title" "price", etc.  */}
                Popup with all the post details! 
                {id}
            </div>

        </div>:null
    )
}