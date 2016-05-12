$("document").ready(function(){
 
  
  
//CHECKBOX **********************************************************
  
  
      $("#checkValue").html($("#checkBox").prop("checked")); 
  
      $("#checkBox").change(function(){          

        if ($("#checkBox").prop("checked")) 
        {       
           $("#checkValue").html("true");  
        }      
        else        
        {
           $("#checkValue").html("false"); 
        }      
  
      });
  
  
  
// RADIO Button *****************************************************
  

        $("#myForm").on('change', function() {        
          var radio = $('input:radio[name="gender"]:checked', '#myForm').val();
          $("#radioValue").html(radio);
        });

 
//TEXTBOX **********************************************************
  

        $("#tWords").focusout(function(){
          var words = $("#tWords").val();
          $("#textBox").html(words);
        });
  
  
//TEXTAREA ***********************************************************
  
  
      $("#tMessage").blur(function(){
          var tArea =$("#tMessage").val();
          $("#textAreaValue").html(tArea);

      });

  
//SELECT ************************************************************
  
  
        $("#mySelect").change(function(){
        var sOpt= $( "#mySelect option:selected" ).text();
        console.log(sOpt);
        $("#selectValue").html(sOpt);
        });
  
  
//EMAIL *************************************************************
  
  
      $("#mailId").blur(function(){
        var mail = $("#mailId").val();
        $("#mailValue").html(mail);
       });
  
  
//DATE *************************************************************
  
  
      $("#dateId").blur(function(){
        var date = $("#dateId").val();
        $('#dateValue').html(date);      
      });
  
  
//NUMBER ***********************************************************
  
      $("#typeNum").focusout(function(){
        var num =parseInt( $("#typeNum").val());
        $("#numValue").html(num);
        });
  
  //password********************************************************
  
  
      $("#passwordID").focusout(function(){
        var pass = $("#passwordID").val();
        $("#passwordValue").html(pass);
      });

//range*************************************************************
  

        $("#rangeId").change(function(){
          var ran = $("#rangeId").val();
          $("#rangeValue").html(ran);
        });

      
//COLOR ************************************************************
  
        $("#colorId").change(function(){          
          var color = $("#colorId").val();
          $("#colorValue").html(color);
        });

  
  });



