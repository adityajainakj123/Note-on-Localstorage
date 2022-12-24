let addbtn = document.getElementById('addbtn');
shownotes();
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
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
  
    notesObj.forEach(function(element,index) {
      
       html += '<div class=" notecard card my-3 mx-3" style="width: 18rem;">' ;
       html +=        ' <div class="card-body">' ;
       html +=   '<h5 class="card-title">  Note '
       html += index+1 ;
       html += '</h5>' ;
       html +=   '<p class="card-text">'
       html += element ;
       html +='</p>' ;
       html +=        '<button href="#" id ="' ;
       html += index ;
       html += '" class="btn btn-sm btn-primary" onclick ="deletenode(this.id)">Delete Note</button>' ;
       html +=       '</div></div>';
    });
    let noteselm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
        // shownotes();
    } else {
        noteselm.innerHTML = '<p><b>N</b>othing <b>E</b>ntered <b>B</b>efore</p> ';
    }

}

function deletenode(id){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
  
    notesObj.splice(id , 1 ) ;
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}

let search = document.getElementById('searchtxt') ;

search.addEventListener("input" , function(){
    let inputval = search.value ;
    let notecard = document.getElementsByClassName("notecard") ;
    Array.from(notecard).forEach(function(element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;

        if(cardtxt.includes(inputval)){
            element.style.display ="block" ;
        }else {
            element.style.display ="none" ;

        }
    })
}) ;