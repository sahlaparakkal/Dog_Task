let dog;
let breedimg;
let x = document.getElementById('list');
let image = document.getElementById('hello');

let url = "https://dog.ceo/api/breeds/list/all";
fetch(url)
.then(response => response.json())
.then(data => {
    dog = data;
    for (const [key, value] of Object.entries(dog.message)) {
        var button = document.createElement("button");
        button.innerText = key;
        x.appendChild(button);
        button.onclick = function(){showImage(key)};
    
    }

    function showImage(breed){
    breedimg = 'https://dog.ceo/api/breed/' + breed + '/images';
    fetch(breedimg)
    .then(response => response.json())
    .then(data => {image.src = data.message[0]});
    }

    

});

   

