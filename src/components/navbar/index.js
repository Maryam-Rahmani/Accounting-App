import React, { useState } from 'react'
import { AccountCircle } from "@emotion-icons/remix-fill/AccountCircle"
import { Search } from "@emotion-icons/octicons/Search"
import IconButtonStyled from "../button/icon-button/index"
import Dropdown from "../drop-down/index"
import { SubMenus } from "../../data"
import styled from 'styled-components'
import { LinkStyled } from './../link/index';

const Header = styled.header`
  top: 0;
  right: 0;
  width: 100%;
  position: fixed;
  height: 68px;
  --colors-grey: #808080;
  --colors-border: #d9d9d9;
  font-size: 13px;
  z-index: 990;
  color: #333;
  height: 68px;
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  border-bottom: 1px solid var(--colors-border);
  background: #fff;
}
`
const NavbarContainer = styled.div`
  position: relative;
  max-width: 1160px;
  padding: 0 14px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const UserLogin = styled.div`
  position: relative;
  display: flex;
  z-index: 1010;
  align-items: center;
  flex-direction: row;
  width: 130px;
  height: 60px;
  border: none;
  
  align-items: center;
`;

const User = styled.div`
display: flex;
z-index: 1010;
align-items: center;
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 60px;
  border: none;
  gap: 10px;
  align-items: center;
`;



const SpanStyled = styled.div`
  font-size: 12px;
  color: gray;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  gap: 10px;
  width: 254px;
  height: 35px;
  background: #F7F7F7;
  border-radius: 32px;
  flex: none;
  order: 0;
`;

const AccountCircleStyled = styled(AccountCircle)`
  color:  #7F96AC;
`;

const SearchStyled = styled(Search)`
  color:  #7F96AC;
`;

//const ArrowIosDownwardOutlineStyled = styled(ArrowIosDownwardOutline)`
 // color: #C0C0C0;
//`;

const Input = styled.input`
  border: none;
  width: width: 159px;
  height: 24px;
  border-radius: 4px;
  order: 0;
  flex-grow: 0;
  background: #F7F7F7;
  &:focus{
    outline: none;
  }
`;

const Navbar= () => {

  const data = ["خروج"]
  const [isTrue, setIsTrue] = useState(true)

  const handleLogin = () => {
    setIsTrue(false)
  }


  return (
    <Header>
       <NavbarContainer>
      <SearchBox>
      <Input type='search' placeholder='جستجو ...' aria-label='Search' />  
        <IconButtonStyled type="button" >
            <SearchStyled size={24} />
        </IconButtonStyled> 
      </SearchBox>
      {isTrue &&
        <User>
          <AccountCircleStyled size={40} />
          <IconButtonStyled type="button" onClick={handleLogin}>
            < LinkStyled to="/login">
            <SpanStyled>ورود</SpanStyled>
            </LinkStyled> 
          </IconButtonStyled>
        
        </User>
      } 
      {!isTrue &&
        <UserLogin>
          <AccountCircleStyled size={40} />
          <SpanStyled>رحمانی</SpanStyled>
          <Dropdown />
        </UserLogin>
      }
    </NavbarContainer>
    </Header>
   
  );
};

export default Navbar;