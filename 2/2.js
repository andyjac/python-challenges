var textToTransliterate = ["g fmnc wms bgblr rpylqjyrc gr zw fylb. "
  , "rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb "
  , "gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. "
  , "sqgle qrpgle. kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."].join('');

(function transliterate(text) {
  var transliteratedString = []
    , ABC = 'abcdefghijklmnopqrstuvwxyzab'
    , currentChar
    , transliteratedChar;

  for (var i = 0; i < text.length; i++) {
    currentChar = text[i];
    transliteratedChar = ABC[ABC.indexOf(currentChar) + 2];
    if (ABC.indexOf(currentChar) === -1) {
      transliteratedString.push(currentChar);
    }
    else {
      transliteratedString.push(transliteratedChar);
    }
  }
  console.log(transliteratedString.join(''));
})(textToTransliterate);
