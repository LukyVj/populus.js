// API functions
function docLink() {
    let docLinks = document.querySelectorAll('#api nav li a');
    let apiLinks = document.querySelectorAll('#api pre span[id]');

    docLinks.forEach( link => {
      link.addEventListener('mouseover', e => {
        let targetElement = document.querySelector(e.target.hash);
        targetElement.style.background = 'yellow'
        targetElement.style.color = 'black'

      })
      link.addEventListener('mouseleave', e => {
        let targetElement = document.querySelector(e.target.hash);
        targetElement.style.background = 'inherit'
        targetElement.style.color = 'inherit'
      })

      link.addEventListener('click', e => {
        if ( document.querySelector('#documentation').getAttribute('class') !== 'visible' ) {
          link.classList.toggle('active')
          document.querySelector('#documentation').classList.toggle('visible');
          let targetDoc = e.target.hash.replace('api', 'documentation');
          console.log(targetDoc)
          document.getElementById(targetDoc).classList.toggle('visible')
        }
      });
    })


    // apiLinks.forEach( link => {
    //   link.addEventListener('mouseover', e => {
    //     let targetLink = document.querySelector(`a[href="#${e.target.id}"]`);
    //     targetLink.style.background = 'yellow'
    //     targetLink.style.color = 'black'
    //   });
    //   link.addEventListener('mouseleave', e => {
    //     let targetLink = document.querySelector(`a[href="#${e.target.id}"]`);
    //     targetLink.style.background = 'inherit'
    //     targetLink.style.color = 'inherit'
    //   });
    // })
  }

function closeDocumentations() {
  document.querySelectorAll('#documentation article').forEach(article => {
    article.classList.remove('visible')
  })
  document.querySelectorAll('#api nav li a').forEach( link => {
    link.classList.remove('active')
  })
}
function initDocumentation() {
  const doc = document.querySelector('#documentation');
  const codeBlock = document.querySelector('#api pre');
  let ol = codeBlock.offsetLeft;
  let ot = codeBlock.offsetTop;

  doc.style.width = codeBlock.offsetWidth + 'px';
  doc.style.height = codeBlock.offsetHeight + 'px';
  doc.style.top = ot + 'px';
  doc.style.left = ol + 'px';

}

document.addEventListener('DOMContentLoaded', function(){

 docLink();
 initDocumentation();

  // Init populus.js
  var populus = new Populus();

  populus.init({
    target: 'data-populus-a',
    features: {
      wrapper: true,
      placeholder: 'Abemvs Popvlvs',
      autofocus: true,
      a11y: {
        label: 'search',
        outline: ['2px', 'solid', 'blue']
      }
    },
    buttons: {
      search: {
        label: 'search',
        active: 'click'
      },
      cancel: {
        label: 'x',
        active: 'click'
      }
    }
  });


});

window.addEventListener('resize', e =>  initDocumentation() )


