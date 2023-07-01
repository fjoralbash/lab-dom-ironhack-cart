// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  let priceXquantity = price * quantity;

  let subTotal = product.querySelector(".subtotal span");

  let subTotalValue = subTotal.innerHTML = priceXquantity;
  
  return subTotalValue;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++)
 
  {
  updateSubtotal(products[i]);
  }
 
  // ITERATION 3
  for (let i = 0; i < products.length; i++)
  {
    totalPrice += updateSubtotal(products[i]);
  }
  document.querySelector("#total-value span").innerHTML = totalPrice;

}
  // ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //console.log(node);
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row);

  calculateAll();
}

// ITERATION 5}

  function createProduct(event) {
    const createRow = document.querySelector('.create-product');
    let newProductNameInput = createRow.querySelector('input');
    let newProductNameValue = newProductNameInput.value;
    let newProductPriceInput = createRow.querySelector("input[type='number']");
    let newProductPriceValue = Number(newProductPriceInput.valueAsNumber).toFixed(2);
  
    const newTableRow = document.createElement('tr');
    newTableRow.className = 'product';
    newTableRow.innerHTML = `
      <td class="name">
        <span>${newProductNameValue}</span>
      </td>
      <td class="price">$<span>${newProductPriceValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</>
      </td>
    `;
  
    const parent = document.querySelector('#cart tbody');
  
    parent.appendChild(newTableRow);
  
    const removeBtn = newTableRow.querySelector('.btn-remove');
    removeBtn.addEventListener('click', removeProduct);
  
    newProductNameInput.value = '';
    newProductPriceInput.value = 0;
  }
  
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    const removeBtns = document.querySelectorAll('.btn-remove');
    for (let removeBtn of removeBtns) {
      removeBtn.addEventListener('click', removeProduct);
    }
  
    const createBtn = document.getElementById('create');
    if (createBtn) {
      createBtn.addEventListener('click', createProduct);
    }
  });
