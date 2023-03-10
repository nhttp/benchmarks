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
Created At : Fri Mar 10 2023, 12:46:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34065|34629|34981|32586|
|[fast](https://github.com/danteissaias/fast)|31792|33453|30684|31240|
|[hono](https://github.com/honojs/hono)|28709|31870|30330|23927|
|[fastro](https://github.com/fastrodev/fastro)|25942|32592|26127|19108|
|[oak](https://github.com/oakserver/oak)|13311|14864|13685|11383|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43161|51208|39306|38970|
|[elysia](https://github.com/elysiajs/elysia)|41577|47096|39474|38160|
|[hono](https://github.com/honojs/hono)|40778|46812|37440|38083|
|[baojs](https://github.com/mattreid1/baojs)|36488|38869|34465|36129|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24324|26671|24973|21329|
|[fastify](https://github.com/fastify/fastify)|24034|21377|25507|25217|
|[koa](https://github.com/koajs/koa)|15009|16089|14579|14359|
|[express](https://github.com/expressjs/express)|5340|5467|5075|5478|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|43161|51208|39306|38970|
|[elysia](https://github.com/elysiajs/elysia)|Bun|41577|47096|39474|38160|
|[hono](https://github.com/honojs/hono)|Bun|40778|46812|37440|38083|
|[baojs](https://github.com/mattreid1/baojs)|Bun|36488|38869|34465|36129|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|34065|34629|34981|32586|
|[fast](https://github.com/danteissaias/fast)|Deno|31792|33453|30684|31240|
|[hono](https://github.com/honojs/hono)|Deno|28709|31870|30330|23927|
|[fastro](https://github.com/fastrodev/fastro)|Deno|25942|32592|26127|19108|
|[nhttp](https://github.com/nhttp/nhttp)|Node|24324|26671|24973|21329|
|[fastify](https://github.com/fastify/fastify)|Node|24034|21377|25507|25217|
|[koa](https://github.com/koajs/koa)|Node|15009|16089|14579|14359|
|[oak](https://github.com/oakserver/oak)|Deno|13311|14864|13685|11383|
|[express](https://github.com/expressjs/express)|Node|5340|5467|5075|5478|



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

