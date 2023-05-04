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
Created At : Thu May 04 2023, 12:39:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33410|36300|33905|30024|
|[fast](https://github.com/danteissaias/fast)|28234|34374|28301|22027|
|[hono](https://github.com/honojs/hono)|26936|29438|26891|24479|
|[fastro](https://github.com/fastrodev/fastro)|25182|31069|25533|18945|
|[oak](https://github.com/oakserver/oak)|9965|10680|10100|9114|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17598|18839|17972|15982|
|[fastify](https://github.com/fastify/fastify)|13218|13826|12510|13318|
|[koa](https://github.com/koajs/koa)|9408|9820|9008|9397|
|[express](https://github.com/expressjs/express)|4002|4134|3855|4016|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41204|44655|41311|37645|
|[elysia](https://github.com/elysiajs/elysia)|39283|42346|36892|38610|
|[hono](https://github.com/honojs/hono)|35026|39091|33267|32720|
|[baojs](https://github.com/mattreid1/baojs)|34881|39295|34035|31314|
  



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

