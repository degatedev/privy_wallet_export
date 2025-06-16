import React from 'react';
import { PrivyProvider } from '@privy-io/react-auth';
import WalletExportApp from './components/WalletExportApp';
import './App.css';

function App() {
  return (
    <PrivyProvider
      appId={process.env.REACT_APP_PRIVY_APP_ID || 'cm2shws8a05knztox109p7szs'}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://your-logo-url',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        loginMethods: ['email'],
      }}
    >
      <WalletExportApp />
    </PrivyProvider>
  );
}

export default App; 