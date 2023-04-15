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
Created At : Sat Apr 15 2023, 12:41:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25175|26418|25093|24015|
|[hono](https://github.com/honojs/hono)|24709|26429|24759|22940|
|[fast](https://github.com/danteissaias/fast)|23050|25616|24280|19255|
|[fastro](https://github.com/fastrodev/fastro)|21144|25102|21413|16917|
|[oak](https://github.com/oakserver/oak)|8375|8806|8261|8057|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|15830|17988|14769|14732|
|[fastify](https://github.com/fastify/fastify)|11722|12230|11439|11497|
|[koa](https://github.com/koajs/koa)|7928|8369|7393|8021|
|[express](https://github.com/expressjs/express)|3422|3481|3380|3405|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38711|42457|38862|34814|
|[elysia](https://github.com/elysiajs/elysia)|37146|39257|37841|34339|
|[hono](https://github.com/honojs/hono)|36382|38310|36900|33936|
|[baojs](https://github.com/mattreid1/baojs)|33957|38147|34850|28873|
  



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

