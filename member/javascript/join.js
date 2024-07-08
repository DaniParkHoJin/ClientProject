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
            document.getElementById('address1').value = data.address;
        }
    }).open();
}

function checkForm(regForm) {
    let r1 = /[0123456789]/g;
    let r2 = /[^a-zA-Z0-9]/g;
    let r3 = "~!@#$%^&*()_+=|\/?:\"'<>,.()[]{};"
    unname = regForm.name.value;
    b = false;
    if (name.replace(/\s/g, "") == "") {
        alert("이름을 입력하세요.");
        regForm.name.focus();
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
        regForm.name = "";
        regForm.name.focus();
        return false;
    }
    id = regForm.userid.value;
    if (id.replace(/\s/g, "") == "" || id.search(r2) >= 0) {
        alert("아이디가 입력되지 않았거나 아이디는 영문자와 숫자로 구성되어야 합니다.");
        regForm.userid.value="";
        regForm.userid.focus();
        return false;
    }
    if (id.substr(0,1).match(r1)){
        alert("아이디의 첫 글자에는 숫자가 올 수 없습니다.");
        regForm.userid.value="";
        regForm.userid.focus();
        return false;
    }
}