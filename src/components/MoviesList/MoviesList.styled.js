import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  @media (min-width: 769px) {
    margin-top: 30px;
  }
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: #f34c3f;
  }
`;
