// shapes 极坐标函数
function apple(theta) {
  var max = 116;
  var leng = [88,89,89,89,89,88,88,88,88,89,88,88,87,87,87,87,87,88,87,87,86,86,87,87,86,86,85,86,86,87,85,86,85,86,84,85,85,84,85,84,84,83,83,83,84,83,83,82,82,82,82,81,82,81,81,80,80,79,80,79,79,79,79,78,78,77,77,77,77,76,76,75,75,74,75,74,75,73,73,74,72,71,72,71,72,70,69,70,68,69,67,68,67,67,66,66,65,66,65,64,65,63,63,62,62,61,60,61,60,59,60,59,58,59,58,56,56,57,56,57,55,55,54,55,53,54,53,52,53,52,51,52,50,51,50,51,50,48,49,48,49,48,49,47,48,80,78,76,74,72,73,70,68,65,63,64,61,62,59,56,57,53,54,51,52,50,49,50,47,48,48,49,48,49,49,50,49,50,51,51,52,51,52,51,52,54,53,54,53,54,53,55,55,56,55,56,57,58,57,58,59,58,59,59,59,60,60,60,61,61,61,62,62,62,63,63,64,64,64,65,66,66,66,67,67,68,67,68,69,69,70,69,70,71,70,71,71,72,73,72,73,73,74,73,74,75,74,75,76,75,76,76,77,76,77,77,78,78,79,78,79,78,79,80,79,80,80,80,81,81,81,81,82,82,82,82,82,83,83,83,83,83,84,85,84,84,84,85,84,85,85,85,86,85,85,85,86,86,86,86,86,86,86,86,87,88,87,87,87,87,87,88,88,89,88,88,88,88,88,88,88,88,89,88,88,88,88,88,88,88,89,89,90,89,89,89,90,89,89,89,90,90,90,91,91,90,90,90,91,91,91,91,92,91,92,93,91,92,92,92,92,93,93,93,93,93,94,93,94,94,94,94,95,95,95,96,96,96,97,96,97,98,97,98,97,98,98,99,99,99,100,100,101,100,101,101,102,102,103,102,103,103,103,104,104,105,105,105,106,106,106,106,107,107,108,108,108,108,109,109,110,110,110,110,111,111,112,111,112,112,112,113,112,113,113,113,114,113,114,113,114,114,114,114,115,114,114,115,115,114,114,114,114,112,112,112,112,112,112,112,111,111,110,110,110,109,109,109,109,110,110,110,111,111,111,112,112,112,112,112,115,115,115,116,115,115,115,115,115,115,115,114,115,114,115,114,114,114,113,114,113,113,113,113,112,112,112,112,111,111,111,111,109,109,109,109,108,108,108,107,107,107,107,106,106,105,105,105,104,104,104,104,103,103,102,103,101,102,101,101,100,101,100,99,100,99,99,98,99,98,97,98,97,97,96,97,96,95,96,95,96,95,96,94,95,94,94,94,94,94,93,93,93,93,94,92,92,93,92,92,92,91,91,92,91,91,91,91,90,90,91,90,91,90,90,90,90,90,90,89,89,90,89,89,89,89,89,89,89,89,89,90,89,90];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}

