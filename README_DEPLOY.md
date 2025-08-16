# Deployment Instructions

## Backend (Express)
- Copy `server/.env.example` to `server/.env` and fill in your MongoDB URI and JWT secret.
- Deploy to Vercel, Render, or Heroku. For Vercel, backend is auto-detected via `vercel.json`.
- Ensure MongoDB Atlas is accessible from your deployment.

## Frontend (React/Vite)
- Copy `.env.example` to `.env` and set your deployed backend URL.
- Deploy to Vercel or Netlify. For Netlify, use `netlify.toml`.
- Update API base in `src/lib/api.ts` to use `import.meta.env.VITE_API_BASE` for dynamic config.

## Redirects
- Netlify: API requests are proxied to backend using `netlify.toml` redirects.
- Vercel: API routes handled via `vercel.json`.

## Testing
- Use `server/postman_collection.json` for API endpoint testing.

## Environment Variables
- Set secrets and URLs in your deployment dashboard (Vercel/Netlify/Render).
