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
Created At : Fri May 30 2025, 1:03:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60935|67364|61182|54259|
|[hono](https://github.com/honojs/hono)|56673|62889|57648|49482|
|[fast](https://github.com/danteissaias/fast)|52701|58125|48743|51234|
|[oak](https://github.com/oakserver/oak)|28031|30139|26263|27692|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37590|43138|37151|32482|
|[fastify](https://github.com/fastify/fastify)|25438|25033|26425|24856|
|[koa](https://github.com/koajs/koa)|17396|17887|17223|17078|
|[express](https://github.com/expressjs/express)|6601|6564|6501|6739|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|88156|94714|82505|87250|
|[nhttp](https://github.com/nhttp/nhttp)|68387|89949|54671|60541|
|[hono](https://github.com/honojs/hono)|62738|71534|58144|58535|
|[baojs](https://github.com/mattreid1/baojs)|48244|53775|44617|46340|
  



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

