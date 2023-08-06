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
Created At : Sun Aug 06 2023, 12:38:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56699|60638|55567|53892|
|[hono](https://github.com/honojs/hono)|56349|59738|57534|51776|
|[fastro](https://github.com/fastrodev/fastro)|20950|52956|4289|5604|
|[oak](https://github.com/oakserver/oak)|16923|18061|16744|15965|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37141|40149|36549|34724|
|[fastify](https://github.com/fastify/fastify)|28462|29570|28435|27380|
|[koa](https://github.com/koajs/koa)|18614|19736|17383|18722|
|[express](https://github.com/expressjs/express)|6362|6584|5947|6555|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|64439|62558|64688|66072|
|[nhttp](https://github.com/nhttp/nhttp)|63933|64927|64000|62872|
|[elysia](https://github.com/elysiajs/elysia)|62309|61550|62162|63215|
|[baojs](https://github.com/mattreid1/baojs)|48491|55563|52645|37266|
  



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

