# Shri Khatu Shyam Ji Temple

A devotional temple website built with Next.js App Router, React, and
TypeScript. It presents temple information, the construction journey, event
photos, contact information, and donation details.

## Features

- Home page with temple introduction and sections for About, Journey, Gallery,
  Temple updates, Contact, and donation information.
- About page with the temple's vision, mission, and related information.
- Explore Journey page at `/home/journey`.
- Complete event gallery at `/gallery` and event-specific galleries at
  `/gallery/[event]`.
- Responsive layouts, motion effects, navigation, and loading screens.
- Local image assets served from `public/images`; content images use Next.js
  responsive image delivery.
- Contact section embeds a Google Maps location and provides the contact links
  present in the site.

## Technology

| Technology | Role |
| --- | --- |
| Next.js App Router | Routing, rendering, image delivery, and deployment integration |
| React | UI components and client-side interactions |
| TypeScript | Application and component types |
| Tailwind CSS 4 | Utility styling, integrated through `@tailwindcss/postcss` |
| Framer Motion | Section entrance and interaction animations |
| Lucide React and React Icons | Interface icons |
| npm | Dependency management; `package-lock.json` locks installed versions |

The current lockfile resolves Next.js `16.4.2` and React/React DOM `19.2.8`.
The `package.json` uses compatible version ranges, so run `npm ci` to install
the lockfile versions. Node.js `20.9` or newer is required by the installed
Next.js version.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home page |
| `/about` | About the temple |
| `/home/journey` | Explore the temple journey |
| `/gallery` | Complete event gallery |
| `/gallery/bhumi-pujan` | Bhumi Pujan gallery |
| `/gallery/janmotsav` | Janmotsav gallery |
| `/gallery/ekadashi` | Ekadashi gallery |

The event gallery reads its content from `src/data/Gallerydata.ts`.

## Run locally

Install Node.js 20.9 or later, then run:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build; Next.js also checks TypeScript |
| `npm run start` | Serve the production build locally |

There is currently no dedicated automated test script or test suite configured
in `package.json`.

## Project structure

```text
src/
├── app/                  # App Router layouts, route entries, and robots.txt
├── components/
│   ├── about/             # About page sections
│   ├── common/            # Shared controls and scroll helpers
│   ├── layout/            # Navigation, footer, and loading UI
│   └── sections/          # Home page sections
├── context/               # Shared loader state
├── data/                  # Local gallery event data
├── site-pages/            # Composed page content used by app/ routes
└── styles/                # Global and loader styles
public/
├── images/                # Temple, event, logo, and QR image assets
├── favicon.svg
└── icons.svg
```

`src/app/layout.tsx` is the root layout and imports the global styles and
metadata. `src/App.tsx` wraps route content with the initial loader and route
loader context. Route entry files in `src/app/` render the corresponding
composed page from `src/site-pages/`.

## Images and donation QR

The donation page displays the static repository image
`public/images/QRCode.jpeg`, referenced in `src/components/sections/Donate.tsx`.
The site has no QR editing endpoint, admin panel, or payment-processing
backend. The QR image and the payment details shown on the page must be updated
only through an authorized, reviewed source change. Verify the intended payee
and destination independently before approving a QR change; a successful build
does not verify a payment destination.

The Next.js image optimizer serves responsive image variants. Original image
files remain in `public/images`. Deployment and repository access controls are
the primary protection against unauthorized asset changes. See
[`SECURITY.md`](./SECURITY.md) for the QR review and rollback procedure.

## Environment configuration

The application source currently has no `process.env` or `NEXT_PUBLIC_*`
references and does not require a project-specific environment file to run.
Local `.env*` files are ignored by Git (except example/template files). Do not
put private credentials in `NEXT_PUBLIC_*` variables or commit local
environment files. If server credentials are added later, configure them in the
deployment provider's encrypted environment settings and read them only from
server-side code.

## Deployment

The project is configured for standard Next.js deployment. `vercel.json` only
contains Vercel's configuration schema; it does not define a custom build,
rewrite, or deployment command. Vercel can detect the Next.js app and use the
standard `npm run build` command. No production domain or hosting-account
settings are stored in this repository.

`next.config.ts` configures application security response headers. Development
responses allow `unsafe-eval` and WebSocket connections for React/Next.js
debugging and hot reload; those development-only sources are not included in
the production CSP. Production still permits inline scripts for Next.js App
Router hydration, and disallows inline event-handler attributes.

## Security and recovery

- Keep the production branch protected and require reviewed changes before
  deployment.
- Restrict GitHub, Vercel, and domain registrar access; enable MFA or passkeys.
- Review QR asset changes and deployment history. Restore an authorized QR from
  a known-good reviewed revision if a replacement is suspected.
- The repository does not implement user authentication, an admin interface,
  donation checkout, payment confirmation, or a payment webhook.
- Security headers and a QR recovery process are documented in `next.config.ts`
  and `SECURITY.md`; hosting-account settings must be verified in their
  respective dashboards.
