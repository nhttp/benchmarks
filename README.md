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
Created At : Wed Oct 18 2023, 12:36:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66499|70033|68991|60472|
|[hono](https://github.com/honojs/hono)|66094|71688|67639|58955|
|[fast](https://github.com/danteissaias/fast)|56448|66622|42596|60125|
|[fastro](https://github.com/fastrodev/fastro)|28363|69528|7712|7849|
|[oak](https://github.com/oakserver/oak)|19477|21315|18681|18435|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45170|48518|44426|42565|
|[fastify](https://github.com/fastify/fastify)|33296|34004|33566|32319|
|[koa](https://github.com/koajs/koa)|22294|23554|21051|22278|
|[express](https://github.com/expressjs/express)|7667|7734|7389|7878|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64291|61292|65995|65586|
|[hono](https://github.com/honojs/hono)|58906|60466|55270|60983|
|[elysia](https://github.com/elysiajs/elysia)|58616|60856|58480|56512|
|[baojs](https://github.com/mattreid1/baojs)|56419|62846|47198|59214|
  



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

