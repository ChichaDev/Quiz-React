import { t } from 'i18next';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, StyledH2, StyledP } from '@/constants/theme';
import { useApi } from '@/hooks/useApi';
import { useQuiz } from '@/hooks/useQuiz';
import { validateEmail } from '@/utils/validateEmail';

import CustomButton from '../button/Button';

import {
  StyledErrorMessage,
  StyledFormContainer,
  StyledInput,
  StyledFooter,
  StyledForm,
  StyledPrivacySpan
} from './EmailInput.ui';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { quizRepository } = useApi();

  const navigate = useNavigate();
  const { totalQuestions } = useQuiz();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(t('EmailPage.error'));
    } else {
      setError('');
      const key = 'quizResults';
      const emailData = {
        id: totalQuestions + 1,
        order: totalQuestions + 1,
        title: 'Email',
        type: 'email',
        answer: email
      };

      const existingResults = quizRepository.fetchQuizData('quizResults');

      const updatedResults = [...existingResults, emailData];

      quizRepository.saveQuizData(key, updatedResults);
      navigate('/success');
    }
  };

  return (
    <Container>
      <StyledFormContainer>
        <>
          <StyledH2>{t('EmailPage.heading')}</StyledH2>
          <StyledP>{t('EmailPage.description')}</StyledP>
        </>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('EmailPage.placeholder')}
            iserror={!!error}
          />
          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        </StyledForm>
        <StyledFooter>
          <StyledPrivacySpan>{t('EmailPage.terms')}</StyledPrivacySpan>
        </StyledFooter>
        <CustomButton disabled={email.length === 0} onClick={handleSubmit}>
          Next
        </CustomButton>
      </StyledFormContainer>
    </Container>
  );
};

export default EmailInput;
