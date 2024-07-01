// / <reference types="vite/client" />
import type * as StyledComponents from 'styled-components';

declare module '*.svg' {
  const content: any;
  export default content;
  export const ReactComponent: any;
}

export interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType | undefined;
  css?:
    | StyledComponents.CSSObject
    | StyledComponents.FlattenSimpleInterpolation
    | string
    | undefined;
}

// images.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}
