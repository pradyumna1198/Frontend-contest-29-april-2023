
  async function getMenu() {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const data = await response.json();
    const menuContainer = document.getElementById('menu');
    data.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.innerHTML = `${item.name} - ${item.price}`;
      menuContainer.appendChild(menuItem);
    });
  }
  

  function takeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const order = {
          burgers: [
            { name: 'Cheeseburger', price: 10 },
            { name: 'Veggie Burger', price: 8 },
            { name: 'Burger', price: 12 }
          ]
        };
        resolve(order);
      }, 2500);
    });
  }
  
 
  function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const status = { order_status: true, paid: false };
        resolve(status);
      }, 1500);
    });
  }
  
 
  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const status = { order_status: true, paid: true };
        resolve(status);
      }, 1000);
    });
  }
  

  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }

  async function load() {
    await getMenu();
    const order = await takeOrder();
    const status = await orderPrep();
    if (status.order_status && !status.paid) {
      const payment = await payOrder();
      if (payment.order_status && payment.paid) {
        thankyouFnc();
      }
    }
  }
  

  load();

