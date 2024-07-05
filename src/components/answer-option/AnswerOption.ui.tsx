import styled from 'styled-components';

type AnswerButtonProps = {
  checked?: boolean;
};
// prettier-ignore
export const StyledAnswerButton = styled.button<AnswerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-radius: 16px;
  border-color: ${({ theme, checked }) => (checked ?
    theme.colors.inputColorSecondary :
    theme.colors.inputColorPrimary)};
   background-color: ${({ theme, checked }) => (checked ?
    'rgba(228, 34, 155, 0.2)' :
    theme.colors.inputColorPrimary)};
  color: ${({ theme }) => theme.colors.basic3};
  padding: 21px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 630px) {
    justify-content: space-between;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-left: 8px;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    width: 5px;
    height: 10px;
    border: solid ${({ theme }) => theme.colors.basic3};
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(34, 139, 230, 0.5);
  }
`;

type RoundAnswerButtonProps = AnswerButtonProps;

export const StyledRoundAnswerButton = styled(StyledAnswerButton)<RoundAnswerButtonProps>`
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;
