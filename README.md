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
Created At : Wed Aug 07 2024, 12:43:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|46144|48744|47141|42548|
|[nhttp](https://github.com/nhttp/nhttp)|46086|49999|45611|42647|
|[fast](https://github.com/danteissaias/fast)|44918|49883|41512|43360|
|[oak](https://github.com/oakserver/oak)|26071|26743|25726|25744|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23906|29501|22351|19865|
|[fastify](https://github.com/fastify/fastify)|16791|17146|16696|16531|
|[koa](https://github.com/koajs/koa)|14222|15317|13306|14042|
|[express](https://github.com/expressjs/express)|6357|6448|6083|6541|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69521|80043|76954|51567|
|[nhttp](https://github.com/nhttp/nhttp)|61576|84442|52692|47593|
|[hono](https://github.com/honojs/hono)|57854|72186|54359|47017|
|[baojs](https://github.com/mattreid1/baojs)|35247|39521|32237|33984|
  



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

