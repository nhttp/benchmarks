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
Created At : Mon Jun 24 2024, 12:42:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48830|52569|48231|45689|
|[fast](https://github.com/danteissaias/fast)|48298|53390|45024|46480|
|[hono](https://github.com/honojs/hono)|47791|51229|48806|43338|
|[oak](https://github.com/oakserver/oak)|27324|28314|26733|26926|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24366|30282|22447|20370|
|[fastify](https://github.com/fastify/fastify)|16995|17387|16993|16605|
|[koa](https://github.com/koajs/koa)|14545|15349|13658|14629|
|[express](https://github.com/expressjs/express)|6480|6626|6167|6648|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72970|84088|77148|57674|
|[nhttp](https://github.com/nhttp/nhttp)|64611|85422|55937|52475|
|[hono](https://github.com/honojs/hono)|61286|73248|58757|51853|
|[baojs](https://github.com/mattreid1/baojs)|37822|42024|38283|33160|
  



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

