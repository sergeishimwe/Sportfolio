// var selectedRow = null;
// function onFormSubmit(e){
//     event.preventDefault();
//     var formData = readFormData();
//     if(selectedRow === null){
//         insertNewRecord(formData);
//     }
//     else{
//         updateRecord(formData);
//     }
//     resetForm();
// }

// //Retrieve the data
// function readFormData(){
//     var formData = {};
//     formData["SN"] = document.getElementById("SN").value;
//     formData["Title"] = document.getElementById("Title").value;
//     formData["Author"] = document.getElementById("Author").value;
//     return formData;
// }

// //Insert the data
// function insertNewRecord(data){
//     var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insertCell(0);
//         cell1.innerHTML = data.SN;
//     var cell2 = newRow.insertCell(1);
//         cell2.innerHTML = data.Title;
//     var cell3 = newRow.insertCell(2);
//         cell3.innerHTML = data.Author;
//     var cell4 = newRow.insertCell(3);
//         cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
// }

// //Edit the data
// function onEdit(td){
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById('SN').value = selectedRow.cells[0].innerHTML;
//     document.getElementById('Title').value = selectedRow.cells[1].innerHTML;
//     document.getElementById('Author').value = selectedRow.cells[2].innerHTML;
// }

// function updateRecord(formData){
//     selectedRow.cells[0].innerHTML = formData.SN;
//     selectedRow.cells[1].innerHTML = formData.Title;
//     selectedRow.cells[2].innerHTML = formData.Author;
// }

// //Delete the data
// function onDelete(td){
//     if(confirm('Do you want to delete this record?')){
//         row = td.parentElement.parentElement;
//         document.getElementById('storelist').deleteRow(row.rowIndex);
//     }
//     resetForm();
// }

// //Reset the data
// function resetForm(){
//     document.getElementById('SN').value = '';
//     document.getElementById('Title').value = '';
//     document.getElementById('Author').value = '';
// }