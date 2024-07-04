import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CustomButton from '@/components/ui/button/Button';
import Button from '@/components/ui/button/Button.ui';
import { Container, StyledSection } from '@/constants/theme';
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
`;

const StyledHeading = styled.h2`
  font-family: Niconne;
  font-size: 36px;
  font-weight: 400;
  line-height: 43.65px;
  text-align: center;
  color: var(--color-basic-6);
  margin: 0;
`;

const StyledDescription = styled.div`
  color: var(--color-basic-6);
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
  color: var(--color-basic-6);
`;

const DownloadButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: transparent;
  border: none;
  color: var(--color-basic-6);
  font-size: 17px;
  font-weight: 600;
  line-height: 25px;
  text-align: center;
`;

const Success: React.FC = () => {
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    deleteFromLocalStorage('quizResults');
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
