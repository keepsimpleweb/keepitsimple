import React from "react";
import { Center, } from "@chakra-ui/react"
import { Form, handleSend } from "@components/Form"
import { BadgeForm } from "@components/BadgeForm";

const Register =()=> {
  const [state, setState] = React.useState({ 
    form: {
      firstname: '',
      lastname:  '',
      jobtitle: '',
      twitter: '',
      avatar: "https://yt3.ggpht.com/ytc/AKedOLQdlpe31mHzbnXIBmJYq_pSIRXtDIhbV-ihgvFq=s900-c-k-c0x00ffffff-no-rj",
      email:'',
    } 
  });

  const handleChange =e=> {
    setState({
      form: { 
        ...state.form,
        [ e.target.name ]: e.target.value, 
      }
    });
  };
  
return ( <>

  <Center h="100vh" delay={1} css={{
      background: "rgb(64,12,96)",
      background: "linear-gradient(153deg, rgba(64,12,96,1) 7%, rgba(64,12,96,1) 77%, rgba(18,167,252,1) 90%, rgba(64,12,96,1) 96%)",
    }}
  > <section style={{
        height: "560px",
        width: "470px",
      }} 
    >
      {Form(state.form)}

      <BadgeForm
        onChange={handleChange}
        formValues={state.form}
        handleSend={handleSend}
      />

      {/* <Badge
        formValues={state.form}
      /> */}

    </section>
  </Center>

</> ) }; export {Register};