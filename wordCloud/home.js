// 一些全局变量
var arr = ["红楼梦", "三国演义", "西游记", "梦三国", "LOL", "疯狂赛车", 
    "默默", "段誉", "贾诩", "曹操", "孙悟空", "唐僧", "猪八戒", "李世民",
    "傻老头", "鸳鸯", "贾雨村", "王夫人", "晴雯", "亚里士多德", "Michelle", "John", "Tim",
    "小红", "小明", "李雷", "韩梅梅", "三十六计", "曹冲", "走秀", "香菱"
  ], 
  result = [],
  shapes = ["circle", "diamond", "triangle-foward", "cardioid", "triangle", "pentagon", "star"],
  i = 0,
  srchType = [["歌曲", 80], ["歌手", 70], ["歌单", 60], ["专辑", 50], ["歌词", 40], ["歌手类型", 30], ["歌曲风格", 20], ["排行榜", 20]];
  

for (i = 0, len = arr.length; i < len; i++) {
  result.push([arr[i], Math.floor(Math.random() * 100)]);
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

// 页面初次加载需要初始化
render(srchType);
// 当点击 reset 按钮时, 再次初始化
eReset.onclick = function() {
  srchType = [["歌曲", 80], ["歌手", 70], ["歌单", 60], ["专辑", 50], ["歌词", 40], ["歌手类型", 30], ["歌曲风格", 20], ["排行榜", 20]];
  render(srchType);
}

eSubmit.onclick = function() {
  render(result);
}

// 词云图渲染
function render(list) {
  // 词云配置
  var options = {
    list: list,
    shape: "pentagon",
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
