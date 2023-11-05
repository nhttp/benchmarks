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
Created At : Sun Nov 05 2023, 12:39:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45890|51608|44735|41328|
|[fast](https://github.com/danteissaias/fast)|44477|47922|42072|43438|
|[hono](https://github.com/honojs/hono)|42948|45385|43893|39567|
|[fastro](https://github.com/fastrodev/fastro)|23159|46958|11625|10893|
|[oak](https://github.com/oakserver/oak)|19809|21012|19732|18684|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26796|32098|25214|23075|
|[fastify](https://github.com/fastify/fastify)|15107|15571|14933|14816|
|[koa](https://github.com/koajs/koa)|13760|13808|13203|14269|
|[express](https://github.com/expressjs/express)|6286|6429|5977|6453|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69947|75403|71094|63344|
|[hono](https://github.com/honojs/hono)|67010|74482|69423|57124|
|[nhttp](https://github.com/nhttp/nhttp)|65488|76300|58514|61649|
|[baojs](https://github.com/mattreid1/baojs)|37020|42341|37196|31522|
  



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

