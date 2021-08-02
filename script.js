function appendImg(keyword, index){
    const imgE = document.createElement('img');
    imgE.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryE = document.querySelector('.gallery');
    
    galleryE.appendChild(imgE);

}

function removeImg(){
    const galleryE = document.querySelector('.gallery');
    galleryE.innerHTML = '';
}


function search(event){
    const word = event.target.value;
    if(event.key == 'Enter' && word){
        removeImg();
            for(let i=1; i<= 9;i++){
        appendImg(word,i);
    }
    }
}


function run(){


    const inputE = document.querySelector('#word');
    inputE.addEventListener('keydown',search);
}

run()