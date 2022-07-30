$(document).ready(function () { 
    var i=0;
    var data = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    $(".main").on('click', 'div', function(){
        let cross = '<i class="fa fa-times" aria-hidden="true"></i>'; //1
        let tic = '<i class="fa fa-check" aria-hidden="true"></i>';   //2
        if(i%2 == 0){
            $(this).html(tic);
            fillDataArrayForTic($(this).attr("id"));

        }else{
            $(this).html(cross);
            fillDataArrayForCross($(this).attr("id"));
        }
        let res = "";
        console.log(i);
        i++;
        res = checkForWinORLoss();
        if(res){
            setTimeout(()=>{
                alert(`${res}`);
                window.location.reload();
            }, 200);
        }
        if(res == "" && i==9){
            setTimeout(()=>{
                alert(`Draw`);
                window.location.reload();
            }, 200);
        }
    });

    function fillDataArrayForTic(id){
        if(id=="box1"){
            data[0][0] = 1
        }else if(id=="box2"){
            data[0][1] = 1
        }else if(id=="box3"){
            data[0][2] = 1
        }else if(id=="box4"){
            data[1][0] = 1
        }else if(id=="box5"){
            data[1][1] = 1
        }else if(id=="box6"){
            data[1][2] = 1
        }else if(id=="box7"){
            data[2][0] = 1
        }else if(id=="box8"){
            data[2][1] = 1
        }else if(id=="box9"){
            data[2][2] = 1
        }
    }

    function fillDataArrayForCross(id){
        if(id=="box1"){
            data[0][0] = 2
        }else if(id=="box2"){
            data[0][1] = 2
        }else if(id=="box3"){
            data[0][2] = 2
        }else if(id=="box4"){
            data[1][0] = 2
        }else if(id=="box5"){
            data[1][1] = 2
        }else if(id=="box6"){
            data[1][2] = 2
        }else if(id=="box7"){
            data[2][0] = 2
        }else if(id=="box8"){
            data[2][1] = 2
        }else if(id=="box9"){
            data[2][2] = 2
        }
    }

    function checkForWinORLoss(){
        var output= "";
        for(let i=0; i<3; i++){

            if(data[i][0] == 1 && data[i][1] == 1 && data[i][2] == 1){
                output = "User 1 (Tick) is winner";
            }
            else if(data[i][0] == 2 && data[i][1] == 2 && data[i][2] == 2){
                output = "User 2 (Cross) is winner";
            }
            else if(data[0][i] == 1 && data[1][i] == 1 && data[2][i] == 1){
                output = "User 1 (Tick) is winner";
            }
            else if(data[0][i] == 2 && data[1][i] == 2 && data[2][i] == 2){
                output = "User 2 (Cross) is winner";
            }
            else if(data[0][0] == 1 && data[1][1] == 1 && data[2][2] == 1)
            {
                output = "User 1 (Tick) is winner";
            }
            else if(data[0][2] == 1 && data[1][1] == 1 && data[2][0] == 1)
            {
                output = "User 1 (Tick) is winner";
            }
            else if(data[0][0] == 2 && data[1][1] == 2 && data[2][2] == 2)
            {
                output = "User 2 (Cross) is winner";
            }
            else if(data[0][2] == 2 && data[1][1] == 2 && data[2][0] == 2)
            {
                output = "User 2 (Cross) is winner";
            }

        }
        return output;
    }
});




