import { StyledButton } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => (
  <StyledButton>{children}</StyledButton>
);
