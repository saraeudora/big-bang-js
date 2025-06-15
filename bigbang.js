const fs = require('fs');

function generateBigBangArray() {
  const result = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("BIGBANG");
    } else if (i % 3 === 0) {
      result.push("BIG");
    } else if (i % 5 === 0) {
      result.push("BANG");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

const bigBangArray = generateBigBangArray();

fs.writeFile('output.json', JSON.stringify(bigBangArray, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('BIGBANG array saved to output.json');
  }
});
