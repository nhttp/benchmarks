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
Created At : Sun Jul 21 2024, 12:46:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46501|51011|43417|45075|
|[hono](https://github.com/honojs/hono)|46367|49746|47392|41962|
|[nhttp](https://github.com/nhttp/nhttp)|46009|49113|45225|43690|
|[oak](https://github.com/oakserver/oak)|25927|26856|25528|25397|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24363|30316|22581|20192|
|[fastify](https://github.com/fastify/fastify)|17212|17641|17129|16867|
|[koa](https://github.com/koajs/koa)|14648|15600|13792|14552|
|[express](https://github.com/expressjs/express)|6371|6480|6132|6501|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72316|83236|76134|57579|
|[hono](https://github.com/honojs/hono)|63631|80079|53492|57321|
|[nhttp](https://github.com/nhttp/nhttp)|62262|85580|48615|52590|
|[baojs](https://github.com/mattreid1/baojs)|37515|42166|32693|37687|
  



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

