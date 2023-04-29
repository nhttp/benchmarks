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
Created At : Sat Apr 29 2023, 12:39:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|29641|37032|31014|20876|
|[nhttp](https://github.com/nhttp/nhttp)|28944|30471|29366|26996|
|[hono](https://github.com/honojs/hono)|27530|30181|28027|24383|
|[fastro](https://github.com/fastrodev/fastro)|24321|31652|24736|16574|
|[oak](https://github.com/oakserver/oak)|9243|9694|9205|8831|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18811|20597|18407|17430|
|[fastify](https://github.com/fastify/fastify)|13967|14560|13939|13401|
|[koa](https://github.com/koajs/koa)|8956|9303|8609|8955|
|[express](https://github.com/expressjs/express)|3746|3825|3650|3762|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|41661|42707|42901|39375|
|[nhttp](https://github.com/nhttp/nhttp)|41430|41078|42391|40821|
|[hono](https://github.com/honojs/hono)|37165|37053|40032|34410|
|[baojs](https://github.com/mattreid1/baojs)|36862|40713|35962|33910|
  



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

