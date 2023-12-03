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
Created At : Sun Dec 03 2023, 12:40:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45275|48533|44325|42966|
|[fast](https://github.com/danteissaias/fast)|44935|48322|43285|43198|
|[hono](https://github.com/honojs/hono)|43917|46872|44057|40822|
|[fastro](https://github.com/fastrodev/fastro)|22999|47905|10647|10446|
|[oak](https://github.com/oakserver/oak)|20765|21765|20603|19928|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25908|30926|24152|22645|
|[fastify](https://github.com/fastify/fastify)|15313|15582|14804|15552|
|[koa](https://github.com/koajs/koa)|13876|14501|13222|13906|
|[express](https://github.com/expressjs/express)|6258|6462|5874|6439|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67762|80914|69240|53133|
|[hono](https://github.com/honojs/hono)|65923|74615|69221|53934|
|[nhttp](https://github.com/nhttp/nhttp)|64278|80133|59723|52977|
|[baojs](https://github.com/mattreid1/baojs)|34228|37429|30150|35105|
  



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

