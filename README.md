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
Created At : Mon Jul 15 2024, 12:43:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46967|50822|46159|43921|
|[hono](https://github.com/honojs/hono)|46288|49159|47264|42440|
|[fast](https://github.com/danteissaias/fast)|46210|49891|43029|45711|
|[oak](https://github.com/oakserver/oak)|26211|26903|25761|25970|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24535|30333|22459|20813|
|[fastify](https://github.com/fastify/fastify)|16715|17249|16546|16350|
|[koa](https://github.com/koajs/koa)|14403|15286|13475|14449|
|[express](https://github.com/expressjs/express)|6444|6521|6205|6605|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66707|86187|72499|41435|
|[hono](https://github.com/honojs/hono)|64203|78640|59566|54402|
|[nhttp](https://github.com/nhttp/nhttp)|61482|86438|51910|46097|
|[baojs](https://github.com/mattreid1/baojs)|36697|41954|35645|32492|
  



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

