$(document).ready(function(){
    var i=1;
    $("#btndk").click(function(){
        $("#myModal").modal();
    })

    function KTTen(){
        var kt=/^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        if($("#Name").val()==""){
            $("#tbName").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#Name").val())){
            $("#tbName").html("Chữ cái đầu của mỗi từ phải viết hoa");
            return false;
        }
        $("#tbName").html("*");
        return true;
    ;}
    $("#Name").blur(KTTen);

    function KTSoAo(){
        var kt=/^\d*$/;
        if($("#SoAo").val()==""){
            $("#tbSoAo").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#SoAo").val())){
            $("#tbSoAo").html("Dùng số áo từ 1-20");
            return true;
        }else{
            var SoAo =$("#SoAo").val();
            if(SoAo<1||SoAo>20){
                $("#tbSoAo").html("Dùng số áo từ 1-20");
            }else{
                $("#tbSoAo").html("*");
                return true;
            }
        }
    };
    $("#SoAo").blur(KTSoAo);

    function KTCLB(){
        var kt=/^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if($("#CLB").val()==""){
            $("#tbCLB").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#CLB").val())){
            $("#tbCLB").html("Mỗi kí tự đầu viết hoa");
            return true;
        }
        $("#tbCLB").html("*");
        return true;
    };
    $("#CLB").blur(KTCLB);

    function KTNTT(){
        if($("#NTT").val==""){
            $("#tbNTT").html("Không để trống");
            return false;
        }
        var today = new Date();
        var NTT = new Date($("#NTT").val());
        today = today.setDate(today.getDate()+30)
        if(today > NTT){
            $("#tbNTT").html("Phải sau ngày hiện tại 1 tháng!");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(KTNTT);

    function KTSDT(){
        var kt=/^0\d{2}-\d{3}-\d{4}$/;
        if($("#SDT").val()==""){
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#SDT").val())){
            $("#tbSDT").html("Theo dạng 0xx-xxx-xxxx");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    };~
    $("#SDT").blur(KTSDT);    
    
    $("#Save").click(function(){
        if(KTTen()==true && KTSoAo()== true && KTCLB() == true && KTNTT() == true && KTSDT() == true){
        
            var Ten = $("#Ten").val();
            var SoAo = $("#SoAo").val();
            var CLB = $("#CLB").val();
            var NTT = $("#NTT").val();
            var SDT = $("#SDT").val();
            var ADD = $("#ADD").val().substring(12);
            var them = "<tr><td>" + (i++) + "</td><td>" + Ten + "</td><td>" + SoAo + "</td><td>" + CLB + 
            "</td><td>" + NTT + "</td><td>" + SDT + "</td><td>" + ADD + "</td></tr>"
            $("#addRow").append(them);
            $("#myModal").modal("hide");
            return true;
        }
    })
})