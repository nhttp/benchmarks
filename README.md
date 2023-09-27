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
Created At : Wed Sep 27 2023, 12:36:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66477|68369|67119|63944|
|[hono](https://github.com/honojs/hono)|63338|69852|64053|56108|
|[fast](https://github.com/danteissaias/fast)|58942|69928|58663|48236|
|[fastro](https://github.com/fastrodev/fastro)|27451|69549|6290|6515|
|[oak](https://github.com/oakserver/oak)|19759|20871|19583|18823|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44960|48290|43961|42628|
|[fastify](https://github.com/fastify/fastify)|34994|36684|34752|33545|
|[koa](https://github.com/koajs/koa)|21376|22251|20222|21654|
|[express](https://github.com/expressjs/express)|7560|7680|7341|7658|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61414|60790|57933|65518|
|[hono](https://github.com/honojs/hono)|60930|60220|56004|66567|
|[elysia](https://github.com/elysiajs/elysia)|58496|61998|57657|55833|
|[baojs](https://github.com/mattreid1/baojs)|54122|61600|51965|48801|
  



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

