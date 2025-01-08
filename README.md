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
Created At : Wed Jan 08 2025, 12:51:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46774|50710|46065|43547|
|[hono](https://github.com/honojs/hono)|46411|49412|47453|42368|
|[fast](https://github.com/danteissaias/fast)|45903|50354|43265|44091|
|[oak](https://github.com/oakserver/oak)|25530|26399|25027|25163|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26347|33449|23856|21736|
|[fastify](https://github.com/fastify/fastify)|17230|17959|16997|16734|
|[koa](https://github.com/koajs/koa)|14173|15231|12911|14378|
|[express](https://github.com/expressjs/express)|6438|6623|6014|6676|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67657|79460|68164|55346|
|[nhttp](https://github.com/nhttp/nhttp)|54105|79254|40197|42863|
|[hono](https://github.com/honojs/hono)|49950|66490|39748|43611|
|[baojs](https://github.com/mattreid1/baojs)|32868|37097|31564|29943|
  



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

