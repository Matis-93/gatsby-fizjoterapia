import React, { RefObject } from "react";
import "./Title.css";

type Props = {
  children: React.ReactNode;
  id?: string;
  refer: RefObject<HTMLDivElement>;
};

const Title = ({ children, id, refer }: Props) => (
  <h1 className="Title" id={id} ref={refer}>
    {children}
  </h1>
);

export default Title;
