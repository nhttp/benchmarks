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
Created At : Tue Nov 07 2023, 12:37:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45810|50091|46212|41128|
|[fast](https://github.com/danteissaias/fast)|43922|47332|40893|43540|
|[hono](https://github.com/honojs/hono)|42953|46309|43673|38878|
|[fastro](https://github.com/fastrodev/fastro)|22971|46761|11125|11028|
|[oak](https://github.com/oakserver/oak)|20434|21645|20048|19609|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26140|31106|24844|22470|
|[fastify](https://github.com/fastify/fastify)|14933|15297|14786|14715|
|[koa](https://github.com/koajs/koa)|13631|13912|13096|13884|
|[express](https://github.com/expressjs/express)|6231|6378|5950|6364|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65884|73024|69094|55535|
|[nhttp](https://github.com/nhttp/nhttp)|62190|73199|58356|55016|
|[hono](https://github.com/honojs/hono)|58354|70845|46342|57874|
|[baojs](https://github.com/mattreid1/baojs)|32772|37380|31925|29010|
  



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

