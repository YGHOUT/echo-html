import Mock from 'mockjs'
const baseUrl = "http://localhost:8081/"
Mock.mock(baseUrl+'api',{
    'string|1': 'test'
})

