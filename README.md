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
Created At : Mon Jul 03 2023, 12:52:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39517|40565|39351|38634|
|[hono](https://github.com/honojs/hono)|38915|43011|38651|35083|
|[fastro](https://github.com/fastrodev/fastro)|30507|39145|25225|27150|
|[oak](https://github.com/oakserver/oak)|11118|11556|11029|10769|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|13723|14940|13475|12755|
|[nhttp](https://github.com/nhttp/nhttp)|10407|10294|10214|10713|
|[koa](https://github.com/koajs/koa)|8311|8615|7966|8351|
|[express](https://github.com/expressjs/express)|3691|3878|3397|3798|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49399|52149|46070|49978|
|[elysia](https://github.com/elysiajs/elysia)|46029|45034|47117|45935|
|[hono](https://github.com/honojs/hono)|44022|45669|45641|40755|
|[baojs](https://github.com/mattreid1/baojs)|39736|42761|32533|43915|
  



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

