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
Created At : Tue Jul 18 2023, 1:09:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41241|45044|40284|38394|
|[hono](https://github.com/honojs/hono)|38629|41906|37693|36288|
|[fastro](https://github.com/fastrodev/fastro)|15053|38127|3519|3513|
|[oak](https://github.com/oakserver/oak)|10562|11325|10589|9773|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|20884|21771|21058|19824|
|[fastify](https://github.com/fastify/fastify)|14773|14998|14921|14400|
|[koa](https://github.com/koajs/koa)|9921|10371|9302|10091|
|[express](https://github.com/expressjs/express)|3962|4117|3578|4191|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46216|44760|48219|45669|
|[elysia](https://github.com/elysiajs/elysia)|45668|46023|45463|45517|
|[hono](https://github.com/honojs/hono)|43570|42831|44436|43443|
|[baojs](https://github.com/mattreid1/baojs)|41405|46208|39909|38098|
  



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

