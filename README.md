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
Created At : Tue Jul 23 2024, 12:42:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|46417|49196|47259|42797|
|[nhttp](https://github.com/nhttp/nhttp)|46118|49508|45751|43094|
|[fast](https://github.com/danteissaias/fast)|46043|49904|44363|43863|
|[oak](https://github.com/oakserver/oak)|25433|26455|24949|24895|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24518|30461|22209|20885|
|[fastify](https://github.com/fastify/fastify)|17151|17579|17113|16761|
|[koa](https://github.com/koajs/koa)|14356|15241|13428|14400|
|[express](https://github.com/expressjs/express)|6422|6603|6138|6526|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71154|84474|76522|52466|
|[hono](https://github.com/honojs/hono)|60499|70407|58093|52997|
|[nhttp](https://github.com/nhttp/nhttp)|59235|81690|53187|42828|
|[baojs](https://github.com/mattreid1/baojs)|36045|41847|33340|32947|
  



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

