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
Created At : Mon Jul 29 2024, 12:44:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46052|49721|45085|43349|
|[hono](https://github.com/honojs/hono)|45604|48461|46569|41783|
|[fast](https://github.com/danteissaias/fast)|45501|49691|43515|43298|
|[oak](https://github.com/oakserver/oak)|26365|27199|25944|25952|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24310|30749|22671|19511|
|[fastify](https://github.com/fastify/fastify)|16992|17440|16784|16751|
|[koa](https://github.com/koajs/koa)|14306|15190|13565|14164|
|[express](https://github.com/expressjs/express)|6475|6624|6245|6555|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68466|81149|77662|46587|
|[nhttp](https://github.com/nhttp/nhttp)|60798|84040|50972|47383|
|[hono](https://github.com/honojs/hono)|60158|73227|54656|52592|
|[baojs](https://github.com/mattreid1/baojs)|37824|43264|37296|32912|
  



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

