const Koa=require('koa')
const app=new Koa()
const bodyparser=require('koa-bodyparser')

// 调用中间件解析Post请求，demo3是post请求原理
app.use(bodyparser());

app.use(async(ctx)=>{
    if(ctx.url==='/'&&ctx.method==='GET'){
        //显示表单页面
        let html=`
        <h1>Koa2 request POST</h1>
        <form method="POST" action="/">
        <p>username</p>
        <input name="username" /><br/>
        <p>age</p>
        <input name="age" /><br/>
        <p>website</p>
        <input name="website" /><br/>
        <button type="subumit">submit</button>
        </form>
        `;
        ctx.body=html;
    }else if(ctx.url==='/'&&ctx.method==='POST'){
       
        let postData=ctx.request.body;
        ctx.body=postData;

    }else{
        ctx.body='<h1>404</h1>'
        

    }
})


app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});