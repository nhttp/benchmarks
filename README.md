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
Created At : Sat Jul 15 2023, 12:50:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36651|39134|36057|34763|
|[hono](https://github.com/honojs/hono)|33576|38620|37706|24403|
|[oak](https://github.com/oakserver/oak)|9880|10498|10031|9112|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|16513|18316|15919|15304|
|[fastify](https://github.com/fastify/fastify)|12990|13169|13130|12671|
|[koa](https://github.com/koajs/koa)|8940|9011|8605|9204|
|[express](https://github.com/expressjs/express)|3670|3796|3462|3752|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|40739|39510|43365|39342|
|[nhttp](https://github.com/nhttp/nhttp)|40526|37823|42387|41367|
|[hono](https://github.com/honojs/hono)|38799|45317|40090|30991|
|[baojs](https://github.com/mattreid1/baojs)|33072|37271|26512|35434|
  



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

