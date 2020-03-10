// Clase utilitaria

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const getRandomInt = (min, max)  => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}