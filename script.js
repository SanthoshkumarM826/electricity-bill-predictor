function calculateBill() {
    let units = document.getElementById("units").value;

    // Validation
    if (units === "" || units < 0) {
        alert("❌ Please enter valid electricity units!");
        return;
    }

    units = Number(units);

    let bill = 0;

    // Slab-based billing logic
    if (units <= 100) {
        bill = units * 1.5;
    } else if (units <= 200) {
        bill = (100 * 1.5) + (units - 100) * 2;
    } else {
        bill = (100 * 1.5) + (100 * 2) + (units - 200) * 3;
    }

    // ✅ Output result (THIS WAS MISSING)
    document.getElementById("result").innerText =
        "💡 Your Electricity Bill is: ₹" + bill;
}
