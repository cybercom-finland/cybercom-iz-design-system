import React from "react";
import { CustomerCards } from "../CustomerCards";
import {
  SDFeedbackData0,
  SDFeedbackData1,
  SDFeedbackData2,
  SDFeedbackData3,
  SDFeedbackData4,
} from "../../../components/CustomerCardExample";

const SdFeedbackCards = [
  SDFeedbackData0,
  SDFeedbackData1,
  SDFeedbackData2,
  SDFeedbackData3,
  SDFeedbackData4,
  SDFeedbackData3,
];

export const SDFeedbackServiceReport = () => (
  <CustomerCards cards={SdFeedbackCards} />
);
