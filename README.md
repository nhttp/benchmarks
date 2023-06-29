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
Created At : Thu Jun 29 2023, 12:53:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|42643|45220|42651|40057|
|[nhttp](https://github.com/nhttp/nhttp)|42519|45525|42028|40004|
|[fastro](https://github.com/fastrodev/fastro)|33310|42899|37298|19734|
|[oak](https://github.com/oakserver/oak)|11831|12486|11741|11265|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|14854|15590|14421|14551|
|[nhttp](https://github.com/nhttp/nhttp)|11364|11324|10975|11794|
|[koa](https://github.com/koajs/koa)|9372|9739|8923|9454|
|[express](https://github.com/expressjs/express)|4032|4182|3758|4156|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51495|50947|51854|51683|
|[elysia](https://github.com/elysiajs/elysia)|47335|46853|50288|44865|
|[hono](https://github.com/honojs/hono)|46971|49090|46944|44880|
|[baojs](https://github.com/mattreid1/baojs)|40624|44783|42678|34411|
  



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

