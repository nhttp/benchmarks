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
Created At : Thu Oct 03 2024, 12:49:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47826|51492|47130|44856|
|[fast](https://github.com/danteissaias/fast)|47324|50757|43654|47561|
|[hono](https://github.com/honojs/hono)|46902|50445|47195|43067|
|[oak](https://github.com/oakserver/oak)|25730|26643|25155|25392|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24932|31441|22787|20567|
|[fastify](https://github.com/fastify/fastify)|16972|17384|16876|16655|
|[koa](https://github.com/koajs/koa)|13531|14370|12706|13518|
|[express](https://github.com/expressjs/express)|6140|6250|5805|6364|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67180|83047|65739|52755|
|[nhttp](https://github.com/nhttp/nhttp)|55175|80971|39774|44780|
|[hono](https://github.com/honojs/hono)|53723|64378|51177|45613|
|[baojs](https://github.com/mattreid1/baojs)|34811|41119|33946|29368|
  



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

