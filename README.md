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
Created At : Sat Jul 08 2023, 12:52:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37074|38133|35755|37334|
|[hono](https://github.com/honojs/hono)|35495|36545|36484|33455|
|[fastro](https://github.com/fastrodev/fastro)|27592|35940|23478|23358|
|[oak](https://github.com/oakserver/oak)|10082|10530|10411|9306|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|14000|14117|13943|13941|
|[nhttp](https://github.com/nhttp/nhttp)|9943|10035|9722|10072|
|[koa](https://github.com/koajs/koa)|8405|8626|7905|8683|
|[express](https://github.com/expressjs/express)|3569|3781|3242|3685|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41340|44219|39909|39893|
|[elysia](https://github.com/elysiajs/elysia)|38659|40857|37696|37425|
|[hono](https://github.com/honojs/hono)|38087|38975|38609|36676|
|[baojs](https://github.com/mattreid1/baojs)|33705|39019|36175|25921|
  



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

