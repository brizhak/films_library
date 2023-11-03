import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    margin: 20px;
  }
  margin: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ListItem = styled.li`
  @media (max-width: 768px) {
    font-size: 18px;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;
