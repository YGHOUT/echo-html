import Mock from 'mockjs'
const baseUrl = "http://localhost:8081"
// Mock.mock(baseUrl+'user/login','post',{
//         meta:{
//             status:200,
//             msg:'登录成功'
//         },
//         data:{
//             token:'token'
//         }
//     })
// Mock.mock(baseUrl+'images/carousel','get',{
//     meta:{
//         status:200,
//         msg:'获取走马灯图片组成功！'
//     },
//     data:{
//         images:[
//             {url:'https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg'},
//             {url:'https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg'},
//             {url:'https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg'},
//             {url:'https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg'},
//             {url:'https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg'},
//             {url:'https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg'}
//         ]
//     }
// })
// Mock.mock(baseUrl+'ranking/24HAmount','get',{
//     meta:{
//         status:200,
//         msg:'获取二十四小时金额榜成功'
//     },
//     data:[
//         {
//             productName:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
//             productImg:'https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg',
//             productTargetAmount: 100,
//             productCurrentAmount: 70,
//             productSupporters: 100,
//             productComments: 101,
//             productLink: '',
//             authorName: '原石桌游',
//             authorIcon: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100',
//             authorLink: ''
//         }
//     ]
// })
// Mock.mock(baseUrl+'ranking/24HCollection','get',{
//     meta:{
//         status: 200,
//         msg: '获取24小时收藏榜成功！'
//     },
//     data:[
//         {
//             productName: '《江户狂歌》浮世绘艺术300年——艺术珍藏书第二部',
//             productImg: 'http://up.moimg.net/path/dst_project/202112/3108/1556/2112311556Y13ADGjKOZgVy68RL0vx4pe5an8lRQ.jpg',
//             productCollectors: 100
//
//         },
//         {
//             productName: '《江户狂歌》浮世绘艺术300年——艺术珍藏书第二部',
//             productImg: 'http://up.moimg.net/path/dst_project/202112/3108/1556/2112311556Y13ADGjKOZgVy68RL0vx4pe5an8lRQ.jpg',
//             productCollectors: 100
//
//         },
//         {
//             productName: '《江户狂歌》浮世绘艺术300年——艺术珍藏书第二部',
//             productImg: 'http://up.moimg.net/path/dst_project/202112/3108/1556/2112311556Y13ADGjKOZgVy68RL0vx4pe5an8lRQ.jpg',
//             productCollectors: 100
//
//         },
//         {
//             productName: '《江户狂歌》浮世绘艺术300年——艺术珍藏书第二部',
//             productImg: 'http://up.moimg.net/path/dst_project/202112/3108/1556/2112311556Y13ADGjKOZgVy68RL0vx4pe5an8lRQ.jpg',
//             productCollectors: 100
//
//         },
//         {
//             productName: '《江户狂歌》浮世绘艺术300年——艺术珍藏书第二部',
//             productImg: 'http://up.moimg.net/path/dst_project/202112/3108/1556/2112311556Y13ADGjKOZgVy68RL0vx4pe5an8lRQ.jpg',
//             productCollectors: 100
//
//         }
//     ]
// })
// Mock.mock(baseUrl+'product/recommends','get',{
//     meta:{
//         status: 200,
//         msg: '获得首页推荐商品'
//     },
//     data:[
//         {
//             kindName: '玩具',
//             kindId: 0,
//             recommends:[
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 }
//             ]
//         },
//         {
//             kindName: '玩具',
//             kindId: 0,
//             recommends:[
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 }
//             ]
//         },
//         {
//             kindName: '玩具',
//             kindId: 0,
//             recommends:[
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },{
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 },
//                 {
//                     productId:0,
//                     productName:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
//                     productImg:'https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg',
//                     authorId:0,
//                     authorName:'万物Onewood',
//                     authorIcon:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
//                     productTargetAmount: 100,
//                     productCurrentAmount: 20,
//                     productSupporters: 10
//                 }
//             ]
//         }
//     ]
// })
// Mock.mock(baseUrl+'user/selfinfo','get',{
//     meta:{
//         status:200,
//         msg:'获取用户信息成功'
//     },
//     data:{
//         userName:'测试用户',
//         userId:'1021',
//         userIcon:'https://s.moimg.net/new/images/headPic.png',
//         userSex:'男',
//         userBirthday:'2011.01.01',
//         userAddress:'未知',
//         userIntroduction:'这是测试用户的个人简介。',
//         certification:false,
//
//     }
// })
// Mock.mock(baseUrl+'user/showInfo','get',{
//     meta:{
//         status:200,
//         msg:'获取用户展示信息成功'
//     },
//     data:{
//         userAvatar:''
//     }
// })

