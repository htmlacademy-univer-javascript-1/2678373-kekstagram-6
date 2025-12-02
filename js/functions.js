function checkStringLength(text, len) {
  return text.length <= len;
}

function isPalindrome(text) {
  const formatted  = text.toLowerCase().split(' ').join('');
  return formatted === formatted.split('').reverse().join('');
}

function parsePosivtiveNums(value) {
  const str = typeof value === 'number' ? value.toString() : value;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }
  if (result.length === 0) {
    return NaN;
  }
  const num = Number(result);

  return num > 0 ? num : NaN;
}


