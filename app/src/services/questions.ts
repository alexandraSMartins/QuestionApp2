import { NewQuestion } from "../types/questions.types";
import { handleRequest } from "./client";

const url = process.env.REACT_APP_SERVER_URL + "/questions";
export const getQuestionsList = async (id?: string, page?: number) => {
  let listURL = url;

  if (id) {
    listURL += `?id=${id}`;
  } else if (page) {
    listURL += `?page=${page}`;
  }

  return await handleRequest(listURL, "GET");
};

export const addNewQuestion = async (data: NewQuestion) => {
  return await handleRequest(url, "POST", data);
};
