import styled from 'styled-components';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary';
  disabled?: boolean;
};

const Button = styled.button<ButtonProps>`
  border-width: 1px;
  border-style: solid;
  border-radius: 100px;
  border-color: var(--primary-color);
  background-color: ${({ variant }) => getBackgroundColor(variant)};
  color: ${({ variant }) => getColor(variant)};
  padding: ${({ size }) => getPadding(size)};
  font-family: inherit;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active,
  &:focus {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const getBackgroundColor = (variant?: 'primary') => {
  switch (variant) {
    case 'primary':
      return 'var(--primary-color)';
    default:
      return 'var(--primary-color)';
  }
};

const getColor = (variant?: 'primary') => {
  switch (variant) {
    case 'primary':
      return 'var(--color-basic-3)';
    default:
      return 'var(--color-basic-3)';
  }
};

const getPadding = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return '8px 16px';
    case 'medium':
      return '12px 24px';
    case 'large':
      return '16px 124px';
    default:
      return '12px 24px';
  }
};

export default Button;
