const Base_URL = '2308-FTB-MT-WEB-PT'
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`
import {useState} from'react'
import loginUser from "../Login"

export default function MakePost (){
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice]=useState('');
    const [location, setLocation]=useState('');
    const [willDeliver, setWillDeliver]=useState('');



    async function CreatePost(event){
        event.preventDefault();
    try{
        let token=localStorage.getItem("token")
        let user=localStorage.getItem('user')

        const response = await fetch (`${full_url}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token, user}`
            },
                body: JSON.stringify({
                    post:{
                        title: title,
                        description: description,
                        price: price,
                        location:location,
                        willDeliver: willDeliver,
                    }
                })
            });
        const result = await response.json();
        console.log(result)
        return result 
    }catch (err){
        console.error(err); 
    }
}
// CreatePost()
    return(
        <>
        <form onSubmit={CreatePost}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title}
                onChange={(event)=>setTitle(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description}
                onChange={(event)=>setDescription(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="text" id="price" value={price}
                onChange={(event)=>setPrice(event.target.value)}/>
            </div>
            
            <div>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" value={location}
                onChange={(event)=>setLocation(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="willDeliver">Will Deliver</label>
                <input type='checkbox' id="willDeliver" value={willDeliver}
                onChange={(event)=>setWillDeliver(event.target.value)}/>
            </div>
            <button type="submit">Create Listing</button>
        </form>
        
        
        </>
    )
}