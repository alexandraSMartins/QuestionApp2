import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const THead = styled.thead`
  background-color: gray;
  color: white;
`;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  &:nth-child(even) {
    margin-bottom: 20px;
    background-color: #ddd;
  }
`;

export const TH = styled.th`
  padding: 0.5em;
  text-align: left;
  font-size: 14px;
  border: 1px solid #ddd;
`;

export const TD = styled.td`
  padding: 0.5em;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
`;
