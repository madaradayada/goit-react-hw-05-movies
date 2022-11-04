import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  width: 1280px;
  align-items: center;
  justify-content: center; 
  padding: 8px 0;
  margin-bottom: 16px;
  background-image: radial-gradient(circle, #5c0067 0%, #00d4ff 100%);
   box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 600;  
  &.active {
    color: white;
    background-color: #032541;
  }
  :hover:not(active),
  :focus-visible:not(.active) {
    color: #a8b5c0;
  }
`;