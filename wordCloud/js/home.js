// 一些全局变量
var arr = ["font", "div", "canvas", "delete", "LOL", "music", 
    "默默", "段誉", "贾诩", "曹操", "孙悟空", "唐僧", "猪八戒", "李世民",
    "傻老头", "鸳鸯", "贾雨村", "王夫人", "晴雯", "update", "Michelle", "John", "Tim",
    "小红", "小明", "李雷", "韩梅梅", "Happen", "曹冲", "走秀", "香菱", "setSeconds", 
    "setDate", "SVGDefsElement", "shift", "some", "AudioBuffer", "eReset", "toFixed",
    "lastModified", "default", "vlinkColor", "isReload", "organization", "vlinkC", "back",
    "lastModified", "default", "vlinkColor", "isReload", "organization", "vlinkC", "back",
    "lastModified", "default", "vlinkColor", "isReload", "organization", "vlinkC", "back",
    "lastModified", "default", "vlinkColor", "isReload", "organization", "vlinkC", "back",
    "lastModified", "default", "vlinkColor", "isReload", "organization", "vlinkC", "back",
    "lastModified", "default", "vlinkColor", "isReload", "organization", "vlinkC", "back",
    "小红", "小明", "李雷", "韩梅梅", "Happen", "曹冲", "走秀", "香菱", "setSeconds", 
    "小红", "小明", "李雷", "韩梅梅", "Happen", "曹冲", "走秀", "香菱", "setSeconds", 
    "小红", "小明", "李雷", "韩梅梅", "Happen", "曹冲", "走秀", "香菱", "setSeconds", 
    "小红", "小明", "李雷", "韩梅梅", "Happen", "曹冲", "走秀", "香菱", "setSeconds", 
    "小红", "小明", "李雷", "韩梅梅", "Happen", "曹冲", "走秀", "香菱", "setSeconds"
  ], 
  result = [],
  shapes = [apple, bulb, cloud, drop, head, heart, leaf, tree, elephant, "triangle", "star", "pentagon"],
  i = 0,
  srchType = [["歌曲", 80], ["歌手", 70], ["歌单", 60], ["专辑", 50], ["歌词", 40], ["歌手类型", 30], ["歌曲风格", 20], ["排行榜", 20]];
  
// 生成结果
for (i = 0, len = arr.length; i < len; i++) {
  result.push([arr[i], Math.floor(Math.random() * 30)]);
}

// 一些 DOM 元素
var eReset = document.getElementById('reset'),
  eSubmit = document.getElementById('submit'),
  eSrchInput = document.getElementById('srch_input'),
  eCanvas = document.getElementById('canvas'),
  eSinger = document.getElementById('singer'),
  eRecord = document.getElementById('record'),
  eLrc = document.getElementById('lrc'),
  eSingerInfo = document.getElementById('singer_info'),
  eRecordInfo = document.getElementById('record_info'),
  eListInfo = document.getElementById('list_info'),
  eCoverList = document.getElementById('cover_list'),
  eRankingList = document.getElementById('ranking_list');

// 滚动条定制
$('#left').mCustomScrollbar({
  theme: "dark",
  autoHideScrollbar: true
});

// 页面初次加载需要初始化
render(srchType);
// 当点击 reset 按钮时, 再次初始化
eReset.onclick = function() {
  srchType = [["歌曲", 80], ["歌手", 70], ["歌单", 60], ["专辑", 50], ["歌词", 40], ["歌手类型", 30], ["歌曲风格", 20], ["排行榜", 20]];
  render(srchType);
}

eSubmit.onclick = function(e) {
  e.preventDefault();
  render(result);
}

// 词云图渲染
function render(list) {
  // shapes 随机数
  var shapeRandom = Math.floor(Math.random() * shapes.length);
  console.log(shapes[shapeRandom].name ? shapes[shapeRandom].name : shapes[shapeRandom]);

  // 词云配置
  var options = {
    list: list,
    shape: shapes[shapeRandom],
    ellipticity: 1,
    fontFamily: '楷体, Verdana',
    color: 'random-dark',
    backgroundColor: '#ccc',
    hover: drawBox,
    click: function(e) {
      // 点击词云关键字时, 将其缓存, 并且聚焦到输入框
      srchType = e[0];
      eSrchInput.setAttribute('placeholder', e[0]);
      eSrchInput.focus();
    }
  };

  // 调用词云函数, 在 canvas 中渲染词云图
  WordCloud(document.getElementById('canvas'), options);
}

// 设置词云的悬浮样式
var $box = $('<div id="box" hidden />');
$('#canvas_container').append($box);
function drawBox(item, dimension) {
  if (!dimension) {
    $box.prop('hidden', true);
    return;
  }

  // 显示并定位位置和宽高
  $box.prop('hidden', false);
  $box.css({
    left: dimension.x + 'px',
    top: dimension.y + 'px',
    width: dimension.w + 'px',
    height: dimension.h + 'px'
  });
};
