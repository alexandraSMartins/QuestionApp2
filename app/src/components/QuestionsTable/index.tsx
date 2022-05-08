import { Question } from "../../types/questions.types";
import { StyledTable, TBody, TD, TH, THead, TR } from "./styles";

interface Props {
  rows: Question[];
}

const questionsTableHeaders = ["Id", "Name", "Email", "Date", "Obs"];

const QuestionsTable = ({ rows }: Props) => {
  return (
    <StyledTable>
      <THead>
        <TR>
          {questionsTableHeaders.map((header) => (
            <TH key={header}>{header}</TH>
          ))}
        </TR>
      </THead>
      <TBody>
        {rows.map((row) => (
          <TR key={row.id}>
            <TD>{row.id}</TD>
            <TD>{row.name}</TD>
            <TD>{row.email}</TD>
            <TD>{new Date(row.date).toLocaleString("pt-PT")}</TD>
            <TD>{row.observations}</TD>
          </TR>
        ))}
      </TBody>
    </StyledTable>
  );
};

export default QuestionsTable;
