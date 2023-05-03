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
Created At : Wed May 03 2023, 12:39:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33819|35862|33840|31754|
|[fast](https://github.com/danteissaias/fast)|29328|34472|28464|25049|
|[hono](https://github.com/honojs/hono)|28155|30794|29522|24150|
|[fastro](https://github.com/fastrodev/fastro)|27066|34406|28349|18443|
|[oak](https://github.com/oakserver/oak)|8987|9586|8867|8507|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18643|20927|18294|16709|
|[fastify](https://github.com/fastify/fastify)|12996|13657|12879|12453|
|[koa](https://github.com/koajs/koa)|8789|9155|8298|8913|
|[express](https://github.com/expressjs/express)|3593|3661|3302|3815|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43401|42580|44204|43420|
|[elysia](https://github.com/elysiajs/elysia)|42679|42799|42777|42461|
|[hono](https://github.com/honojs/hono)|41664|44503|41983|38506|
|[baojs](https://github.com/mattreid1/baojs)|36622|42408|29368|38091|
  



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

