$(document).ready(function(){
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    })
})

function ajaxPost(){
    var formData = {
        email : $("#email").val(),
        password : $("#password").val()
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location + "api/login",
        data: JSON.stringify(formData),
        dataType: "json",
        success: function(customer) {
            if (customer.valid == true) {
                $("#loginform").removeClass("fail");
                $("#loginform").addClass("success");
            } else {
                $("#loginform").addClass("fail");
                $("#loginform").removeClass("success");
            }
            $("#postresult").html("<p>" + "Post Successful! <br>" + "Email: " + customer.email + "</br>" + "Password: " + customer.password + "</br>" + "Valid: " + customer.valid);
        },
        error: function(e){
            alert("Error!");
            console.log("Error:" + e)
        }
    })
    resetForm();
}

function resetForm(){
    $("#email").val("");
    $("#password").val("");
}