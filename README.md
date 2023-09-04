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
Created At : Mon Sep 04 2023, 12:35:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64540|69613|63344|60663|
|[hono](https://github.com/honojs/hono)|61784|66516|61717|57120|
|[fast](https://github.com/danteissaias/fast)|56520|67323|42549|59687|
|[fastro](https://github.com/fastrodev/fastro)|26133|66083|6370|5945|
|[oak](https://github.com/oakserver/oak)|19320|20403|19331|18225|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46031|49754|45436|42902|
|[fastify](https://github.com/fastify/fastify)|34089|35910|34317|32039|
|[koa](https://github.com/koajs/koa)|20969|21762|19896|21250|
|[express](https://github.com/expressjs/express)|7730|7933|7256|8002|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69690|69112|68987|70972|
|[hono](https://github.com/honojs/hono)|69572|68836|70190|69690|
|[nhttp](https://github.com/nhttp/nhttp)|67714|66653|69596|66894|
|[baojs](https://github.com/mattreid1/baojs)|50318|57312|41271|52370|
  



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

