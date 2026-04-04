function calculateBill() {
    let fan = document.getElementById("fan").value || 0;
    let ac = document.getElementById("ac").value || 0;
    let tv = document.getElementById("tv").value || 0;
    let light = document.getElementById("light").value || 0;

    // Power consumption (units per hour)
    let fanUnit = 0.075;
    let acUnit = 1.5;
    let tvUnit = 0.1;
    let lightUnit = 0.06;

    // Daily units
    let dailyUnits =
        (fan * fanUnit) +
        (ac * acUnit) +
        (tv * tvUnit) +
        (light * lightUnit);

    // Monthly units (30 days)
    let monthlyUnits = dailyUnits * 30;

    // Simple tariff
    let bill = 0;
    if (monthlyUnits <= 100) bill = monthlyUnits * 1.5;
    else if (monthlyUnits <= 300) bill = monthlyUnits * 3;
    else bill = monthlyUnits * 5;

    document.getElementById("result").innerHTML =
        `Units: ${monthlyUnits.toFixed(2)}<br>Estimated Bill: ₹${bill.toFixed(2)}`;
}