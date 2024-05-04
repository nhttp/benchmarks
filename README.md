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
Created At : Sat May 04 2024, 12:37:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48293|51094|48936|44849|
|[nhttp](https://github.com/nhttp/nhttp)|48028|50572|46684|46828|
|[fast](https://github.com/danteissaias/fast)|47862|52445|45166|45976|
|[oak](https://github.com/oakserver/oak)|27535|29067|27735|25802|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24214|29773|22529|20339|
|[fastify](https://github.com/fastify/fastify)|16580|17157|16245|16339|
|[koa](https://github.com/koajs/koa)|14482|15333|13656|14458|
|[express](https://github.com/expressjs/express)|6363|6515|5996|6579|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77637|85829|81065|66018|
|[nhttp](https://github.com/nhttp/nhttp)|63607|85690|52204|52927|
|[hono](https://github.com/honojs/hono)|61675|75384|59567|50074|
|[baojs](https://github.com/mattreid1/baojs)|38622|46577|35584|33705|
  



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

