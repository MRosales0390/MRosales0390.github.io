let datePicker = document.getElementById("inputDate");
let months = [  "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December" ];



datePicker.addEventListener("change", function(){
    let dateValue = document.getElementById("inputDate").value;
    let dateComp = dateValue.split('-');
    let monthName = months[parseInt(dateComp[1])];

    let formattedDate = `${dateComp[2]} ${monthName} ${dateComp[0]}`//day + monthName + year;
    document.getElementById("inputDateText").value = formattedDate;
});