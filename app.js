$(()=> {


    function moveItemToList(){
        event.preventDefault();
        const dataEntry = $('#dataEntry').val();
        console.log(dataEntry);
        const dataEntryList = $(`<li class="list-group-item">${dataEntry}</li>`);
        $('#firstList').append(dataEntryList);
        $('input').val('');
    }



    $('#button-addon2').on('click',moveItemToList);
    

})