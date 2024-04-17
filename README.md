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
Created At : Wed Apr 17 2024, 12:37:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47989|51528|46941|45499|
|[hono](https://github.com/honojs/hono)|47897|51327|47887|44476|
|[fast](https://github.com/danteissaias/fast)|47836|51565|44125|47818|
|[oak](https://github.com/oakserver/oak)|27568|29401|27691|25612|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24812|30920|22908|20607|
|[fastify](https://github.com/fastify/fastify)|16992|17437|16782|16758|
|[koa](https://github.com/koajs/koa)|14434|14964|13847|14491|
|[express](https://github.com/expressjs/express)|6396|6600|6065|6522|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73342|84564|72975|62486|
|[nhttp](https://github.com/nhttp/nhttp)|60416|83958|49632|47657|
|[hono](https://github.com/honojs/hono)|54111|65276|54486|42570|
|[baojs](https://github.com/mattreid1/baojs)|37220|43088|35393|33178|
  



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

