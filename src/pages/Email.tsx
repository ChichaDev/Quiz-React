import { useState } from 'react';

import EmailInput from '@/components/ui/email-input/EmailInput';
import Loading from '@/components/ui/status/Loading';
import { Container, StyledSection } from '@/constants/theme';

const Email: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <StyledSection>
      <Container>
        {loadingComplete ? (
          <EmailInput />
        ) : (
          <Loading onLoadingComplete={handleLoadingComplete} />
        )}
      </Container>
    </StyledSection>
  );
};

export default Email;
