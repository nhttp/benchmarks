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
Created At : Sat May 31 2025, 1:02:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60679|68164|59879|53995|
|[hono](https://github.com/honojs/hono)|58321|63701|58592|52670|
|[fast](https://github.com/danteissaias/fast)|55049|62443|46169|56534|
|[oak](https://github.com/oakserver/oak)|28208|27823|27807|28993|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38397|44729|37087|33374|
|[fastify](https://github.com/fastify/fastify)|25553|25794|25166|25700|
|[koa](https://github.com/koajs/koa)|17241|17053|17705|16966|
|[express](https://github.com/expressjs/express)|6435|6555|6149|6602|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|85863|94188|79766|83636|
|[nhttp](https://github.com/nhttp/nhttp)|71028|93905|59682|59498|
|[hono](https://github.com/honojs/hono)|67396|77324|61118|63747|
|[baojs](https://github.com/mattreid1/baojs)|48552|53980|45972|45705|
  



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

