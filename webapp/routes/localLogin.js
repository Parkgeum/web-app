
function localLogin() {
    var localid = $("#loginid").val();
    var localPassword = $("#loginpassword").val();
    console.log(localid);
    console.log(localPassword);
    var postUserInformation = {
        id: localid,
        password: localPassword
    };
    $.post('/member/login', postUserInformation, 
        function(response){
            if (response.success == true){
                localStorage.setItem("token", response.token);
                console.log(response.token);

            }
         });
    $("#loginid").val("");
    $("#loginpassword").val("");
}

function localSignup() {
    var localid = $("#signupid").val();
    var localPassword = $("#signuppassword").val();
   
    var postUserInformation = {
        id: localid,
        password: localPassword
    };
    $.post('/member/signup', postUserInformation, 
        function(response){
            console.log(response);
            if (response.success == true){
                localStorage.setItem("token", response.token);
            }
         });
    $("#signupid").val("");
    $("#signuppassword").val("");
}