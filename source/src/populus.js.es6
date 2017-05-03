
/**
 * Popvlvs 0.1
 * javascript toolbelt to populate search inputs
 *
 *
 * target = target [String] data-attribute used
 *
 * features.wrapper = [String] Class name of the wrapper
 *
 * features.placeholder = [String] Content of the placeholder
 *
 * features.autofocus = [boolean] should it be autofocused
 *
 * features.autocomplete = [boolean]  should it autocomplete
 *
 * features.autocorrect = [boolean]  should it autocorrect
 *
 * features.autocapitalize = [boolean]  should it autocapitalize
 *
 * features.spellcheck = [boolean]  should it do spellcheck
 *
 * features.required = [boolean]  should it be required
 *
 * features.updateValue = [boolean] Should the value attribute auto update
 *
 * features.a11y.label = [String] name / title / arial-label
 *
 * features.a11y.outline = [String] define the type of outline you want on over
 *
 * buttons.search.label = [String] label of the search button
 *
 * buttons.search.click = [String] Javascript action on click
 *
 * buttons.cancel.label = [String] label of the cancel button
 *
 * buttons.cancel.click = [String] Javascript action on click
 *
 */
class Populus {
  constructor(args) {
    this.args = args
  }

  init(args)  {
    const target = document.querySelectorAll(`[${args.target}]`);
    const features = args.features;
    const buttons = args.buttons;
    const wrapper = args.wrapper;
    const algoliaIs = args.algolia;

    target.forEach( (popInput, index) => {

      // Identify the inputs
      popInput.id = args.target+ '-' + index;
      popInput.classList.add('populus--input');

      // If wrapper = true
      // Wrap the input in a div
      if (features.wrapper) {
        let inputWrapper = document.createElement('div');
        inputWrapper.classList.add('populus--wrapper');
        inputWrapper.innerHTML = popInput.outerHTML;
        popInput.parentNode.appendChild(inputWrapper);
        popInput.remove()
      }

      // In case the input got a wrapper,
      // We create a new popInputTarget
      let popInputTarget = document.querySelector('#'+ args.target +'-'+index);

      // If placeholder needed
      // Wrap the input in a div
      if (features.placeholder) {
        popInputTarget.setAttribute('placeholder', features.placeholder)
      }

      // If autofocus
      if (features.autofocus) {
        popInputTarget.focus()
      }

      // If autocomplete
      if (features.autocomplete) {
        popInputTarget.setAttribute('autocomplete', 'true')
      }

      // If autocorrect
      if (features.autocorrect) {
        popInputTarget.setAttribute('autocorrect', 'true')
      }

      // If autocapitalize
      if (features.autocapitalize) {
        popInputTarget.setAttribute('autocapitalize', 'true')
      }

      // If spellcheck
      if (features.spellcheck) {
        popInputTarget.setAttribute('spellcheck', 'true')
      }

      // If required
      if (features.required) {
        popInputTarget.setAttribute('required', 'required')
      }

      // If Update Value
      if (features.updateValue) {
        popInputTarget.addEventListener('input', e => {
          popInputTarget.setAttribute('value', e.target.value)
        })
      }

      // If accessibility = true
      // Add Accessibility features
      if (features.a11y) {
        let a11yAttributes = ['name', 'title', 'aria-label'];

        a11yAttributes.forEach(attribute => {
          popInputTarget.setAttribute(attribute, features.a11y.label)
        });
      }

      // Outline needed

      // Define if it's a search input
      // If yes, keep the default browser behavior
      // for the outline-offset value
      function setOffset() {
        return popInputTarget.getAttribute('type') === 'search' ? '-2px' : '0';
      }

      if (features.a11y.outline) {

        let outlineWidth  = features.a11y.outline[0] || '2px';
        let outlineType   = features.a11y.outline[1] || 'dotted';
        let outlineColor  = features.a11y.outline[2] || 'blue';
        let outlineOffset = features.a11y.outline[3] || setOffset();

        popInputTarget.addEventListener('mouseover', e => {
          popInputTarget.style.outline = `${outlineWidth} ${outlineType} ${outlineColor}`
          popInputTarget.style.outlineOffset = `${outlineOffset}`
        });
        popInputTarget.addEventListener('focus', e => {
          popInputTarget.style.outline = `${outlineWidth} ${outlineType} ${outlineColor}`
          popInputTarget.style.outlineOffset = `${outlineOffset}`
        });
        popInputTarget.addEventListener('mouseleave', e => {
          popInputTarget.style.outline = 'none'
        });
        popInputTarget.addEventListener('blur', e => {
          popInputTarget.style.outline = 'none'
        });
      }


      // Buttons
      if (buttons) {
        if ( buttons.search) {
          let searchButton = document.createElement('button');
          searchButton.classList.add('populus--button','populus--button-search');
          searchButton.innerHTML = buttons.search.label
          popInputTarget.parentNode.appendChild(searchButton)

          searchButton.setAttribute('onClick',  buttons.search.onClick);
        }

        if ( buttons.cancel) {
          let cancelButton = document.createElement('button');
          cancelButton.classList.add('populus--button','populus--button-cancel');
          cancelButton.innerHTML = buttons.cancel.label
          popInputTarget.parentNode.appendChild(cancelButton)

          cancelButton.setAttribute('onClick',  buttons.cancel.onClick);
        }
      }

      // Algolia Feature
      // For V2
      // if (algoliaIs) {
      //   const alIsAppId = algoliaIs.appId;
      //   const alIsApiKey = algoliaIs.apiKey;
      //   const alIsIndexName = algoliaIs.indexName;

      //   let AlgoliaSearch = instantsearch({
      //     appId: alIsAppId,
      //     apiKey: alIsApiKey,
      //     indexName: alIsIndexName,
      //     urlSync: true
      //   });
      // }
    });

  }
}