//新版的接口

// 首页
//获取欢迎页的轮播图
Mock.mock(baseUrl+'/product/carousel','get',{
    meta:{
        status:200,
        msg:'获取走马灯图片组成功！'
    },
    data:[
        {productId:'1',name:'测试',images:['https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg']},
        {productId:'1',name:'测试',images:['https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg']},
        {productId:'1',name:'测试',images:['https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg']},
        {productId:'1',name:'测试',images:['https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg']},
        {productId:'1',name:'测试',images:['https://up.moimg.net/path/dst_project/202112/0816/0834/2112080834r1keNwg9RBWqElpon7E02PVbnJQDmX.jpg']}
    ]
})
//获取排名
Mock.mock(baseUrl+'/product/24HRanking','get',{
    meta:{
        status:200,
        msg:'获取二十四小时金额榜成功'
    },
    data:{
        amountRanking:[
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }
            },
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }
            },
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }
            },
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }
            },
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }
            }
        ],
        collectRanking:[
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }},
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }},
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }},
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }},
            {
                productId:1,
                name:'疯王降临，开启全新挑战！——《王权骰铸冒险》',
                images:['https://up.moimg.net/path/dst_project/202112/2909/3404/2112293404Q8awZj7L2mnBy26nKPyWN3JdYD9bXM.jpg'],
                targetAmount: 100,
                currentAmount: 35,
                supporters: 11,
                collectors:22,
                comments:112,
                user:{
                    userId:1,
                    username: '原石',
                    avatar: 'https://p.moimg.net/ico/2020/04/24/20200424_1587712831_3901.jpg?imageMogr2/auto-orient/strip%7cimageView2/2/w/120/h/120/q/100'
                }}
        ]
    }
})
//获取推荐项目
Mock.mock(baseUrl+'/product/recommends','get',{
    meta:{
        status: 200,
        msg: '获得首页推荐商品'
    },
    data:[
        {
            name:'文娱',
            productTypeId:1,
            recommendProducts:[
                {
                    productId:1,
                    name:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
                    images: ['https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg'],
                    targetAmount:100,
                    currentAmount:20,
                    supporters:10,
                    user:{
                        userId:1,
                        username:'万物Onewood',
                        avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'

                    }
                },
                {
                    productId:1,
                    name:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
                    images: ['https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg'],
                    targetAmount:100,
                    currentAmount:20,
                    supporters:10,
                    user:{
                        userId:1,
                        username:'万物Onewood',
                        avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
                    }
                },
                {
                    productId:1,
                    name:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
                    images: ['https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg'],
                    targetAmount:100,
                    currentAmount:20,
                    supporters:10,
                    user:{
                        userId:1,
                        username:'万物Onewood',
                        avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
                    }
                },
                {
                    productId:1,
                    name:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
                    images: ['https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg'],
                    targetAmount:100,
                    currentAmount:20,
                    supporters:10,
                    user:{
                        userId:1,
                        username:'万物Onewood',
                        avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
                    }
                },
                {
                    productId:1,
                    name:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
                    images: ['https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg'],
                    targetAmount:100,
                    currentAmount:20,
                    supporters:10,
                    user:{
                        userId:1,
                        username:'万物Onewood',
                        avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
                    }
                }
            ]
        }
    ]
})

