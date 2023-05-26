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
Created At : Fri May 26 2023, 7:26:08 PM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54033|57366|53709|51025|
|[hono](https://github.com/honojs/hono)|53307|57288|54161|48471|
|[fast](https://github.com/danteissaias/fast)|48878|56509|38961|51163|
|[fastro](https://github.com/fastrodev/fastro)|43229|53040|45739|30909|
|[oak](https://github.com/oakserver/oak)|18002|19331|18053|16622|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38687|42167|37868|36027|
|[fastify](https://github.com/fastify/fastify)|30267|31926|30026|28848|
|[koa](https://github.com/koajs/koa)|18837|20128|17344|19038|
|[express](https://github.com/expressjs/express)|6415|6674|5869|6702|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65487|64994|66150|65316|
|[elysia](https://github.com/elysiajs/elysia)|62471|63125|62767|61522|
|[hono](https://github.com/honojs/hono)|61839|60680|61494|63342|
|[baojs](https://github.com/mattreid1/baojs)|55392|61189|47411|57577|
  



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

