import { FormEvent, useEffect, useState } from "react";
import { NewQuestion } from "../../types/questions.types";
import { Form, FormContainer, Input, Submit, Textarea } from "./styles";
import { Text } from "../_shared/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addQuestion,
  selectErrorMessage,
  selectRequestStatus,
} from "../../store/reducers/questions.reducer";

const QuestionForm = () => {
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const error = useAppSelector(selectErrorMessage);
  const requestStatus = useAppSelector(selectRequestStatus);

  useEffect(() => {
    if (requestStatus === "failed")
      alert("An error has occurred. Please refresh the page.");
    console.log("Err: ", error);
  }, [requestStatus, error]);

  const handleOnInput = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.setCustomValidity("");
  };

  const handleOnNameInvalid = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.setCustomValidity(
      "Please fill out the name of the question."
    );
  };

  const handleOnEmailInvalid = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.setCustomValidity("Please enter a valid email.");
  };

  const handleDateValidity = (e: FormEvent<HTMLInputElement>) => {
    //TODO: Ideally, Dates should be treated in UTC. This is done in a very simplistic way
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    const inputDate = new Date(e.currentTarget.value);

    if (inputDate < dayAfterTomorrow) {
      e.currentTarget.setCustomValidity("Please set a date after tomorrow.");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const newQuestion: NewQuestion = {
      name: e.currentTarget.questionname.value,
      email: e.currentTarget.questionemail.value,
      date: new Date(e.currentTarget.questiondate.value),
      observations: e.currentTarget.questionobs.value,
    };

    await dispatch(addQuestion(newQuestion));

    setIsSubmitting(false);
    e.currentTarget?.reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="question-name">Question Name</label>
        <Input
          id="questionname"
          type="text"
          aria-label="question name"
          required
          placeholder="Type name here..."
          onInvalid={handleOnNameInvalid}
          onInput={handleOnInput}
        />
        <label htmlFor="question-email">Email</label>
        <Input
          id="questionemail"
          type="email"
          aria-label="email"
          required
          placeholder="Type email here..."
          onInvalid={handleOnEmailInvalid}
          onInput={handleOnInput}
        />
        <label htmlFor="question-date">Date</label>
        <Input
          id="questiondate"
          type="date"
          aria-label="date"
          onBlur={handleDateValidity}
          onInput={handleOnInput}
        />
        <label htmlFor="question-obs">Observations</label>
        <Textarea
          id="questionobs"
          aria-label="observations"
          placeholder="Type observations here..."
        />{" "}
        {isSubmitting ? (
          <Text>Submitting</Text>
        ) : (
          <Submit id="submit" type="submit" value="Submit" />
        )}
      </Form>
    </FormContainer>
  );
};

export default QuestionForm;
