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
Created At : Wed Jun 28 2023, 12:54:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61976|66144|60087|59697|
|[hono](https://github.com/honojs/hono)|61472|65577|62198|56641|
|[fastro](https://github.com/fastrodev/fastro)|48243|62763|42241|39725|
|[oak](https://github.com/oakserver/oak)|19056|20069|19450|17650|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|32877|34644|33247|30741|
|[nhttp](https://github.com/nhttp/nhttp)|22898|22614|22944|23135|
|[koa](https://github.com/koajs/koa)|18780|19461|17783|19096|
|[express](https://github.com/expressjs/express)|7174|7321|6896|7305|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|67451|66069|68177|68108|
|[hono](https://github.com/honojs/hono)|67094|66445|67790|67046|
|[elysia](https://github.com/elysiajs/elysia)|64573|63751|64639|65330|
|[baojs](https://github.com/mattreid1/baojs)|53478|59536|44685|56212|
  



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

