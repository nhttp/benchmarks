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
Created At : Tue May 16 2023, 12:40:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55259|61569|54255|49954|
|[hono](https://github.com/honojs/hono)|53332|57375|54703|47917|
|[fast](https://github.com/danteissaias/fast)|49306|58017|40592|49310|
|[fastro](https://github.com/fastrodev/fastro)|45845|54442|49490|33603|
|[oak](https://github.com/oakserver/oak)|18021|19100|18004|16960|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37852|40933|37728|34895|
|[fastify](https://github.com/fastify/fastify)|29621|31274|29801|27788|
|[koa](https://github.com/koajs/koa)|18963|20202|17590|19096|
|[express](https://github.com/expressjs/express)|6430|6685|5769|6836|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62902|61832|65086|61787|
|[elysia](https://github.com/elysiajs/elysia)|60376|61174|62495|57459|
|[hono](https://github.com/honojs/hono)|59599|60392|58205|60199|
|[baojs](https://github.com/mattreid1/baojs)|55650|62192|47494|57264|
  



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

