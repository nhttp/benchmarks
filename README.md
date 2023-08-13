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
Created At : Sun Aug 13 2023, 12:39:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38081|41067|37777|35398|
|[hono](https://github.com/honojs/hono)|34689|38175|31883|34010|
|[fastro](https://github.com/fastrodev/fastro)|14246|35382|3780|3576|
|[oak](https://github.com/oakserver/oak)|9488|9948|9410|9107|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17634|19059|17388|16455|
|[fastify](https://github.com/fastify/fastify)|12682|13079|12715|12253|
|[koa](https://github.com/koajs/koa)|8566|8830|8175|8694|
|[express](https://github.com/expressjs/express)|3683|3802|3567|3680|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44332|46569|42200|44226|
|[elysia](https://github.com/elysiajs/elysia)|42306|43836|44078|39003|
|[hono](https://github.com/honojs/hono)|40138|43951|40158|36304|
|[baojs](https://github.com/mattreid1/baojs)|35073|38943|28315|37960|
  



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

