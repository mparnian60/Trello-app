$(()=> {

    const firstCardData = [];
    const secondCardData = [];

    function moveItemToList(){
        event.preventDefault();
        const dataEntry = $('#dataEntry').val();
        firstCardData.push(dataEntry);
        console.log(firstCardData);

        const dataEntryList = $(`<div class='ui-widget-content draggable'><li class="list-group-item">${dataEntry}</li></div>`);
        $('#firstList').append(dataEntryList);
        $('input').val('');

        $('.draggable').draggable();
        $('.draggable').draggable({ revert: true });
        $("#droppable").droppable({
            drop: ( event, ui )=> {
            //   console.log(event);
            //   console.log(ui);

            //get the value of the dragged item
            const dragItemContent = $(ui.draggable.html()).text();
            console.log(dragItemContent);

            //delete a dragged element from a first card array
            const index = firstCardData.indexOf(dragItemContent);
            firstCardData.splice(index,1);

            //add a dragged element to second card array
            secondCardData.push(dragItemContent);

            console.log('first array',firstCardData);
            console.log('second array', secondCardData);

            //remove style from dragged item to ensure it sits in proper position and prepend it to the droppable list
                ui.draggable.removeAttr('style');
              $("#secondList").prepend(ui.draggable);

            }
          });
    }

    $('#button-addon2').on('click',moveItemToList);

    // $('#dragging').draggable();


})