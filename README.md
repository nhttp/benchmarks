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
Created At : Tue May 02 2023, 12:40:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57556|63399|57645|51623|
|[hono](https://github.com/honojs/hono)|54188|58847|56069|47648|
|[fast](https://github.com/danteissaias/fast)|52059|62508|52763|40905|
|[fastro](https://github.com/fastrodev/fastro)|48637|60822|50574|34516|
|[oak](https://github.com/oakserver/oak)|18350|19652|18395|17003|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44042|45650|44235|42240|
|[fastify](https://github.com/fastify/fastify)|34153|35485|33718|33255|
|[koa](https://github.com/koajs/koa)|21791|23206|20333|21835|
|[express](https://github.com/expressjs/express)|7732|8001|7398|7797|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|68810|67681|69493|69256|
|[hono](https://github.com/honojs/hono)|66364|65689|68141|65263|
|[elysia](https://github.com/elysiajs/elysia)|65418|67047|65734|63473|
|[baojs](https://github.com/mattreid1/baojs)|58325|64151|61074|49751|
  



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

