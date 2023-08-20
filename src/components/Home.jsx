import { useState, useEffect } from "react";
import PatchPost from "./Posts/PatchPosts";
import DeletePost from "./Posts/DeletePost";

const Base_URL = '2308-FTB-MT-WEB-PT'
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`


export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [click, setClick] =useState([]);


  useEffect(() => {
    async function GetPosts() {
      try {
        const response = await fetch(full_url)
        const result = await response.json();
        console.log(result)
        setPosts(result.data.posts)
        setClick(result.data.posts)
        return result

      } catch (err) {
        console.error(err);
      }
    }
    GetPosts()
  }
    , [])
  return (
    <>
      <table>
        <tbody>{
          posts.map((post) => {
            return (
            
                <tr key={post._id}>
                  <td>User: {post.author.username}</td>
                  <td>Title:{post.title}</td>

                  <td>Description: {post.description}</td>
                  <td>Price: {post.price}</td>
                  <td>location: {post.location}</td>
                  <td>Will Deliver:{post.willDeliver}</td>
                  <td>Message:{post.message}</td>

                  <td>Created At: {post.createdAt}</td>
                  
                </tr>

                
            );



          })


        }
        </tbody>
      </table>

    </>
  )


}