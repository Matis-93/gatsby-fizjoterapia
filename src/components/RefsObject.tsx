import { RefObject } from "react";

type RefsObj = {
  workingMethods: RefObject<HTMLDivElement>;
  canIHelpU: RefObject<HTMLDivElement>;
  visitAdvice: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
  aboutMe: RefObject<HTMLDivElement>;
  facebook: RefObject<HTMLDivElement>;
  price: RefObject<HTMLDivElement>;
};

export default RefsObj;
