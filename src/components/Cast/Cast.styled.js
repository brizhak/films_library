import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    margin: 20px;
  }
  margin: 30px;
`;

export const CastList = styled.ul`
  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 30px;
  }
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Name = styled.p`
  @media (max-width: 768px) {
    font-size: 18px;
  }
  font-size: 20px;
  text-align: center;
`;

export const ListItem = styled.li`
  width: 150px;
`;
