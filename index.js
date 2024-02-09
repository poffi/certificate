// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value;
        date.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        let info = document.getElementById('info');
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });


    document.getElementById('date').addEventListener('change', function (eventData) {
        let date = document.getElementById('dateOutput');
        // console.log(eventData);
        dateOutput.innerText = eventData.target.value;
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        let date = document.getElementById('date');
        let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        date.innerText = formData.name;
        info.innerText = formData.type;

      });
    // Log readiness to console
    console.log("Ready");

    // let info = document.getElementById('info');
    // info.classList.add('test');
    
    
    
    // certificate.classList.add('number1');
    
    function changeCert(value){
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; // clear classes on each function call
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

    // Adding a button to print the certificate
    // setup print event listener
    if ( document.getElementById('print') !== null) {
        let printElement = document.getElementById('print');
        printElement.addEventListener('click', function(e){
        window.print();
        console.log("invoke print");
        } );
    } // or in html -> onclick="window.print()"

    // Generating a date
    let theDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"numeric", day:"numeric"}) 
    // Makes a format like: "Friday, Jul 2, 2021"
    let dateBox = document.getElementById('theDate');
    dateBox.innerText = theDate;
});

/* Additional things to be aware of */






function processForm(form){

}