function draw() {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max)) {
    alert("숫자를 입력해주세요.");
    return;
  }

  if (min > max) {
    alert("최소 숫자가 최대 숫자보다 크면 안됩니다.");
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("result").innerText = `🎉 결과: ${result}`;
}
