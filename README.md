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
Created At : Tue Jul 11 2023, 12:45:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36123|38042|35471|34856|
|[hono](https://github.com/honojs/hono)|30977|35190|25514|32228|
|[oak](https://github.com/oakserver/oak)|9696|10125|9857|9105|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|12730|13338|12382|12469|
|[nhttp](https://github.com/nhttp/nhttp)|10015|10020|9756|10270|
|[koa](https://github.com/koajs/koa)|8228|8377|7900|8407|
|[express](https://github.com/expressjs/express)|3481|3598|3175|3669|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41514|43694|40637|40210|
|[elysia](https://github.com/elysiajs/elysia)|39638|41373|41432|36110|
|[hono](https://github.com/honojs/hono)|39056|39590|38849|38730|
|[baojs](https://github.com/mattreid1/baojs)|31381|35681|29847|28614|
  



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

