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
Created At : Fri Jan 12 2024, 12:39:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45816|49802|44374|43273|
|[fast](https://github.com/danteissaias/fast)|45076|48169|40896|46162|
|[hono](https://github.com/honojs/hono)|44323|46862|45010|41097|
|[fastro](https://github.com/fastrodev/fastro)|23265|47851|11071|10874|
|[oak](https://github.com/oakserver/oak)|20961|22087|20848|19947|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24251|29363|22945|20445|
|[fastify](https://github.com/fastify/fastify)|15582|15575|15179|15991|
|[koa](https://github.com/koajs/koa)|14082|14278|13486|14482|
|[express](https://github.com/expressjs/express)|6204|6361|6012|6238|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70434|78698|70939|61665|
|[nhttp](https://github.com/nhttp/nhttp)|59138|77925|51536|47954|
|[hono](https://github.com/honojs/hono)|52453|56005|48477|52877|
|[baojs](https://github.com/mattreid1/baojs)|37115|43354|34343|33648|
  



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