function bulb(theta) {
  var max = 80;
  var leng = [31,32,33,33,34,35,33,34,35,34,35,36,34,35,35,36,37,35,36,37,36,38,36,38,38,39,38,39,39,40,40,39,41,42,42,43,42,44,45,44,46,45,44,46,46,47,47,47,48,48,50,49,50,51,52,51,52,53,52,53,54,55,56,57,56,57,57,57,58,59,58,59,60,59,60,60,60,61,62,63,63,63,63,63,64,65,64,65,66,66,66,67,67,67,68,68,68,69,69,70,71,70,71,72,71,71,72,72,72,73,72,73,74,74,74,74,75,74,75,76,75,75,76,76,77,76,76,77,77,77,77,78,77,78,79,77,78,78,78,79,79,79,78,79,79,79,79,79,79,79,79,80,79,79,79,78,78,79,78,79,78,78,78,78,78,77,78,77,76,77,78,76,76,77,76,75,76,75,75,76,74,75,74,74,74,73,74,72,73,72,73,71,72,71,71,70,71,70,69,70,69,68,68,67,68,67,66,67,66,66,65,64,65,64,63,63,63,63,62,61,62,60,60,59,60,59,60,58,58,57,58,57,56,57,55,55,54,55,54,52,52,51,52,51,52,49,50,51,48,48,47,46,47,48,46,44,45,44,45,44,42,43,42,43,41,40,40,39,40,38,39,40,38,39,36,37,36,37,35,36,37,35,36,34,35,36,34,35,36,33,34,35,33,34,35,32,33,34,32,33,34,31,32,33,31,32,33,31,32,33,31,30,32,31,30,32,32,30,29,31,30,29,31,31,30,32,31,30,29,31,32,30,29,31,30,29,31,30,32,29,31,30,29,31,32,30,29,31,30,30,31,32,30,32,31,32,30,31,33,32,30,31,33,32,32,33,34,32,33,34,36,32,33,34,35,34,36,34,35,36,37,34,35,36,36,37,37,38,38,39,38,39,38,39,40,39,40,41,42,43,40,41,42,43,42,43,42,43,43,44,43,44,42,43,44,43,44,42,43,42,43,44,42,43,41,42,41,42,41,42,43,41,42,40,41,40,41,42,40,41,40,41,42,40,41,40,41,40,41,42,40,41,40,41,42,40,41,40,41,42,40,41,40,41,41,40,42,40,41,40,41,41,40,42,40,41,41,41,42,41,43,41,42,42,41,42,43,43,42,44,42,43,43,44,43,42,44,43,43,43,44,42,43,42,43,44,42,41,42,40,41,40,42,39,40,38,38,39,38,39,37,37,36,37,35,36,34,36,35,36,34,36,34,33,34,35,32,33,33,34,34,32,33,32,31,32,33,32,31,33,30,31,31,32,30,31,31,32,30,31,29,30,31,31,32,30,32,29,30,30,31,29,30,31,32,29,30,31,29,30,31,32,30,31,32,33,29,30,29,30,31,32,30,31,32,33,30,31,32,30,31,32,31,32,33,34,31,32,33,33,34,35];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}

function cloud(theta) {
  var max = 266;
  var leng = [208,205,202,200,197,194,190,185,183,178,173,171,173,174,175,176,178,178,179,181,181,183,183,184,185,185,186,187,188,188,189,190,189,190,190,191,191,191,191,192,192,192,192,192,192,193,193,192,192,191,191,191,191,191,190,190,190,189,188,188,187,186,185,185,184,183,182,181,181,180,179,177,177,175,174,173,172,170,169,167,165,164,162,161,159,157,155,154,151,149,146,144,140,138,134,131,126,127,127,129,129,129,131,132,132,133,135,135,135,136,138,138,139,140,141,141,142,143,144,145,146,147,148,148,149,149,151,151,153,154,154,155,155,156,157,158,159,160,160,161,162,163,163,164,165,166,167,167,168,169,170,171,172,172,173,174,175,175,176,177,178,178,179,179,180,180,181,181,183,183,183,184,185,186,186,186,187,187,189,189,189,190,190,191,191,192,193,193,194,193,194,195,195,196,196,196,197,197,198,198,199,198,199,199,200,200,200,200,201,201,201,202,202,202,203,202,203,203,203,203,203,203,203,203,203,203,203,203,204,203,203,204,204,204,204,203,204,203,203,203,203,203,203,203,202,202,203,202,202,202,202,201,201,201,201,201,201,200,200,200,199,199,198,198,198,198,197,197,196,196,195,195,195,194,194,193,192,192,192,191,191,190,189,189,188,187,187,186,186,185,185,184,186,190,191,194,196,198,199,202,205,205,207,210,212,213,215,216,218,220,221,223,225,227,228,229,231,232,233,235,236,237,238,239,241,242,242,244,245,245,247,247,248,249,249,251,251,252,253,253,254,255,255,255,256,257,257,257,258,258,258,259,259,259,259,259,259,259,259,259,259,260,259,259,259,258,258,258,257,257,257,256,256,255,255,254,254,253,252,252,251,251,250,249,248,247,247,246,245,243,242,241,240,239,238,237,235,234,234,231,231,229,227,226,224,223,221,219,218,216,215,213,212,210,209,208,206,205,204,203,201,200,199,198,197,196,195,194,193,192,192,191,190,189,188,188,187,186,186,185,184,184,183,183,182,182,181,181,180,180,180,179,179,178,178,178,178,177,177,177,177,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,176,177,177,177,177,177,178,178,178,179,179,179,180,180,181,181,182,182,183,183,184,184,185,185,186,187,187,188,189,190,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,206,207,208,210,211,212,214,215,217,219,220,222,224,225,227,229,231,233,235,237,238,240,241,243,245,246,247,249,249,251,252,253,255,256,256,257,258,259,259,260,261,261,262,262,263,263,264,264,265,264,265,265,265,265,265,265,266,265,265,265,265,264,264,264,263,263,262,262,261,260,259,258,257,256,256,255,254,253,252,251,250,248,248,246,245,243,242,239,239,237,234,233,231,229,227,225,223,221,219,217,214,212,210];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}

