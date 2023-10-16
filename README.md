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
Created At : Mon Oct 16 2023, 12:37:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55593|57832|56495|52452|
|[hono](https://github.com/honojs/hono)|52583|58559|53150|46041|
|[fast](https://github.com/danteissaias/fast)|49803|60663|36188|52559|
|[fastro](https://github.com/fastrodev/fastro)|23068|57763|5590|5850|
|[oak](https://github.com/oakserver/oak)|16232|17004|16195|15497|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35020|37771|34578|32712|
|[fastify](https://github.com/fastify/fastify)|25787|26559|25867|24935|
|[koa](https://github.com/koajs/koa)|17094|17951|16138|17194|
|[express](https://github.com/expressjs/express)|5348|5526|4838|5680|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54097|50341|56983|54966|
|[hono](https://github.com/honojs/hono)|53029|47994|55726|55367|
|[elysia](https://github.com/elysiajs/elysia)|52326|51095|49716|56166|
|[baojs](https://github.com/mattreid1/baojs)|44447|48546|37672|47124|
  



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

