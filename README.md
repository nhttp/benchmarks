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
Created At : Fri Jun 06 2025, 1:04:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|55988|60899|58997|48068|
|[nhttp](https://github.com/nhttp/nhttp)|55647|63665|53646|49631|
|[fast](https://github.com/danteissaias/fast)|53900|63933|49491|48276|
|[oak](https://github.com/oakserver/oak)|28644|29397|28182|28354|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40413|47535|37276|36428|
|[fastify](https://github.com/fastify/fastify)|24514|25437|25313|22792|
|[koa](https://github.com/koajs/koa)|16830|17416|16654|16419|
|[express](https://github.com/expressjs/express)|6400|6500|6141|6560|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79576|88572|73389|76768|
|[nhttp](https://github.com/nhttp/nhttp)|68506|88644|60649|56224|
|[hono](https://github.com/honojs/hono)|63074|68354|62353|58516|
|[baojs](https://github.com/mattreid1/baojs)|48125|52408|45717|46250|
  



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

