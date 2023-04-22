import styled from '@emotion/styled';

export const SearchbarContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding: 20px;
  color: #124754;
  background-color: #159752;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: transparent;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 3px;
  padding: 5px;
  background-color: #735131;
  opacity: 0.6;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &: hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  padding: 0px;
  color: #010000;
  background-color: transparent;
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 32px;
  font: inherit;
  font-size: 20px;
  border: 0;
  border-radius: 3px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #626790;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
