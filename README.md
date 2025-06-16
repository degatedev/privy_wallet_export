# Privy Wallet Export

A React application that allows users to login with email via Privy and export their embedded wallet private keys for use with MetaMask, Phantom, or other wallet applications.

## Features

- 📧 Email-based authentication via Privy
- 🔐 Secure private key export
- 💼 Embedded wallet creation
- 📱 Responsive design
- 🚀 Ready for GitHub Pages deployment

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   REACT_APP_PRIVY_APP_ID=cm2shws8a05knztox109p7szs
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/privy_export"
   ```

2. Build and deploy:
   ```bash
   npm run deploy
   ```

## How to Use

1. Visit the application
2. Click "Login with Email"
3. Enter your email and complete authentication
4. Once logged in, your embedded wallet will be created automatically
5. Click "Export Private Key" to open the export modal
6. Copy your private key and import it into MetaMask or other wallets

## Security Notes

- Never share your private key with anyone
- Store private keys securely offline if needed
- The private key gives full access to your wallet
- Privy cannot recover lost private keys

## Technologies Used

- React 18
- Privy React Auth SDK
- CSS3 with modern styling
- GitHub Pages for deployment

## License

MIT License 