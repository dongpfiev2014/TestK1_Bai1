const a = document.getElementById("a");
const b = document.getElementById("b");
const soCP = document.getElementById("button");
const result = document.getElementById("result");

soCP.addEventListener("click", () => {
  if (!a.value || !b.value || isNaN(a.value) || isNaN(b.value))
    return alert("Xin mời nhập lại đúng 2 chữ số");
  let x = a.value;
  let y = b.value;
  function CheckSCP(m, n) {
    const k = [];
    for (i = m; i <= n; i++) {
      if (i >= 0) {
        h = Math.sqrt(i);
        if (Number.isInteger(h)) {
          k.push(i);
        }
      }
    }
    return k;
  }
  ListSCP = CheckSCP(x, y);
  console.log(ListSCP);

  const resultAB = document.createElement("h2");
  if (ListSCP.length === 0) {
    resultAB.innerText = `Không có số chính phương trong khoảng từ ${x} đến ${y}, vui lòng nhập từ bé đến lớn`;
  } else {
    resultAB.innerText = `Các số chính phương trong khoảng từ ${x} đến ${y} là ${ListSCP} `;
  }
  result.appendChild(resultAB);
});
