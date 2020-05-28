$(() => {

  const cardData = [];
  const tableIndex = [];
  let tableIndexNum;
  let buttonClass = 'button-addon2';


  function drawTableToDom(e) {

    // console.log('event',e);
    const ListName = $('#listNameEntry').val();
    tableIndex.push({ tableNmae: ListName })
    tableIndexNum = tableIndex.length - 1;


    const list = $(`<div class="col-sm-6 table droppable" data-column=${tableIndexNum}>
          <div class='dropZone'>
              <div class="card" style="width: 18rem;">
                  <div class="card-header">
                  ${ListName}
                  </div>
                  <ul  id ='list${tableIndexNum}' class="list-group list-group-flush">
                  
                  </ul>
              </div>
              <div class="input-group" style="width: 18rem;">
                  <input type="text" id='dataEntry${tableIndexNum}' class="form-control" placeholder="Add a card" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <div class="input-group-append">
                  <button class="btn btn-outline-success addItem" type="button" data-column=${tableIndexNum}>Add</button>
                  </div>
              </div>
          </div>
      </div>
    `);

    $('.row').append(list)
//make list entry empty
    $('input').val('');

    // $('.droppable').droppable({
    //   drop: (event, ui) => {
    //     console.log(event);
    //     console.log(ui);

    //     //get the data of the dragged item
    //     let dragItemContent = $(ui.draggable[0].dataset);

    //     // Since HTMLElement.dataset returns a DOM string map, 
    //     // the only way I found is to convert it into an native object by using below code
    //     dragItemContent = JSON.parse(JSON.stringify(dragItemContent));

    //     //get index number of dragged item
    //     const indexNum = dragItemContent[0].index;
    //     cardData[indexNum].status = 1;
    //     // console.log(cardData);

    //     //remove style from dragged item to ensure it sits in proper position and prepend it to the droppable list
    //     // ui.draggable.removeAttr('style');
    //     // $("#firstList").append(ui.draggable);
    //     $(`#list${tableIndexNum}`).prepend(ui.draggable);


    //   }
    // });


  }

  $('#button-addon').on('click', drawTableToDom);




  // const boardName = prompt('Name your board','Add board Title');
  // $('.board-name').append(boardName);

  function moveItemToList(e) {
    // console.log(e);
    // console.log(e.target.dataset.column);

    event.preventDefault();
    const dataEntry = $(`#dataEntry${e.target.dataset.column}`).val();
    cardData.push({ title: dataEntry, status: e.target.dataset.column });
    const dataIndexNum = cardData.length - 1;
    $('input').val('');
    // console.log(dataIndexNum);
    // console.log(cardData);

    const dataEntryList = $(`<div class='ui-widget-content draggable' data-index=${dataIndexNum}><li class="list-group-item">${dataEntry}</li></div>`);
    $(`#list${e.target.dataset.column}`).append(dataEntryList);

    $('.draggable').draggable();
    $('.draggable').draggable({ revert: true });

    // $('.droppable').droppable({
    //   drop: (event, ui) => {
    //     console.log(event);
    //     console.log(ui);

    //     //get the data of the dragged item
    //     let dragItemContent = $(ui.draggable[0].dataset);

    //     // Since HTMLElement.dataset returns a DOM string map, 
    //     // the only way I found is to convert it into an native object by using below code
    //     dragItemContent = JSON.parse(JSON.stringify(dragItemContent));

    //     //get index number of dragged item
    //     const indexNum = dragItemContent[0].index;
    //     cardData[indexNum].status = 1;
    //     // console.log(cardData);

    //     //remove style from dragged item to ensure it sits in proper position and prepend it to the droppable list
    //     // ui.draggable.removeAttr('style');
    //     // $("#firstList").append(ui.draggable);
    //     $("#list1").prepend(ui.draggable);


    //   }
    // });

    $('.droppable').droppable({
      drop: (event, ui) => {
        console.log(event);
        console.log(ui);

        // const columnTarget = e.target.dataset.column;
        console.log('column target', e.target.dataset.column);

        //get the data of the dragged item
        let dragItemContent = $(ui.draggable[0].dataset);

        // Since HTMLElement.dataset returns a DOM string map, 
        // the only way I found is to convert it into an native object by using below code
        dragItemContent = JSON.parse(JSON.stringify(dragItemContent));

        //get index number of dragged item
        const indexNum = dragItemContent[0].index;
        cardData[indexNum].status = 0;
        // console.log(cardData);

        //remove style from dragged item to ensure it sits in proper position and prepend it to the droppable list
        $(`#list${e.target.dataset.column}`).prepend(ui.draggable);


      }
    });
  }

  $(document).on("click", '.addItem', moveItemToList);


})