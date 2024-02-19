function AboutPage(){
    const buttons=Array.from(document.querySelectorAll('button'));
    buttons.map((x)=>x.style.backgroundColor = '#dc2626');
    document.body.style.background = 'url(./14e917d67af3ebbaec1d.jpg)';
    document.getElementById('content').remove();

    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);
    document.getElementById('content').style.backgroundColor = '#f87171';
    document.querySelector('nav').style.backgroundColor = '#f87171';

    const header = document.createElement('h1');
    header.textContent = 'Contacts';

    const paras = [document.createElement('p'), document.createElement('p'), document.createElement('p')];
    paras[0].textContent='Panda & Bear phone: (555) 123-4567';
    paras[1].textContent='Panda & Bear email: panda&bearhelp@panda.com';
    paras[2].textContent='Panda & Bear address: In your mom'

    content.appendChild(header);
    paras.map((x)=>content.appendChild(x));
}
export{AboutPage}