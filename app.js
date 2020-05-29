//load saved Trello-app into browser
function loadTrelloApp(){
    const columns = window.localStorage.getItem('Trello-app-column');
    const items = window.localStorage.getItem('Trello-app-items');
}

$(() => {

  const cardData = [];
  const tableIndex = [];
  let tableIndexNum;

 
  function drawTableToDom(e) {

    // console.log('event',e);
    const ListName = $('#listNameEntry').val();
    tableIndex.push({ tableNmae: ListName })
    tableIndexNum = tableIndex.length - 1;

    // below steps is for saving Trello-app info into the local storage (Trello-app-column)
    const JSONstring = JSON.stringify(tableIndex);
    window.localStorage.setItem('Trello-app-column', JSONstring);
    


    const list = $(`<div class="col-sm-6 table droppable" data-column=${tableIndexNum}>
          <div class='dropZone'>
              <div class="card" style="width: 18rem;">
                  <div class="card-header">
                  ${ListName}
                  </div class='ulOutside'>
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

    //doesnt make an empty list if the the list doesn't have a name
    if(ListName === ''){
      alert('Please enter list name before continue');
      list.children().remove();
    }

    $('.row').append(list)
    //make list entry empty
    $('input').val('');

  }

  $('#button-addon').on('click', drawTableToDom);

  //Naming board
  const boardName = prompt('Add board Title');
  $('.board-name').append(boardName);

  function moveItemToList(e) {
    // console.log(e);
    // console.log(e.target.dataset.column);

    event.preventDefault();
    const dataEntry = $(`#dataEntry${e.target.dataset.column}`).val();
    cardData.push({ title: dataEntry, status: parseInt(e.target.dataset.column)});

    //store data into local storage (Trello-app-item)
    const JSONstring = JSON.stringify(cardData);
    window.localStorage.setItem('Trello-app-items', JSONstring);

    const dataIndexNum = cardData.length - 1;
    $('input').val('');
    // console.log(dataIndexNum);
    console.log(cardData);

    const dataEntryList = $(`<div class='ui-widget-content draggable' data-index=${dataIndexNum}><li class="list-group-item">${dataEntry}</li></div>`);
    $(`#list${e.target.dataset.column}`).append(dataEntryList);

    $('.draggable').draggable();
    $('.draggable').draggable({ revert: true });


    $('.droppable').droppable({
      drop: (event, ui) => {
        // console.log(event);
        // console.log(ui);

        // console.log('column target', event.target.dataset.column);

        //get the data of the dragged item
        let dragItemContent = $(ui.draggable[0].dataset);

        // Since HTMLElement.dataset returns a DOM string map, 
        // the only way I found is to convert it into an native object by using below code
        // dragItemContent = JSON.parse(JSON.stringify(dragItemContent));

        //get index number of dragged item
        const indexNum = dragItemContent[0].index;
        cardData[indexNum].status = parseInt(event.target.dataset.column);
        console.log(cardData);

        //Prepend dragged item in to the droppable list
        $(`#list${event.target.dataset.column}`).prepend(ui.draggable);


      }
    });
  }

  $(document).on("click", '.addItem', moveItemToList);

})