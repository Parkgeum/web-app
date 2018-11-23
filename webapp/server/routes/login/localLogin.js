
function localLogin() {
    var localid = $("#loginid").val();
    var localPassword = $("#loginpassword").val();
    var postUserInformation = {
        id: localid,
        password: localPassword
    };
    $.post('/member/login', postUserInformation, 
        function(response){
            if (response.success == true){
                localStorage.setItem("id", response.data.id);
                localStorage.setItem("token", response.token);
                console.log(response.data.id);
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
                localStorage.setItem("id", response.data.id);
                localStorage.setItem("token", response.token);
            }
         });
    $("#signupid").val("");
    $("#signuppassword").val("");
}