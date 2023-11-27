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
Created At : Mon Nov 27 2023, 12:38:45 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|45750|48550|46852|41847|
|[nhttp](https://github.com/nhttp/nhttp)|45691|48691|44815|43567|
|[fast](https://github.com/danteissaias/fast)|45528|49014|43657|43914|
|[fastro](https://github.com/fastrodev/fastro)|23608|48168|11539|11117|
|[oak](https://github.com/oakserver/oak)|20279|21341|20101|19396|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|27055|32709|25067|23389|
|[fastify](https://github.com/fastify/fastify)|15706|16141|15891|15086|
|[koa](https://github.com/koajs/koa)|14058|14715|13550|13910|
|[express](https://github.com/expressjs/express)|6286|6470|6120|6269|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71829|81016|76141|58329|
|[hono](https://github.com/honojs/hono)|68984|74080|67280|65591|
|[nhttp](https://github.com/nhttp/nhttp)|61599|79253|53074|52470|
|[baojs](https://github.com/mattreid1/baojs)|37170|44190|32648|34671|
  



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

