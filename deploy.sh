#!/bin/bash

# Privy Wallet Export - GitHub Pages Deployment Script

echo "🚀 Starting deployment to GitHub Pages..."

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed!"
echo "🌐 Your app should be available at: https://yourusername.github.io/privy_export"
echo ""
echo "📝 Don't forget to:"
echo "   1. Update the homepage URL in package.json"
echo "   2. Create a .env file with your Privy App ID"
echo "   3. Enable GitHub Pages in your repository settings" 