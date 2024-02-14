$(document).ready(function () {
    $(".items").click(function () {
      if ($(this).next(".sub-items").hasClass("notactive")) {
        $(this).next(".sub-items").removeClass("notactive");
      } else {
        $(this).next(".sub-items").addClass("notactive");
      }
    });
    
    // Show navbar on hover near the left
    $(document).on("mousemove", function (e) {
      if (e.pageX < 10) {
        console.log("something");
        $("#navbar-md-2").addClass("active");
      } else if (e.pageX > 200) {
        $("#navbar-md-2").removeClass("active");
      }
    });
  });
// initializing the object
var obj = {
    "001":{
        "complete":false,
        "0011":false,
        "0012":false,
        "0013":false
    },
    "002":{
        "complete":false,
        "0021":false,
        "0022":false
    },
    "003":{
        "complete":false,
        "0031":false,
        "0032":false,
        "0033":false
    },
    "004":{
        "complete":false,
        "0041":false,
        "0042":false
    },
    "005":{
        "complete":false,
        "0051":false,
        "0052":false
    },
}

// localStorage.setItem("completed_task", JSON.stringify(obj));

var local_data = JSON.parse(localStorage.getItem("completed_task"))
if(local_data){
    for (const [key, value] of Object.entries(local_data)) {
        for(const[k,val] of Object.entries(value)){
            if(val){ 
                $(`#${k}`).append(`<span class="material-symbols-outlined" style="color:green">task_alt</span>`);
                console.log(k)
            }
            console.log(`key ${k} and value ${val}`);
        }
    }
}else{
    console.log("writing into the local_storage")
    localStorage.setItem("completed_task",JSON.stringify(obj))
}

function storelocal(parent, subgroup){
    local_data[parent][subgroup] = true;
    localStorage.setItem("completed_task", JSON.stringify(local_data));
}