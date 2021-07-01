import React from "react";
import { CustomerCards } from "../CustomerCards";
import {
  KammiSC1,
  KammiSC2,
  KammiSC3,
  KammiSC4,
  KammiSC5,
} from "../../../components/CustomerCardExample";

const KammiCards = [
  KammiSC1,
  KammiSC2,
  KammiSC3,
  KammiSC4,
  KammiSC4,
  KammiSC4,
  KammiSC5,
  KammiSC1,
  KammiSC1,
];

export const KammiSlasServiceReport = () => (
  <CustomerCards cards={KammiCards} />
);
