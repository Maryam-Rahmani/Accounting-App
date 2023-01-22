import React from "react"
import { LinkIcon } from "../../link"
import styled from 'styled-components'



const SidebarParent = styled.div`
  background: #dce7f3;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 30px;
  gap: 30px;
  align-items: start;
`

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  //Change the background color if 'active' prop is received
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor:pointer;
  }

  &:hover:not(:first-child) {
    background: #c34a36;
  }
`
const Span = styled.span`
  font-size: 15px;
  color: #7F96AC;
`;

function SidebarText() {
    return (
      <SidebarParent>
        <LinkIcon to="/">
          <Span>
          صفحه اصلی
          </Span>
        </LinkIcon>
        <LinkIcon to="/currency">
          <Span>
          صفحه ارز
          </Span>
        </LinkIcon>
      </SidebarParent>  
    );
}

export default SidebarText