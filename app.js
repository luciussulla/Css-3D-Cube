let x = 0; 

const rotate = ()=> {
  const cubes = Array.from(document.querySelectorAll('.cube'))
  cubes.forEach((cube)=> cube.style.transform = `rotateY(${x}deg)`)
}

document.querySelector('.left-arrow').addEventListener('click', ()=> {
  console.log('clicked');
  x-=90
  rotate()
})

document.querySelector('.right-arrow').addEventListener('click', ()=> {
  console.log('clicked')
  x+=90
  rotate()
})

document.querySelector('.left-arrow').addEventListener('mouseover', ()=> {
  x-=25; 
  rotate()
})

document.querySelector('.left-arrow').addEventListener('mouseout', ()=> {
  x+=25; 
  rotate()
})

document.querySelector('.right-arrow').addEventListener('mouseover', ()=> {
  x+=25; 
  rotate()
})

document.querySelector('.right-arrow').addEventListener('mouseout', ()=> {
  x-=25; 
  rotate()
})
