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
Created At : Sun Jul 16 2023, 12:59:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55155|59887|55425|50153|
|[hono](https://github.com/honojs/hono)|50768|58241|44370|49693|
|[oak](https://github.com/oakserver/oak)|16969|17980|16828|16100|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36508|39660|36290|33574|
|[fastify](https://github.com/fastify/fastify)|29310|30578|29489|27863|
|[koa](https://github.com/koajs/koa)|18451|19600|16937|18815|
|[express](https://github.com/expressjs/express)|6265|6511|5641|6642|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62830|62703|62990|62798|
|[hono](https://github.com/honojs/hono)|61618|61366|58964|64524|
|[elysia](https://github.com/elysiajs/elysia)|60011|59169|59904|60961|
|[baojs](https://github.com/mattreid1/baojs)|49744|54259|50064|44910|
  



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