function drop(theta) {
  var max = 108;
  var leng = [52,53,52,53,52,53,51,52,50,51,50,51,50,49,50,49,50,48,49,48,49,48,49,48,49,48,47,48,47,48,47,49,47,48,47,46,48,47,46,47,46,47,46,47,46,48,47,46,47,46,47,47,46,47,46,45,47,46,47,46,46,47,46,47,46,47,47,46,47,48,47,47,48,46,47,48,47,48,48,49,48,48,49,48,48,49,50,49,49,50,49,50,50,51,50,51,51,52,51,52,52,53,52,53,54,55,53,54,55,55,56,55,56,57,58,56,57,58,58,59,60,59,61,61,62,63,63,63,64,65,65,66,67,67,69,69,71,71,73,73,75,75,76,78,78,81,82,84,87,88,89,92,95,98,98,102,105,108,105,102,98,95,92,89,87,88,84,82,82,79,77,78,74,75,73,72,71,70,69,68,67,67,66,66,64,65,63,62,62,61,61,60,59,59,58,58,57,56,57,56,55,56,55,54,55,54,53,54,53,52,52,52,51,52,51,52,50,51,50,49,50,50,49,48,49,49,48,49,49,48,49,47,48,47,48,46,47,48,46,47,46,48,46,46,47,46,47,45,46,47,47,45,45,46,47,45,46,47,48,45,45,46,47,45,46,45,46,47,45,46,45,46,47,45,45,46,47,48,45,46,46,47,46,47,48,46,47,46,47,47,48,49,47,48,47,48,48,49,48,49,50,49,50,49,50,50,51,50,51,51,52,51,52,52,53,52,53,53,53,54,54,55,54,55,55,55,56,56,57,56,57,58,57,59,60,59,60,61,60,61,61,62,62,63,64,64,64,65,66,65,66,66,67,68,69,68,68,70,70,71,72,71,72,72,74,74,74,75,76,76,77,77,77,78,78,79,79,79,80,80,80,81,82,83,82,82,83,84,84,85,85,86,85,86,87,87,87,88,88,89,89,90,90,90,91,91,92,92,92,93,94,93,94,94,95,95,95,95,96,96,97,97,97,98,98,98,98,99,99,99,100,99,100,101,100,101,101,101,101,102,102,102,102,103,102,103,103,104,103,104,104,104,104,104,104,105,105,105,104,104,105,105,105,105,105,106,105,106,106,107,107,107,107,107,107,106,106,105,106,105,105,105,105,105,104,104,105,105,105,104,104,105,104,104,104,103,104,103,103,102,103,102,102,102,102,102,102,101,101,101,100,100,100,101,100,99,99,99,99,99,98,98,98,97,97,96,96,96,96,95,95,94,94,94,93,93,92,93,92,92,91,91,90,90,90,89,88,88,87,88,87,86,87,86,85,85,85,84,83,83,82,83,82,81,82,80,81,80,80,79,80,78,79,77,78,76,76,75,75,74,73,73,72,72,71,70,71,69,69,69,70,67,68,67,66,65,65,66,64,63,63,64,63,61,61,62,61,60,61,60,58,59,58,57,58,57,58,56,56,57,55,56,55,54,55,54,55,54,55];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}

