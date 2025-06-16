import React, { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';

function WalletExportApp() {
  const { ready, authenticated, user, login, logout, exportWallet } = usePrivy();
  const [status, setStatus] = useState('');
  const [isExporting, setIsExporting] = useState(false);

  // Check if user is authenticated
  const isAuthenticated = ready && authenticated;
  
  // Check if user has an embedded wallet
  const hasEmbeddedWallet = user?.linkedAccounts?.find(
    (account) =>
      account.type === 'wallet' &&
      account.walletClient === 'privy' &&
      account.chainType === 'ethereum'
  );

  // Get wallet address
  const walletAddress = hasEmbeddedWallet?.address;

  const handleLogin = async () => {
    try {
      setStatus('');
      await login();
    } catch (error) {
      setStatus(`Login failed: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      setStatus('');
      await logout();
    } catch (error) {
      setStatus(`Logout failed: ${error.message}`);
    }
  };

  const handleExportWallet = async () => {
    try {
      setIsExporting(true);
      setStatus('');
      await exportWallet();
      setStatus('Wallet export modal opened successfully!');
    } catch (error) {
      setStatus(`Export failed: ${error.message}`);
    } finally {
      setIsExporting(false);
    }
  };

  if (!ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <h1>Loading...</h1>
            <p>Initializing Privy...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2>DeGate Email Login(Privy) Wallet Export Tool</h2>
        </div>

        {!isAuthenticated ? (
          <div>
            <p>Please login with your email to access your privy wallet.</p>
            <button className="button" onClick={handleLogin}>
              Login with Email
            </button>
          </div>
        ) : (
          <div>
            <div className="wallet-info">
              <h3>👋 Welcome, {user.email?.address || 'User'}!</h3>
              
              {hasEmbeddedWallet ? (
                <div>
                  <p><strong>✅ Embedded Wallet Found</strong></p>
                  <p>Wallet Address:</p>
                  <div className="wallet-address">
                    {walletAddress}
                  </div>
                  
                  <button 
                    className="button export" 
                    onClick={handleExportWallet}
                    disabled={isExporting}
                  >
                    {isExporting ? 'Opening Export...' : '📤 Export Private Key'}
                  </button>
                </div>
              ) : (
                <div>
                  <p><strong>⚠️ No Embedded Wallet Found</strong></p>
                  <p>
                    An embedded wallet should be created automatically when you login. 
                    Please try logging out and logging back in.
                  </p>
                </div>
              )}
            </div>

            <button className="button secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}

        {status && (
          <div className={`status-message ${status.includes('failed') || status.includes('Error') ? 'error' : 'success'}`}>
            {status}
          </div>
        )}

        <div className="instructions">          
          <h3 className="security-title">🔒 Security Notes:</h3>
          <ul>
            <li>Never share your private key with anyone</li>
            <li>The private key gives full access to your wallet</li>
            <li>
            Securely export your embedded wallet private key to use with MetaMask, 
            Phantom, or other wallet applications.
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WalletExportApp; 