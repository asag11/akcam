

const getDateTime = () => {
const now = new Date();
const dateTimeStr = now.toLocaleString('tr-TR', {
  year:   'numeric',
  month:  '2-digit',
  day:    '2-digit',
  hour:   '2-digit',
  minute: '2-digit',
});

console.log(dateTimeStr); 
  return dateTimeStr

}

export default getDateTime