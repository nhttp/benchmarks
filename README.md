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
Created At : Tue Feb 25 2025, 12:51:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57860|62181|61309|50089|
|[nhttp](https://github.com/nhttp/nhttp)|57581|63623|58115|51006|
|[fast](https://github.com/danteissaias/fast)|53416|59678|50857|49712|
|[oak](https://github.com/oakserver/oak)|27923|28423|27501|27845|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40417|45719|37797|37734|
|[fastify](https://github.com/fastify/fastify)|26778|28451|27525|24359|
|[koa](https://github.com/koajs/koa)|17243|18196|16087|17446|
|[express](https://github.com/expressjs/express)|6997|7210|6509|7272|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76564|89691|75604|64396|
|[nhttp](https://github.com/nhttp/nhttp)|69536|94253|56382|57974|
|[hono](https://github.com/honojs/hono)|64903|73166|59983|61560|
|[baojs](https://github.com/mattreid1/baojs)|48301|54132|43792|46980|
  



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

