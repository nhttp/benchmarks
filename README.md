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
Created At : Wed Aug 16 2023, 12:34:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34516|35573|34682|33293|
|[hono](https://github.com/honojs/hono)|33952|37098|35177|29580|
|[fastro](https://github.com/fastrodev/fastro)|13498|33698|3611|3184|
|[oak](https://github.com/oakserver/oak)|9377|10018|9240|8873|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17657|19749|17012|16211|
|[fastify](https://github.com/fastify/fastify)|13131|13543|13114|12737|
|[koa](https://github.com/koajs/koa)|8598|8762|8231|8800|
|[express](https://github.com/expressjs/express)|3418|3471|3136|3647|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41996|43769|40495|41723|
|[elysia](https://github.com/elysiajs/elysia)|39847|42104|40730|36706|
|[hono](https://github.com/honojs/hono)|37259|41192|37221|33364|
|[baojs](https://github.com/mattreid1/baojs)|33019|36865|35407|26784|
  



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

