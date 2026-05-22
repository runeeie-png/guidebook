# Preikestolen Villa — site + guidebook

A statically-deployed (Vercel) website for **preikestolenvilla.com** with a
private guidebook for guests, and a Redis-backed admin panel for editing
text + photo order without touching code.

## Structure

```
/
├── index.html                    # Front page (preikestolenvilla.com/)
├── villa-guide-9k2m7p/           # Private guest guidebook
│   └── index.html
├── admin/                        # /admin — unified editor (login required)
│   └── index.html
├── api/                          # Vercel Serverless Functions
│   ├── _lib.js                   # Redis client, auth, helpers
│   ├── _seed.js                  # Loads factory-default content
│   ├── _villa_seed.json          # Fallback content for front page
│   ├── _guidebook_seed.json      # Fallback content for guidebook
│   ├── data.js                   # GET/POST page data
│   ├── login.js                  # Password verification
│   ├── images.js                 # Lists files in bilder/ folder
│   └── stats.js                  # Track + return view counts
├── bilder/                       # Photos (upload here via GitHub)
├── forside-bg.jpg                # Front-page hero background
├── robots.txt
├── sitemap.xml
├── package.json                  # Declares @upstash/redis dependency
└── vercel.json                   # Routing + security headers
```

## How content works

Two Redis keys hold all editable content:

- `villa:data` — JSON with hero, gallery, about, reviews, amenities,
  location, booking, sticky bar, footer.
- `guidebook:data` — JSON with house info, contact, area trips, manuals
  (all three languages: EN/NO/DE).

When a guest loads the page, JavaScript fetches `/api/data?page=villa`
(or `?page=guidebook`) and hydrates the inline HTML. If Redis is empty
or unreachable, the site falls back to **seed data** baked into
`api/_villa_seed.json` and `api/_guidebook_seed.json`. The site never
goes blank.

## How photos work

Photos live in `/bilder/` for the front page and
`/villa-guide-9k2m7p/` for the guidebook. Upload new photos directly
to those folders via GitHub Desktop. Then go to the admin panel
**Gallery photos** tab and click **+ Refresh from folder** — any new
photos are added with empty descriptions, ready to edit.

For thumbnails: include `name.jpg` and a smaller `name-t.jpg`. The
gallery uses `-t` for thumbs and the full image in the lightbox.

## Editing

1. Go to **preikestolenvilla.com/admin**
2. Log in with the password stored in the Vercel env-variable `ADMIN_PASSWORD`
3. Edit any field. Bottom bar shows "Unsaved changes" while editing
4. Click **Save changes** — live on the site within seconds
5. Revert any time before saving

## Statistics

The admin **Statistics** tab shows:
- Total view counts for villa and guidebook (since launch)
- Last-7-day and last-30-day counts
- Daily-bar chart for the last 14 days

For richer analytics (countries, referrers, devices), enable
**Vercel Web Analytics** in the project dashboard.

## Required environment variables (Vercel → Settings → Env Variables)

- `ADMIN_PASSWORD` — admin login password (set a strong one!)
- `UPSTASH_REDIS_REST_URL` — auto-injected by the Upstash integration
- `UPSTASH_REDIS_REST_TOKEN` — auto-injected by the Upstash integration

(Fallback names also supported: `KV_REST_API_URL` / `KV_REST_API_TOKEN`.)

## Security

- Admin password is server-side only (never in client code)
- Tokens stored as SHA-256 hashes in Redis with 7-day TTL
- 5 login attempts per IP per 5 minutes (rate-limited via Redis)
- All write endpoints require Authorization header
- Guidebook URL `villa-guide-9k2m7p` is `noindex,nofollow` and disallowed in robots.txt
- Path traversal blocked in /api/images