// 产品详情页
// 获取产品信息
Mock.mock(baseUrl+'/product/infoById?productId=1','get',{
    meta:{
        status:200,
        msg:'获取产品信息'
    },
    data:{
        productId:1,
        productTypeId:1,
        productType:'文娱',
        name:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
        images:['https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg'],
        targetAmount:100,
        currentAmount:20,
        supporters:10,
        collectors:10,
        comments:100,
        startTime:'2022-01-05',
        deadline:'2023-01-01',
        user:{
            userId:1,
            username:'作者',
            avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
        },
        describe:[
            {
                title:'介绍',
                content:'测试描述',
                createTime:'20222-01-05 11:02:05'
            }
        ]
    }
})
// 获取产品支持选项
Mock.mock(baseUrl+'/product/optionsById?productId=1','get',{
    meta:{
        status:200,
        msg:'获取产品可供支持选项'
    },
    data:[
        {
            optionsId:3,
            productId:1,
            optionsTitle:'选项一',
            optionsContent:'描述',
            totalNumber:200,
            selectedNumber:100,
            optionsAmount:200,
            disable:true
        }
    ]
})
// 获取产品评论
Mock.mock(baseUrl+'/comments/commentsByProduct?productId=1','get',{
    meta:{
        status:200,
        msg:'通过id获取产品评论'
    },
    data:[
        {
            productCommentId:1,
            user:{
                userId:1,
                username:'测试用户一',
                avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
            },
            createTime:'2022-01-05 11:02:05',
            content:'测试评论一',
            children:[
                {
                    productReplyId:2,
                    user:{
                        userId:2,
                        username:'测试用户一'
                    },
                    replyUser:{
                        userId:1,
                        username:'测试用户一'
                    },
                    content:'回复内容一',
                    createTime:'2022-01-05 12:15:11'
                }
            ]
        }
    ]
})
// 获取产品描述
Mock.mock(baseUrl+'/product/describeById?productId=1','get',{
    meta:{
        status:200,
        msg:'获取产品描述页成功。'
    },
    data:[
        {
            productDescribeId:1,
            title:'描述一',
            content:'富文本内容',
            createTime:'2022-01-21 22:11:33'
        }
    ]
})
// 发表或回复评论
//     ,
//     data:{
//     product1CommentsId:-1,
//         product2CommentsId:-1,
//         content:'回复一级评论'
// }
Mock.mock(baseUrl+'/comments/comment','post',{
    meta:{
        status:200,
        msg:'发表评论成功'
    }
})
// 收藏产品
Mock.mock(baseUrl+'/product/collect','post',{
    meta:{
        status:200,
        msg:'收藏产品成功。'
    }
})
// 支持产品
Mock.mock(baseUrl+'/product/supportProduct','post',{
    meta:{
        status:200,
        msg:'支持成功'
    }
})


// 产品搜索页面
// 产品搜索
//     ,
//     search:{
//     productTypeId:-1,
//         key:'关键字',
//         targetAmountMost:true,
//         currentAmount:false,
//         supportersMost:false,
//         collectors:false,
//         commentsMost:false,
//         progress:-1
// }
Mock.mock(baseUrl+'/product/searchProduct','post',{
    meta:{
        status:200,
        msg:'搜索成功'
    },
    data:[
        {
            productId:1,
            name:'看书吃饭撸猫过日子~观复联名《DK猫百科》开启撸猫年',
            images: ['https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg'],
            targetAmount:100,
            currentAmount:20,
            supporters:10,
            userId:1,
            username:'万物Onewood',
            avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
        }
    ]
})

// 用户个人主页-产品中心
// 获取用户收藏产品列表
Mock.mock(baseUrl+'/product/collectionsByUserId','get',{
    meta:{
        status:200,
        msg:'获取某id的用户的收藏产品列表成功'
    },
    data:[
        {
            productId:1,
            name:'测试产品一',
            images:['https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip']
        }
    ]
})
// 获取用户订单列表
Mock.mock(baseUrl+'/orders/getOrderByUserId','get',{
    meta:{
        status:200,
        msg:'获取某id用户的订单'
    },
    data:[
        {
            ordersId:0,
            ordersStatus:1,
            product:{
                productId:0,
                name:0,
                progress:1,
                images:['https://up.moimg.net/path/dst_project/202112/2813/5425/2112285425r1keNwg9RBWqElXKQDE02PVbnJQDmX.jpg']
            },
            options:{
                optionId:1,
                optionsTitle:'选项一',
                ordersStatus:1
            }
        }
    ]
})
// 获取订单详情
Mock.mock(baseUrl+'/orders/getOrderById','get',{
    meta:{
        status:200,
        msg:'获取某id的订单信息.'
    },
    data:{
        orders:{
            ordersId:0,
            ordersNote:'无备注',
            ordersStatus:0,
            createTime:'2022-01-09 11:22:33',
            address:'收货地址',
            consignee:'收货人',
            phone:'1100'
        },
        product:{
            productId:0,
            progress:1,
            name:'产品名称',
            images:['https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'],
            user_id:0,
            username:'产品发起者名',
            avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
        },
        options:{
            optionsId:0,
            optionsTitle:'选项标题',
            optionsContent:'选项介绍',
            optionsAmount:100
        }
    }

})
// 确定收货-订单完成
Mock.mock(baseUrl+'/orders/makeSureGoods','post',{
    meta:{
        status:200,
        msg:'用户确定收货。'
    }
})
// 发布新产品
Mock.mock(baseUrl+'/product/launchNewProduct','post',{
    meta:{
        status:200,
        msg:'发布新产品成功'
    },
    data:{
        productTypeId:1,
        name:'新产品',
        targetAmount:200,
        deadline:'2022-01-21 22:11:22',
        images:[''],
        options:[
            {
                optionsTitle:'选项一',
                optionsContent:'介绍',
                optionsAmount: 100,
                totalNumber:100
            }
        ],
        describe:{
            title:'产品描述标题一',
            content:'描述富文本'
        }
    }
})
// 查看已发布产品
Mock.mock(baseUrl+'/product/launchedProduct','get',{
    meta:{
        status:200,
        msg:'获取该用户已经发布的产品'
    },
    data:[
        {
            productId:1,
            name:'众筹项目一',
            progress:1,
            currentAmount: 100,
            targetAmount:101,
            supporters: 100,
            hasNewComments:true
        }
    ]
})
// 更新产品描述 -- 新增
//     ,
//     data:{
//     productId:1,
//         title:'新的标题',
//         content:'描述内容'
// }
Mock.mock(baseUrl+'/product/addProductDetail','post',{
    meta:{
        status:200,
        msg:'新增产品描述成功。'
    }
})


