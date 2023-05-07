import Mock from 'mockjs'
import { mockFetch } from 'mockjs-fetch'
mockFetch(Mock)

// 模拟登录
Mock.mock(/login/, {
    code: 200,
    msg: 'OK',
    data: {
        secretKey: '123123123',
        sessionKey: 'fqh0i-LyINZ-RvK5d-Akj3a-uBYRl',
    }
})