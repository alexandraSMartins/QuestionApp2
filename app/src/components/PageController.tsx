import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchQuestions,
  selectCurrentCount,
  selectCurrentPage,
  selectTotalCount,
  setCurrentPage,
} from "../store/reducers/questions.reducer";
import { Button, Flex, Text } from "./_shared/styles";

const PageController = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const totalCount = useAppSelector(selectTotalCount);
  const currentCount = useAppSelector(selectCurrentCount);

  const goToPreviousPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const goToNextPage = async () => {
    if (currentCount <= 20 * currentPage)
      await dispatch(fetchQuestions({ page: currentPage + 1 }));

    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <Flex marginTop="1em" alignSelf="center">
      <Text>Page {currentPage}</Text>
      <Button
        marginLeft="0.5em"
        disabled={currentPage === 1}
        onClick={goToPreviousPage}
      >
        Previous
      </Button>
      <Button
        marginLeft="1em"
        disabled={20 * currentPage >= totalCount}
        onClick={goToNextPage}
      >
        Next
      </Button>
    </Flex>
  );
};

export default PageController;
