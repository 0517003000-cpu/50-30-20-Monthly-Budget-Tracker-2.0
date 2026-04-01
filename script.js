function sumInputs(className) {
  let inputs = document.querySelectorAll("." + className);
  let total = 0;

  inputs.forEach(input => {
    total += Number(input.value) || 0;
  });

  return total;
}

function calculate() {
  let income = Number(document.getElementById("income").value);

  let essential = sumInputs("essential");
  let non = sumInputs("non");
  let savings = sumInputs("savings");

  // 50/30/20 rule
  let essentialLimit = income * 0.5;
  let nonLimit = income * 0.3;
  let savingsTarget = income * 0.2;

  // totals
  document.getElementById("essentialTotal").innerText = essential;
  document.getElementById("nonTotal").innerText = non;
  document.getElementById("savingsTotal").innerText = savings;

  // available
  document.getElementById("essentialAvailable").innerText = essentialLimit;
  document.getElementById("nonAvailable").innerText = nonLimit;
  document.getElementById("savingsAvailable").innerText = savingsTarget;

  // status (ONLY for essential & non)
  document.getElementById("essentialStatus").innerText =
    essential > essentialLimit ? "Over Budget" : "Good";

  document.getElementById("nonStatus").innerText =
    non > nonLimit ? "Over Budget" : "Good";

  // ✅ NEW SAVINGS RECOMMENDATION (NOT STATUS)
  let advice = "";

  if (savings < savingsTarget) {
    advice += "⚠️ Your savings are below target. Try to save more or reduce spending.\n";
  } else if (savings > savingsTarget) {
    advice += "🔥 Great job! You are saving more than recommended.\n";
  } else {
    advice += "👍 Your savings are on track.\n";
  }

  // extra tips
  if (essential > essentialLimit) {
    advice += "• Reduce essential expenses (food, bills).\n";
  }

  if (non > nonLimit) {
    advice += "• Cut down on non-essential spending (shopping, entertainment).\n";
  }

  if (savings >= savingsTarget) {
    advice += "• You can invest extra savings or keep building emergency fund.";
  }

  document.getElementById("adviceText").innerText = advice;
}
