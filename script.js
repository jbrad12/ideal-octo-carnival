$(document).ready(function() {

    $(".row").each(function () {
        var timeBlock = parseInt($(this).attr("id"))
        if (timeBlock < moment().format('HH')) {
            $(this).addClass("past")
        }

        if (timeBlock == moment().format('HH')) {
            $(this).addClass("present")
        }

        if (timeBlock > moment().format('HH')) {
            $(this).addClass("future")
        }

    

    })

    $(".saveBtn").on("click", function(){
    var input = $(this).siblings(".time-block").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, input)

    })
    var keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var display = $("#" + keys[i]).find("textarea")
        display.text(value);
    }

    $(".clear").on("click", function(){
        localStorage.clear();
        location.reload(true)
    })
})