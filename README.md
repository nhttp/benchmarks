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
Created At : Fri Apr 21 2023, 1:46:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43124|45461|42632|41279|
|[hono](https://github.com/honojs/hono)|41393|43994|41871|38314|
|[fast](https://github.com/danteissaias/fast)|39547|44495|33839|40306|
|[fastro](https://github.com/fastrodev/fastro)|35945|42415|36929|28491|
|[oak](https://github.com/oakserver/oak)|19852|21213|19752|18591|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44716|47832|44590|41725|
|[fastify](https://github.com/fastify/fastify)|35502|36965|35375|34166|
|[koa](https://github.com/koajs/koa)|21897|23105|20553|22032|
|[express](https://github.com/expressjs/express)|8011|8216|7634|8182|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|70929|69882|71975|70929|
|[elysia](https://github.com/elysiajs/elysia)|66977|66178|68387|66367|
|[hono](https://github.com/honojs/hono)|64666|66500|67737|59762|
|[baojs](https://github.com/mattreid1/baojs)|60765|67835|63529|50931|
  



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

