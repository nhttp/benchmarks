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
Created At : Tue Sep 03 2024, 12:45:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48594|52645|48153|44984|
|[fast](https://github.com/danteissaias/fast)|47828|51884|45084|46516|
|[hono](https://github.com/honojs/hono)|47748|50921|48846|43478|
|[oak](https://github.com/oakserver/oak)|26127|27098|25619|25664|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24405|30934|22375|19905|
|[fastify](https://github.com/fastify/fastify)|16493|16700|16547|16233|
|[koa](https://github.com/koajs/koa)|14098|15021|13187|14086|
|[express](https://github.com/expressjs/express)|6344|6523|6228|6280|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73513|82175|78164|60200|
|[nhttp](https://github.com/nhttp/nhttp)|65896|80198|54706|62784|
|[hono](https://github.com/honojs/hono)|60113|70522|61511|48305|
|[baojs](https://github.com/mattreid1/baojs)|37339|41682|38608|31728|
  



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

