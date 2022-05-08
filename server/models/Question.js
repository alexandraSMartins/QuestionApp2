//Import functions
import {
  emailValidator,
  dateValidator,
  dateNextDayValidator,
} from "../utils/validation/validators.js";
import {
  INVALID_EMAIL,
  INVALID_DATE,
  INVALID_DATE_NEXTDAY,
  REQUIRED_NAME,
  REQUIRED_EMAIL,
  REQUIRED_DATE,
} from "../utils/validation/validationErrors.js";
import mongoose from "mongoose";

var emailValidators = [{ validator: emailValidator, message: INVALID_EMAIL }];

var dateValidators = [
  { validator: dateValidator, message: INVALID_DATE },
  {
    validator: dateNextDayValidator,
    message: INVALID_DATE_NEXTDAY,
  },
];

const QuestionSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, REQUIRED_NAME],
  },
  email: {
    type: String,
    required: [true, REQUIRED_EMAIL],
    validate: emailValidators,
  },
  date: {
    type: Date,
    required: [true, REQUIRED_DATE],
    validate: dateValidators,
  },
  observations: {
    type: String,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("questions", QuestionSchema);
