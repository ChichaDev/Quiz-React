// src/context/ApiContext.tsx
import React, { createContext, useMemo } from 'react';

import { LocalStorageAdapter, StorageQuizRepository } from '@/api';

import type { ReactNode } from 'react';

interface ApiContextProps {
  quizRepository: StorageQuizRepository;
}

export const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const quizRepository = useMemo(
    () => new StorageQuizRepository(new LocalStorageAdapter()),
    []
  );

  return <ApiContext.Provider value={{ quizRepository }}>{children}</ApiContext.Provider>;
};
