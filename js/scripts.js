const icecreamFlavors = ['seal', 'salmon skin', 'fermented whale', 'just blubbler... yum'];
const ul =document.querySelector("ul#flavortown");


icecreamFlavors.forEach(flavor => {
  const li = document.createElement('li');
  li.append(flavor);
  console.log(flavor);
  ul.append(li);
  
});


