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
Created At : Sun Feb 04 2024, 12:41:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47420|51252|46379|44629|
|[fast](https://github.com/danteissaias/fast)|47157|51255|44828|45387|
|[hono](https://github.com/honojs/hono)|46183|48560|46895|43093|
|[oak](https://github.com/oakserver/oak)|27101|28590|27133|25580|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25642|32977|23087|20863|
|[fastify](https://github.com/fastify/fastify)|15875|16296|15875|15453|
|[koa](https://github.com/koajs/koa)|14315|14996|13340|14609|
|[express](https://github.com/expressjs/express)|6349|6471|6004|6573|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72233|82521|73660|60519|
|[nhttp](https://github.com/nhttp/nhttp)|62199|83898|54333|48367|
|[hono](https://github.com/honojs/hono)|59367|72970|54604|50526|
|[baojs](https://github.com/mattreid1/baojs)|33901|40439|29944|31320|
  



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