function head(theta) {
  var max = 120;
  var leng = [89,90,90,90,91,91,91,91,91,91,92,92,92,92,93,93,94,93,93,93,93,94,94,94,94,93,94,94,94,94,95,95,95,95,95,96,96,95,95,96,96,95,96,96,96,96,96,97,96,97,96,97,96,97,97,97,97,98,98,98,98,98,98,99,98,99,98,99,99,99,99,99,100,99,100,99,100,100,99,99,100,100,101,100,100,101,101,100,101,100,100,101,100,101,101,101,101,100,101,101,102,101,101,101,100,101,102,101,102,101,101,101,101,101,102,101,102,102,102,102,102,102,102,101,102,102,101,102,102,101,102,102,102,102,102,102,102,103,102,102,102,102,103,103,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,103,103,103,102,102,102,102,102,102,102,102,101,102,102,102,102,101,102,102,102,101,101,102,101,101,101,101,101,101,101,102,100,101,101,100,101,100,100,100,100,100,101,99,100,99,99,100,100,99,99,99,99,98,99,98,98,98,98,97,98,97,97,97,97,96,97,97,96,96,97,96,96,95,95,96,95,95,96,95,95,94,95,94,95,94,94,94,94,94,94,93,94,93,94,93,93,93,93,94,93,93,92,93,92,93,93,92,93,92,93,92,93,93,92,93,93,93,93,93,92,93,93,93,93,93,92,93,93,93,92,92,92,92,92,91,91,91,90,90,90,88,88,87,87,86,86,87,86,86,86,87,87,87,88,88,88,89,89,89,90,90,91,91,92,92,93,93,93,94,95,96,96,97,98,98,100,101,102,102,104,104,105,106,106,106,106,105,105,104,104,102,100,100,97,96,95,94,93,94,94,94,95,95,96,97,101,102,103,103,103,103,103,102,104,106,107,106,107,107,107,107,107,107,108,109,111,112,113,116,117,118,118,119,119,120,118,119,119,118,117,117,116,115,114,113,112,112,111,110,109,108,108,107,106,105,105,104,103,103,102,102,101,100,100,99,99,98,98,98,97,97,96,97,95,96,98,103,104,107,107,108,107,107,107,106,107,106,106,105,105,105,105,104,104,104,104,104,104,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,105,105,105,105,105,106,106,106,107,107,107,108,108,108,109,109,109,110,110,111,111,112,112,113,113,114,114,115,115,114,113,111,109,105,103,101,100,98,97,93,92,91,89,86,83,82,80,77,77,77,76,76,77,76,77,76,77,76,76,77,76,77,76,77,76,77,76,77,76,77,76,77,77,77,78,77,78,77,78,78,78,79,78,79,78,79,80,78,79,80,79,80,80,80,81,80,80,81,81,80,81,82,82,82,83,82,83,82,83,83,84,83,84,84,84,85,84,85,85,85,86,87,86,86,86,87,87,88,87,88,88,88,89,89,89,90,90,91];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}

