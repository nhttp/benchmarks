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
Created At : Fri Sep 01 2023, 12:37:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56204|60115|54735|53761|
|[hono](https://github.com/honojs/hono)|51985|56845|51922|47189|
|[fastro](https://github.com/fastrodev/fastro)|22705|56895|5806|5415|
|[oak](https://github.com/oakserver/oak)|17331|18272|17578|16142|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36663|39915|36747|33328|
|[fastify](https://github.com/fastify/fastify)|28885|29566|29069|28021|
|[koa](https://github.com/koajs/koa)|18578|19607|17379|18749|
|[express](https://github.com/expressjs/express)|6138|6375|5671|6368|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|61137|61618|59099|62694|
|[hono](https://github.com/honojs/hono)|60857|59690|63195|59687|
|[nhttp](https://github.com/nhttp/nhttp)|57702|61243|57330|54532|
|[baojs](https://github.com/mattreid1/baojs)|43038|48834|43459|36822|
  



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

