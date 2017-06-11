//= require "vendors/polyfill"

// API functions
function docLink() {
  let docLinks = document.querySelectorAll('#api nav li a');
  let apiLinks = document.querySelectorAll('#api pre span[id]');

  docLinks.forEach( link => {
    link.addEventListener('mouseover', e => {
      let targetElement = document.querySelector(e.target.hash.replace('documentation', 'api'));
      targetElement.style.background = 'yellow'
      targetElement.style.color = 'black'

    })
    link.addEventListener('mouseleave', e => {
      let targetElement = document.querySelector(e.target.hash.replace('documentation', 'api'));
      targetElement.style.background = 'inherit'
      targetElement.style.color = 'inherit'
    })
  });
}

function scrollMenu() {

  var options = {

    threshold: [0,1],
    rootMargin: '0px'
  };

  var callback = function(entries, observer) {
    const display = entries[0].intersectionRatio;

    if ( display === 0 ){
      document.querySelector('#nav').classList.add('pos-fixed')
    }
    else{
      document.querySelector('#nav').classList.remove('pos-fixed')
    }
  };
  var observer = new IntersectionObserver(callback, options);
  var target = document.querySelector("#intro > p:nth-child(1)");

  observer.observe(target);
}



document.addEventListener('DOMContentLoaded', function(){

 docLink();
 scrollMenu();

  // Init populus.js
  var populus = new Populus();

  populus.init({
    target: 'data-populus-a',
    features: {
      wrapper: true,
      placeholder: 'Habemvs Popvlvs',
      autofocus: false,
      autocomplete: true,
      autocorrect: true,
      autocapitalize: true,
      spellcheck: true,
      required: true,
      updateValue: true,
      a11y: {
        label: 'search',
        outline: ['2px', 'solid', 'blue']
      }
    },
    buttons: {
      search: {
        label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 40"><path fill-rule="evenodd" d="M24.462 27.258a15.135 15.135 0 0 1-9.26 3.145C6.806 30.403 0 23.597 0 15.203 0 6.805 6.806 0 15.202 0c8.395 0 15.2 6.806 15.2 15.202 0 4.002-1.546 7.643-4.074 10.357l1.31 1.31a2 2 0 0 1 2.82.022l7.528 7.53c.785.783.784 2.056.01 2.83l-1.757 1.757a2 2 0 0 1-2.832-.01l-7.53-7.53a2.007 2.007 0 0 1-.022-2.818l-1.394-1.394zm-9.26.612c6.996 0 12.668-5.672 12.668-12.668 0-6.997-5.672-12.668-12.668-12.668-6.997 0-12.668 5.67-12.668 12.668 0 6.996 5.67 12.668 12.668 12.668z"/></svg>',
        onClick: 'this.parentNode.childNodes[0].focus()'
      },
      cancel: {
        label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill-rule="evenodd" d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z"/></svg>',
        onClick: 'this.parentNode.childNodes[0].value=""'
      }
    },
  });
});
