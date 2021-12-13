// ===== Button and input =====
const getS = document.getElementById("s");
const getC = document.getElementById("c");
const getS_bar = document.getElementById("s_bar");
const getC_bar = document.getElementById("c_bar");

const checkBtn = document.getElementById("check-btn");
const tableBody = document.getElementById("table-body");

// ===== Create a td tag =====
const createTd = (value) => {
  const td = document.createElement("td");
  td.innerText = value;
  td.classList.add("border");
  td.classList.add("border-gray-400");
  return td;
};

// ===== Creating a row =====
const createRow = (s, c, fs, fc, fault) => {
  const tr = document.createElement("tr");
  const td1 = createTd(s);
  tr.appendChild(td1);
  const td2 = createTd(c);
  tr.appendChild(td2);
  const td3 = createTd(fs);
  tr.appendChild(td3);
  const td4 = createTd(fc);
  tr.appendChild(td4);
  const td5 = createTd(fault);
  if (fault == "No Fault") {
    td5.classList.add("bg-green-200");
  } else {
    td5.classList.add("bg-red-200");
  }
  tr.appendChild(td5);
  tableBody.appendChild(tr);
};

// ===== Validate Input =====
const checkNum = (num) => {
  if (!isNaN(num) && num != "" && (num == 1) | (num == 0)) {
    return true;
  } else {
    return false;
  }
};

// ===== Faults =====
const getResult = (s, c, fs, fc) => {
  if (s == fs && c == fc) {
    return "No Fault";
  } else if (s == 0 && c == 0 && fs == 0 && fc == 1) {
    return "h SA1";
  } else if (s == 0 && c == 0 && fs == 1 && fc == 0) {
    return "a SA1, b SA1, c SA1, d SA1, g SA1";
  } else if (s == 0 && c == 1 && fs == 0 && fc == 0) {
    return "e SA0, f SA0, h SA0";
  } else if (s == 0 && c == 1 && fs == 1 && fc == 0) {
    return "a SA0, b SA0";
  } else if (s == 0 && c == 1 && fs == 1 && fc == 1) {
    return "c SA0, d SA0, g SA1";
  } else if (s == 1 && c == 0 && fs == 0 && fc == 0) {
    return "a SA0, b SA0, c SA0, c SA1, d SA0, d SA1, g SA0";
  } else if (s == 1 && c == 0 && fs == 1 && fc == 1) {
    return "e SA1, f SA1, h SA1";
  } else if (s == 1 && c == 0 && fs == 0 && fc == 1) {
    return "a SA1, b SA1";
  } else {
    return "Not SA0 or SA1 fault";
  }
};

// ===== Getting Result =====
checkBtn.addEventListener("click", () => {
  const s = getS.value;
  const c = getC.value;
  const fs = getS_bar.value;
  const fc = getC_bar.value;
  if (checkNum(s) && checkNum(c) && checkNum(fs) && checkNum(fc)) {
    createRow(s, c, fs, fc, getResult(s, c, fs, fc));
  }
  getS.value = "";
  getC.value = "";
  getS_bar.value = "";
  getC_bar.value = "";
});
