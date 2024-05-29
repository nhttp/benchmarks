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
Created At : Wed May 29 2024, 12:43:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47586|50879|46807|45073|
|[hono](https://github.com/honojs/hono)|47299|50078|47256|44564|
|[fast](https://github.com/danteissaias/fast)|46984|50365|44639|45948|
|[oak](https://github.com/oakserver/oak)|27663|29282|27761|25946|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24627|30981|22535|20364|
|[fastify](https://github.com/fastify/fastify)|16620|16913|16613|16333|
|[koa](https://github.com/koajs/koa)|14371|15191|13473|14448|
|[express](https://github.com/expressjs/express)|6350|6556|6043|6451|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73999|85531|76742|59724|
|[nhttp](https://github.com/nhttp/nhttp)|60183|83535|52193|44821|
|[hono](https://github.com/honojs/hono)|53154|61618|49484|48361|
|[baojs](https://github.com/mattreid1/baojs)|40681|49674|35879|36489|
  



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

