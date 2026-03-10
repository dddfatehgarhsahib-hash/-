import {useState} from "react"
import {useRouter} from "next/router"

export default function Login(){

const router = useRouter()

const [pass,setPass]=useState("")

function login(e){

e.preventDefault()

if(pass==="admin123"){

router.push("/admin")

}else{

alert("Wrong Password")

}

}

return(

<div style={{textAlign:"center",padding:"40px"}}>

<h2>Admin Login</h2>

<form onSubmit={login}>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPass(e.target.value)}
required
/>

<br/><br/>

<button>Login</button>

</form>

</div>

)

}
