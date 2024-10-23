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
Created At : Wed Oct 23 2024, 12:49:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48791|53849|48308|44215|
|[hono](https://github.com/honojs/hono)|47597|50752|48306|43732|
|[fast](https://github.com/danteissaias/fast)|47349|52264|45263|44520|
|[oak](https://github.com/oakserver/oak)|26030|26955|25808|25328|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25237|31664|22917|21131|
|[fastify](https://github.com/fastify/fastify)|16462|16705|16163|16519|
|[koa](https://github.com/koajs/koa)|14027|14914|13027|14139|
|[express](https://github.com/expressjs/express)|6278|6469|5947|6418|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69848|79933|74646|54965|
|[nhttp](https://github.com/nhttp/nhttp)|58311|80549|45782|48602|
|[hono](https://github.com/honojs/hono)|50344|62444|46304|42283|
|[baojs](https://github.com/mattreid1/baojs)|33660|35213|29529|36237|
  



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

