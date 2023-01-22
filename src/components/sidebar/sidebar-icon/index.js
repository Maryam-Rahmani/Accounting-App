import React from "react";
import SidebarItems from ".";
import { Link } from "react-router-dom";
import { LineChart } from "@emotion-icons/boxicons-regular/LineChart";
import { Home } from "@emotion-icons/boxicons-solid/Home";
import styled from 'styled-components';



const SidebarParent = styled.div`
  background: #dce7f3;
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 30px;
  gap: 30px;
  align-items: start;
`;

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
`;

const HomeStyled = styled(Home)`
  color: #7F96AC;
`

const LineChartStyled = styled(LineChart)`
  color: #7F96AC;
`

function SidebarIcon() {
    return (
      <SidebarParent>
        <Link to="/">
          <HomeStyled size={24} />
        </Link>
        <Link to="/currency">
          <LineChartStyled size={24} />
        </Link>
      </SidebarParent>
    );
}

export default SidebarIcon;