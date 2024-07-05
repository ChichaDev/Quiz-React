import Button from './Button.ui';

import type { ReactNode, MouseEventHandler } from 'react';

type CustomButtonProps = {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CustomButton = ({
  children,
  size = 'large',
  variant = 'primary',
  disabled = false,
  onClick
}: CustomButtonProps) => {
  return (
    <Button size={size} variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
