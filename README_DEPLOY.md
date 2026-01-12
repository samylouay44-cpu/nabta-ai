# NABTA Netlify Deploy (No 404, No install failures)

## 1) Copy these files into your repo root
Copy everything in this folder into the ROOT of the repo Netlify deploys.

## 2) Netlify UI settings (MUST)
Site settings → Build & deploy → Build settings:
- Build command: npm run build
- Publish directory: CLEAR IT (leave empty)
- Base directory: (leave empty unless your app is in a subfolder)

If Publish directory is set to '.' or '.next' or anything, it can cause plugin errors or 404.

## 3) Deploy
Commit & push. Redeploy.

## 4) Customize
Update email/WhatsApp:
- app/contact/page.tsx
