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
Created At : Tue Apr 15 2025, 12:56:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58927|64915|60577|51289|
|[hono](https://github.com/honojs/hono)|57471|62787|57481|52144|
|[fast](https://github.com/danteissaias/fast)|56374|64438|48591|56094|
|[oak](https://github.com/oakserver/oak)|27564|28992|25819|27882|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39163|45024|38458|34008|
|[fastify](https://github.com/fastify/fastify)|25978|26393|27248|24292|
|[koa](https://github.com/koajs/koa)|16520|17141|15498|16922|
|[express](https://github.com/expressjs/express)|6545|6578|6362|6695|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73890|85999|72011|63660|
|[nhttp](https://github.com/nhttp/nhttp)|65674|80057|56473|60493|
|[hono](https://github.com/honojs/hono)|61489|71224|54276|58967|
|[baojs](https://github.com/mattreid1/baojs)|48750|53845|45066|47339|
  



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

