import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  width: 80%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  font-size: 12px;
  color: gray;
`;



export const LinkIcon = styled(Link)`
  width: auto;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  font-size: 12px;
  color: #7F96AC;
`;

export const LinkBlue = styled(Link)`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  text-decoration: none;
  font-size: 0.9rem;
  color: #4183C4;
`;



