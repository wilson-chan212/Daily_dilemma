# Daily Dilemma (Capacitor)

This repo contains a static web app wrapped with [Capacitor](https://capacitorjs.com/) for Android + iOS.

## Prereqs
- Node.js + npm
- Android Studio installed (for Android builds)
- For iOS builds on Windows: Capgo Build (cloud macOS)

## Common commands
- **Install deps**: `npm install`
- **Local web test**: `npm run serve`
- **Sync web assets to native**: `npm run cap:sync`

## Android
### Outputs
- **Debug APK**: `android/app/build/outputs/apk/debug/app-debug.apk`
- **Release AAB** (Play Store): `android/app/build/outputs/bundle/release/app-release.aab`

### Build (CLI)
From repo root:
- `npm run cap:sync`
- `cd android`
- `gradlew.bat assembleDebug`
- `gradlew.bat bundleRelease`

## iOS (Windows via Capgo Build)
Capacitor iOS requires Xcode, so builds are done in the cloud.

### 1) Login
- `npm run capgo:login`

### 2) Save iOS credentials (do not commit)
Place these files in the repo root:
- `cert.p12`
- `profile.mobileprovision`
- `AuthKey.p8`

Then update `package.json` script `capgo:credentials:ios` with your real values and run:
- `npm run capgo:credentials:ios`

### 3) Build iOS in cloud
- `npm run capgo:build:ios`

