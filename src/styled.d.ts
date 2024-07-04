// src/styled.d.ts
import 'styled-components';
import type { ThemeType } from './theme';

declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}
