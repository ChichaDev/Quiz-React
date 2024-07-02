// / <reference types="vite/client" />
import type * as React from 'react';
import type * as StyledComponents from 'styled-components';

export interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType | undefined;
  css?:
    | StyledComponents.CSSObject
    | StyledComponents.FlattenSimpleInterpolation
    | string
    | undefined;
}
