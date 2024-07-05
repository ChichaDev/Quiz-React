import { useState } from 'react';

import { Container } from '@/shared/ui-kit/Container.ui';
import { StyledSection } from '@/shared/ui-kit/Section.ui';
import EmailInput from '@/shared/ui-kit/email-input/EmailInput';
import Loading from '@/shared/ui-kit/status/Loading';

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
