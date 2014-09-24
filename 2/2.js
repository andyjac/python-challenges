function transliterate(text) {
  var transliteratedString = [], ABC = "abcdefghijklmnopqrstuvwxyzab",
  i, currentChar, transliteratedChar;

  for (i = 0; i < text.length; i++) {
    currentChar = text.charAt(i);
    transliteratedChar = ABC.charAt(ABC.indexOf(currentChar));
    if (ABC.indexOf(currentChar) === -1) {
      transliteratedString.push(currentChar);
    } else {
      transliteratedString.push(transliteratedChar);
    }
  }
  console.log(transliteratedString.join(""));
}

transliterate("g fmnc wms bgblr rpylqjyrc gr zw fylb. " +
  "rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb " +
  "gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. " +
  "sqgle qrpgle. kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.");
