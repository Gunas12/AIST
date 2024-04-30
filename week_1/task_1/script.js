function updateDateTime() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var dateTimeString = day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerText = dateTimeString;
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();
  