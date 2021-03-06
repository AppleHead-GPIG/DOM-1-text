// 任务37
console.log("任务 37 测试代码 开始")
const div_1 = dom.find("#test_1 > .red")[0];
console.log(`div_1: ${div_1}`); // 获取对应的元素
dom.style(div_1, "color", "red"); // 设置 div.style.color

const divList = dom.find(".red")

// 获取多个 div.red 元素
dom.each(divList, n => console.log(n));
console.log("任务 37 测试代码 结束")

/* 对比 document.createElement("div") 简化代码
 ** const div = dom.create("div")
 */
/* 直接写出 HTML 结构 */
const div = dom.create("<div><span id='newDiv'>newDiv</span></div>");
const td = dom.create("<tr><td>TD</td></tr>");
console.log(div);
console.log(td);

/* after */
dom.after(test, div);
const div3 = dom.create('<div id="wrapper">DIV3</div>'); // 父节点
dom.wrap(test, div3);
/* empty test */
// const nodes = dom.empty(window.empty);
// console.log(nodes);

/* 改 */
/* 用于读写属性  attr(node, attributeName, value) */
dom.attr(test, "title", "Hi, Eric");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);
/* 用于读写文本内容 */
dom.text(test, "Hello,this is a new text");

/* 用于读写HTML内容 */
const Dad = dom.html(dad);
console.log(`Dad: ${Dad}`);

/* 用于修改style */
dom.style(test, {
    border: "1px solid cyan",
    color: "red"
});
console.log(dom.style(test, "border"));
/* 重载 修改 style */
dom.style(test, "border", "5px solid olive");
/* 重载 读取 style */
const styleBorder = dom.style(test, "border");
console.log(styleBorder);
/* 用于添加class */
dom.class.add(test, "bgColor");
dom.class.add(test, "ftSize");
dom.class.remove(test, "ftSize");
console.log(dom.class.has(test, "bgColor"));
console.log(dom.class.has(test, "ftSize"));
/* 用于添加事件监听 */
function addFn() {
    console.log('指到这里')
    console.log(`点击 ${newDiv} 取消事件`)
    console.log(newDiv)
}

// test.addEventListener('click') // TL,DR
dom.on(test, "mouseenter", addFn);
/* 用于删除事件监听 */
// test.removeEventListener(eventName, fn) // TL,DR
dom.off(test, "click", addFn);
dom.toggle(test, "click", addFn);

/* 查 */
console.log(`---------`)
const testDiv = dom.find('#test')[0]
console.log(`testDiv:`)
console.log(testDiv)

const test2 = dom.find('#test2')[0]
console.log(`test2>.red`)
console.log(dom.find('.red', test2)[0])
console.log(`---------`)

console.log(`=== 找父、兄节点 ===`)
console.log('parent')
console.log(dom.parent(test))
console.log('children')
console.log(dom.children(test2))
console.log('siblings')
const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log('next')
console.log(dom.next(s2))
console.log('previous')
console.log(dom.previous(s2))
console.log(`=== ===`)
    /* 遍历 */
const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))
    /* 下标 */
console.log(dom.index(s2))