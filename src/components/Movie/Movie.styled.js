import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 5px 10px;
  transition: all 0.3s;
  border-radius: 25px;

  &.active {
    background-color: #97010e;
  }
`;

export const Container = styled.div`
  @media (max-width: 768px) {
    margin: 20px;
  }
  margin: 30px;
`;

export const LinkContainer = styled.div`
  margin-bottom: 20px;
`;

export const BackLink = styled(Link)`
  &.hover {
    color: #f34c3f;
  }
`;

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
  }
  @media (min-width: 769px) {
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
  text-align: center;
`;

export const Description = styled.p`
  @media (max-width: 768px) {
    font-size: 18px;
  }
  font-size: 20px;
`;
export const Rating = styled.p`
  @media (max-width: 768px) {
    font-size: 18px;
  }
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ItemGenre = styled.li`
  @media (max-width: 768px) {
    font-size: 18px;
  }
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Genres = styled.h4`
  margin-bottom: 5px;
`;

export const ListGenres = styled.ul`
  display: flex;
  column-gap: 10px;
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

export const AddInfo = styled.h2`
  @media (max-width: 768px) {
    font-size: 20px;
  }

  font-size: 25px;
`;
