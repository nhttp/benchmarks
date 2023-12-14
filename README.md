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
Created At : Thu Dec 14 2023, 12:38:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45597|49506|44675|42610|
|[fast](https://github.com/danteissaias/fast)|45476|49038|41144|46246|
|[hono](https://github.com/honojs/hono)|44274|47181|44867|40774|
|[fastro](https://github.com/fastrodev/fastro)|22638|48166|9624|10124|
|[oak](https://github.com/oakserver/oak)|20278|21182|20366|19287|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26606|31694|24894|23231|
|[fastify](https://github.com/fastify/fastify)|15412|15635|15154|15447|
|[koa](https://github.com/koajs/koa)|14086|14390|13481|14388|
|[express](https://github.com/expressjs/express)|6301|6398|6057|6448|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69141|74532|73955|58936|
|[nhttp](https://github.com/nhttp/nhttp)|61611|78871|55092|50870|
|[hono](https://github.com/honojs/hono)|55516|67336|51175|48038|
|[baojs](https://github.com/mattreid1/baojs)|34147|40620|29372|32448|
  



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

