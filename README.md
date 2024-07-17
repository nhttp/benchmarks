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
Created At : Wed Jul 17 2024, 12:42:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|46127|48403|47446|42531|
|[nhttp](https://github.com/nhttp/nhttp)|45657|48405|45738|42828|
|[fast](https://github.com/danteissaias/fast)|45322|49290|42402|44274|
|[oak](https://github.com/oakserver/oak)|25964|26957|25349|25587|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24579|30960|22373|20405|
|[fastify](https://github.com/fastify/fastify)|16995|17465|16983|16537|
|[koa](https://github.com/koajs/koa)|14308|15214|13654|14057|
|[express](https://github.com/expressjs/express)|6499|6661|6250|6587|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69087|79858|75945|51458|
|[nhttp](https://github.com/nhttp/nhttp)|60751|82109|55633|44511|
|[hono](https://github.com/honojs/hono)|60100|72691|55791|51817|
|[baojs](https://github.com/mattreid1/baojs)|36517|41713|34589|33248|
  



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

