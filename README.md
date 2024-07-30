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
Created At : Tue Jul 30 2024, 12:42:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46970|50643|45769|44499|
|[hono](https://github.com/honojs/hono)|46392|49844|46899|42434|
|[fast](https://github.com/danteissaias/fast)|45848|50334|43870|43339|
|[oak](https://github.com/oakserver/oak)|26054|26932|25478|25752|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23973|30308|22136|19474|
|[fastify](https://github.com/fastify/fastify)|17027|17530|16976|16574|
|[koa](https://github.com/koajs/koa)|14462|15383|13573|14431|
|[express](https://github.com/expressjs/express)|6406|6541|6151|6527|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71153|79297|78674|55487|
|[nhttp](https://github.com/nhttp/nhttp)|60431|83291|50649|47353|
|[hono](https://github.com/honojs/hono)|57745|72623|48448|52163|
|[baojs](https://github.com/mattreid1/baojs)|34307|40186|30168|32568|
  



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

