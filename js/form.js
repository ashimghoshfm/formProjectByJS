// function submitForm() {
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     localStorage.setItem("age", age);
//     localStorage.setItem("name", name);
//     window.location.href = "show.html";
// }


function showF() {

    //Full Name:
    let inputtedFullName = document.getElementById("fullName").value;
    localStorage.setItem("storage_fullName", inputtedFullName);

    //Subject:
    let inputtedSubject = document.getElementById("subject").value;
    localStorage.setItem("storage_subject", inputtedSubject);

    //Age:
    let inputtedAge = document.getElementById("age").value;
    localStorage.setItem("storage_age", inputtedAge);

    //Phone:
    let inputtedPhone = document.getElementById("phone").value;
    localStorage.setItem("storage_phone", inputtedPhone);



    window.location.href = "show.html";
}