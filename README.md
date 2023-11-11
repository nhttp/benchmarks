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
Created At : Sat Nov 11 2023, 12:36:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|43976|47922|42335|41672|
|[hono](https://github.com/honojs/hono)|42854|45301|43737|39525|
|[fastro](https://github.com/fastrodev/fastro)|23086|46471|11488|11300|
|[nhttp](https://github.com/nhttp/nhttp)|20388|9380|9171|42612|
|[oak](https://github.com/oakserver/oak)|19464|19710|20047|18634|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25548|29904|24418|22321|
|[fastify](https://github.com/fastify/fastify)|14278|14594|14112|14128|
|[koa](https://github.com/koajs/koa)|13343|13120|13190|13718|
|[express](https://github.com/expressjs/express)|5946|6084|5631|6124|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67164|75816|66776|58901|
|[nhttp](https://github.com/nhttp/nhttp)|66230|74462|63799|60429|
|[hono](https://github.com/honojs/hono)|63004|74438|60981|53593|
|[baojs](https://github.com/mattreid1/baojs)|32361|36890|28087|32105|
  



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

