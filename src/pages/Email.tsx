import { useState } from 'react';

import EmailInput from '@/components/ui/email-input/EmailInput';
import Loading from '@/components/ui/status/Loading';
import { Container } from '@/components/ui-kit/Container.ui';
import { StyledSection } from '@/components/ui-kit/Section.ui';

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
