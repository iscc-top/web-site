const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 添加文字列表
const texts = [
  "日本仅占地球的0.1%却毁了71%的海洋！！！",
];

// 绘制文字
ctx.font = "30px Arial";

let t = 0; // 添加变量 t

// 定义动画函数
function animate() {
  // 清除画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 计算当前显示的文字索引
  const index = Math.floor(t % texts.length);

  // 计算文字宽度
  const textWidth = ctx.measureText(texts[index]).width;

  // 计算文字的x坐标
  let x = (t % 1) * (canvas.width + textWidth);

  // 绘制文字
  ctx.fillText(texts[index], x, 25);

  t += 0.001; // 更新变量 t，控制动画速度

  // 循环执行动画
  requestAnimationFrame(animate);
}

// 开始动画
animate();
