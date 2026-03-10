import {useState} from "react"

let counter = 1

export default function Register(){

const [token,setToken]=useState("")

function submit(e){

e.preventDefault()

let t="DKP-"+String(counter).padStart(3,'0')

counter++

setToken(t)

}

return(

<div style={{textAlign:"center",padding:"40px"}}>

<h2>Online Registration</h2>

<form onSubmit={submit}>

<input placeholder="ਬੱਚੇ ਦਾ ਨਾਮ" required/><br/><br/>

<input placeholder="ਪਿਤਾ ਦਾ ਨਾਮ" required/><br/><br/>

<input placeholder="ਪਤਾ" required/><br/><br/>

<input placeholder="ਉਮਰ" required/><br/><br/>

<select required>

<option value="">ਉਮਰ ਗਰੁੱਪ</option>
<option>7-15</option>
<option>16-30</option>
<option>Dumala Girls</option>

</select><br/><br/>

<input placeholder="ਫੋਨ ਨੰਬਰ" required/><br/><br/>

<input placeholder="ਈਮੇਲ"/><br/><br/>

<button type="submit">Submit Registration</button>

</form>

<h3 style={{color:"green"}}>
{token && "ਤੁਹਾਡਾ Token Number: "+token}
</h3>

</div>

)

}
