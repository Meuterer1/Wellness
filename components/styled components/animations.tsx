import { keyframes } from "styled-components";

export const animateOpacity = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
