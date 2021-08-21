module.exports = function(data)  {
  return {
    Date: data['Exposure_date'],
    Place: data['Site_title'] + ' - ' + data['Site_streetaddress'],
    Suburb: data['Suburb'],
    'Start of exposure': data['Exposure_time'].split('-')[0].trim(),
    'End of exposure': data['Exposure_time'].split('-')[1].trim(),
  }
}
