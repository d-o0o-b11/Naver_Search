import React from "react";
import { useMediaQuery } from "react-responsive";

// hook 사용 > 하나의 컴포넌트
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:840px)",
  });
  return <>{isMobile && children}</>;
};

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:841px)",
  });
  return <>{isPc && children}</>;
};
