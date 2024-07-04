import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const theme = {
  colors: {
    primary: '#e4229c',
    basic1: '#f2f3f5',
    basic2: '#c4c8cc',
    basic3: '#ffffff',
    basic4: '#e8eaf2',
    basic5: '#b6b8c3',
    basic6: '#ececfb',
    bgColorBasic: '#1f002b',
    inputColorPrimary: '#36173d',
    inputColorSecondary: '#e4229b',
    inputEmailPrimary: '#492752',
    inputEmailErrorBorder: '#d0006e'
  }
};

export type ThemeType = typeof theme;

export const StyledSection = styled.section`
  background-color: var(--bg-color-basic);
  padding-top: 15px;
`;

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
`;

export const StyledH1 = styled.h1`
  font-size: 36px;
  line-height: 28px;
  color: var(--color-basic-1);
  text-align: center;
`;

export const StyledH2 = styled.h2`
  color: var(--color-basic-1);
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
  text-align: center;
  margin: 0;
`;

export const StyledP = styled.p`
  color: var(--color-basic-2);
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin: 0;
`;

export const StyledLink = styled(Link)<{ to: string }>`
  color: var(--primary-color);
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  &:hover {
    color: var(--color-basic-2);
  }
`;
