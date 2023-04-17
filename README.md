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
Created At : Mon Apr 17 2023, 12:40:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|27041|28472|26704|25948|
|[hono](https://github.com/honojs/hono)|26023|27796|27004|23270|
|[fast](https://github.com/danteissaias/fast)|23654|27981|23774|19208|
|[fastro](https://github.com/fastrodev/fastro)|21222|24656|21502|17509|
|[oak](https://github.com/oakserver/oak)|8564|8898|8567|8227|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18918|21845|18396|16514|
|[fastify](https://github.com/fastify/fastify)|13983|14489|13580|13880|
|[koa](https://github.com/koajs/koa)|8985|9268|8670|9018|
|[express](https://github.com/expressjs/express)|3749|3762|3747|3738|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42857|43988|41240|43344|
|[elysia](https://github.com/elysiajs/elysia)|41535|42132|40663|41811|
|[hono](https://github.com/honojs/hono)|41142|41056|43771|38600|
|[baojs](https://github.com/mattreid1/baojs)|35954|43600|29998|34264|
  



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

