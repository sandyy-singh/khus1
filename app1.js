const btn = document.querySelector('#btn');
const back = document.getElementById('backdrop');
const addmodal = document.getElementById('add-modal');

function popup() {

    addmodal.classList.toggle('visible');
    back.classList.toggle('visible');

}

//clear onclick on backdrop 
back.addEventListener('click', clear); 

function clear() {
    addmodal.classList.remove('visible');
    back.classList.toggle('visible');
    document.getElementById('title').value = '';
    document.getElementById('url').value = '';
    document.getElementById('rating').value = '';

}

btn.addEventListener('click', popup);

const cancel = document.querySelector('.btn-passive');
const add = document.querySelector('.btn-success');

cancel.addEventListener('click', c);

add.addEventListener('click', a);

//cancel 
function c() {

    var title = document.getElementById('title').value;
    var img = document.getElementById('url').value;
    var rating = document.getElementById('rating').value;

    addmodal.classList.remove('visible');
    back.classList.remove('visible');

    document.getElementById('title').value = '';
    document.getElementById('url').value = '';
    document.getElementById('rating').value = '';


}

//to append the list in ul
function a() {

    addmodal.classList.remove('visible');
    back.classList.remove('visible');

    document.querySelector('section').style.display = 'none';
    var title = document.getElementById('title').value;
    var img = document.getElementById('url').value;
    var rating = document.getElementById('rating').value;
     

    var movie = document.querySelector('#movie-list');

    var newli = document.createElement('li');

    newli.className = 'movie-element';
   // newli.id = 'entry-text';
  //  newli.style.height = '100px';


    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var image = document.createElement('img');
    
   // div1.className='movie-element__image';
    image.src = img;
    image.style.objectFit= 'cover';
    // div1.className= 'movie-element__image';
    div1.append(image);
    div2.className='h2';
    div3.className='p'
    div2.textContent =  title;

    if (rating == '') {

        div3.textContent = '';
    } else {
        div3.textContent = 'Rating: ' + rating + '/5';

    }


    div1.style.float = 'left';

    div2.style.float = 'right';
    div2.style.margin = '20px';

    div3.style.float = 'right';



    newli.appendChild(div1);
    newli.appendChild(div2);
    newli.appendChild(div3);

    movie.append(newli);



    document.getElementById('title').value = '';
    document.getElementById('url').value = '';
    document.getElementById('rating').value = '';


    var liel = document.querySelectorAll('li');
    for (i = 0; i < liel.length; i++) {

        liel[i].addEventListener('click', del);

    }
}
//to delete the list
function del(event) {

    const delmodal = document.querySelector('#delete-modal');
    delmodal.classList.toggle('visible');
    back.classList.toggle('visible');

    const delbtn = document.querySelector('.btn-danger');

    const cancelbtn = document.querySelector('.btn--passive');

    cancelbtn.addEventListener('click', no);

    // console.log(event.target.parentNode);
    // console.log(event.target.children);

    delbtn.addEventListener('click', deleteli);
    function deleteli() {

        if (event.target.children.length == '') {

            event.target.parentNode.remove();
            delmodal.classList.remove('visible');
            back.classList.remove('visible');
            // console.log(event.target.parentNode);

        } else {
            event.target.remove();
            //console.log( event.target.parentNode);
            delmodal.classList.remove('visible');
            back.classList.remove('visible');


        }
    }

}

//cancel
function no() {
    const delmodal = document.querySelector('#delete-modal');
    delmodal.classList.remove('visible');
    back.classList.remove('visible');
}