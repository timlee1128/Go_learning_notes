var arr = ["红楼梦", "三国演义", "西游记", "梦三国", "LOL", "疯狂赛车", 
  "默默", "段誉", "贾诩", "曹操", "孙悟空", "唐僧", "猪八戒", "李世民",
  "傻老头", "鸳鸯", "贾雨村", "王夫人", "晴雯", "亚里士多德", "Michelle", "John", "Tim",
  "小红", "小明", "李雷", "韩梅梅", "三十六计", "曹冲", "走秀", "香菱"
];
console.log(arr.length);
var list = [], shapes = ["circle", "diamond", "triangle-foward", "cardioid", "triangle", "pentagon", "star"];
for (var i = 0, len = arr.length; i < len; i++) {
  list.push([arr[i], Math.floor(Math.random() * 100)]);
}

var options = {
  list: list,
  shape: "pentagon",
  fontFamily: '楷体, Verdana',
  color: 'random-dark',
  backgroundColor: '#ccc'
};
WordCloud(document.getElementById('right'), options);
