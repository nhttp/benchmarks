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
Created At : Wed Apr 26 2023, 12:39:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|28608|29379|29297|27147|
|[hono](https://github.com/honojs/hono)|26983|29452|27020|24477|
|[fast](https://github.com/danteissaias/fast)|25581|29684|20630|26429|
|[fastro](https://github.com/fastrodev/fastro)|23336|27910|23431|18668|
|[oak](https://github.com/oakserver/oak)|10802|11495|10693|10217|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|19455|21570|19159|17636|
|[fastify](https://github.com/fastify/fastify)|14565|15085|14859|13751|
|[koa](https://github.com/koajs/koa)|9022|9422|8507|9138|
|[express](https://github.com/expressjs/express)|3918|4016|3881|3857|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44256|42688|46354|43726|
|[hono](https://github.com/honojs/hono)|42609|42637|43792|41399|
|[elysia](https://github.com/elysiajs/elysia)|42144|41808|41447|43177|
|[baojs](https://github.com/mattreid1/baojs)|36871|40895|37423|32294|
  



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

