
import { typography } from '../shared/styles';

export const ElementType= {
  h1: {
    htmlTag:"h1",
    defaultSize: typography.size.l1,
    defaultWeight: typography.weight.bold
  },
  h2: {
    htmlTag: "h2",
    defaultSize: typography.size.m3,
    defaultWeight: typography.weight.bold
  },
  h3: {
    htmlTag: "h3",
    defaultSize: typography.size.m2,
    defaultWeight: typography.weight.bold
  },
  h4: {
    htmlTag: "h4",
    defaultSize: typography.size.m1,
    defaultWeight: typography.weight.bold
  },
  body1: {
    htmlTag:"p",
    defaultSize: typography.size.s3,
    defaultWeight: typography.weight.regular
  },
  body2: {
    htmlTag:"p",
    defaultSize: typography.size.s2,
    defaultWeight: typography.weight.semibold
  },
};