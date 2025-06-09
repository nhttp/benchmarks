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
Created At : Mon Jun 09 2025, 1:08:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60485|64677|61262|55517|
|[hono](https://github.com/honojs/hono)|59424|66152|59506|52614|
|[fast](https://github.com/danteissaias/fast)|54821|66496|50820|47146|
|[oak](https://github.com/oakserver/oak)|27657|27812|26467|28692|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39657|44171|40125|34675|
|[fastify](https://github.com/fastify/fastify)|24797|23823|25522|25046|
|[koa](https://github.com/koajs/koa)|16933|17252|16573|16975|
|[express](https://github.com/expressjs/express)|6621|6780|6355|6727|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83926|95481|81751|74546|
|[nhttp](https://github.com/nhttp/nhttp)|66460|88111|58325|52944|
|[hono](https://github.com/honojs/hono)|61018|71521|57777|53757|
|[baojs](https://github.com/mattreid1/baojs)|45448|52070|40735|43540|
  



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

