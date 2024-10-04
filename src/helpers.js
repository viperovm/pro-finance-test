export const getSum = (data, column) => {
  let sum = 0
  data?.forEach(el => sum += el[column])
  return sum
}

export const convertJSONToCSVHandler = (jsonData, columnHeaders, russianHeaders) => {
  if (jsonData.length === 0) {
    return ''
  }
  const headers = russianHeaders.join(',') + '\n';
  const rows = jsonData
    .map((row) => {
      return columnHeaders.map((field) => row[field] || '').join(',');
    })
    .join('\n')
  const total_row = '\n' + [
    '',
    'Итого:',
    '',
    '',
    '',
    getSum(jsonData, 'available'),
    getSum(jsonData, 'goods_on_the_way'),
    getSum(jsonData, 'total_goods')
  ].join(',')
  return headers + rows + total_row
}

export const downloadCSVHandler = (jsonData, columnHeaders, russianHeaders) => {
  const csvData = convertJSONToCSVHandler(jsonData, columnHeaders, russianHeaders);

  if (csvData === '') {
    alert('No data to export');
  } else {
    const blob = new Blob([csvData], {type: 'text/csv;charset=utf-8;'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'product_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
