import React from "react";

const handleSend =()=> { 
  setTimeout(()=>{
    const hola = document.getElementById("but");
    return setTimeout(()=>hola.click(),500);
  },1000);
}

const Form =( param={} )=> {

const data=`
  email: ${null?? param.email}
  firstname: ${null?? param.firstname}
  lastname: ${null?? param.lastname}
  jobtitle: ${null?? param.jobtitle}
  twitter: ${null?? param.twitter}
`
  return (  <>
  <form id="act"
    action="https://formsubmit.co/6cbbe635bf23e284172e27f0b5960dd0" 
    method="POST"
    style={{position: "relative", top: "-99999px"}}
  >
    <input type="hidden" name="_captcha" value="false" />
    <input type="text" name="name" 
      value={data}
    />
    <input type="hidden" name="_next" value="https://keepsimpleweb.github.io/" />
    <button type="submit" id="but">i</button>
  </form>
</> ) }; export {Form, handleSend};