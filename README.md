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
Created At : Wed Jul 12 2023, 12:52:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56923|61777|55063|53929|
|[hono](https://github.com/honojs/hono)|51653|59295|44485|51178|
|[oak](https://github.com/oakserver/oak)|17025|18411|16779|15885|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|27579|29683|27595|25460|
|[nhttp](https://github.com/nhttp/nhttp)|19538|19528|19208|19877|
|[koa](https://github.com/koajs/koa)|16293|17036|15139|16705|
|[express](https://github.com/expressjs/express)|6083|6257|5648|6345|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64036|62130|65764|64215|
|[hono](https://github.com/honojs/hono)|61210|59542|61529|62558|
|[elysia](https://github.com/elysiajs/elysia)|60159|59902|60354|60222|
|[baojs](https://github.com/mattreid1/baojs)|52114|57931|49358|49052|
  



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