// 用户登录注册界面
// 登录请求
Mock.mock(baseUrl+'/user/login','post',{
    meta:{
        status:200,
        msg:'登录成功.'
    },
    data:{
        token:1024
    }
})
// 注册请求
Mock.mock(baseUrl+'/user/register','post',{
    meta:{
        status:200,
        msg:'注册成功'
    },
    data:{
        token:1025
    }
})

// 用户个人主页——个人信息
// 获得用户个人信息
Mock.mock(baseUrl+'/user/info','get',{
    meta:{
        status:200,
        msg:'获取某id用户的个人信息'
    },
    data:{
        username:'测试用户一',
        avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
    }
})
//获取用户展示页信息
Mock.mock(baseUrl+'/user/showInfoById','get',{
    meta:{
        status:200,
        msg:'获取某id用户的展示页'
    },
    data:{
        username:'测试用户一',
        avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip',
        certificationType:0,
        introduce:'个人简介',
        releasedProductNumber:10,
        showCollections:true,
        collectedProductNumber:1
    }
})
// 设置用户个人信息
Mock.mock(baseUrl+'/user/setUserInfo','post',{
    meta:{
        status:200,
        msg:'设置用户个人信息成功'
    }
})
// 获取用户地址列表
Mock.mock(baseUrl+'/user/getAddress','get', {
    meta:{
        status:200,
        msg:'获取用户地址成功'
    },
    data:[
        {
            addressId:0,
            address:'收货地址',
            consignee:'收货人',
            phone:'220'
        }
    ]
})
// 设置修改或删除用户收货地址
//,
//     data:{
//         status:1, 0:删除,1:新增,2:修改
//         addressId:1
//         address:'收货地址',
//         consignee:'收货人',
//         phone:'110'
//     }
Mock.mock(baseUrl+'/user/setAddress','post',{
    meta:{
        status:200,
        msg:'设置收货地址成功。'
    }
})
// 认证
//     ,
//     data:{
//     ID:'身份证号',
//         name:'身份证名'
// }
Mock.mock(baseUrl+'/user/certification','post',{
    meta:{
        status:200,
        msg:'认证信息已提交'
    }
})

