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
Created At : Tue Apr 11 2023, 12:40:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|27425|29093|26211|26970|
|[fast](https://github.com/danteissaias/fast)|25236|27916|25217|22576|
|[hono](https://github.com/honojs/hono)|21598|24813|21938|18042|
|[fastro](https://github.com/fastrodev/fastro)|18394|22022|16622|16539|
|[oak](https://github.com/oakserver/oak)|8840|8126|9338|9056|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17900|18613|17804|17282|
|[fastify](https://github.com/fastify/fastify)|13727|14035|13797|13349|
|[koa](https://github.com/koajs/koa)|8823|9178|8321|8970|
|[express](https://github.com/expressjs/express)|3688|3684|3505|3876|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|37972|38001|38257|37657|
|[nhttp](https://github.com/nhttp/nhttp)|37036|36628|36776|37704|
|[baojs](https://github.com/mattreid1/baojs)|33827|36947|32347|32186|
|[hono](https://github.com/honojs/hono)|33756|38720|31771|30776|
  



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

