

addBtn = document.querySelector('#button_add');

addBtn.addEventListener('click',function(e){

    txtA = document.querySelector('#value_a');
    txtB = document.querySelector('#value_b');
    txtc = document.querySelector('#value_c');

    let C;

    C =parseFloat(txtA.value) + parseFloat(txtB.value);

    txtc.value = C;
});