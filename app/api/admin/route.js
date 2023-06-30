export async function GET(request){
    const users=[
        {id:1,name:"shibil"},
        {id:2,name:"reshna"},
        {id:3,name:"hisham"},
        {id:4,name:"athulya"},

    ]
    return new Response(JSON.stringify(users))
}