# IGDB API Setup Guide

Your Crosspad application has been updated to work with the new IGDB API v4. The searches were crashing because the API changed from v3 to v4, which requires Twitch OAuth authentication.

## What Changed

The IGDB API now requires:
- Twitch Developer Account
- Client ID and Client Secret from Twitch
- OAuth Bearer token authentication
- New query format (APICalypse)

## Quick Setup Steps

### 1. Get Twitch Developer Credentials

1. Go to [https://dev.twitch.tv/login](https://dev.twitch.tv/login)
2. Sign in with your Twitch account (create one if needed)
3. Enable Two Factor Authentication at [https://www.twitch.tv/settings/security](https://www.twitch.tv/settings/security)
4. Go to [https://dev.twitch.tv/console/apps/create](https://dev.twitch.tv/console/apps/create)
5. Create a new application:
   - **Name**: Crosspad Gaming App (or any name you like)
   - **OAuth Redirect URLs**: `http://localhost` (required but not used)
   - **Category**: Game Integration
   - **Client Type**: Confidential

### 2. Get Your Credentials

1. After creating the app, go to [https://dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps)
2. Click "Manage" on your new application
3. Copy the **Client ID**
4. Click "New Secret" to generate a **Client Secret**
5. Copy the **Client Secret** immediately (you won't see it again)

### 3. Update Your Environment File

Open the `.env` file in your project root and update these lines:

```env
TWITCH_CLIENT_ID=paste-your-client-id-here
TWITCH_CLIENT_SECRET=paste-your-client-secret-here
```

### 4. Restart the Application

Stop the current server (Ctrl+C if running) and restart:

```bash
npm run dev
```

## What Was Fixed

- ✅ Updated server to use IGDB API v4
- ✅ Added Twitch OAuth authentication
- ✅ Fixed image URL generation for new API
- ✅ Updated API endpoints to use APICalypse query language
- ✅ Added proper error handling

## Testing

Once you've set up your credentials and restarted, try searching for a game in your application. The searches should now work properly!

## Troubleshooting

**"Invalid Client ID"**: Make sure your Client ID is correct in the .env file
**"Invalid Client Secret"**: Make sure your Client Secret is correct in the .env file  
**CORS errors**: The app now uses your local server as a proxy, so CORS shouldn't be an issue
**No results**: Check the browser console for any error messages

The IGDB API is free for non-commercial use and your app should work perfectly once the credentials are set up!