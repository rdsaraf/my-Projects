setInterval(() => {
    // console.log("Hello Rushikesh");
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let hourRotate=30*hours+minutes/2;
    let minuteRotate=6*minutes;
    let secondRotate=6*seconds;
    hour.style.transform=`rotate(${hourRotate}deg)`;
    minute.style.transform=`rotate(${minuteRotate}deg)`;
    second.style.transform=`rotate(${secondRotate}deg)`;
}, 1000);