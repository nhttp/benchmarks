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
Created At : Sat Sep 23 2023, 12:34:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58942|61971|58220|56636|
|[hono](https://github.com/honojs/hono)|56343|61648|56249|51131|
|[fast](https://github.com/danteissaias/fast)|53291|64237|38618|57019|
|[fastro](https://github.com/fastrodev/fastro)|24684|62668|5783|5600|
|[oak](https://github.com/oakserver/oak)|17719|18642|18018|16498|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38243|41472|37594|35663|
|[fastify](https://github.com/fastify/fastify)|28289|29601|28365|26902|
|[koa](https://github.com/koajs/koa)|17958|18551|16848|18476|
|[express](https://github.com/expressjs/express)|6269|6359|5936|6511|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58311|53995|61891|59047|
|[elysia](https://github.com/elysiajs/elysia)|58228|57283|56080|61320|
|[nhttp](https://github.com/nhttp/nhttp)|58041|55326|60578|58219|
|[baojs](https://github.com/mattreid1/baojs)|44566|48233|38865|46599|
  



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

