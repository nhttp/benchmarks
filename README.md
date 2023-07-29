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
Created At : Sat Jul 29 2023, 12:41:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55421|59209|55016|52039|
|[hono](https://github.com/honojs/hono)|52660|57014|54093|46873|
|[fastro](https://github.com/fastrodev/fastro)|20907|52762|5163|4797|
|[oak](https://github.com/oakserver/oak)|16303|17238|16342|15329|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36323|40172|36026|32772|
|[fastify](https://github.com/fastify/fastify)|27813|29387|28421|25630|
|[koa](https://github.com/koajs/koa)|18149|19072|16922|18453|
|[express](https://github.com/expressjs/express)|6240|6369|5787|6564|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62400|61890|63011|62300|
|[hono](https://github.com/honojs/hono)|62311|60644|62100|64190|
|[elysia](https://github.com/elysiajs/elysia)|59451|58171|58569|61613|
|[baojs](https://github.com/mattreid1/baojs)|49983|56618|50247|43084|
  



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

