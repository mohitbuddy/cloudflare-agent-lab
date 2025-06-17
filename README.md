# Cloudflare Agent Lab

This project demonstrates a Cloudflare Worker with:

- ✅ Basic Health Endpoint
- 🤖 AI Q&A via Cloudflare AI (LLaMA3)
- 📬 Webhook Listener
- 🌐 External API Fetching
- 💾 KV Storage Example

## Setup

1. Clone the repo
2. Replace `<your-kv-namespace-id>` in `wrangler.toml`
3. Add a Cloudflare API token as a GitHub secret: `CLOUDFLARE_API_TOKEN`
4. Run `wrangler login`
5. Deploy: `wrangler deploy`

## Endpoints

- `/` – Health check
- `/ask?q=your+question` – AI-powered response
- `/webhook` – Accepts POST
- `/external` – Sample external API fetch
- `/kv?store=text` or `/kv?get` – KV storage example
