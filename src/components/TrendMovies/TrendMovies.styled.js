import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendMovie = styled.li`
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
