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
Created At : Thu Sep 07 2023, 12:35:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35840|37851|35335|34333|
|[hono](https://github.com/honojs/hono)|34469|36431|35763|31213|
|[fast](https://github.com/danteissaias/fast)|32065|38095|32632|25467|
|[fastro](https://github.com/fastrodev/fastro)|14801|36972|3799|3631|
|[oak](https://github.com/oakserver/oak)|9871|10400|9800|9414|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|21563|23840|20667|20182|
|[fastify](https://github.com/fastify/fastify)|13731|14035|13679|13478|
|[koa](https://github.com/koajs/koa)|9052|9388|8604|9164|
|[express](https://github.com/expressjs/express)|3672|3812|3588|3615|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|41125|42490|42716|38168|
|[hono](https://github.com/honojs/hono)|39281|45718|38987|33138|
|[nhttp](https://github.com/nhttp/nhttp)|33966|43256|30569|28074|
|[baojs](https://github.com/mattreid1/baojs)|23280|27428|22437|19976|
  



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

