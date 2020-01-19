$(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	
	var add_button      = $(".add_field_button"); //Add button ID
	
	var row_column_list = [[4,4,4],[4,4,4],[4,4,4],[4,4,4]]; //initlal text box count
  
  var x;
  
  
	$(add_button).click(function(e){ //on add input button click
    if($(this).parent().parent().parent().attr('class')==="row r1") {
      if($(this).parent().parent().attr('class')==="col-sm-4 c1") {
        row_column_list[0][0]++;
        var wrapper   		= $(".r1 .c1 .input_fields_wrap .courseList"); //Fields wrapper
        x = row_column_list[0][0];
      } else if ($(this).parent().parent().attr('class')==="col-sm-4 c2") {
        row_column_list[0][1]++;
        var wrapper   		= $(".r1 .c2 .input_fields_wrap .courseList");
        x = row_column_list[0][1];
      } else if ($(this).parent().parent().attr('class')==="col-sm-4 c3") {
        row_column_list[0][2]++;
        var wrapper   		= $(".r1 .c3 .input_fields_wrap .courseList");
        x = row_column_list[0][2];
      } 
  } else if ($(this).parent().parent().parent().attr('class')==="row r2") {
    if($(this).parent().parent().attr('class')==="col-sm-4 c1") {
        row_column_list[1][0]++;
        var wrapper   		= $(".r2 .c1 .input_fields_wrap .courseList"); //Fields wrapper
        x = row_column_list[1][0];
      } else if ($(this).parent().parent().attr('class')==="col-sm-4 c2") {
        row_column_list[1][1]++;
        var wrapper   		= $(".r2 .c2 .input_fields_wrap .courseList");
        x = row_column_list[1][1];
      } else if ($(this).parent().parent().attr('class')==="col-sm-4 c3") {
        row_column_list[1][2]++;
        var wrapper   		= $(".r2 .c3 .input_fields_wrap .courseList");
        x = row_column_list[1][2];
      } 
  } else if ($(this).parent().parent().parent().attr('class')==="row r3") {
    if($(this).parent().parent().attr('class')==="col-sm-4 c1") {
        row_column_list[2][0]++;
        var wrapper   		= $(".r3 .c1 .input_fields_wrap .courseList"); //Fields wrapper
        x = row_column_list[2][0];
      } else if ($(this).parent().parent().attr('class')==="col-sm-4 c2") {
        row_column_list[2][1]++;
        var wrapper   		= $(".r3 .c2 .input_fields_wrap .courseList");
        x = row_column_list[2][1];
      } else if ($(this).parent().parent().attr('class')==="col-sm-4 c3") {
        row_column_list[2][2]++;
        var wrapper   		= $(".r3 .c3 .input_fields_wrap .courseList");
        x = row_column_list[2][2];
      } 
  } else if ($(this).parent().parent().parent().attr('class')==="row r4") {
    if($(this).parent().parent().attr('class')==="col-sm-4 c1") {
        row_column_list[3][0]++;
        var wrapper   		= $(".r4 .c1 .input_fields_wrap .courseList"); //Fields wrapper
        x = row_column_list[3][0];
      } else if ($(this).parent().parent().attr('class')==="col-sm-4 c2") {
        row_column_list[3][1]++;
        var wrapper   		= $(".r4 .c2 .input_fields_wrap .courseList");
        x = row_column_list[3][1];
      } else if ($(this).parent().parent().attr('class')==="col-sm-4 c3") {
        row_column_list[3][2]++;
        var wrapper   		= $(".r4 .c3 .input_fields_wrap .courseList");
        x = row_column_list[3][2];
      } 
  }
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			$(wrapper).append('<input type="text" class="form-control" name="course" id="courseHolder"><br>'); //add input box <a href="#" class="remove_field">Remove</a>
		}
  });
})
