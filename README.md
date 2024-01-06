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
Created At : Sat Jan 06 2024, 12:38:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46268|49805|44960|44039|
|[fast](https://github.com/danteissaias/fast)|45195|48478|41653|45453|
|[hono](https://github.com/honojs/hono)|44049|46430|44215|41502|
|[fastro](https://github.com/fastrodev/fastro)|23431|48645|10994|10653|
|[oak](https://github.com/oakserver/oak)|21176|22206|21120|20203|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24951|30512|23189|21153|
|[fastify](https://github.com/fastify/fastify)|15776|16617|15541|15170|
|[koa](https://github.com/koajs/koa)|14144|14706|13378|14348|
|[express](https://github.com/expressjs/express)|6254|6341|6011|6409|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70837|80186|73212|59113|
|[hono](https://github.com/honojs/hono)|60821|73396|59589|49477|
|[nhttp](https://github.com/nhttp/nhttp)|57389|81864|52221|38082|
|[baojs](https://github.com/mattreid1/baojs)|33555|40859|29222|30585|
  



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

