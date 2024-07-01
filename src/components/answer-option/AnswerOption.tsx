import { AnswerButton, Checkbox, RoundAnswerButton } from './AnswerOption.ui';

import type { ReactNode } from 'react';

type AnswerOptionProps = {
  checked?: boolean;
  onClick?: () => void;
  showCheckbox?: boolean;
  disabled?: boolean;
  children: ReactNode;
  round?: boolean;
};

const AnswerOption = ({
  checked = false,
  onClick,
  showCheckbox = false,
  disabled = false,
  children,
  round = false
}: AnswerOptionProps) => {
  const ButtonComponent = round ? RoundAnswerButton : AnswerButton;
  return (
    <ButtonComponent checked={checked} onClick={onClick} disabled={disabled}>
      {children}
      {showCheckbox && <Checkbox checked={checked} readOnly />}
    </ButtonComponent>
  );
};

export default AnswerOption;
