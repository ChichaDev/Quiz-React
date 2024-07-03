import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, StyledH2, StyledP } from '@/constants/theme';
import useQuestion from '@/hooks/useQuestion';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/getFromLocalStorage';
import { validateEmail } from '@/utils/validateEmail';

import CustomButton from '../ui/button/Button';

import {
  StyledErrorMessage,
  StyledFormContainer,
  StyledInput,
  StyledFooter,
  StyledPrivacySpan
} from './EmailInput.ui';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();
  const { totalQuestions } = useQuestion();

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
      <StyledFormContainer>
        <>
          <StyledH2>Email</StyledH2>
          <StyledP>Enter your email to get full access</StyledP>
        </>

        <form onSubmit={handleSubmit}>
          <StyledInput
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your email'
            hasError={!!error}
          />
          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        </form>
        <StyledFooter>
          By continuing I agree with <StyledPrivacySpan>Privacy policy</StyledPrivacySpan>{' '}
          and <br /> <StyledPrivacySpan>Terms of use</StyledPrivacySpan>.
        </StyledFooter>
        <CustomButton disabled={email.length === 0} onClick={handleSubmit}>
          Next
        </CustomButton>
      </StyledFormContainer>
    </Container>
  );
};

export default EmailInput;
