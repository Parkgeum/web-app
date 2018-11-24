
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
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("token", response.token);
                console.log(response.data.username);
            }
            else {console.log('로그인 정보를 확인하세요');}
         });
    $("#loginid").val("");
    $("#loginpassword").val("");
}

function getId() {
    var token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        url: "/me",
        timeout: 3000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization","Bearer " + token);
        },
        success: function (res) {
            console.log(res);
            document.getElementById('loginid').innerHTML = res.type.id;
        }
    });
}

function logout(res) {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
}