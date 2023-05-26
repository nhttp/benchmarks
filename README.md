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
Created At : Fri May 26 2023, 6:34:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33709|35424|33802|31902|
|[hono](https://github.com/honojs/hono)|31458|32936|33598|27839|
|[fast](https://github.com/danteissaias/fast)|28600|34284|29343|22172|
|[fastro](https://github.com/fastrodev/fastro)|26662|32941|28754|18291|
|[oak](https://github.com/oakserver/oak)|10841|11386|10886|10252|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|20548|22251|20080|19313|
|[fastify](https://github.com/fastify/fastify)|13280|13988|12912|12939|
|[koa](https://github.com/koajs/koa)|9493|10003|9011|9466|
|[express](https://github.com/expressjs/express)|3942|4048|3772|4006|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|40086|44173|39851|36235|
|[elysia](https://github.com/elysiajs/elysia)|37713|40789|37320|35029|
|[nhttp](https://github.com/nhttp/nhttp)|37278|39654|37483|34697|
|[baojs](https://github.com/mattreid1/baojs)|34086|39991|27965|34303|
  



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

