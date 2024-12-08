import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterPage from '@/src/app/ui/profile/auth/register/page';
import LoginPage from '@/src/app/ui/profile/auth/login/page';
import { styles } from '@/src/utils/UiUtils';

export function LoggedOutViewClass({ onLogin }: any) {
  const [isLoggedOutView, setIsLoggedOutView] = useState(true);

  // Fungsi untuk pindah tampilan (antara Login dan Register)
  const switchView = () => {
    setIsLoggedOutView(!isLoggedOutView);  // Ganti tampilan
  }
  return (
    <SafeAreaView style={styles.contentContainer}>
      {isLoggedOutView ? (
        <LoginPage onLogin={onLogin} onSwitchView={switchView} />
      ) : (
        <RegisterPage />
      )
      }
    </SafeAreaView >
  );
}

