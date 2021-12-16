(function (){
    const oClock = {
        init(){
            let date;
            let iSecondes;
            let iMinutes;
            let iHours;
            let intervalID;
            const eSecond = document.querySelector("#seconds");
            const eMinute = document.querySelector("#minutes");
            const eHour = document.querySelector("#hours");

            function degreeSec(sec){
                return (sec/60)*360;
            }
            function degreeMin(min, sec) {
                return (min/60 + (sec/60)/60)*360;
            }
            function degreeHour(hour, min){
                return (hour/12 + (min/60)/60)*360;
            }


            intervalID = setInterval(()=>{
                date = new Date();
                iHours = date.getHours();
                iMinutes = date.getMinutes();
                iSecondes = date.getSeconds();
                eSecond.setAttribute("transform", `rotate(${degreeSec(iSecondes)} 16 17)`);
                eMinute.setAttribute("transform", `rotate(${degreeMin(iMinutes, iSecondes)} 16 17)`);
                eHour.setAttribute("transform", `rotate(${degreeHour(iHours, iMinutes)} 16 17)`);
                console.log(`${degreeHour(iHours, iMinutes)} : ${degreeMin(iMinutes, iSecondes)} : ${degreeSec(iSecondes)} `)
                console.log(`${iHours} : ${iMinutes} : ${iSecondes}`)
            }, 1000)
        }
    }
    oClock.init();
})();

