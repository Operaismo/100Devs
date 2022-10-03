document.getElementById('zacian').onclick = switchZacian
document.getElementById('groudon').onclick = switchGroudon
document.getElementById('kyogre').onclick = switchKyogre
document.getElementById('charizard').onclick = switchCharizard
document.getElementById('lunala').onclick = switchLunala
document.getElementById('whimsicott').onclick = switchWhimsicott

function switchZacian() {
  document.querySelector('body').style.backgroundColor = 'rgba(63, 180, 247)'
  document.querySelector('body').style.color = 'white'
  document.getElementById("zacian-img").hidden = false;
  document.getElementById("groudon-img").hidden = true;
  document.getElementById("kyogre-img").hidden = true;
  document.getElementById("charizard-img").hidden = true;
  document.getElementById("lunala-img").hidden = true;
  document.getElementById("whimsicott-img").hidden = true;
}

function switchGroudon() {
  document.querySelector('body').style.backgroundColor = 'rgba(253, 34, 0)'
  document.querySelector('body').style.color = 'white'
  document.getElementById("zacian-img").hidden = true;
  document.getElementById("groudon-img").hidden = false;
  document.getElementById("kyogre-img").hidden = true;
  document.getElementById("charizard-img").hidden = true;
  document.getElementById("lunala-img").hidden = true;
  document.getElementById("whimsicott-img").hidden = true;
}

function switchKyogre() {
  document.querySelector('body').style.backgroundColor = 'rgba(10, 46, 255)'
  document.querySelector('body').style.color = 'white'
  document.getElementById("zacian-img").hidden = true;
  document.getElementById("groudon-img").hidden = true;
  document.getElementById("kyogre-img").hidden = false;
  document.getElementById("charizard-img").hidden = true;
  document.getElementById("lunala-img").hidden = true;
  document.getElementById("whimsicott-img").hidden = true;
}

function switchCharizard() {
  document.querySelector('body').style.backgroundColor = 'rgba(255, 151, 25)'
  document.querySelector('body').style.color = 'white'
  document.getElementById("zacian-img").hidden = true;
  document.getElementById("groudon-img").hidden = true;
  document.getElementById("kyogre-img").hidden = true;
  document.getElementById("charizard-img").hidden = false;
  document.getElementById("lunala-img").hidden = true;
  document.getElementById("whimsicott-img").hidden = true;
}

function switchLunala() {
  document.querySelector('body').style.backgroundColor = 'rgba(113, 36, 207)'
  document.querySelector('body').style.color = 'white'
  document.getElementById("zacian-img").hidden = true;
  document.getElementById("groudon-img").hidden = true;
  document.getElementById("kyogre-img").hidden = true;
  document.getElementById("charizard-img").hidden = true;
  document.getElementById("lunala-img").hidden = false;
  document.getElementById("whimsicott-img").hidden = true;
}

function switchWhimsicott() {
  document.querySelector('body').style.backgroundColor = 'rgba(31, 213, 74)'
  document.querySelector('body').style.color = 'white'
  document.getElementById("zacian-img").hidden = true;
  document.getElementById("groudon-img").hidden = true;
  document.getElementById("kyogre-img").hidden = true;
  document.getElementById("charizard-img").hidden = true;
  document.getElementById("lunala-img").hidden = true;
  document.getElementById("whimsicott-img").hidden = false;
}
