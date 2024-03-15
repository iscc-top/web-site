    var jq = jQuery.noConflict();
    var mouseSumHigh = 0;
    jq(function() {
        jq("body").bind('click',function(e) {
            var mouseSum = mouseSumHigh;
            var content_str = '加油💪|努力奋斗🔥|永不放弃🚀|相信自己✨|勇往直前🏃‍♂️|不断成长🌱|积极向上🌞|心想事成🌈|梦想成真🌟|热爱生活❤️|感恩每一天🙏|阳光灿烂☀️|快乐无限😄|幸福满溢😊|享受当下⭐️|坚持不懈💯|充满希望🌼|勇敢面对👊|积极思考💡|无限可能🌠|追求卓越🌟|做最好的自己💫';
            if (content_str == '')
            {
                return;
            }
            var content = content_str.split('|')
            var i = jq("<span/>").html(content[mouseSum]);
            mouseSumHigh = (mouseSum + 1) % content.length;
            var x = e.pageX,
                y = e.pageY;
            i.css({
                "z-index": 9999999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "#FF0000",
                "font-size": "20px"
            });
            jq("body").append(i);
            i.animate({
                    "top": y - 2000,
                    "opacity": 0
                },
                1000,
                function() {
                    i.remove();
                });
        });
    });