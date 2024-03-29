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
Created At : Fri Mar 29 2024, 12:36:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48077|51972|46465|45793|
|[fast](https://github.com/danteissaias/fast)|47574|50730|45335|46657|
|[hono](https://github.com/honojs/hono)|47170|49739|48164|43606|
|[oak](https://github.com/oakserver/oak)|27504|29335|27488|25690|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25006|31278|23246|20494|
|[fastify](https://github.com/fastify/fastify)|16511|16973|16386|16173|
|[koa](https://github.com/koajs/koa)|14390|15129|13576|14466|
|[express](https://github.com/expressjs/express)|6309|6354|6146|6427|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71204|85784|76148|51679|
|[nhttp](https://github.com/nhttp/nhttp)|60855|83610|50895|48060|
|[hono](https://github.com/honojs/hono)|59556|69703|55249|53716|
|[baojs](https://github.com/mattreid1/baojs)|34513|40202|32814|30522|
  



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

