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
Created At : Thu Jul 20 2023, 12:44:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56333|61203|54485|53311|
|[hono](https://github.com/honojs/hono)|55141|58028|55963|51433|
|[fastro](https://github.com/fastrodev/fastro)|21637|54313|5161|5436|
|[oak](https://github.com/oakserver/oak)|16974|17941|16819|16161|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36975|39610|36697|34617|
|[fastify](https://github.com/fastify/fastify)|27818|29428|27075|26952|
|[koa](https://github.com/koajs/koa)|18131|19023|16937|18434|
|[express](https://github.com/expressjs/express)|6208|6539|5674|6412|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62381|63624|62879|60640|
|[hono](https://github.com/honojs/hono)|61335|59076|62682|62246|
|[elysia](https://github.com/elysiajs/elysia)|60213|59721|59086|61831|
|[baojs](https://github.com/mattreid1/baojs)|48621|54531|41524|49809|
  



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

