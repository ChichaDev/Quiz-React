import { useEffect, useState } from 'react';

import type { Answer } from '@/types';

const useMountAnimation = (answers: Answer[]) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    setIsAnimated(false);
    setTimeout(() => {
      setIsAnimated(true);
    }, 0);
    setKey((prevKey) => prevKey + 1);
  }, [answers]);

  return { isAnimated, key };
};

export default useMountAnimation;
