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
Created At : Tue Feb 20 2024, 12:35:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47512|51208|46571|44758|
|[fast](https://github.com/danteissaias/fast)|47089|50654|44576|46036|
|[hono](https://github.com/honojs/hono)|46110|48498|47072|42760|
|[oak](https://github.com/oakserver/oak)|27105|28334|27386|25594|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25072|31493|22811|20913|
|[fastify](https://github.com/fastify/fastify)|15986|16306|15879|15773|
|[koa](https://github.com/koajs/koa)|14123|14997|13418|13954|
|[express](https://github.com/expressjs/express)|6413|6513|6159|6566|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71557|81551|75316|57805|
|[hono](https://github.com/honojs/hono)|59726|70070|55731|53377|
|[nhttp](https://github.com/nhttp/nhttp)|56174|81541|48190|38791|
|[baojs](https://github.com/mattreid1/baojs)|33483|38733|32546|29169|
  



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

