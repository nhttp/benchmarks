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
Created At : Tue Apr 18 2023, 12:38:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42731|44456|43252|40484|
|[hono](https://github.com/honojs/hono)|40986|43348|41696|37915|
|[fast](https://github.com/danteissaias/fast)|37351|43954|28274|39826|
|[fastro](https://github.com/fastrodev/fastro)|35118|42099|36053|27203|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44535|47454|44100|42051|
|[fastify](https://github.com/fastify/fastify)|35970|37126|35878|34906|
|[koa](https://github.com/koajs/koa)|21736|22834|20435|21940|
|[express](https://github.com/expressjs/express)|7776|8075|7071|8181|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|70481|70313|71623|69508|
|[hono](https://github.com/honojs/hono)|66884|65579|68389|66683|
|[elysia](https://github.com/elysiajs/elysia)|65503|64796|67511|64202|
|[baojs](https://github.com/mattreid1/baojs)|59333|66816|61212|49971|
  



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

