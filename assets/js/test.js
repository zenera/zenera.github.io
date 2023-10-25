function fun1(out) {
  let obj = {
    id: "An object",
    f1: function() {
      out.innerHTML = this.id;
    }
  };
  obj.f1();
}

function fun2(out) {
  let arr = [ 'a', 'b', 'c'];
  arr.push('d'); // insert as last item

  let result = arr + '<br>' + arr.pop() + '<br>' + arr;
  out.innerHTML = result;
}

function extractNumber(str) {
  let num = str.replace(/[^0-9]/g, ''); // str.replace(/\D/g, '')
  return num;
}

function toggle(callback, elem_id) {
  let node = document.getElementById(elem_id);
  let btn = document.getElementById("button" + extractNumber(elem_id));
  if (node.innerHTML == "") {
    callback(node);
    btn.innerHTML = "hide";
  } else {
    node.innerHTML = "";
    btn.innerHTML = "run";
  }
}

