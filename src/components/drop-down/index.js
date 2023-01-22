import React, { useState } from "react"
import IconButtonStyled from "../button/icon-button"
import { ArrowIosDownwardOutline } from "@emotion-icons/evaicons-outline/ArrowIosDownwardOutline"
import styled from "styled-components"


const DropdownParent = styled.div`
  width: 30px;
` 
 


const MenuStyled = styled.ul`
  position: absolute;
  list-style-type: none;
  width: 120px;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 16%);
  border: 1px solid var(--colors-border);
  border-radius: 0 0 0.5em 0.5em;
  z-index: 1010;
  cursor: initial;
`
const ListStyled = styled.li`
  background-color: white;
  width: 100%;
  height: 100%;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  &hover {
    background-color: "#87CEFA" ;
  }
`

const ButtonStyled = styled.button`
  margin: 0;
  display: block;
  padding: 0.65em 1.15em;
  white-space: nowrap;
  line-height: 1.5;
  color: inherit;
  overflow-x: hidden;
  text-overflow: ellipsis;

  background-color: white;
  width: 100%;
  height: 100%;
  text-align: left;

  background: none;
  color: inherit;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  cursor: pointer;
`

const ArrowIosDown= styled(ArrowIosDownwardOutline)`
  color: #7F96AC;
`;

const Span = styled.span`
  color: #333333;
`

const DropDown = () => {
  const handleMenuOne = () => {
    console.log('clicked one');
  };

  return (
    <Dropdown
      trigger={<IconButtonStyled> <ArrowIosDown size={16} /></IconButtonStyled>}
      menu={[
        <ButtonStyled onClick={handleMenuOne}><Span>خروج</Span></ButtonStyled>,
      ]}
    />
  );
};

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <DropdownParent>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <MenuStyled>
          {menu.map((menuItem, index) => (
            <ListStyled key={index}>
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </ListStyled>
          ))}
        </MenuStyled>
      ) : null}
    </DropdownParent>
  );
};

export default DropDown