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
Created At : Sat Mar 11 2023, 12:39:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|43713|46262|40669|44207|
|[nhttp](https://github.com/nhttp/nhttp)|43065|46215|45501|37480|
|[hono](https://github.com/honojs/hono)|40649|46651|46021|29276|
|[fastro](https://github.com/fastrodev/fastro)|36834|43362|36982|30157|
|[oak](https://github.com/oakserver/oak)|19545|20478|19791|18367|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64621|71549|62780|59533|
|[hono](https://github.com/honojs/hono)|62179|69759|60914|55863|
|[nhttp](https://github.com/nhttp/nhttp)|60815|68486|60488|53472|
|[baojs](https://github.com/mattreid1/baojs)|52354|53228|50472|53362|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|36395|35319|37030|36835|
|[nhttp](https://github.com/nhttp/nhttp)|35064|34074|36588|34530|
|[koa](https://github.com/koajs/koa)|17663|20378|16188|16424|
|[express](https://github.com/expressjs/express)|7969|8207|7569|8130|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|Bun|64621|71549|62780|59533|
|[hono](https://github.com/honojs/hono)|Bun|62179|69759|60914|55863|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|60815|68486|60488|53472|
|[baojs](https://github.com/mattreid1/baojs)|Bun|52354|53228|50472|53362|
|[fast](https://github.com/danteissaias/fast)|Deno|43713|46262|40669|44207|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|43065|46215|45501|37480|
|[hono](https://github.com/honojs/hono)|Deno|40649|46651|46021|29276|
|[fastro](https://github.com/fastrodev/fastro)|Deno|36834|43362|36982|30157|
|[fastify](https://github.com/fastify/fastify)|Node|36395|35319|37030|36835|
|[nhttp](https://github.com/nhttp/nhttp)|Node|35064|34074|36588|34530|
|[oak](https://github.com/oakserver/oak)|Deno|19545|20478|19791|18367|
|[koa](https://github.com/koajs/koa)|Node|17663|20378|16188|16424|
|[express](https://github.com/expressjs/express)|Node|7969|8207|7569|8130|



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

