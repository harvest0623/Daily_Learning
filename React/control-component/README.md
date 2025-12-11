# 表单的处理
-  受控组件：input 框自己的状态被 React 组件的状态控制
    1. 在组件中声明了一个状态
    2. 将状态数据设置为 input 的 value 值
    3. 通过绑定 change 事件，在事件处理程序中利用 事件参数 e 获取到当前文本框的值
    4. 将文本框的值作为状态的最新值

-  非受控组件：通过手动操作 dom 的方式来获取文本框的值，文本框的值不再受 react组件中的状态的控制

# __mock__
json-server db.json

- 删除
http://localhost:3000/data/1    // 1 为被删除的数据的id

- 搜索
http://localhost:3000/data/q?=xxx   // xxx 用户在输入的内容

- 获取完整列表数据
http://localhost:3000/data