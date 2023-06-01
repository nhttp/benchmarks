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
Created At : Thu Jun 01 2023, 12:57:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33519|36902|33214|30441|
|[fast](https://github.com/danteissaias/fast)|33467|36988|31310|32103|
|[hono](https://github.com/honojs/hono)|31072|33732|32596|26889|
|[fastro](https://github.com/fastrodev/fastro)|26796|33428|28271|18690|
|[oak](https://github.com/oakserver/oak)|9627|10841|8728|9311|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18945|22028|17688|17118|
|[fastify](https://github.com/fastify/fastify)|13300|14742|14287|10871|
|[koa](https://github.com/koajs/koa)|8656|8900|8307|8760|
|[express](https://github.com/expressjs/express)|3911|3936|3812|3984|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|41074|42220|42022|38981|
|[elysia](https://github.com/elysiajs/elysia)|39810|41589|40990|36851|
|[nhttp](https://github.com/nhttp/nhttp)|38127|42759|39586|32036|
|[baojs](https://github.com/mattreid1/baojs)|37599|39899|35762|37136|
  



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

