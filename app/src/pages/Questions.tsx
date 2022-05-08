import { useNavigate } from "react-router-dom";
import QuestionForm from "../components/QuestionForm";
import { Button, Flex, Title } from "../components/_shared/styles";

const Questions = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/")}>Back</Button>
      <Flex direction="column">
        <Flex marginBottom="0.2em" alignSelf="center">
          <Title>ADD NEW QUESTION</Title>
        </Flex>
        <QuestionForm />
      </Flex>
    </>
  );
};

export default Questions;
