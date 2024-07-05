import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useApi } from '@/hooks/useApi';
import { Container } from '@/shared/ui-kit/Container.ui';
import { StyledSection } from '@/shared/ui-kit/Section.ui';
import CustomButton from '@/shared/ui-kit/button/Button';
import Button from '@/shared/ui-kit/button/Button.ui';
import { convertLocalStorageToCSV } from '@/shared/utils/convertToCSV';

import CheckImg from '../img/checkmark.svg';
import DownloadImg from '../img/download.svg';

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledHeading = styled.h2`
  font-size: 36px;
  font-weight: 400;
  line-height: 43.65px;
  text-align: center;
  color: ${({ theme }) => theme.colors.basic6};
  margin: 0;
`;

const StyledDescription = styled.div`
  color: ${({ theme }) => theme.colors.basic6};
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  line-height: 25px;
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.basic6};
`;

const DownloadButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.basic6};
  font-size: 17px;
  font-weight: 600;
  line-height: 25px;
  text-align: center;
`;

const Success: React.FC = () => {
  const navigate = useNavigate();
  const { quizRepository } = useApi();

  const handleRetakeQuiz = () => {
    quizRepository.deleteQuizData('quizResults');
    quizRepository.deleteQuizData('selectedLanguage');

    navigate('/');
  };

  function handleDownloadCSV() {
    convertLocalStorageToCSV('quizResults', 'quiz_results.csv');
  }
  return (
    <StyledSection>
      <Container>
        <SuccessContainer>
          <div>
            <StyledHeading>{t('SuccessPage.heading')}</StyledHeading>
            <StyledDescription>{t('SuccessPage.description')}</StyledDescription>
          </div>
          <div>
            <img src={CheckImg} alt='download' />
          </div>
          <StyledFooter>
            <DownloadButton onClick={handleDownloadCSV}>
              <img src={DownloadImg} alt='download' />
              {t('SuccessPage.downLoadButton')}
            </DownloadButton>
          </StyledFooter>
          <CustomButton onClick={handleRetakeQuiz}>
            {t('SuccessPage.retakeButton')}
          </CustomButton>
        </SuccessContainer>
      </Container>
    </StyledSection>
  );
};

export default Success;
