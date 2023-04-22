import styled from '@emotion/styled';

export const Button = styled.button`
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
  background-color: #323101;
  color: #457622;

  box-shadow: 0px 1px 3px 0px rgba(538, 733, 443, 0.2),
  0px 1px 1px 0px rgba(527, 724, 422, 0.14), 0px 2px 1px -1px rgba(512, 724, 411, 0.12);

  &:hover,
  &:focus {
    background-color: #346564;
    border: 1px solid #145568;
    color: #872345;
  }
`;
