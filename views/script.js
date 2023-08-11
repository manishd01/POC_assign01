var prices_outside = [];
var yearormonth = "Monthly";
function toggleOption(option, thisele) {
  const yearOption = document.getElementById("yearOption");
  const monthOption = document.getElementById("monthOption");

  if (option === "year") {
    yearOption.classList.add("selectedMon");
    monthOption.classList.remove("selectedMon");
    prices_outside = [1000, 2000, 5000, 7000];
    yearormonth = thisele.textContent;
  } else if (option === "month") {
    monthOption.classList.add("selectedMon");
    yearOption.classList.remove("selectedMon");
    prices_outside = [100, 200, 500, 700];
    yearormonth = thisele.textContent;
    console.log(yearormonth, "ye month hai");
  }
  console.log(prices_outside);
  addprices();
}
function addprices() {
  var pri = [];
  pri = prices_outside;
  const table = document.getElementById("plan_table");
  const row = document.getElementById("prices_plan");
  const tds = row.getElementsByTagName("td");
  const p1 = tds[1];
  const p2 = tds[2];
  const p3 = tds[3];
  const p4 = tds[4];

  p1.textContent = pri[0];
  p2.textContent = pri[1];
  p3.textContent = pri[2];
  p4.textContent = pri[3];
  console.log(row, "hello");
}

const slider = document.getElementById("planSlider");
const planOptions = document.querySelectorAll(".plan-option");
const planRows = document.querySelectorAll(".plan-row");
let sel_item = null;

var plan_need = "";
function select_opt(item) {
  console.log("clicked me");
  if (sel_item) {
    sel_item.classList.remove("selected_plann");
    console.log(item, "ss1");
    plan_need = item.textContent;
    console.log(plan_need, "curent--");
  }

  sel_item = item;
  sel_item.classList.add("selected_plann");
}

///----------stripe:-----------------
//yearormonth varibale to chekc we are on yearly plan or monthly plan
//plan_need varibale store the type of plan mobile,standard,premimum etc

let plan_id = 1;
if (plan_need === "Mobile") plan_id = 1;
else if (plan_need === "Basic") plan_id = 2;
else if (plan_need === "Standard") plan_id = 2;
else if (plan_need === "Premium") plan_id = 4;

const button = document.querySelector("button");
button.addEventListener("click", () => {
  fetch("create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: 2, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});

// const button = document.getElementById("checkoutbtn");
// button.addEventListener("click", () => {
//   let plan_id = 1;
//   if (plan_need === "Mobile") plan_id = 1;
//   else if (plan_need === "Basic") plan_id = 2;
//   else if (plan_need === "Standard") plan_id = 2;
//   else if (plan_need === "Premium") plan_id = 4;
//   console.log("checkout_clicked", plan_id, plan_need, "ss");

//   fetch("/create-checkout-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [{ id: plan_id, quantity: 1 }],
//     }),
//   })
//     .then(async (res) => {
//       if (res.ok) return res.json();
//       return res.json().then((json) => Promise.reject(json));
//     })
//     .then(({ url }) => {
//       // console.log("hello");
//       window.location = url;
//       console.log(url, "uu");
//     })
//     .catch((e) => {
//       console.log("errror agya");
//       console.error(e.error);
//     });
// });

//
console.log("khtm flow");
