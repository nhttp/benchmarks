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
Created At : Sun Jun 18 2023, 12:51:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49752|54178|47878|47201|
|[hono](https://github.com/honojs/hono)|45294|51098|47939|36844|
|[fastro](https://github.com/fastrodev/fastro)|39289|49298|42147|26422|
|[oak](https://github.com/oakserver/oak)|14826|15527|15067|13883|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32104|34320|31684|30307|
|[fastify](https://github.com/fastify/fastify)|25117|26191|25002|24159|
|[koa](https://github.com/koajs/koa)|16096|16973|14864|16452|
|[express](https://github.com/expressjs/express)|5227|5444|4905|5333|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|52596|53010|54237|50542|
|[hono](https://github.com/honojs/hono)|51607|51168|52221|51431|
|[elysia](https://github.com/elysiajs/elysia)|51005|51493|50620|50902|
|[baojs](https://github.com/mattreid1/baojs)|40468|48896|43140|29367|
  



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

