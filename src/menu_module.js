
function MakeImage(){
    document.getElementById('content').remove();
    //imports menu images
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
    const images = importAll(require.context('./menu_images', false, /\.(png|jpe?g|svg)$/));
      
    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);

    //displays images and titles
    for (let index = 0; index < 5; index++) {
        const menuItem = new Image();
        const itemHeader = document.createElement('h2');
        switch (index) {
            case 0:menuItem.src=images['bamboo_sushi.jpg']; itemHeader.textContent='Bamboo Sushi';break;
            case 1:menuItem.src=images['panda_nuggets.jpg'];itemHeader.textContent='Panda Nuggets';break;
            case 2:menuItem.src=images['panda_pasta.jpg'];itemHeader.textContent='Panda Pasta';break;
            case 3:menuItem.src=images['panda_pizza.jpg'];itemHeader.textContent='Panda Pizza';break;
            case 4:menuItem.src=images['panda-stew.jpg'];itemHeader.textContent='Panda Stew';break;
        }
        menuItem.classList.add('menu-item');
        document.getElementById('content').appendChild(itemHeader);
        document.getElementById('content').appendChild(menuItem);
    }   
}
export{MakeImage}