function heart(theta) {
  var max = 123;
  var leng = [104,106,106,107,107,107,108,108,108,109,109,110,110,110,111,112,112,112,113,114,114,114,114,116,119,119,120,120,120,120,121,121,121,121,121,121,122,121,122,123,122,122,122,122,123,122,122,123,122,122,123,122,122,122,122,122,122,122,122,122,122,121,121,121,121,121,120,120,120,120,120,120,119,119,118,118,117,118,117,117,116,116,116,115,115,114,115,114,113,112,112,112,111,111,110,110,109,108,108,107,108,106,106,105,105,104,104,103,102,101,102,101,99,99,97,97,98,96,95,95,94,93,92,92,91,89,89,88,89,87,86,84,84,83,84,82,81,80,80,79,78,77,78,76,74,74,75,75,76,77,78,79,79,80,81,81,82,83,84,85,86,85,87,88,88,89,89,90,92,92,93,93,95,95,95,97,97,97,99,99,100,101,101,101,103,103,104,104,105,105,106,106,107,107,108,108,109,109,110,111,111,112,112,112,113,114,113,114,115,115,115,115,116,117,116,117,117,118,118,118,119,118,119,119,119,119,120,120,120,120,120,121,121,121,122,122,122,121,121,122,121,121,122,121,121,122,122,122,122,122,121,122,121,122,121,120,121,120,121,120,120,120,120,119,120,119,119,118,118,113,113,113,112,111,111,111,110,109,109,109,108,108,107,107,107,106,106,106,105,105,104,104,103,103,102,102,101,100,100,99,98,98,97,96,96,96,95,95,95,94,93,93,92,92,93,91,91,90,90,89,88,89,89,88,87,87,88,86,86,87,85,85,86,84,84,85,83,84,83,83,83,82,82,82,81,82,81,81,81,81,81,80,81,80,80,80,80,80,79,78,79,79,80,79,78,79,78,79,78,78,79,78,78,78,78,78,78,78,78,78,79,78,78,78,78,78,78,78,79,80,79,79,78,79,78,79,80,79,79,80,79,80,80,80,81,81,80,81,81,81,82,82,82,82,83,83,83,83,83,84,85,84,84,85,86,86,86,86,87,88,88,88,89,89,89,90,90,91,91,92,93,93,94,95,95,95,96,97,97,97,96,95,95,94,94,93,92,92,91,91,90,89,89,89,89,88,88,87,87,87,87,86,85,86,85,85,84,85,83,83,83,84,82,82,83,82,82,82,81,81,81,82,80,81,80,80,81,79,80,80,79,80,79,79,79,80,79,79,79,79,79,78,79,78,79,79,78,79,78,79,79,78,79,78,79,79,79,79,80,79,80,79,80,79,79,80,79,80,81,80,81,81,81,81,81,82,81,82,82,82,82,83,83,83,83,84,83,84,84,85,85,85,85,86,86,86,87,88,87,88,89,88,89,90,90,89,90,91,92,91,92,93,93,94,94,94,95,96,96,97,98,97,97,98,99,99,100,101,101,102,103,103,104,104,106];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}

