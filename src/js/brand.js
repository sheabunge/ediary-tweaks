// Get brand element
var brand = document.querySelector( '.brand' );

// Append sub-brand to end of brand
brand.textContent += ' ' + document.querySelector( '.brand-small' ).textContent;

// Prepend cogs icon
brand.innerHTML = '<i class="fa fa-cogs"></i> ' + brand.innerHTML;
