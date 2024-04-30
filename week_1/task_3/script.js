function daysBetweenTwoDates(date1, date2) {
    const parts1 = date1.split('.');
    const parts2 = date2.split('.');
    const startDate = new Date(parts1[2], parts1[1] - 1, parts1[0]);
    const endDate = new Date(parts2[2], parts2[1] - 1, parts2[0]);
    const differenceMs = Math.abs(endDate - startDate);
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    return differenceDays;
}
function isDateValid(dateString) {
    const parts = dateString.split('.');
    if (parts.length !== 3) return false;
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 0) return false; 
    return true;
}

function calculateDays() {
    const date1 = document.getElementById("date1Input").value;
    const date2 = document.getElementById("date2Input").value;

    if (!isDateValid(date1) || !isDateValid(date2)) {
        document.getElementById("result").innerText = "Enter correctly";
        return;
    }
    const differenceDays = daysBetweenTwoDates(date1, date2);
    document.getElementById("result").innerText = ` ${differenceDays} days`;
}
document.getElementById("date1Input").oninput = function() {
    calculateDays();
};
document.getElementById("date2Input").oninput = function() {
    calculateDays();
};
