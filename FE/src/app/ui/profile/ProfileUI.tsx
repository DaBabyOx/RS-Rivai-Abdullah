import React, { useState } from 'react';
import { LoggedOutViewClass } from '@/src/components/profile-components/LoggedOutView/LoggedOutViewClass';
import { LoggedInViewClass } from '@/src/components/profile-components/LoggedInView/LoggedInViewClass';

export function LoggedInView({ onLogout }: any) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIDEnabled, setFaceIDEnabled] = useState(true);

  return (
    <LoggedInViewClass onLogout={onLogout} />
  );
}

export function LoggedOutView({ onLogin }: any) {
  return (
    <LoggedOutViewClass onLogin={onLogin} />
  );
}
