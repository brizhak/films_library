import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  @media (min-width: 768px) {
    font-size: 25px;
  }

  padding: 10px 20px;
  display: inline-block;
  transition: all 0.3s;
  border-radius: 25px;

  &.active {
    background-color: #97010e;
  }
`;

export const Container = styled.div`
  background-color: #5a6b5d;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 80px;
  margin: 0 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #e1e1e1;
`;
