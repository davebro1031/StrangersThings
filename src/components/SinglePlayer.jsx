import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
const Base_URL = '2308-FTB-MT-WEB-PT'
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`





export default async function SinglePlayer(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function GetSingle() {
            try {
                const response = await fetch(`${full_url}/${_id}`)
                const result = await response.json();
                console.log(result)
                setPosts(result.data.posts)
                return result

            } catch (err) {
                console.error(err);
            }
        }
        GetSingle()
    }
        , [])
    return (
        <>
            <table>
                <tbody>{
                    posts.map((post)=>{
                        return(
                            <>
                           
                            <tr key={post._id}>
                                <td>User: {post.author.username}</td>
                                <td>Title:{post.title}</td>
                                <td>Description: {post.description}</td>
                                <td>Price: {post.price}</td>
                                <td>location: {post.location}</td>
                                <td>Will Deliver:{post.willDeliver}</td>
                                <td>Message:{post.message}</td>

                                <td>Created At: {post.createdAt}</td>



                                <td><Link className="details-button" to="post-details">Details</Link></td>
                                </tr>
                                </>

                            
                        )
                    })
                    
                    
                    }

                </tbody>
            </table>

        </>
    )


}