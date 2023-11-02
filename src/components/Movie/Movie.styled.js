import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 5px;
  transition: all 0.3s;

  &.active {
    background-color: #97010e;
    font-size: 25px;
  }
`;

export const Container = styled.div`
  @media (max-width: 460px) {
    margin: 20px auto 20px auto;
  }
  @media (min-width: 461px) {
    margin: 40px;
  }
`;

export const LinkContainer = styled.div`
  margin-bottom: 20px;
`;

export const BackLink = styled(Link)`
  padding: 5px;
  background-color: #97010e;
  transition: all 0.3s;

  &.hover {
    background-color: #f34c3f;
  }
`;

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 460px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
  }
  @media (min-width: 461px) {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 375px;
  border-radius: 25px;
`;

export const Title = styled.h3`
  font-size: 25px;
  padding-bottom: 20px;
`;

export const Rating = styled.p`
  margin-bottom: 10px;
`;

export const Genres = styled.h4`
  margin-bottom: 5px;
`;

export const ListGenres = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Overview = styled.h4`
  margin-bottom: 5px;
`;

export const InfoList = styled.ul`
  height: 30px;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;