function leaf(theta) {
  var max = 124;
  var leng = [3,5,6,7,8,9,10,78,78,11,10,9,8,7,79,6,80,5,11,10,81,9,81,8,12,82,7,11,10,6,13,9,12,84,8,11,85,13,10,7,12,13,9,11,14,13,9,15,10,12,14,16,17,9,11,13,14,12,10,14,15,13,17,15,16,14,17,19,15,17,18,19,21,19,20,22,23,22,24,25,26,27,28,29,31,31,33,34,37,39,41,42,44,46,50,53,55,60,62,116,117,118,118,120,120,121,121,122,123,124,124,122,122,118,115,113,111,109,108,106,105,103,102,100,99,97,96,96,94,94,93,92,91,90,90,90,88,88,87,87,87,86,85,84,85,84,84,83,83,82,82,83,82,81,81,80,80,81,80,79,79,78,79,78,77,77,78,76,76,75,76,75,74,75,75,74,74,75,73,73,74,73,73,74,72,72,71,72,72,71,71,72,71,71,70,71,71,70,70,71,70,70,69,70,70,69,70,69,69,70,69,70,69,69,68,69,70,69,69,68,69,68,69,68,69,70,69,69,70,69,70,69,70,68,69,68,69,68,69,68,69,68,69,68,69,68,69,69,69,69,69,70,71,69,70,69,70,70,70,71,70,70,71,72,70,71,72,71,72,71,71,72,72,73,71,72,73,71,72,73,73,72,73,73,73,74,73,73,74,74,74,75,74,74,75,75,75,75,75,75,75,75,76,76,76,77,76,77,77,78,77,78,78,78,79,78,79,79,79,80,79,79,79,80,81,80,80,80,80,81,81,81,81,81,81,82,81,82,82,82,82,82,83,84,83,83,84,84,84,85,85,86,85,85,85,86,86,86,87,86,86,87,87,88,87,88,88,89,89,89,89,90,89,90,90,91,91,91,92,91,92,93,92,93,93,93,94,93,94,94,95,94,95,95,69,64,61,55,56,50,48,45,38,39,39,36,33,29,30,28,25,26,22,23,21,23,18,19,20,17,19,15,18,14,16,18,15,13,17,10,16,9,11,12,13,10,13,14,8,11,12,9,14,13,10,14,7,11,12,8,13,15,9,10,14,11,12,6,13,7,14,8,9,10,11,12,13,14,15,75,75,76,5,6,7,8,9,10,11,12,11,10,9,8,7,72,6,72,5,11,10,72,4,9,8,72,71,3,7,71,70,6,9,70,71,71,5,8,70,70,7,69,70,4,69,70,6,9,69,8,69,69,69,69,3,5,7,69,68,69,5,8,68,6,69,68,4,68,69,7,68,68,69,68,3,5,7,68,68,68,68,6,67,68,67,68,5,3,7,68,68,7,68,69,4,69,68,68,6,68,8,69,69,69,68,6,3,5,7,69,70,69,70,71,69,6,70,69,4,70,7,70,71,70,71,5,8,71,71,72,6,71,72,73,7,72,8,72,72,9,73,73,5,73,6,74,7,74,8,9,75,75,75,76,76,76,76,77,77];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}

function tree(theta) {
  var max = 66;
  var leng = [6,7,8,9,10,11,12,13,12,11,10,9,8,7,13,6,12,11,13,10,54,9,13,8,12,54,7,11,10,6,13,9,12,53,8,11,53,13,10,7,12,13,9,11,51,6,9,13,8,10,12,52,53,7,9,11,54,12,10,8,54,55,10,11,56,9,57,56,7,10,57,58,57,58,59,58,58,58,58,59,58,59,58,59,60,59,60,58,58,59,58,59,60,58,59,59,58,59,60,58,58,57,58,59,57,57,58,59,57,57,58,56,56,57,58,56,57,57,58,59,59,59,59,60,61,61,61,62,61,62,62,63,62,63,63,64,63,64,65,64,64,64,64,65,64,64,65,65,65,66,65,66,65,65,66,65,65,66,65,65,66,65,64,65,64,64,65,63,64,63,63,64,62,63,61,61,63,61,62,60,61,59,60,58,60,58,59,57,56,57,55,56,55,54,55,54,52,51,52,51,52,51,52,53,53,52,53,54,53,54,53,54,53,54,55,54,54,54,55,56,57,55,56,55,54,55,56,55,56,56,55,56,55,55,56,55,56,55,55,54,55,56,54,54,54,55,54,53,54,52,53,53,54,53,54,54,55,54,55,56,54,55,55,56,55,56,57,56,55,56,57,56,55,56,57,56,57,55,55,56,57,56,55,56,55,56,55,56,54,54,55,54,55,54,55,14,15,52,52,12,6,13,7,14,8,9,10,11,12,13,14,18,19,20,21,5,6,7,8,9,10,11,12,11,10,9,8,7,17,6,18,5,16,10,17,9,18,8,16,17,7,18,19,17,6,16,15,18,19,5,17,16,18,15,19,17,19,16,18,20,15,17,17,14,16,18,19,15,17,19,16,14,18,19,15,17,18,15,16,14,17,19,15,17,13,16,18,15,17,14,15,17,18,16,13,17,15,18,19,14,15,17,16,18,15,13,17,14,18,16,18,16,15,17,19,20,16,18,19,17,19,20,18,20,21,18,21,19,20,21,21,22,22,23,24,25,26,27,28,29,32,33,34,55,56,54,53,53,54,52,53,62,61,62,60,59,60,59,58,59,58,57,58,56,57,56,55,56,54,55,53,54,52,53,52,53,54,54,55,55,56,56,57,58,57,58,59,59,59,60,61,61,62,62,62,55,36,35,34,32,31,27,26,25,24,27,23,22,25,21,23,20,22,19,21,21,20,22,19,21,23,18,20,22,19,21,23,18,20,18,19,21,22,18,20,21,19,17,20,7,18,21,19,22,19,8,17,10,18,19,21,9,17,10,19,18,8,19,19,20,10,7,8,17,9,18,19,11,18,20,8,10,17,18,19,6,9,11,7,17,18,19,10,8,17,6,10,18,9,17,7,18,10,19,16,8,11,17,9,18,28,10,17,31,7,11,8,12,33,9,34,10,11,12,35,36,37,38,8,9,10,11,12,13,44,45,46,47,48];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}

