// 用来处理POST方法的要求

const express = require('express')
const router = express.Router()

// 使用者删除自己的文章
router.get('/delete/:id',function(req,res,next) {
    res.send('delete')
})

// 登入
router.post('/login',function(req,res,next) {
    // res.send("login")
    if((!req.body.user) || (!req.body.passwd)) {
        res.redirect('/users/register')
        return 
    }
    req.session.name = req.body.user
    req.session.passwd = req.body.passwd
    res.session.logined = true
    res.redirect('/')
})
// 新增文章
router.post('/add',function(req,res,next) {
    res.send('add')
})

// 更新
router.post('/update/:id',function(req,res,next) {
    res.send('update')
})

// 留言
router.post('/comment/:id',function(req,res,next){
    res.send('commend')
})
