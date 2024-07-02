import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Container, StyledH2, StyledP } from '@/constants/theme';
import useQuestion from '@/hooks/useQuestion';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/getFromLocalStorage';

import CustomButton from '../ui/button/Button';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Input = styled.input<{ iserror: boolean }>`
  padding: 21px 20px;
  margin: 10px 0;
  border: 1px solid
    ${({ hasError }) =>
      hasError ? 'var(--input-email-error-border)' : 'var(--input-email-primary)'};
  border-radius: 16px;
  background-color: var(--input-email-primary);
  color: var(--color-basic-3);
  font-size: 17px;
  line-height: 24px;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
`;

const StyledFooter = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: var(--color-basic-5);
`;

const StyledPrivacySpan = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: var(--primary-color);
`;

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { totalQuestions } = useQuestion();
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      const key = 'quizResults';
      const emailData = {
        order: totalQuestions + 1,
        title: 'Email',
        type: 'email',
        answer: email
      };

      const existingResults = getFromLocalStorage('quizResults', []);

      const updatedResults = [...existingResults, emailData];

      setToLocalStorage(key, updatedResults);
      navigate('/success');
    }
  };

  return (
    <Container>
      <FormContainer>
        <>
          <StyledH2>Email</StyledH2>
          <StyledP>Enter your email to get full access</StyledP>
        </>

        <form onSubmit={handleSubmit}>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your email'
            hasError={!!error}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
        <StyledFooter>
          By continuing I agree with <StyledPrivacySpan>Privacy policy</StyledPrivacySpan>{' '}
          and <br /> <StyledPrivacySpan>Terms of use</StyledPrivacySpan>.
        </StyledFooter>
        <CustomButton disabled={email.length === 0} onClick={handleSubmit}>
          Next
        </CustomButton>
      </FormContainer>
    </Container>
  );
};

export default EmailInput;
