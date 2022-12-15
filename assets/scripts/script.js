window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }



var video = document.getElementById('homealone');
var wrapper = document.getElementById('wrapper');
var image = document.getElementById('imghomealone');
video.addEventListener('ended', function() {
    video.style.display = 'none';
    image.style.display = 'inline';
}, false);

function copyGmail(){
  var text = "adrian8329@gmail.com";
  navigator.clipboard.writeText(text);
  alert("E-mail address copied to clipboard!");
}

function insertMovie(val){
document.querySelector('#mymovies').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${val}
                </span>
                <button class="delete">
                X
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
      }


     /*  https://github.com/niklasvh/html2canvas */

      function capture () {
        window.scrollTo(0, document.body.scrollHeight);
        html2canvas(document.body).then((canvas) => {
          let a = document.createElement("a");
          a.download = "ss.png";
          a.href = canvas.toDataURL("image/png");
          a.click(); // MAY NOT ALWAYS WORK!
        });
      }