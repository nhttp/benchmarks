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
Created At : Wed Apr 16 2025, 12:58:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59522|60294|62440|55831|
|[hono](https://github.com/honojs/hono)|56569|62371|58741|48594|
|[fast](https://github.com/danteissaias/fast)|54744|60940|49276|54017|
|[oak](https://github.com/oakserver/oak)|28615|29893|28017|27934|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38582|45923|36271|33552|
|[fastify](https://github.com/fastify/fastify)|26426|25140|28128|26009|
|[koa](https://github.com/koajs/koa)|17031|17406|16319|17367|
|[express](https://github.com/expressjs/express)|6604|6747|6414|6651|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77120|89251|77375|64733|
|[nhttp](https://github.com/nhttp/nhttp)|70574|93175|57903|60644|
|[hono](https://github.com/honojs/hono)|64892|76205|61569|56901|
|[baojs](https://github.com/mattreid1/baojs)|49441|53745|43334|51245|
  



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

