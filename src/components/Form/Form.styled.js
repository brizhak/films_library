import styled from 'styled-components';

export const Input = styled.input`
  font-size: 18px;
  border-width: 0;
  padding-inline: 0;
  padding-block: 0;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 25px;

  @media (max-width: 460px) {
    width: 100%;
    height: 40px;
  }
  @media (min-width: 461px) {
    width: 300px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;

export const SearchForm = styled.form`
  @media (max-width: 460px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 461px) {
    height: 40px;
  }
  gap: 10px;
  display: flex;
`;

export const Button = styled.button`
  font-size: 18px;
  background-color: #97010e;
  border: none;
  color: inherit;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  width: 100px;
  height: 40px;

  &.active,
  &.hover {
    background-color: #f34c3f;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;
