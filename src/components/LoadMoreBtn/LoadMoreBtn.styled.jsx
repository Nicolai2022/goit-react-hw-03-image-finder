import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  font-size: 22px;
  line-height: 1.2;
  font-style: normal;
  font-weight: 500;
  background-color: #333000;
  color: #457622;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #326464;
    border: 1px solid #000;
    color: #862344;
  }
`;
