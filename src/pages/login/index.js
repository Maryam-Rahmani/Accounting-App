import React, { useState, useEffect  } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from "react-hook-form"
import jwt from "jwt-decode"
import { LinkBlue } from "../../components/link"
import styled from 'styled-components'
import { User3 } from "@emotion-icons/remix-fill/User3"
import { LockAlt }from "@emotion-icons/boxicons-solid/LockAlt"
import axios from "axios"




const LoginParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
 
`
const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 0;
  padding: 0;
  width: 35%;
  height: 300px;
  background-color: #FFFFFF;
  box-shadow: 0 5px 20px 0 rgb(90 123 179 / 10%);
  border: none;
  border-radius: 5px;

`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap:10px;
  width: 100%;
  height: 200px;
 
`

const Field = styled.div`
  border: 1px solid rgba(34,36,38,.15);
  color: rgba(0,0,0,.87);
  border-radius: 0.30769231rem;
  margin-right: 0;
  margin-top: 0;
  margin-left: 0;
  width: 90%;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;

`
const Span = styled.div`
  color: #323232;
  font-size: 1em;
  padding-bottom: 3px;
`

const SpanTitle = styled.div`
  color: #000000F2;
  font-weight: 700;
  padding-bottom: 3px;
`

const ForgetDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 36px;
`

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  width: 30%;
  height: 100%;
`

const Button = styled.button`
    background-color: #00BCEF;
    color: #fff;
    border: none;
    text-shadow: none;
    background-image: none;
    width: 90%;
    font-size: 1.15384615rem;
    display: block;
    height: 40px;
    border-radius: 0.30769231rem;
    box-shadow: 0 0 0 0 rgb(34 36 38 / 15%) inset;
`

const Input = styled.input`
    text-align: start !important;
    width: 70%;
    margin: 0;
    outline: 0;
    border :none;
    -webkit-appearance: none;
`
const InputCheckBox = styled.input`
  &:checked {
    background-color: #00BCEF;
  }
  `
  const User3Styled = styled(User3)`
  color:  #7F96AC;
`
const LockAltStyled = styled(LockAlt)`
  color:  #7F96AC;
`
function Login() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  })

 
const handlePass = ()=> {
  var x = document.getElementById("checkInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const onSubmit = () => {
  console.log(formValue)
  axios.post('http://109.122.243.68:8080/api/token/', formValue)
    
  //fetch('http://109.122.243.68:8080/api-auth/login/', {method: 'get', headers: {
   // 'content-type': 'application/json'
  //}})
    .then((res) => {
      console.log(res.data)
      console.log("ok")
    })
    .catch((err) => {
      console.log(err.message)
      console.log("no")
    })
}

  return (
    <LoginParent>
      <AuthContainer>
      <SpanTitle>ورود کاربر</SpanTitle>
     <Form onSubmit={handleSubmit(onSubmit)}>

          <Field >
            <User3Styled size={15} />
            <Input
               dir="ltr"
              type="username"
              value={formValue.username}
              onChange={(e) =>
                setFormValue({ ...formValue, username: e.target.value })
              }
            />
          </Field>
          <Field>
            <LockAltStyled size={15} />
              <Input
              dir="ltr"
              id="checkInput"
              type="password"
              value={formValue.password}
              onChange={(e) =>
                setFormValue({ ...formValue, password: e.target.value })
              }
            />
          </Field>
          <ForgetDiv>
        <CheckBox>
          <InputCheckBox type="checkbox" onClick={handlePass} />
          <Span>نمایش گذرواژه</Span>
        </CheckBox>
        <LinkBlue to="/">رمز عبور خود را فراموش کرده&zwnj;اید؟</LinkBlue>
      </ForgetDiv>
        <Button
          type="submit"
        >
          ورود
        </Button>
      </Form>
      </AuthContainer>
    
    </LoginParent>
 
  )
}

export default Login