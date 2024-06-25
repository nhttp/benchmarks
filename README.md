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
Created At : Tue Jun 25 2024, 12:40:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48313|52435|47396|45109|
|[fast](https://github.com/danteissaias/fast)|48289|52442|45468|46956|
|[hono](https://github.com/honojs/hono)|48282|51917|49231|43698|
|[oak](https://github.com/oakserver/oak)|27371|28437|26943|26733|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24655|31937|22196|19833|
|[fastify](https://github.com/fastify/fastify)|17220|17768|17031|16861|
|[koa](https://github.com/koajs/koa)|14652|15463|13920|14574|
|[express](https://github.com/expressjs/express)|6483|6633|6135|6681|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74068|86049|82867|53288|
|[nhttp](https://github.com/nhttp/nhttp)|64603|85967|61097|46746|
|[hono](https://github.com/honojs/hono)|61188|69503|56910|57151|
|[baojs](https://github.com/mattreid1/baojs)|37136|42992|33667|34748|
  



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

