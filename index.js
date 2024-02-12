
document.addEventListener("DOMContentLoaded", function () {
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = eventData.target.value;
        date.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });
    document.getElementById('date').addEventListener('change', function (eventData) {
        let date = document.getElementById('dateOutput');
        dateOutput.innerText = eventData.target.value;
    });
    document.getElementById('signature').addEventListener('change', function (eventData) {
        let date = document.getElementById('signOutput');
        signOutput.innerText = eventData.target.value;
    });
  
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); 
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        let nameOutput = document.getElementById('nameOutput');
        let date = document.getElementById('date');
        let signature = document.getElementById('signature');
        let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        date.innerText = formData.name;
        signature.innerText = formData.name;
        info.innerText = formData.type;

      });
   
    console.log("Ready");

    function changeCert(value){
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; 
        switch(value){
            case 'A':
                certificate.classList.add('number1');
            break;
            case 'B':
                certificate.classList.add('number2');
            break;
            case 'C':
                certificate.classList.add('number3');
            break;
            case 'D':
                certificate.classList.add('number4');
            break;
        }
    }
    if ( document.getElementById('print') !== null) {
        let printElement = document.getElementById('print');
        printElement.addEventListener('click', function(e){
        window.print();
        console.log("invoke print");
        } );
    }
    let theDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"numeric", day:"numeric"}) 
    let dateBox = document.getElementById('theDate');
    dateBox.innerText = theDate;
});
function processForm(form){

}