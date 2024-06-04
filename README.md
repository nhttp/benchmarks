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
Created At : Tue Jun 04 2024, 12:40:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|47995|51058|49108|43819|
|[nhttp](https://github.com/nhttp/nhttp)|47845|51540|47392|44602|
|[fast](https://github.com/danteissaias/fast)|47447|51651|44997|45692|
|[oak](https://github.com/oakserver/oak)|26958|27912|26536|26425|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24019|28813|22618|20627|
|[fastify](https://github.com/fastify/fastify)|16945|17437|16819|16578|
|[koa](https://github.com/koajs/koa)|14462|15342|13509|14534|
|[express](https://github.com/expressjs/express)|6282|6391|6059|6397|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70495|86501|77810|47174|
|[nhttp](https://github.com/nhttp/nhttp)|60771|87225|46684|48403|
|[hono](https://github.com/honojs/hono)|57489|69273|54202|48991|
|[baojs](https://github.com/mattreid1/baojs)|35467|41721|33885|30794|
  



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

