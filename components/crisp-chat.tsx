'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('252b11e7-89d8-4437-af11-f974e28d6343');
  }, []);

  return null;
};
