
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
                // localStorage.setItem("username", response.data.username);
                // localStorage.setItem("token", response.token);
                console.log(response.data.id);
            }
         });
    $("#loginid").val("");
    $("#loginpassword").val("");
}

function localSignup() {
    var localid = $("#signupid").val();
    var localPassword = $("#signuppassword").val();
    var localusername =  $("#username").val(); 
    var localemail = $("#email").val();
   
    var postUserInformation = {
        id: localid,
        password: localPassword,
        username: localusername,
        email: localemail
    };
    $.post('/member/signup', postUserInformation, 
        function(response){
            console.log(response+"test log");
            if (response.success == true){
                // localStorage.setItem("username", response.data.username);
                // localStorage.setItem("username", null);
                // localStorage.setItem("token", response.token);
            }
         });
    $("#signupid").val("");
    $("#signuppassword").val("");
}