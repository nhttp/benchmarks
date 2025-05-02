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
Created At : Fri May 02 2025, 12:59:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59279|66563|57898|53376|
|[fast](https://github.com/danteissaias/fast)|56802|69254|44633|56518|
|[nhttp](https://github.com/nhttp/nhttp)|56206|56981|58035|53602|
|[oak](https://github.com/oakserver/oak)|28397|29457|28200|27535|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39016|45689|38684|32676|
|[fastify](https://github.com/fastify/fastify)|25413|26301|25660|24277|
|[koa](https://github.com/koajs/koa)|17068|17121|17285|16797|
|[express](https://github.com/expressjs/express)|6527|6595|6383|6603|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78890|90187|78400|68083|
|[nhttp](https://github.com/nhttp/nhttp)|71758|90321|59550|65403|
|[hono](https://github.com/honojs/hono)|66643|73601|61924|64405|
|[baojs](https://github.com/mattreid1/baojs)|49054|54477|44512|48172|
  



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

