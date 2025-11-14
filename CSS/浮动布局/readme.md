# 文档流
浏览器页面从上往下，从左往右排列元素


# 浮动布局
- 意义：
1. 实现文字环绕图片
2. 控制元素的水平排列

- 缺陷：
1. 浮动元素会脱离文档流，导致父容器的高度塌陷


# 清除浮动 (清除浮动带来的负面影响)
1. 直接给父容器设置高度 -- 不推荐
2. 在浮动元素的末尾，增加一个空容器，设置 clear: left; -- 不推荐
3. 利用伪元素清除浮动 
父容器 ::after {
    display: block;
    clear: both;
}

4. 被浮动影响的元素，做清除浮动 -- 不推荐
5. 被浮动元素的父容器设置为 BFC 容器


# BFC (block formatting context)
- 普通容器中存在一个父容器的 margin-top 和子容器的 margin-top 重叠的问题

- BFC 是一个拥有特殊渲染规则的隔离空间

- 如何创建一个 BFC:
1. overflow: hidden | auto | scroll | overlay;
2. position: absolute | fixed;
3. float: left | right
4. display: flex | grid | inline-xxx

- BFC 的渲染规则
1. BFC 容器的子元素会从上往下，从左往右排列
2. BFC 容器的子元素的 margin-top 不会超出父容器 (不会和父容器的margin-top重叠)
3. BFC 容器在计算高度时，会将浮动子元素的高度也计算在内