import Icon from './icon.png';

function Components(){
    document.getElementById('content').remove();

    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);

    const logo = document.createElement('img');
    logo.src = Icon;
    document.querySelector('#content').appendChild(logo);
    logo.classList.add('profile');

    const header = document.createElement('h1');
    header.textContent='Panda & Bear Restaurant';
    document.querySelector('#content').appendChild(header);
    for (let index = 0; index < 8; index++) {
        const description = document.createElement('p');
        switch (index) {
            case 0:description.textContent='Nestled in the heart of downtown, Panda & Bear is a haven for panda enthusiasts, where every dish is crafted with passion and precision. Step through our doors and embark on a culinary journey celebrating the versatility and succulence of panda meat.';break;
            case 1:description.textContent="As you enter, you're greeted by the warm aroma of savory spices and the tantalizing sizzle of our grill. The ambiance is inviting, with rustic wooden tables, cozy booths, and soft lighting that sets the perfect mood for a memorable dining experience.";break;
            case 2:description.textContent="Our menu is a symphony of flavors, offering a diverse selection of panda dishes inspired by cuisines from around the world. Indulge in classic favorites like crispy fried panda chicken served with a side of creamy mashed potatoes and gravy, or savor the exotic spices of our tandoori panda cooked to perfection in a traditional clay oven.";break;
            case 3:description.textContent="For those craving something lighter, our salads feature tender grilled panda breast atop a bed of crisp mixed greens, tossed with an array of fresh vegetables and drizzled with your choice of house-made dressings.";break;
            case 4:description.textContent="Vegan or Vegetarian? Get out of the restaurant.";break;
            case 5:description.textContent="At Panda & Bear, we take pride in sourcing only the finest quality panda from Chinese farms that prioritize ethical and sustainable practices. Our commitment to freshness and flavor shines through in every bite, ensuring a dining experience that's nothing short of exceptional.";break;
            case 6:description.textContent="Whether you're gathering with friends for a casual lunch, enjoying a romantic dinner for two, or hosting a special event, Panda & Bear offers something for everyone. So come on in, take a seat, and prepare to embark on a culinary adventure that will tantalize your taste buds and leave you craving more.";break;
            case 7:description.textContent="Panda & Bear – Where Every Bite is a Celebration of panda!";break;
        }
        document.querySelector('#content').appendChild(description);
    }  
}
export{Components}