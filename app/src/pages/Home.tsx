import { useEffect } from "react";
import { Button, Flex, Title } from "../components/_shared/styles";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchQuestions,
  selectCurrentCount,
  selectCurrentPage,
  selectErrorMessage,
  selectQuestions,
  selectRequestStatus,
} from "../store/reducers/questions.reducer";
import QuestionsTable from "../components/QuestionsTable";
import PageController from "../components/PageController";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const requestStatus = useAppSelector(selectRequestStatus);
  const questionList = useAppSelector(selectQuestions);
  const currentPage = useAppSelector(selectCurrentPage);
  const currentCount = useAppSelector(selectCurrentCount);
  const error = useAppSelector(selectErrorMessage);

  useEffect(() => {
    if (requestStatus === "idle") {
      dispatch(fetchQuestions({}));
    }

    if (requestStatus === "failed")
      alert("An error has occurred. Please refresh the page.");
    console.log("Err: ", error);
  }, [requestStatus, dispatch, error]);

  const questionsToShowIndexStart =
    currentPage === 1 ? 0 : 20 * (currentPage - 1) - 1;

  const questionsToShowIndexEnd =
    currentCount <= 20 * currentPage ? currentCount - 1 : 20 * currentPage - 1;

  return (
    <Flex direction="column">
      <Flex marginBottom="0.2em" alignSelf="center">
        <Title>HOME</Title>
        <Button
          fontSize="24px"
          width="1.5em"
          height="1.5em"
          borderRadius="50%"
          marginLeft="0.5em"
          onClick={() => navigate("/questions")}
        >
          +
        </Button>
      </Flex>
      <QuestionsTable
        rows={questionList.slice(
          questionsToShowIndexStart,
          questionsToShowIndexEnd
        )}
      />
      <PageController />
    </Flex>
  );
};

export default Home;
