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
Created At : Tue Oct 24 2023, 12:36:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|50714|60479|39041|52623|
|[nhttp](https://github.com/nhttp/nhttp)|47294|51972|47126|42783|
|[hono](https://github.com/honojs/hono)|44326|46715|44879|41384|
|[oak](https://github.com/oakserver/oak)|14173|14940|13743|13837|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32762|35965|32014|30307|
|[fastify](https://github.com/fastify/fastify)|23391|24333|23565|22276|
|[koa](https://github.com/koajs/koa)|15991|16613|14918|16443|
|[express](https://github.com/expressjs/express)|5104|5380|4671|5261|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54767|51562|56871|55867|
|[hono](https://github.com/honojs/hono)|54463|48034|57814|57541|
|[elysia](https://github.com/elysiajs/elysia)|51648|49551|47810|57582|
|[baojs](https://github.com/mattreid1/baojs)|41138|47584|32571|43260|
  



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

