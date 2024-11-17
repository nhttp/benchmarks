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
Created At : Sun Nov 17 2024, 12:55:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48295|52031|47542|45313|
|[fast](https://github.com/danteissaias/fast)|47969|53210|44035|46662|
|[hono](https://github.com/honojs/hono)|47733|50612|48505|44081|
|[oak](https://github.com/oakserver/oak)|26616|27639|26164|26046|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24526|30007|23065|20506|
|[fastify](https://github.com/fastify/fastify)|17144|17716|16973|16743|
|[koa](https://github.com/koajs/koa)|14243|14992|13444|14294|
|[express](https://github.com/expressjs/express)|6349|6573|5910|6565|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81976|87629|83120|75178|
|[hono](https://github.com/honojs/hono)|69261|81702|63759|62323|
|[nhttp](https://github.com/nhttp/nhttp)|62878|85616|48769|54249|
|[baojs](https://github.com/mattreid1/baojs)|38262|46514|36055|32217|
  



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

