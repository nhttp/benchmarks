## Runtime JS/TS benchmarks.

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench (params and queryParams)
framework.get("/blog/:id", (req, res) => {
  const data = `${req.params.id} ${req.query.title}`;
  res.send(data);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Sat Oct 26 2024, 12:48:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48329|51996|47823|45169|
|[fast](https://github.com/danteissaias/fast)|47331|51487|45596|44910|
|[hono](https://github.com/honojs/hono)|47303|50616|48129|43164|
|[oak](https://github.com/oakserver/oak)|26136|26984|25905|25518|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24892|31012|22894|20769|
|[fastify](https://github.com/fastify/fastify)|16644|17228|16469|16236|
|[koa](https://github.com/koajs/koa)|13848|14615|12910|14018|
|[express](https://github.com/expressjs/express)|6399|6561|5966|6670|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70461|83023|72361|55998|
|[nhttp](https://github.com/nhttp/nhttp)|56144|82613|40694|45125|
|[hono](https://github.com/honojs/hono)|50014|65992|45190|38859|
|[baojs](https://github.com/mattreid1/baojs)|34355|36664|37152|29250|
  



## Usage

```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark

// for_all
deno task bench

// for_single
deno task bench framework_name
```

## License

[MIT](LICENSE)

