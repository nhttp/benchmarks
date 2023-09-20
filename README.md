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
Created At : Wed Sep 20 2023, 12:35:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62124|68881|56841|60649|
|[hono](https://github.com/honojs/hono)|61548|67667|63755|53222|
|[fast](https://github.com/danteissaias/fast)|58027|69581|57475|47025|
|[fastro](https://github.com/fastrodev/fastro)|27423|69220|6529|6521|
|[oak](https://github.com/oakserver/oak)|19560|20935|19054|18690|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44259|47257|43477|42044|
|[fastify](https://github.com/fastify/fastify)|34439|36083|33715|33518|
|[koa](https://github.com/koajs/koa)|21615|22898|20282|21664|
|[express](https://github.com/expressjs/express)|7374|7618|7242|7263|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|63999|59260|66295|66443|
|[elysia](https://github.com/elysiajs/elysia)|63279|62960|60195|66681|
|[nhttp](https://github.com/nhttp/nhttp)|63155|60331|65131|64002|
|[baojs](https://github.com/mattreid1/baojs)|48472|55646|49392|40377|
  



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

