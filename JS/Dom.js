let validateForm = () => {


    let x = document.forms['myForm']['fname'].value;
    if (x === "") {
        document.getElementById('fname').style.borderColor='red';
        // document.getElementById('fname').value="Please fill the form";
        document.getElementById('fname').setAttribute('placeholder' , 'please fill the form');

        // document.getElementById('fname').value.style.color="red"
        // document.getElementById('fname').value.style.fontStyle="italic"


        document.getElementById('lname').style.borderColor='red';
        document.getElementById('lname').setAttribute('placeholder' , 'please fill the form');
        // document.getElementById('lname').value="Please fill the form"
        // document.getElementById('lname').value.style.color="red"
        // document.getElementById('lname').value.style.fontStyle="italic"

        // alert('Values can not be empty');
        return false;
    }
}
