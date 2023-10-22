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
Created At : Sun Oct 22 2023, 12:38:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|50341|51902|50634|48488|
|[hono](https://github.com/honojs/hono)|48543|48495|51417|45718|
|[fast](https://github.com/danteissaias/fast)|41519|48882|39794|35880|
|[fastro](https://github.com/fastrodev/fastro)|19349|47547|4830|5671|
|[oak](https://github.com/oakserver/oak)|15815|16245|16004|15197|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|30339|29345|30338|31334|
|[fastify](https://github.com/fastify/fastify)|24805|25938|24829|23647|
|[koa](https://github.com/koajs/koa)|16218|15843|15718|17093|
|[express](https://github.com/expressjs/express)|5033|4930|4764|5406|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|53101|52470|51407|55425|
|[nhttp](https://github.com/nhttp/nhttp)|52757|49673|54417|54182|
|[hono](https://github.com/honojs/hono)|49678|46255|54508|48272|
|[baojs](https://github.com/mattreid1/baojs)|42498|46030|44331|37133|
  



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

