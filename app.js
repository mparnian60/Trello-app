let tableEntry = [];
let items = [];
let tableIndex = [];
let tableIndexNum;
let columns;
let ListName;

//Naming board
const boardName = prompt('Add board Title');
$('.board-name').append(boardName);

//load saved Trello-app into browser
function loadTrelloApp() {

  columns = window.localStorage.getItem('Trello-app-column');
  items = window.localStorage.getItem('Trello-app-items');

  columns = JSON.parse(columns);
  items = JSON.parse(items);

  //if columns has something init or the array length is not zero
  if (columns && columns.length) {
    loadTableNameToDom(columns);
  }

  console.log('columns', columns)
  console.log('item', items);

}

function loadTableNameToDom(columns) {

  columns.forEach((element, index) => {
    const ListName = element.tableName;
    console.log(ListName);

    createList(ListName, index);

    //if items is defined (not null or undefined) and in item.length  we say if it's an array it shuld not be 0
    if (items && items.length) {

      // return items which matches example index=0 in same array
      const filterCardData = items.filter((element) => {
        if (element.title && element.status === index) {
          return true;
        }
      })
      console.log('filterCardData', filterCardData);

      filterCardData.forEach((element, itemIndex) => {
        const dataEntryList = $(`<div class='ui-widget-content draggable' data-index=${itemIndex}><li class="list-group-item">${element.title}</li></div>`);
        $(`#list${index}`).append(dataEntryList);
      })
    }

  });

  dragAndDrop()

}

function createList(ListName, tableIndexNum) {

  const list = $(`<div class="col-sm table droppable" data-column=${tableIndexNum}>
          <div class='dropZone'>
              <div class="card">
                  <div class="card-header" style="width: 18rem">
                  ${ListName}
                  </div class='ulOutside'>
                  <ul  id ='list${tableIndexNum}' class="list-group list-group-flush">
                  
                  </ul>
              </div>
              <div class="input-group">
                  <input type="text" id='dataEntry${tableIndexNum}' class="form-control" placeholder="Add a card" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <div class="input-group-append">
                  <button class="btn btn-outline-success addItem" type="button" data-column=${tableIndexNum}>Add</button>
                  </div>
              </div>
          </div>
      </div>
    `);

  //doesnt make an empty list if the the list doesn't have a name
  if (!ListName) { // this if means if listName doesnt have any value
    alert('Please enter list name before continue');
    list.children().remove();
  }

  $('.row').append(list)
  $('#listNameEntry').val('');

}

function dragAndDrop(){
  $('.draggable').draggable();
  $('.draggable').draggable({ revert: true });


  $('.droppable').droppable({
    drop: (event, ui) => {
      console.log(event);
      console.log(ui);

      // console.log('column target', event.target.dataset.column);

      //get the data of the dragged item
      let dragItemContent = $(ui.draggable[0].dataset);

      // Since HTMLElement.dataset returns a DOM string map, 
      // the only way I found is to convert it into an native object by using below code
      // dragItemContent = JSON.parse(JSON.stringify(dragItemContent));

      //get index number of dragged item
      const indexNum = dragItemContent[0].index;
      
      if(items){
        items[indexNum].status = parseInt(event.target.dataset.column);
      }else{
        tableEntry[indexNum].status = parseInt(event.target.dataset.column);
      }
      
      console.log('parseint', parseInt(event.target.dataset.column));
      console.log('table entry',tableEntry);

      //Prepend dragged item in to the droppable list
      $(`#list${event.target.dataset.column}`).prepend(ui.draggable);


    }
  });
}

$(() => {

  loadTrelloApp();

  function drawTableToDom() {

    // console.log('event',e);
    ListName = $('#listNameEntry').val();
    tableIndex.push({ tableName: ListName })
    tableIndexNum = tableIndex.length - 1;

    // below steps is for saving Trello-app info into the local storage (Trello-app-column)
    const JSONstring = JSON.stringify(tableIndex);
    window.localStorage.setItem('Trello-app-column', JSONstring);

    createList(ListName, tableIndexNum);
  }

  $('#button-addon').on('click', drawTableToDom);



  function moveItemToList(e) {
    // console.log(e);
    // console.log(e.target.dataset.column);

    event.preventDefault();
    const dataEntry = $(`#dataEntry${e.target.dataset.column}`).val();
    tableEntry.push({ title: dataEntry, status: parseInt(e.target.dataset.column) });
    

    //store data into local storage (Trello-app-item)
    const JSONstring = JSON.stringify(tableEntry);
    window.localStorage.setItem('Trello-app-items', JSONstring);

    const dataIndexNum = tableEntry.length - 1;
    $('input').val('');
    // console.log(dataIndexNum);
    console.log('table entry',tableEntry);

    const dataEntryList = $(`<div class='ui-widget-content draggable' data-index=${dataIndexNum}><li class="list-group-item">${dataEntry}</li></div>`);
    $(`#list${e.target.dataset.column}`).append(dataEntryList);

    if(!dataEntry){
      alert('Please enter card name before continue');
    dataEntryList.last().remove();
    }

    dragAndDrop();

  }

  $(document).on("click", '.addItem', moveItemToList);

  

})