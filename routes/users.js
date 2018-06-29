var express = require('express');
var router = express.Router();

/* 注册. */
router.get('/register', function(req, res, next) {
  // res.send('respond with a resource');
  if(req.session.logined) {  //logined  还没到定义
    res.redirect('/')
    return;
  }
  res.render('users/register')
});

// 登录
router.get('/signin',function(req,res,next) {
    // res.send('signin')
    if(req.session.logined) {
      res.redirect('/')
      return;
    }
    res.render('users/signin')  
})

// 登出
router.get('/signout',function(req,res,next) {
  // res.send('signout')
  req.session.logined = false
  res.redirect('/')
  res.end()
})
// 忘记密码
router.get('/forget',function(req,res,next) {
  res.send('forget')
})
// 使用者管理
router.get('/profile',function(req,res,next){
  res.send('profile')
})

// 新增文章
router.get('/add_article',function(req,res,next) {
  res.send('add article')
})
// 修改文章
router.get('/modify/:id',function(req,res,next) {
  res.send('modify')
})

// 访客留言
router.get('/message/:id',function(req,res,next){
  res.send('message')
})

module.exports = router;
