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
Created At : Wed Aug 30 2023, 12:35:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36931|39411|36301|35082|
|[hono](https://github.com/honojs/hono)|32923|34169|34397|30203|
|[fastro](https://github.com/fastrodev/fastro)|14609|36288|3762|3778|
|[oak](https://github.com/oakserver/oak)|10369|10483|10330|10295|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18378|20951|17586|16596|
|[fastify](https://github.com/fastify/fastify)|12285|12513|12539|11802|
|[koa](https://github.com/koajs/koa)|9696|10700|9250|9137|
|[express](https://github.com/expressjs/express)|3651|3892|3287|3775|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|38120|41556|37788|35017|
|[hono](https://github.com/honojs/hono)|37931|45168|35515|33110|
|[nhttp](https://github.com/nhttp/nhttp)|33490|44168|28816|27486|
|[baojs](https://github.com/mattreid1/baojs)|23592|26937|19425|24415|
  



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

