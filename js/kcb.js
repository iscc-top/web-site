// 获取今天的日期
const today = new Date();

// 定义要显示的图片路径
const imagePaths = ["images/kcb1.png", "images/kcb2.png"];
let imageIndex = 0;

// 切换图片路径
function switchImage() {
    // 获取今天是一年中的第几周
    const weekNumber = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 604800000);

    // 计算要显示的图片路径索引
    imageIndex = weekNumber % imagePaths.length;

    // 获取img标签的引用
    const imageElement = document.getElementById("image");

    // 设置img标签的src属性
    imageElement.src = imagePaths[imageIndex];
}

// 初始切换图片
switchImage();

// 设置定时器，每周切换一次图片（每 7 天）
setInterval(switchImage, 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
