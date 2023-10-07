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
Created At : Sat Oct 07 2023, 12:35:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66096|66047|68738|63503|
|[hono](https://github.com/honojs/hono)|61954|68103|62983|54777|
|[fast](https://github.com/danteissaias/fast)|56838|66333|54705|49475|
|[fastro](https://github.com/fastrodev/fastro)|28283|69488|7660|7702|
|[oak](https://github.com/oakserver/oak)|19625|20722|19368|18784|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43544|47482|44140|39010|
|[fastify](https://github.com/fastify/fastify)|33099|32511|33992|32793|
|[koa](https://github.com/koajs/koa)|21566|22512|20421|21764|
|[express](https://github.com/expressjs/express)|7524|7699|7304|7568|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57399|58890|53318|59990|
|[hono](https://github.com/honojs/hono)|56753|56405|53400|60453|
|[elysia](https://github.com/elysiajs/elysia)|55914|58512|55895|53334|
|[baojs](https://github.com/mattreid1/baojs)|52855|58875|47002|52688|
  



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