function elephant(theta) {
  var max = 537;
  var leng = [215,215,215,214,214,214,213,213,213,213,213,213,214,214,215,216,217,220,222,226,228,232,235,239,243,248,253,259,263,270,490,489,487,486,485,484,482,481,481,480,478,478,477,476,476,475,475,474,474,473,472,473,472,472,472,472,472,471,472,471,472,472,471,471,472,472,471,470,470,469,467,465,464,461,459,457,455,453,452,450,447,445,444,441,439,437,435,434,432,429,427,426,425,424,423,422,421,420,419,418,418,416,416,415,414,413,413,412,412,411,410,410,409,410,409,408,408,407,406,406,405,405,403,402,398,391,384,373,364,349,335,317,304,300,298,297,294,292,292,290,289,287,287,285,284,284,282,282,281,280,279,279,278,278,277,277,276,276,276,275,275,275,274,274,274,273,274,274,273,273,274,273,274,274,274,274,274,275,276,276,277,277,278,279,280,280,282,283,285,286,288,290,291,294,295,299,301,303,307,309,313,317,319,323,328,332,336,341,345,351,355,358,362,365,369,372,375,379,381,384,387,388,391,393,396,398,400,402,404,406,407,409,411,412,413,414,415,417,418,418,420,421,422,423,424,425,426,427,429,430,431,432,434,435,436,437,439,439,441,443,444,446,447,449,451,452,454,455,457,459,460,461,461,461,461,463,463,463,464,464,464,465,465,466,467,468,469,470,471,471,472,473,474,475,475,477,477,432,430,428,428,427,426,424,424,422,421,421,419,418,417,416,415,414,414,413,412,411,410,409,408,407,407,405,404,404,403,403,401,401,401,400,400,399,398,397,397,397,396,396,395,395,395,396,399,407,413,422,432,443,454,468,483,500,517,537,219,216,213,209,207,205,202,200,196,193,189,188,185,182,179,176,173,171,166,164,162,159,157,153,151,148,146,144,141,139,138,135,133,130,129,128,125,124,122,120,119,118,115,114,112,111,110,108,107,106,105,103,102,103,101,100,100,99,99,100,101,102,102,104,108,110,112,114,118,121,123,128,133,136,142,148,156,163,173,183,197,217,340,356,357,357,357,357,356,356,356,356,355,355,355,355,355,354,354,354,354,353,354,353,353,353,353,353,273,266,260,255,251,246,243,238,235,230,227,224,221,217,214,211,207,205,203,199,196,194,191,190,186,184,182,179,177,176,173,171,170,168,166,164,162,160,158,156,155,153,152,151,150,148,146,145,143,143,142,141,139,138,137,137,134,134,133,132,131,130,130,128,128,126,126,125,124,124,122,122,121,121,120,119,119,118,118,117,117,116,116,114,115,114,114,113,113,112,112,113,113,113,114,365,359,354,348,343,339,334,331,326,321,318,315,310,307,304,301,298,294,291,288,286,283,280,278,275,273,271,268,266,264,261,259,258,255,254,252,250,248,248,246,244,242,240,240,238,236,235,234,233,231,231,229,228,228,226,225,224,223,223,222,220,220,219,219,218,218,217,217,216,217];

  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;
}