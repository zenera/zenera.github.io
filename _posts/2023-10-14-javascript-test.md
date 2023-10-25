---
title: Javascript 테스트
categories: [Language, Tutorial]
tags: [javascript]
img_path: assets/img
---

## Javascript 실행 결과 보여주기

```js
function fun1(out) {
  let obj = {
    id: "An object",
    f1: function() {
      out.innerHTML = this.id;
    }
  };
  obj.f1();
}
```
<p id="out1"></p>
<button id="button1" onclick="toggle(fun1, 'out1')">run</button>

```js
function fun2(out) {
  let arr = [ 'a', 'b', 'c'];
  arr.push('d'); // insert as last item

  let result = arr + '<br>' + arr.pop() + '<br>' + arr;
  out.innerHTML = result;
}
```
<p id="out2"></p>
<button id="button2" onclick="toggle(fun2, 'out2')">run</button>

<script src="/assets/js/test.js"></script>

