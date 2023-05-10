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
Created At : Wed May 10 2023, 6:39:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60730|67454|60159|54577|
|[nhttp](https://github.com/nhttp/nhttp)|60693|66871|58800|56407|
|[fast](https://github.com/danteissaias/fast)|55486|65307|43569|57583|
|[fastro](https://github.com/fastrodev/fastro)|52912|64891|54964|38881|
|[oak](https://github.com/oakserver/oak)|19524|20667|19446|18459|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43544|46924|42168|41540|
|[fastify](https://github.com/fastify/fastify)|33980|35639|33726|32575|
|[koa](https://github.com/koajs/koa)|21917|23397|20456|21898|
|[express](https://github.com/expressjs/express)|7901|8027|7612|8064|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|71034|69893|72431|70777|
|[hono](https://github.com/honojs/hono)|66786|66746|66889|66724|
|[elysia](https://github.com/elysiajs/elysia)|66648|66641|67209|66095|
|[baojs](https://github.com/mattreid1/baojs)|57169|64756|45964|60786|
  



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

