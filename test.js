Ecwid.OnPageLoaded.add(function (page) {
        // Apply changes only to category pages
        if (page.type == 'CATEGORY') {

          // Remove any previously added elements when new page changes 
          // If you change class name here, make sure to update it below too
          var removingButtons = document.getElementsByClassName('custom_app_button');
          for (i = removingButtons.length - 1; i >= 0; i--) {
            removingButtons[i].parentNode.removeChild(removingButtons[i]);
          }

          // Loop to add new element to each product in product listing
          for (i = 0; i < document.querySelectorAll('.grid-product').length; i++) {
            var elem = document.querySelector('.grid-product:nth-child(' + (i + 1) + ') .grid-product__wrap-inner');

            // Create our custom element
            var container = document.createElement("div");

            // Set custom class to locate our new element
            // If you change class name here, make sure to update it above too
            container.setAttribute('class', 'custom_app_button'); 

            // Change vertical order position of new element using 'order' value. Bigger = lower; smaller = higher
            container.setAttribute('style', 'order: 6; padding:0;');

            // Set the content of our new element
            container.innerHTML = '<div><div class="label label--flag label--success"><div class="label__text">Sale 2018</div></div></div>';

            // (OPTIONAL) Show alert when user clicks on new container
            container.addEventListener("click", function (event) {
              event.stopImmediatePropagation();
              alert('SALE MESSAGE');
            });

            // Add new element to products
            elem.appendChild(container);
          }
        }
});
