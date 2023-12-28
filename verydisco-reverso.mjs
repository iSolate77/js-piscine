const fs = require('fs');

const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

const decipherFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const reversedContent = reverseString(content);
    console.log(reversedContent);
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

const filePath = process.argv[2];
decipherFile(filePath);
