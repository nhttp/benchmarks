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
Created At : Sun Apr 16 2023, 12:41:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41849|44447|41107|39994|
|[hono](https://github.com/honojs/hono)|40271|43688|40981|36143|
|[fast](https://github.com/danteissaias/fast)|37812|44419|30058|38960|
|[fastro](https://github.com/fastrodev/fastro)|35606|42697|36650|27472|
|[oak](https://github.com/oakserver/oak)|16731|17883|16681|15629|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44247|46902|43914|41925|
|[fastify](https://github.com/fastify/fastify)|36188|37621|36310|34633|
|[koa](https://github.com/koajs/koa)|21946|23130|20536|22173|
|[express](https://github.com/expressjs/express)|7783|8032|7554|7763|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|67652|67182|68795|66979|
|[elysia](https://github.com/elysiajs/elysia)|67287|67138|67725|66999|
|[nhttp](https://github.com/nhttp/nhttp)|66783|70263|70806|59280|
|[baojs](https://github.com/mattreid1/baojs)|60219|67232|60777|52648|
  



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

