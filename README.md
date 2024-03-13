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
Created At : Wed Mar 13 2024, 12:36:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49234|54250|47402|46051|
|[fast](https://github.com/danteissaias/fast)|47629|50697|45217|46974|
|[hono](https://github.com/honojs/hono)|47301|49714|48319|43871|
|[oak](https://github.com/oakserver/oak)|27936|29259|28047|26501|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24607|30387|22967|20467|
|[fastify](https://github.com/fastify/fastify)|17095|17385|17136|16765|
|[koa](https://github.com/koajs/koa)|14507|15466|13634|14420|
|[express](https://github.com/expressjs/express)|6378|6505|6052|6578|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76017|82219|78930|66902|
|[nhttp](https://github.com/nhttp/nhttp)|64129|82728|57823|51837|
|[hono](https://github.com/honojs/hono)|57597|67493|53337|51960|
|[baojs](https://github.com/mattreid1/baojs)|35038|40872|30477|33766|
  



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

