// 1 задание

let a = new Set();
a.add("e");
a.add("r");
a.add("i");
a.add("k");
a.add("t");
a.add("h");
a.add("e");
a.add("b");
a.add("e");
a.add("s");
a.add("t");

console.log(a);

// 2 задание

let mySet = new Set();

function btns() {
  let inpValue = document.getElementById("inp").value;
  mySet.add(inpValue);
  console.log(mySet);
}

let btn1 = document.querySelector(".btn");
btn1.addEventListener("click", btns);

// 3 задание

let mySet3 = new Set(["e", "r", "t", "w", "q", "s"]);

function check() {
  let inpValue = document.getElementById("inp").value;
  let element = mySet3.has(inpValue);
  document.getElementById("result").textContent = element;
}

document.querySelector(".btn").addEventListener("click", check);

// 4

function test() {
  let inparr = [1, 4, 7, 2, 5, 10, 6];
  let inpgo = [];

  for (let i of inparr) {
    if (i > 5) {
      inpgo.push(i);
    }
  }

  return inpgo;
}

function click() {
  let fil = test();
  document.getElementById("result").textContent = fil;
}

document.querySelector(".btn").addEventListener("clicl", click);
