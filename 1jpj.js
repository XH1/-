

var fileref=document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", 'http://ajax.microsoft.com/ajax/jquery/jquery-1.4.min.js');
document.getElementsByTagName("head")[0].appendChild(fileref);

var courses = $(".dojoxGridContent .dojoxGridRowTable")
courses.each((i,course) => {
    var c = course.children[0].children[0].children[3].children[0].getAttribute("href");
    post(c.substr(c.search("eitem")+6))
})

function post(id) {
    var j = '{"guidelineId":120,"evalItemId":'+id+',"answers":{"prob11":"A","prob12":"A","prob13":"N","prob14":"A","prob15":"A","prob21":"A","prob22":"A","prob23":"A","prob31":"A","prob32":"A","prob33":"A","prob41":"A","prob42":"A","prob43":"A","prob51":"A","prob52":"A","sat6":"A","mulsel71":"K","advice72":"","prob73":"Y"},"clicks":{"_boot_":0,"prob11":567151,"prob12":568446,"prob13":571205,"prob14":572524,"prob15":574045,"prob21":575413,"prob22":576844,"prob23":578125,"prob31":579190,"prob32":580348,"prob33":587773,"prob41":589141,"prob42":591357,"prob43":592797,"prob51":594092,"prob52":595508,"sat6":596909,"mulsel71":597989,"prob73":599636}}';
    $.ajax({
        type: "POST",
        url: "http://uims.jlu.edu.cn/ntms/action/eval/eval-with-answer.do",
        contentType : "application/json",
        data: j,
        dataType:"json",
        success :function (data) {
            console.log(data)
        }
    })
}

