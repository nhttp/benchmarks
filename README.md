## Runtime JS/TS benchmarks.
This benchmark uses [bombardier](https://github.com/codesenberg/bombardier).

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench
framework.get("/blog/:id", (req, res) => {
  res.send(`${req.params.id} ${req.query.title}`);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Mon Mar 13 2023, 7:09:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40892|42125|40371|40181|
|[fast](https://github.com/danteissaias/fast)|39838|43512|37113|38889|
|[hono](https://github.com/honojs/hono)|35114|39622|38540|27179|
|[fastro](https://github.com/fastrodev/fastro)|34068|39423|31182|31599|
|[oak](https://github.com/oakserver/oak)|14998|17731|11982|15280|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|57181|63602|54772|53170|
|[hono](https://github.com/honojs/hono)|55098|62242|54776|48275|
|[nhttp](https://github.com/nhttp/nhttp)|53815|59459|50829|51156|
|[baojs](https://github.com/mattreid1/baojs)|45303|49836|48108|37964|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38830|42042|38680|35767|
|[fastify](https://github.com/fastify/fastify)|31247|30661|31619|31462|
|[koa](https://github.com/koajs/koa)|18036|19818|15651|18638|
|[express](https://github.com/expressjs/express)|6536|6600|6344|6665|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|Bun|57181|63602|54772|53170|
|[hono](https://github.com/honojs/hono)|Bun|55098|62242|54776|48275|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|53815|59459|50829|51156|
|[baojs](https://github.com/mattreid1/baojs)|Bun|45303|49836|48108|37964|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|40892|42125|40371|40181|
|[fast](https://github.com/danteissaias/fast)|Deno|39838|43512|37113|38889|
|[nhttp](https://github.com/nhttp/nhttp)|Node|38830|42042|38680|35767|
|[hono](https://github.com/honojs/hono)|Deno|35114|39622|38540|27179|
|[fastro](https://github.com/fastrodev/fastro)|Deno|34068|39423|31182|31599|
|[fastify](https://github.com/fastify/fastify)|Node|31247|30661|31619|31462|
|[koa](https://github.com/koajs/koa)|Node|18036|19818|15651|18638|
|[oak](https://github.com/oakserver/oak)|Deno|14998|17731|11982|15280|
|[express](https://github.com/expressjs/express)|Node|6536|6600|6344|6665|



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

