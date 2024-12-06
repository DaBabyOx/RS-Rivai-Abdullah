import React, { useState } from 'react';
import { LoggedOutViewClass } from '../../profile-components/LoggedOutViewClass';
import { LoggedInViewClass } from '../../profile-components/LoggedInViewClass';


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
