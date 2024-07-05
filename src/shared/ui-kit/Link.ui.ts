import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{ to: string }>`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.basic2};
  }
`;
