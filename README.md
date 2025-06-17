# 🧠 Cloudflare Agent Lab

A modular Cloudflare Worker application demonstrating how to build fast, scalable edge agents with AI, storage, and automation built-in.

This lab project includes:
- ✅ **Health endpoint** for monitoring
- 🤖 **AI Q&A** using Cloudflare’s LLaMA 3 inference
- 📬 **Webhook listener** for external integrations
- 🌐 **External API proxy** for mashups and edge routing
- 💾 **KV data store** for memory/stateful actions
- ⚙️ **CI/CD via GitHub Actions**

---

## 🚀 Live Deployment
**URL:** [https://cloudflare-agent-lab.harelabs.workers.dev](https://cloudflare-agent-lab.harelabs.workers.dev)

---

## 🛠️ Endpoints
| Endpoint              | Method | Purpose                                  |
|-----------------------|--------|------------------------------------------|
| `/`                  | GET    | Health check                             |
| `/ask?q=question`    | GET    | AI response using Cloudflare AI Inference |
| `/webhook`           | POST   | Accepts JSON payloads for processing     |
| `/external`          | GET    | Returns API results from public endpoint |
| `/kv?store=value`    | GET    | Stores a string in KV                    |
| `/kv?get`            | GET    | Retrieves last stored string from KV     |

---

## 📦 Tech Stack
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Cloudflare AI Inference](https://developers.cloudflare.com/ai)
- [Workers KV Storage](https://developers.cloudflare.com/kv/)
- GitHub Actions CI/CD
- TypeScript

---

## ⚙️ Setup Instructions

### 1. Install Wrangler
```bash
npm install -g wrangler
```

### 2. Authenticate Wrangler
```bash
wrangler login
```

### 3. Run Locally
```bash
wrangler dev
```

### 4. Deploy to Cloudflare
```bash
wrangler deploy
```

---

## 🔐 GitHub Actions CI/CD
Automatically deploys on push to `main`.

### Required Secret
Create a [Cloudflare API Token](https://dash.cloudflare.com/profile/api-tokens) with:
- Workers Scripts: Edit
- Workers KV Storage: Edit

Add to GitHub:
```
Settings → Secrets → Actions → New Repository Secret
Name: CLOUDFLARE_API_TOKEN
```

---

## ✨ Example Usage
```bash
curl "https://cloudflare-agent-lab.harelabs.workers.dev/ask?q=what+is+cloudflare%3F"
```
```bash
curl -X POST https://cloudflare-agent-lab.harelabs.workers.dev/webhook \
  -H "Content-Type: application/json" \
  -d '{"event":"test","source":"github"}'
```

---

## 📌 License
MIT License © 2025 [HareLabs]
