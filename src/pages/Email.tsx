import { useState } from 'react';

import EmailForm from '@/components/ui/email-form/EmailForm';
import Loading from '@/components/ui/status/Loading';

const Email: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
      {loadingComplete ? (
        <EmailForm />
      ) : (
        <Loading onLoadingComplete={handleLoadingComplete} />
      )}
    </div>
  );
};

export default Email;
