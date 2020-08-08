import './index.css';

import Row from './Row';

// eslint-disable-next-line no-new
new Row('Iphone', 60000, true);
// eslint-disable-next-line no-new
new Row('Samsung', 70000, true);
// eslint-disable-next-line no-new
new Row('Huawei', 50000, true);

const addButton = document.querySelector('.add_button');
addButton.addEventListener('click', () => {
  const row = new Row('', '');
  row.openModal();
});
