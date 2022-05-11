import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
display: flex;
width: 80%;
height: 80vh;
margin: auto;
margin-top: 100px;
background-image: linear-gradient(to top, #dfe9f3 0%, white 80%);
box-shadow: ${({theme})=> theme === true ? 
'0px 0px 30px -7px rgba(255, 255, 255, 0.5)' : 
'0px 0px 40px -7px rgba(0, 0, 0, 0.8)' };
border-radius: 15px;

`


export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
flex: 1;
margin: auto 100px;
margin-right: 0;
box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.3);
border-radius: 15px;
overflow: hidden;

`


export const Title = styled.div`
width: 550px;
height: 200px;
margin: auto;
font-weight: 500;
font-size: 3.5em;
line-height: 66px;
text-align: start;
letter-spacing: -0.08em;
span span{
    color: var(--BlueColor);
}

`



export const LogContainer = styled.div`
display: flex;
flex: 1;
justify-content: center;
`




export const Card = styled.div`
margin: auto;
padding: 30px;
box-shadow: ${({theme})=> theme === true ? '0px 0px 30px -7px rgba(255, 255, 255, 0.5)' : '0px 0px 30px -7px rgba(0, 0, 0, 0.5)' };
border-radius: 20px;
.login-form-button{
    width: 100%;
    margin-bottom: 20px;
}

`


Card.Title = styled.div`
color: var(--BlueColor);
margin: 10px 0;
font-weight: 500;
font-size: 33px;
line-height: 40px;

`


export const Link = styled(NavLink)`

`

export const Desc = styled.div`
font-size: 14px;
line-height: 22px;
text-align: center;
margin: 15px 0 0 -100px;

`



export const Messenger =styled.div`
display: flex;
width: 100%;
margin: 15px auto;
margin-left: -50px;
justify-content: space-evenly;
cursor: pointer;

`






