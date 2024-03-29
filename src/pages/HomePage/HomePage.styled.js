import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    margin: 20px;
  }
  margin: 30px;
`;

export const TrendsList = styled.ul`
  @media (max-width: 768px) {
    gap: 10px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.h4`
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
  font-size: 25px;
  text-align: center;
  margin-bottom: 30px;
`;
