import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CustomButton from '@/components/ui/button/Button';
import Button from '@/components/ui/button/Button.ui';
import { Container } from '@/components/ui-kit/Container.ui';
import { StyledSection } from '@/components/ui-kit/Section.ui';
import { convertLocalStorageToCSV } from '@/utils/convertToCSV';
import { deleteFromLocalStorage } from '@/utils/localStorageUtils';

import CheckImg from '../img/checkmark.svg';
import DownloadImg from '../img/download.svg';

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  min-height: 100vh;
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

  const handleRetakeQuiz = () => {
    deleteFromLocalStorage('quizResults');
    deleteFromLocalStorage('selectedLanguage');

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
