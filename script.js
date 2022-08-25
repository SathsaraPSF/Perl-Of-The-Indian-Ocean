
console.log("hi");

var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n){
    showSlides(slideIndex =n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){slideIndex =  1 }
    if(n < 1){slideIndex = slides.length}
    for(i =0; i<slides.length; i++){
        slides[i].style.display="none";
}

for (i =0;i<dots.length;i++){
    dots[i].className =dots[i].className.replace("active","")
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += "active";
}






new Vue({
    el:'#app',


    data:{
        isEditing:false,
        selectedIndex: null,
        todo:'',
        todos:[],
    },
    methods:{

        storeTodo(){
            this.todos.push(this.todo)
            
            this.todo=''
        },

        editTodo(index,todo){
            this.todo=todo
            this.selectedindex = index
            this.isEditing=true
        },

        updateTodo(){
        this.todos.splice(this.selectedIndex,1, this.todo)
        this.isEditing = false

        },
        deleteTodo(index){
            this.todos.splice(index,1)
        }

    }

})

