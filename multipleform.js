$(document).ready(function() {

    $('select#select_btn').change(function() {
        var sel_value = $('option:selected').val();
            if (sel_value == 0) {
                $("#form_submit").empty(); // Resetting Form
            } else {
                $("#form_submit").empty(); //Resetting Form
                // Below Function Creates Input Fields Dynamically
                create(sel_value);
                // Appending Submit Button To Form
                $("#form_submit").append($("<input/>", {
                    type: 'submit',
                    value: 'Register',
                    class: 'btn btn-danger',
                }))
            }
        });

    function create(sel_value) {
        for (var i = 1; i <= sel_value; i++) {
            var queselect=$("<select><option value='1'>SINGLECHOICE</option><option value='2'>MULTICHOICE</option><option value='3'>OPEN</option></select>").attr("id","queselect"+i).attr("class","form-control");
            $("div#form1").slideDown('slow');
            $("div#form1").append($("#form_submit").append($("<div/>", {
            id: 'head'
            }).append($("<h3/>").text("Question" + i)),$("<br/><h5>Type</h5>"),$(queselect),$("<div/>",{id:'s_form'+i}),$("<br/>"), $("<hr/>"), $("<br/>")));
            testevent(i);
        }
        }

    function testevent(i) {
        var selvar = 'select#queselect'+ i;
        $(selvar).change(function() {
            var formvar = '#s_form' + i;
            var quevar = '#queselect' + i + ' option:selected';
            var answerqty=$("<br><h5>Answer Qty.</h5><select class='form-control'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select>");
            var s_value = $(quevar).text();
            if (s_value == "SINGLECHOICE"){
                $(formvar).html(answerqty);
            } else if (s_value == "MULTICHOICE"){
                $(formvar).html(answerqty);
            } else {
                $(formvar).html("<br><h5>Question text:</h5><input type='text' class='form-control'></input>");
            }
            });
            }
});


