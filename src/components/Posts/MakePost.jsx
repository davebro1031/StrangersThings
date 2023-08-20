const Base_URL = '2308-FTB-MT-WEB-PT'
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`


export default async function MakePosts (){

    try{
        const response = await fetch ( `${full_url}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
                body: JSON.stringify({
                    post:{
                        title: "New Car for Sale",
                        description: 'This new car has a back-up camera.',
                        price: "$5000.00",
                        willDeliver:true 
                    }
                })
            })
        const resut = await response.json();
        console.log(result)
        return result 
    }catch (err){
        console.error(err); 
    }
}