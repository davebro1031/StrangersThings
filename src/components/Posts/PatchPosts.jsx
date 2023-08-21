const Base_URL = '2308-FTB-MT-WEB-PT'
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`


export default async function PatchPost(){
   

    try {
        let token=localStorage.getItem("token")
        let user=localStorage.getItem('user')
        const response = await fetch(  `${full_url}/64daf010755e4500144695ec`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':    `Bearer ${token, user}`
            },
            body: JSON.stringify({
                    post: {
                        title: 'Cups for sale',
                        description: "These cups are made from a special glass in 1970. The glass looks fine but the material is sturdy",
                        price: "$500.00",
                        location: "New York, NY",
                        willDeliver: true
                    }
            })
        })
        const result =await response.json();
        console.log(result)
        return result
    }catch (err){
        console.error(err)
    }

    
}