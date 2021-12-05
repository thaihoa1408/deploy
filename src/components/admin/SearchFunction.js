export const searchFunction = (myInput, myTable) => {
  var input, filter, table, tr, tds, i, j, sign, txtValue;
  input = document.getElementById(myInput);
  filter = input.value.toUpperCase();
  table = document.getElementById(myTable);
  tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    tds = tr[i].getElementsByTagName('td');
    for (j = 0; j < tds.length; j++) {
      sign = false;
      txtValue = tds[j].textContent || tds[j].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
        sign = true;
        break;
      }
    }
    if (!sign) {
      tr[i].style.display = 'none';
    }
  }
};
