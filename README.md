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
Created At : Mon Sep 16 2024, 12:50:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48663|52250|48799|44941|
|[nhttp](https://github.com/nhttp/nhttp)|48543|52723|47887|45019|
|[fast](https://github.com/danteissaias/fast)|48188|52521|45464|46580|
|[oak](https://github.com/oakserver/oak)|26227|27227|25722|25733|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25247|31441|23342|20958|
|[fastify](https://github.com/fastify/fastify)|16616|16940|16543|16366|
|[express](https://github.com/expressjs/express)|6381|6603|5965|6576|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74380|84263|79316|59561|
|[hono](https://github.com/honojs/hono)|59397|74255|55094|48843|
|[nhttp](https://github.com/nhttp/nhttp)|57508|80122|46588|45814|
|[baojs](https://github.com/mattreid1/baojs)|38628|44607|38268|33008|
  



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

