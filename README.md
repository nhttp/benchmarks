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
Created At : Fri Nov 17 2023, 12:40:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44600|47810|43653|42336|
|[fast](https://github.com/danteissaias/fast)|44012|47005|42017|43014|
|[hono](https://github.com/honojs/hono)|28017|0|43713|40339|
|[fastro](https://github.com/fastrodev/fastro)|23282|47045|11815|10985|
|[oak](https://github.com/oakserver/oak)|20516|21593|20358|19597|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|27232|33880|24654|23162|
|[fastify](https://github.com/fastify/fastify)|15404|16029|15281|14901|
|[koa](https://github.com/koajs/koa)|14274|14939|13632|14251|
|[express](https://github.com/expressjs/express)|6295|6489|5921|6474|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67960|77288|72235|54357|
|[nhttp](https://github.com/nhttp/nhttp)|66624|81009|59633|59231|
|[hono](https://github.com/honojs/hono)|62195|75088|62271|49225|
|[baojs](https://github.com/mattreid1/baojs)|34659|39953|34144|29879|
  



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

