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
Created At : Thu May 18 2023, 12:39:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58600|63585|59133|53082|
|[hono](https://github.com/honojs/hono)|57310|62097|59663|50169|
|[fast](https://github.com/danteissaias/fast)|52279|63084|53314|40440|
|[fastro](https://github.com/fastrodev/fastro)|49557|61859|50462|36351|
|[oak](https://github.com/oakserver/oak)|18806|20153|19037|17227|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43205|46558|43535|39523|
|[fastify](https://github.com/fastify/fastify)|35392|37289|35658|33228|
|[koa](https://github.com/koajs/koa)|21761|23215|20148|21921|
|[express](https://github.com/expressjs/express)|7694|7948|7675|7460|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69668|68052|71254|69697|
|[hono](https://github.com/honojs/hono)|67426|68436|66598|67243|
|[elysia](https://github.com/elysiajs/elysia)|66484|67348|66244|65860|
|[baojs](https://github.com/mattreid1/baojs)|58678|64956|57277|53802|
  



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

