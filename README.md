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
Created At : Wed Nov 01 2023, 12:38:45 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65965|65953|69528|62414|
|[hono](https://github.com/honojs/hono)|63521|68055|65026|57483|
|[fast](https://github.com/danteissaias/fast)|56029|65261|43119|59707|
|[fastro](https://github.com/fastrodev/fastro)|27612|68271|7793|6772|
|[oak](https://github.com/oakserver/oak)|20100|21279|19991|19029|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45227|48752|44519|42410|
|[fastify](https://github.com/fastify/fastify)|33921|34256|34616|32890|
|[koa](https://github.com/koajs/koa)|22665|23789|21375|22830|
|[express](https://github.com/expressjs/express)|7420|7730|6723|7806|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64500|59584|67978|65937|
|[hono](https://github.com/honojs/hono)|62356|60945|59334|66790|
|[elysia](https://github.com/elysiajs/elysia)|62321|62536|61727|62701|
|[baojs](https://github.com/mattreid1/baojs)|53877|59538|46439|55653|
  



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

