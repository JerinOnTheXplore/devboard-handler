    const updatedDate = new Date();
    
    const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    const months = ['January','February','March','April','May','June','July','August','September','October','Nonember','December'];
    const updatedDayName = days[updatedDate.getDay()];
    const updatedDay = updatedDate.getDate();
    const updatedMonth = months[updatedDate.getMonth()];
    const updatedYear = updatedDate.getFullYear();
    const wholeUpdatedDate = `${updatedDayName}   ,${updatedDay} ${updatedMonth} ${updatedYear}`;
    document.getElementById('date').innerText = wholeUpdatedDate;
