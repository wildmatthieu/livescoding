const actionElementButton = document.getElementById('actionID');

actionElementButton.addEventListener("click", (e) => {
    
    // recupere toutes les img dans ma page HTML
    const imagesNodeList = document.querySelectorAll('img');

    let imagesArray = Array.from(imagesNodeList);

    const blocSaumon = document.getElementById('bloc2');

    console.log('Tableau des images avant de filtrer');
    console.log(imagesArray);

    // filtrer et ne garder que les chiens
    imagesArray = imagesArray.filter((imageElement)=>{
        return imageElement.classList.contains('chien') === true;
    });

    console.log('Tableau des images après filtrage');
    console.log(imagesArray);

    // injecter dans le bloc rose saumon les images de chiens ainsi extraites
    imagesArray.forEach((imageElement)=>{
        blocSaumon.appendChild(imageElement);
    });

});