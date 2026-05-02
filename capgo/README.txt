Capgo Build notes (Windows)

1) Login:
   npm run capgo:login

2) Save iOS credentials:
   Put these files in the repo root (DO NOT commit them):
   - cert.p12
   - profile.mobileprovision
   - AuthKey.p8

   Then run:
   npm run capgo:credentials:ios

   Edit package.json scripts to fill in:
   - --p12-password
   - --apple-key-id
   - --apple-issuer-id
   - --apple-team-id

3) Build iOS in cloud:
   npm run capgo:build:ios

