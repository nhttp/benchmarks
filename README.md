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
Created At : Tue Nov 26 2024, 12:53:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48594|52268|47505|46010|
|[hono](https://github.com/honojs/hono)|48056|51159|49085|43925|
|[fast](https://github.com/danteissaias/fast)|47864|52972|44666|45955|
|[oak](https://github.com/oakserver/oak)|26220|27115|25613|25933|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23808|28642|22274|20509|
|[fastify](https://github.com/fastify/fastify)|16962|17205|17033|16649|
|[koa](https://github.com/koajs/koa)|13459|14142|12921|13314|
|[express](https://github.com/expressjs/express)|6272|6430|5915|6471|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69133|79105|73396|54898|
|[nhttp](https://github.com/nhttp/nhttp)|60279|82589|45707|52540|
|[hono](https://github.com/honojs/hono)|53944|67537|47009|47285|
|[baojs](https://github.com/mattreid1/baojs)|34121|40230|33717|28415|
  



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

