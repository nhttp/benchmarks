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
Created At : Fri Apr 05 2024, 12:37:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47125|50016|45804|45555|
|[fast](https://github.com/danteissaias/fast)|46870|50360|45195|45055|
|[hono](https://github.com/honojs/hono)|46495|49519|46548|43419|
|[oak](https://github.com/oakserver/oak)|27458|29019|27747|25608|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23865|29682|22501|19411|
|[fastify](https://github.com/fastify/fastify)|16544|16922|16371|16338|
|[koa](https://github.com/koajs/koa)|14540|15382|13574|14665|
|[express](https://github.com/expressjs/express)|6287|6444|6005|6413|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71272|82407|72667|58742|
|[nhttp](https://github.com/nhttp/nhttp)|59507|84965|50005|43550|
|[hono](https://github.com/honojs/hono)|58264|68976|61520|44297|
|[baojs](https://github.com/mattreid1/baojs)|34745|39774|34178|30283|
  



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

