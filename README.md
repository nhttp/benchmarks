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
Created At : Sat Mar 22 2025, 12:52:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59790|67451|57229|54689|
|[hono](https://github.com/honojs/hono)|58566|63083|60567|52048|
|[fast](https://github.com/danteissaias/fast)|54775|62382|49795|52148|
|[oak](https://github.com/oakserver/oak)|27431|28828|27014|26450|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38805|45336|36046|35033|
|[fastify](https://github.com/fastify/fastify)|24253|23079|26923|22758|
|[koa](https://github.com/koajs/koa)|16566|16759|15815|17125|
|[express](https://github.com/expressjs/express)|6850|7076|6348|7126|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78511|91879|80050|63605|
|[nhttp](https://github.com/nhttp/nhttp)|66496|90678|53771|55040|
|[hono](https://github.com/honojs/hono)|61915|70104|54750|60892|
|[baojs](https://github.com/mattreid1/baojs)|47414|54768|44588|42886|
  



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

