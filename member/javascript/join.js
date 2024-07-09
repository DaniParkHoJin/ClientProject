ns4 = (document.layers) ? true : false;

function ect_view() {
    if (ns4) {
        document.ect_input.visibility = "show"
    } else {
        document.all.ect_input.style.visibility = "visible";
    }
}

function ect_hide() {
    if (ns4) {
        document.ect_input.visibility = "hide";
    } else {
        document.all.ect_input.style.visibility = "hidden";
    }
}

function zipcode_openwin() {
    new daum.Postcode({
        oncomplete: function (data) {
            document.getElementById('zipcode').value = data.zonecode;
            document.getElementById('id_address1').value = data.address;
        }
    }).open();
}

function checkForm(regForm) {
    let r1 = /[0123456789]/g;
    let r2 = /[^a-zA-Z0-9]/g;
    let r3 = "~!@#$%^&*()_+=|\/?:\"'<>,.()[]{};"
    unname = regForm.name_name.value;
    b = false;
    if (unname.replace(/\s/g, "") == "") {
        alert("올바른 이름을 입력하세요.");
        regForm.name_name.focus();
        return false;
    }
    for (let i = 0; i < unname.lang; i++) {
        let c = unname.charAt(i);
        if (r3.search(c) >= 0 || c.search(r1) >= 0) {
            b = true;
            break;
        }
    }
    if (b) {
        alert("이름은 문자만 입력하셔야 합니다.");
        regForm.name_name = "";
        regForm.name_name.focus();
        return false;
    }
    id = regForm.name_userid.value;
    if (id.replace(/\s/g, "") == "" || id.search(r2) >= 0) {
        alert("아이디가 입력되지 않았거나 아이디는 영문자로 구성되어야 합니다.");
        regForm.name_userid.value="";
        regForm.name_userid.focus();
        return false;
    }
    if (id.substr(0,1).match(r1)){
        alert("아이디의 첫 글자에는 숫자가 올 수 없습니다.");
        regForm.name_userid.value="";
        regForm.name_userid.focus();
        return false;
    }
    pw = regForm.name_password.value;
    if(pw.replace(/\s/g, "") == "" || pw.search(r2) >= 0) {
        alert("비밀번호는 영문자와 숫자로 구성되어야 합니다.");
        regForm.name_password.value="";
        regForm.name_password.focus();
    }

    if(pw != regForm.name_repassword){
        alert("비밀번호와 비밀번호 확인이 다릅니다. 다시 입력해주세요.");
        regForm.name_repassword.value="";
        regForm.name_repassword.focus();
    }
}

