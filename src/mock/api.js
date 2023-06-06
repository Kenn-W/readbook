import Mock from 'mockjs'

// 模拟接口返回的数据
Mock.mock('/login', 'post', (options) => {
  const { username, password } = JSON.parse(options.body)

  // 假设用户名为admin，密码为123456，登录成功
  if (username === 'admin' && password === '123456') {
    return {
      code: 200,
      message: '登录成功',
      data: {
        token: 'your_token_here' // 登录成功返回的token
      }
    }
  }

  // 登录失败
  return {
    code: 401,
    message: '用户名或密码错误',
    data: null
  }
})
