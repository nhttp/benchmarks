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
Created At : Fri Sep 29 2023, 12:36:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61236|63214|61305|59189|
|[hono](https://github.com/honojs/hono)|56078|60507|57178|50548|
|[fast](https://github.com/danteissaias/fast)|52608|64221|35908|57695|
|[fastro](https://github.com/fastrodev/fastro)|25298|61792|7367|6736|
|[oak](https://github.com/oakserver/oak)|18373|19288|18366|17466|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38391|41367|38049|35756|
|[fastify](https://github.com/fastify/fastify)|29075|30091|28999|28135|
|[koa](https://github.com/koajs/koa)|18166|19331|16782|18386|
|[express](https://github.com/expressjs/express)|6091|6385|5487|6400|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|61117|59549|62879|60922|
|[nhttp](https://github.com/nhttp/nhttp)|58360|56105|60359|58615|
|[elysia](https://github.com/elysiajs/elysia)|58206|57033|58131|59453|
|[baojs](https://github.com/mattreid1/baojs)|43438|51062|32812|46441|
  



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

