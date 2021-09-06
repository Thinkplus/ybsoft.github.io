const clock = document.querySelector("#clock");

function Clock()
{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth()).padStart(2,"0");
    const day = String(now.getDate()).padStart(2,"0");;
    const hour = String(now.getHours()).padStart(2,"0");;
    const minute = String(now.getMinutes()).padStart(2,"0");;
    const second = String(now.getSeconds()).padStart(2,"0");;

    clock.innerHTML = `${year}-${month}-${day} </br>${hour}:${minute}:${second}`;

}

setInterval(Clock, 1000);
Clock();

