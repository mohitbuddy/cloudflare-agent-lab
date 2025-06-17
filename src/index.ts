export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname, searchParams } = new URL(request.url);

    // 1. Basic Health Check
    if (pathname === "/") {
      return new Response("✅ Cloudflare Agent Lab is running.");
    }

    // 2. AI Q&A via URL param (?q=question)
    if (pathname === "/ask" && searchParams.has("q")) {
      const question = searchParams.get("q")!;
      const result = await env.AI.run("@cf/meta/llama-3-8b-instruct", {
        messages: [{ role: "user", content: question }],
      });
      return new Response(result.response);
    }

    // 3. Webhook Listener
    if (pathname === "/webhook" && request.method === "POST") {
      const body = await request.json();
      console.log("Webhook payload received:", JSON.stringify(body));
      return new Response("Webhook received.", { status: 200 });
    }

    // 4. API Proxy Sample
    if (pathname === "/external") {
      const res = await fetch("https://api.publicapis.org/entries");
      const data = await res.json();
      return new Response(JSON.stringify(data.entries.slice(0, 3), null, 2), {
        headers: { "content-type": "application/json" },
      });
    }

    // 5. KV Example (?store=text to save / ?get to retrieve)
    if (pathname === "/kv") {
      const storeVal = searchParams.get("store");
      if (storeVal) {
        await env.AGENT_STORE.put("latest", storeVal);
        return new Response(`Stored: ${storeVal}`);
      }
      const latest = await env.AGENT_STORE.get("latest");
      return new Response(`Latest stored value: ${latest}`);
    }

    return new Response("404 Not Found", { status: 404 });
  },
};