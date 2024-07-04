import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
// prettier-ignore
export const StyledInput = styled.input<{ iserror: boolean }>`
  padding: 21px 20px;
  margin: 10px 0;
  border: 1px solid
    ${({ iserror }) => (iserror ?
    'var(--input-email-error-border)' :
    'var(--input-email-primary)')};
  border-radius: 16px;
  background-color: var(--input-email-primary);
  color: var(--color-basic-3);
  font-size: 17px;
  line-height: 24px;
`;

export const StyledErrorMessage = styled.div`
  color: red;
  text-align: center;
`;

export const StyledFooter = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: var(--color-basic-5);
`;

export const StyledPrivacySpan = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: var(--primary-color);
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
