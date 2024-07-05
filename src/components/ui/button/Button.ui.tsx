import styled from 'styled-components';

import type { ThemeType } from '@/constants/theme';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary';
  disabled?: boolean;
  theme: ThemeType;
};

const Button = styled.button<ButtonProps>`
  border-width: 1px;
  border-style: solid;
  border-radius: 100px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, variant }) => getBackgroundColor(theme, variant)};
  color: ${({ theme, variant }) => getColor(theme, variant)};
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

const getBackgroundColor = (theme: ThemeType, variant?: 'primary') => {
  switch (variant) {
    case 'primary':
      return theme.colors.primary;
    default:
      return theme.colors.primary;
  }
};

const getColor = (theme: ThemeType, variant?: 'primary') => {
  switch (variant) {
    case 'primary':
      return theme.colors.basic3;
    default:
      return theme.colors.basic3;
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
