import cloud from '@lafjs/cloud'
// node 内置的crypto加密模块
import { createHash } from 'crypto'
export default async function (ctx: FunctionContext) {
    // 拿到请求体里的username,password? http? req
    const { username, password } = ctx.body;
    // 永远不要相信用户的输入
    if (!/^[a-zA-Z0-9]{3,16}$/.test(username)) return {
        error: "invalid username"
    }
    if (!/^[a-zA-Z0-9]{3,16}$/.test(username)) return {
        error: "invalid password"
    }
    // console.log(
    //   createHash('sha256').update(password).digest("hex")
    // )
    const db = cloud.database();
    // 用户名是否存在？count
    const exists = await db
        .collection("users")
        .where({ username: username })
        .count
    // 用户的明文密码不能存 单向加密 比对加密过后的
    const { id } = await db.collection("users").add({
        username: username,
        password:
            createHash('sha256').update(password).digest("hex")
    })
    //  console.log(res);
    return { data: id }
    // console.log(username,password)
    // console.log('Hello World')
    // Response
    //  return { data: 'hi, laf' }
}
