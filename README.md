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
Created At : Sun Mar 12 2023, 12:46:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46309|47721|45468|45739|
|[fast](https://github.com/danteissaias/fast)|43351|45404|41167|43481|
|[hono](https://github.com/honojs/hono)|38917|46986|38324|31442|
|[fastro](https://github.com/fastrodev/fastro)|38147|44936|37145|32361|
|[oak](https://github.com/oakserver/oak)|19531|21456|19473|17663|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66274|70655|66181|61986|
|[hono](https://github.com/honojs/hono)|64151|74945|60621|56886|
|[elysia](https://github.com/elysiajs/elysia)|61453|69446|56079|58835|
|[baojs](https://github.com/mattreid1/baojs)|52158|55459|54424|46591|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|36370|39452|35813|33844|
|[nhttp](https://github.com/nhttp/nhttp)|33559|39130|28069|33478|
|[koa](https://github.com/koajs/koa)|23022|24201|21591|23275|
|[express](https://github.com/expressjs/express)|8184|8349|7902|8301|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|66274|70655|66181|61986|
|[hono](https://github.com/honojs/hono)|Bun|64151|74945|60621|56886|
|[elysia](https://github.com/elysiajs/elysia)|Bun|61453|69446|56079|58835|
|[baojs](https://github.com/mattreid1/baojs)|Bun|52158|55459|54424|46591|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|46309|47721|45468|45739|
|[fast](https://github.com/danteissaias/fast)|Deno|43351|45404|41167|43481|
|[hono](https://github.com/honojs/hono)|Deno|38917|46986|38324|31442|
|[fastro](https://github.com/fastrodev/fastro)|Deno|38147|44936|37145|32361|
|[fastify](https://github.com/fastify/fastify)|Node|36370|39452|35813|33844|
|[nhttp](https://github.com/nhttp/nhttp)|Node|33559|39130|28069|33478|
|[koa](https://github.com/koajs/koa)|Node|23022|24201|21591|23275|
|[oak](https://github.com/oakserver/oak)|Deno|19531|21456|19473|17663|
|[express](https://github.com/expressjs/express)|Node|8184|8349|7902|8301|



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

