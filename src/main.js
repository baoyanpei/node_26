const Koa =require('koa')

const app = new Koa()

//中间件
app.use((ctx,next)=>{

    ctx.body='Hello api11'
})
app.listen(3000,()=>{

    console.log("server is running on http://localhost:3000")
})