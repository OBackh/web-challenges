import styled from "styled-components";
import StyledButton from "./StyledButton";

const PrimaryButton = styled(StyledButton)`
  background-color: #ff00ff; /* red */
  border: 2px solid #ff0000;
  font-width: bold;
  &:active {
    transform: scale(0.9); /* Vergrößerung um 10% beim Klicken */
  }
`;

export default PrimaryButton;
