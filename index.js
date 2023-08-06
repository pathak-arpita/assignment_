'use strict';

const radioButtons = document.querySelectorAll('input[type="radio"]');
const blocks = document.querySelectorAll('.block-1');
const belowDiv = document.querySelector('.below'); 

document.querySelectorAll('.text-middle').forEach(textMiddleDiv => {
  textMiddleDiv.style.display = 'none';
});

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener('click', () => {
    radioButtons.forEach(rb => {
      rb.checked = false;
    });

    radioButton.checked = true;

    blocks.forEach((block, blockIndex) => {
      const innerDiv = block.querySelector('.innerdiv');
      const text_2 = block.querySelector('.text-2');
      const blockBelowDiv = block.querySelector('.below'); 
      const blockBelowDiv2 = block.querySelector('.below-2'); 
      const text = block.querySelector('.text');
      if (blockIndex === index) {
        block.style.backgroundColor = '#F4FBF9';
        block.style.border = '1px solid #007F61';
        block.style.height = '150px';
        block.style.paddingBottom = '10px';

        const textMiddleDiv = block.querySelector('.text-middle');
        if (textMiddleDiv) {
          textMiddleDiv.style.display = 'flex';
        }

        if (innerDiv) {
          innerDiv.style.marginTop = '-64px';
        }
        
        if(text){
            text.style.marginLeft = '75px';
        }
        
        if (text_2) {
          text_2.style.marginTop = '92px';
          text_2.style.marginLeft = '36px';
        }
      
        if (blockBelowDiv) {
          blockBelowDiv.style.display = 'flex'; 
        }

        if (blockBelowDiv2) {
          blockBelowDiv2.style.display = 'flex'; 
        }
      } else {
        block.style.backgroundColor = 'transparent';
        block.style.border = '1px solid #C8C8C8';
        block.style.height = '74.11px';

        const textMiddleDiv = block.querySelector('.text-middle');
        if (textMiddleDiv) {
          textMiddleDiv.style.display = 'none';
        }

        if (innerDiv) {
          innerDiv.style.marginTop = '0';
        }

        if (text_2) {
          text_2.style.marginTop = '16px';
          text_2.style.marginLeft = '135px';
        }

        if (blockBelowDiv) {
          blockBelowDiv.style.display = 'none'; 
        }
        if (blockBelowDiv2) {
          blockBelowDiv2.style.display = 'none'; 
        }
      }
    });
  });
});

function handleClick() {
  let isSelected = false;

  radioButtons.forEach(radioButton => {
    if (radioButton.checked) {
      isSelected = true;
    }
  });

  if (isSelected) {
    alert('Your Product is succesfully added in cart 🛒'); 
  } else {
    alert('Please select valid option!!'); 
  }
}