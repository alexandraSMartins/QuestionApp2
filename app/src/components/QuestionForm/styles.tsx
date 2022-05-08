import styled from "styled-components";

export const FormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  max-width: 800px;
  align-self: center;
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:not(:placeholder-shown):invalid {
    border: red solid 2px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
`;

export const Submit = styled.input`
  width: 6em;
  height: 2em;
  background-color: gray;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 2px;
  border-radius: 4px;
  transition-duration: 0.4s;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: lightgray;
  }
  &:hover {
    background-color: lightgray;
  }
`;
