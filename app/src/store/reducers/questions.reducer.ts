import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";
import { addNewQuestion, getQuestionsList } from "../../services/questions";
import {
  NewQuestion,
  Question,
  QuestionList,
  RequestStatus,
} from "../../types/questions.types";

interface QuestionsState {
  currentPage: number;
  totalQuestions: number;
  questionsList: Question[];
  requestStatus: RequestStatus;
  error: string | undefined;
}

const initialState: QuestionsState = {
  currentPage: 1,
  totalQuestions: 0,
  questionsList: [],
  requestStatus: "idle",
  error: undefined,
};

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async ({ id, page }: { id?: string; page?: number }) => {
    const response = await getQuestionsList(id, page);
    return response.data;
  }
);

export const addQuestion = createAsyncThunk(
  "questions/add",
  async (newQuestion: NewQuestion) => {
    const response = await addNewQuestion(newQuestion);
    return response.data;
  }
);

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.requestStatus = "loading";
      })
      .addCase(
        fetchQuestions.fulfilled,
        (state, action: PayloadAction<QuestionList>) => {
          state.requestStatus = "succeeded";
          state.questionsList = state.questionsList.concat(
            action.payload.questions
          );
          state.totalQuestions = action.payload.count;
        }
      )
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.requestStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(addQuestion.fulfilled, (state, action) => {
        state.questionsList = [
          { ...action.payload, id: action.payload._id },
        ].concat(state.questionsList);
        state.totalQuestions = state.totalQuestions + 1;
      })
      .addCase(addQuestion.rejected, (state, action) => {
        state.requestStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = questionsSlice.actions;

export const selectQuestions = (state: RootState) =>
  state.questions.questionsList;
export const selectCurrentPage = (state: RootState) =>
  state.questions.currentPage;
export const selectRequestStatus = (state: RootState) =>
  state.questions.requestStatus;
export const selectTotalCount = (state: RootState) =>
  state.questions.totalQuestions;
export const selectCurrentCount = (state: RootState) =>
  state.questions.questionsList.length;
export const selectErrorMessage = (state: RootState) => state.questions.error;

export default questionsSlice.reducer;
