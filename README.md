# Anonymous Messenger App

A minimal anonymous messaging app frontend built with Next.js and Tailwind CSS. The app lets users send and browse short anonymous messages and includes a user dashboard (authenticated) for message management.

## Features
- Send anonymous messages
- Suggest message text using an AI assistant
- Optional email notifications via Resend
- User dashboard with authentication (NextAuth)
- Responsive UI with Tailwind CSS

## Tech Stack
- Framework: Next.js 16
- UI: Tailwind CSS
- Language: TypeScript
- Validation: Zod
- Database: MongoDB (for persisting messages and users)
- Email delivery: Resend
- Authentication: next-auth (user dashboard)
- Forms: react-hook-form
- AI: OpenAI (or other provider) for suggested messages

## Prerequisites
- Node.js 18 or newer
- npm or pnpm

## Install
Install dependencies used by this project (example):

```bash
npm install zod mongodb next-auth react-hook-form resend openai
```

Install project dependencies as usual:

```bash
npm install
```

## Development
Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build
Create an optimized production build and start the server:

```bash
npm run build
npm run start
```

## Scripts
- `dev`: starts Next.js dev server
- `build`: builds the app for production
- `start`: starts the production server
- `lint`: run ESLint

## Environment
Create a `.env.local` at the project root with required secrets. Example variables used by this project:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/anonymous-messenger?retryWrites=true&w=majority
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
RESEND_API_KEY=rv_xxx
OPENAI_API_KEY=sk-xxx
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

- Replace placeholders with your real credentials.
- Keep `.env.local` out of source control.

## Notes on integration
- Zod: use for schema validation server-side and client-side form validation.
- MongoDB: use the official `mongodb` driver or an ORM/ODM (e.g., Prisma, Mongoose) to store messages and user records.
- Resend: used for transactional email delivery (e.g., notifications). Store `RESEND_API_KEY` securely.
- next-auth: configure a provider and session strategy for the dashboard pages.
- react-hook-form: use with Zod resolver for fast, type-safe forms.
- AI suggestions: wire your AI provider (OpenAI or other) to generate suggested message text; protect API keys on server-side routes.

## Contributing
Contributions welcome — open an issue or submit a pull request. Please include tests or screenshots for UI changes.

## License
Add a license if you plan to open-source this project (for example, MIT).
