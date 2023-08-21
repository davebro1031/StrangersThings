const Base_URL = '2308-FTB-MT-WEB-PT'
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`




export default async function DeletePost(){
    try{
        let token=localStorage.getItem("token")
        let user=localStorage.getItem('user')
        const response = await fetch ( `${full_url}/_id`,{
            method: "DELETE",
            headers:{
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token,user}`, 

            }
        });
        const result =await response.json();
        console.log(result);
        return result
    }catch(err){
        console.error(err)
    }
}