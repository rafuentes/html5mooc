var numA = 0;
var acc = 0;
var op = "";


$(function() {

    $(".flotante").draggable({
        revert: "invalid",  
        helper:"clone"
    });
    $("#n1").droppable({
        activeClass:"act",  
        drop: eventoFromM
     });

    $("#n1").on("click", 
        function(){ 
            $("#n1").val("");
        }
    );

    $("#b1").on("click", 
        function() {
            var num = $("#n1");
            num.val(num.val() * num.val());
        }
    );
    $("#b2").on("click", 
        function() {
            var num = $("#n1");
            num.val(isNaNorInfiniteRetornaCero(1 / num.val()));
        }
    );
    $("#b3").on("click", 
        function() {
            var num = $("#n1");
            num.val(isNaNorInfiniteRetornaCero(Math.sqrt(num.val()))); 
        }
    );
    $("#b4").on("click", 
        function() {
            var num = $("#n1");
            num.val(isNaNorInfiniteRetornaCero((num.val() >= 0) ? Math.floor(num.val()) : Math.ceil(num.val())));
        }
    );
    $("#b5").on("click", 
        function() {
            var num = $("#n1");
            num.val(isNaNorInfiniteRetornaCero(Math.pow(2, num.val())));
        }
    );
    $("#b6").on("click", 
        function() {
            var num = $("#n1");
            num.val(isNaNorInfiniteRetornaCero(factorial(num.val())));
        }
    );

    $("#mas").on("click",
        function() {
            var num = $("#n1");
            numA = num.val();
            op = "+";
        }
    );
    $("#menos").on("click",
        function() {
            var num = $("#n1");
            numA = num.val();
            op = "-";
        }
    );
    $("#por").on("click",
        function() {
            var num = $("#n1");
            numA = num.val();
            op = "*";
        }
    );
    $("#div").on("click",
        function() {
            var num = $("#n1");
            numA = num.val();
            op = "/";
        }
    );
    $("#elevado").on("click",
        function() {
            var num = $("#n1");
            numA = num.val();
            op = "^";
        }
    );
    $("#resultado").on("click",
        function() {
            var num = $("#n1");

            if (op === "+") {num.val(+numA + +num.val())}
            if (op === "-") {num.val(+numA - +num.val())}
            if (op === "*") {num.val(+numA * +num.val())}
            if (op === "/") {num.val(+numA / +num.val())}
            if (op === "^") {num.val(Math.pow(+numA, +num.val()))}
        }
    );

    $("#sumatoria").on("click",
        function () {
            var num = $("#n1");
            var x = 0;
            var a = num.val().split(',');

            for (var i = 0; i < a.length; i += 1) {
                x += (+a[i]);
            }
            num.val(x);
            oper = undefined;
        }
    );
    $("#producto").on("click",
        function() {
            var num = $("#n1");
            var x = 1;
            var a = num.val().split(',');
            for (i = 0; i < a.length; i += 1) {
                x = x * (+a[i]);
            }
            num.val(x);
            oper = undefined;
        }
    );
    $("#toM").on("click",
        function() {
            var num = $("#n1");
            $("#mem").text(num.val());
        }
    );
    $("#fromM").on("click",eventoFromM);
});

function eventoFromM(){
    var num = $("#mem").text();
    $("#n1").val(isNaNorInfiniteRetornaCero(+num));
}

function isNaNorInfiniteRetornaCero(value){
    return (isNaN(value) || !isFinite(value)) ? 0 : value; 
}

function factorial(value){
    if(value === 0){
        return 1;
    }
    else{
        return value * factorial(--value);
    }
}