// 用户个人主页—— 消息中心
// 查看个人评论
Mock.mock(baseUrl+'/comments/commentsByUser','get',{
    meta:{
        status:200,
        msg:'获取用户发表的评论成功'
    },
    data:[
        // 一级评论
        {
            product1CommentsId:1,
            layerNumber:1,
            content:'测试一级评论',
            createTime:'2022-01-10 11:22:33',
            product:{
                productId:1,
                name:'测试评论的产品'
            }
        },
    //    二级评论 -- 回复一级评论
        {
            product2CommentsId:2,
            content:'回复一级评论的',
            createTime: '2022-01-10 11:22:33',
            product1Comments:{
                product1CommentsId:1,
                content:'一级评论',
                layerNumber:1,
                productId:1
            },
            replyUser:{
                userId:1,
                username:'被回复的人'
            }
        },
    //    二级评论 -- 回复二级评论
        {
            product2CommentsId: 3,
            content:'回复的评论',
            createTime: '2022-01-10 11:22:33',
            product1Comments: {
                product1CommentsId: 1,
                layerNumber: 1,
                productId: 1
            },
            replyUser: {
                userId:1,
                username: '二级被回复的人'
            },
            replyProduct2Comments:{
                product2CommentsId:2,
                content:'二级评论'
            }
        }

    ]
})
// 回复我
Mock.mock(baseUrl+'/comments/callMe','get',{
    meta:{
        status:200,
        msg:'获取回复我的评论'
    },
    data:[
        // 回复用户的一级评论
        {
            product2CommentsId: 1,
            content:'回复内容',
            productId:1,
            createTime:'2022-12-2 11:33:44',
            user:{
                userId:1,
                username:'13',
                avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
            },
            product1Comments:{
                product1CommentsId:1,
                content:'被回复的内容',
                layerNumber:2
            }
        },
    //    回复用户的二级评论
        {
            product2CommentsId: 3,
            content:'回复内容2',
            createTime: "2022-12-2 11:33:44",
            user:{
                userId: 1,
                username: '回复二级内容',
                avatar: 'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
            },
            product1Comments: {
                product1CommentsId: 1,
                layerNumber: 2,
                productId: 1
            },
            replyProduct2Comments:{
                product2CommentsId: 2,
                content:'所回复的二级评论内容'
            }
        }
    ]
})
// 私信列表
Mock.mock(baseUrl+'/directMessages/list','get',{
    meta:{
        status:200,
        msg:'获取用户私信列表成功'
    },
    data:[
        {
            callUser:{
                userId:1,
                username:'通话对象',
                avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
            },
            messages:[
                {
                    content:'最新一条通话内容',
                    sendTime:'2022-01-21 11:22:33'
                }
            ]
        }
    ]
})
// 获取与特定用户的私信通话内容
// 通过callUserId
Mock.mock(baseUrl+'/directMessages/callById','post',{
    meta:{
        status:200,
        msg:'获取特定用户通信记录成功'
    },
    data:{
        callUser:{
            userId:1,
            username:'对话者',
            avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
        },
        messages:[
            {
                sendUserId:2,
                content:'你好面壁者',
                sendTime:'2022-01-05 02:22:11'
            }
        ]
    }
})
// 发送私信
//,
//     data:{
//         receiveUserId:1,
//         content:'发送的内容'
//     }
Mock.mock(baseUrl+'/directMessages/sendMessage','post',{
    meta:{
        status:200,
        msg:'发送私信成功'
    }
})

// 后台管理模块
// 查看待验证列表
Mock.mock(baseUrl+'/certification/pending','get',{
    meta:{
        status:200,
        msg:'获取待认证的用户列表'
    },
    data:[
        {
            certificationId:1,
            user:{
                userId:1,
                username:1
            },
            name:'身份证名',
            ID:'身份证号',
            status:1
        }
    ]
})
// 设置用户认证
//     ,
//     data:{
//     certificationId:1,
//         status:2
// }
Mock.mock(baseUrl+'/certification/setCertification','post',{
    meta:{
        status:200,
        msg:'设置用户认证信息成功'
    }
})
// 查看待审核产品列表
Mock.mock(baseUrl+'/product/productAuditList','get',{
    meta:{
        status:200,
        msg:'获取待审核产品列表成功.'
    },
    data:[
        {
            productTypeId:1,
            name:'新产品',
            progress:1,
            targetAmount:200,
            deadline:'2022-01-21 22:11:22',
            images:[''],
            user:{
                userId:1,
                username:'开发者名称',
                avatar:'https://p.moimg.net/ico/2020/04/30/20200430_1588229898_8886.jpg?imageMogr2/auto-orient/strip'
            },
            options:[
                {
                    optionsTitle:'选项一',
                    optionsContent:'介绍',
                    optionsAmount: 100,
                    totalNumber:100
                }
            ],
            describe:{
                title:'产品描述标题一',
                content:'描述富文本'
            }
        }
    ]
})
// 设置审核结果
// ,
//     data:{
//         productId:1,
//         status:2
//     }
Mock.mock(baseUrl+'/product/productAudit','post',{
    meta:{
        status:200,
        msg:'更新项目审核状态'
    }
})
