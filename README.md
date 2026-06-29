# Syed Kamran Shah — AI Full-Stack Developer Portfolio

A premium, multi-page portfolio built with the Next.js App Router. The site presents AI products, SaaS systems, client portals, business automation services, detailed case studies, video walkthrough slots, a downloadable resume, and a validated contact flow.

## Tech stack

- Next.js App Router and TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form and Zod
- Resend email delivery
- Lucide icons
- Vercel-ready route handlers and metadata

## Routes

- / — home
- /about — background and product principles
- /projects — project listing
- /projects/[slug] — statically generated case studies
- /services — services and process
- /contact — validated project enquiry form
- /resume — experience, stack, and PDF download

## Local setup

1. Run: npm install
2. Copy .env.example to .env.local.
3. Add the required values to .env.local.
4. Run: npm run dev
5. Open http://localhost:3000.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| NEXT_PUBLIC_SITE_URL | Recommended | Canonical metadata and sitemap URL |
| RESEND_API_KEY | For contact delivery | Resend API key |
| CONTACT_EMAIL | For contact delivery | Destination email address |
| CONTACT_FROM | Optional | Verified sender; defaults to Resend onboarding sender |

Without the two contact delivery variables, the form stays fully validated but returns a clear configuration message and the contact page still offers direct email.

## Add or edit projects

All project content and TypeScript types live in data/projects.ts.

1. Add a new project object with a unique slug.
2. Choose a supported visual variant.
3. Add project screenshots under public/projects/.
4. Reference screenshot paths such as /projects/example-dashboard.webp.

The listing, case-study route, static params, and SEO metadata update automatically.

## Video delivery

Demo videos are streamed from Cloudinary. Their public URLs and optional poster frames are configured in data/site.ts and data/projects.ts.

- Do not add MP4 files to the repository.
- The LazyVideo component attaches each source only when the player approaches the viewport.
- Players use HTML5 controls, metadata-only preload, playsInline, responsive sizing, and poster support.
- Replace a Cloudinary URL in the data file whenever a video is updated.

## Contact form setup with Resend

1. Create a Resend account and API key.
2. Add RESEND_API_KEY to local or Vercel environment variables.
3. Add CONTACT_EMAIL.
4. For production sending, verify a domain and set CONTACT_FROM to an address on it.

The API route validates every request again on the server, includes a honeypot field, escapes email content, and returns explicit success/error responses.

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Add the environment variables in Project Settings, Environment Variables.
4. Set NEXT_PUBLIC_SITE_URL to the final production domain.
5. Deploy.

No custom build command is required.

## Content maintenance

- Personal links and global content: data/site.ts
- Services: data/services.ts
- Projects and case studies: data/projects.ts
- Downloadable resume: public/syed-kamran-shah-resume.pdf
- Portrait: public/syed-kamran-shah.jpg
