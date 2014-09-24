function transliterate(text) {
  var transliteratedString = [], ABC = "abcdefghijklmnopqrstuvwxyzab",
  listifiedABC, i, currentChar, transliteratedChar;

  for (i = 0; i < text.length; i++) {
    listifiedABC = ABC.split("");
    currentChar = text.charAt(i);
    transliteratedChar = ABC.charAt(listifiedABC.indexOf(text.charAt(i) + 2));
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
