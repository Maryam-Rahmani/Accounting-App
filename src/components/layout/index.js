import React, { useState } from 'react';
import SidebarText from "../sidebar/sidebar-text/index";
import SidebarIcon from "../sidebar/sidebar-icon/index"
import Navbar from '../navbar/index';
import { IosArrowLeft } from "@emotion-icons/fluentui-system-regular/IosArrowLeft";
import { IosArrowRight }from "@emotion-icons/fluentui-system-filled/IosArrowRight"
import styled from 'styled-components';
import IconButtonStyled from '../button/icon-button';



const ContentParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding-top: 68px !important;
  overflow: visible;
  width: 100%;

  
`

const SidebarSwitchBox = styled.div`
  width: ${props => props.visible ?  "20%": "5%"};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: #dce7f3; 
  justify-content: start;

`



const IosArrowLeftStyled = styled(IosArrowLeft)`
  color: #7F96AC;
`;

const IosArrowRightStyled = styled(IosArrowRight)`
  color: #7F96AC;
`;



const Layout = ({ children })=> {
  const [isTrue, setIsTrue] = useState(true)

  const sideHandleHide = () => {
    setIsTrue(false)
  }

  const sideHandleVisible = () => {
    setIsTrue(true)
  }

  return (
    <>
      <Navbar />
      <ContentParent>
        {!isTrue && 
          <SidebarSwitchBox>
            <IconButtonStyled type="button" onClick={sideHandleVisible}>
              <IosArrowLeftStyled size={15} />
              <SidebarIcon />
            </IconButtonStyled>
          </SidebarSwitchBox>
        }
        {isTrue &&
          <SidebarSwitchBox visible>
            <IconButtonStyled type="button" onClick={sideHandleHide}>
              <IosArrowRightStyled size={15} />
            </IconButtonStyled>
            <SidebarText />
          </SidebarSwitchBox >
        } 
     {children}
      </ContentParent>
      
    </>
  );
};
export default React.memo(Layout);