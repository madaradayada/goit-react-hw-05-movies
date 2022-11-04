import styled from 'styled-components';

export const MovieWrapp = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  position: relative;
  border-radius: 5px;
  list-style-type: none;
  opacity: 1;

transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    opacity: 0.9;
    transform: scale(1.025);
    }
  & a {
    text-decoration: none;
    color: #032541;
  }
  & p {
    font-weight: 600;
  }
  & img {
    width: 300px;
   
  }
`;