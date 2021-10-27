console.log('Welcome to our  notes');

shownotes();

let addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    addtxt.value = "";
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card mx-2 my-2" style="display=in-line; width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <hr>
          <p class="card-text">${element}</p>
          <button type="button" onclick="Deletenote(this.id)" class="btn btn-primary" id="${index}">DELETE NOTE</button>
        </div>
      </div>
            `
    });
    let noteshtml = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteshtml.innerHTML = html;
    }
    else {
        noteshtml.innerHTML = '<h3 style="color:blue;">You have No notes right now.Click on the text area above to add a note.</h3>';
    }
}
function Deletenote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    let notecards = document.querySelectorAll("div.card.mx-2.mx-2");
    Array.from(notecards).forEach(function (element) {
        let newelem = element.getElementsByTagName("p")[0].innerText;
        console.log(newelem);
        if (newelem.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})