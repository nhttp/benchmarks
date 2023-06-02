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
Created At : Fri Jun 02 2023, 12:45:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|42908|46920|42326|39477|
|[fast](https://github.com/danteissaias/fast)|40734|47804|41888|32510|
|[fastro](https://github.com/fastrodev/fastro)|36591|45221|38238|26313|
|[oak](https://github.com/oakserver/oak)|15110|16083|15295|13953|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32427|35617|32655|29009|
|[fastify](https://github.com/fastify/fastify)|24737|24265|25554|24391|
|[koa](https://github.com/koajs/koa)|15845|16511|15020|16004|
|[express](https://github.com/expressjs/express)|5242|5298|4707|5722|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|53772|53450|54468|53398|
|[nhttp](https://github.com/nhttp/nhttp)|51959|50253|53741|51884|
|[elysia](https://github.com/elysiajs/elysia)|51077|52502|51517|49213|
|[baojs](https://github.com/mattreid1/baojs)|43429|49160|43792|37334|
  



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

