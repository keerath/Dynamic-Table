
			$(document).ready(function () {
			var userInput = $("#userInput");

				$("#table th").each(function(){	

					var temp = $(this).text().trim();
					userInput.append("<h5 align = 'left'>&nbsp;Enter " + temp + ":&nbsp;"+"<input  class = 'form-control up'  align='left' type='text' placeholder='"+temp+"'/></h5>");
					temp =" ";
					
				});
				
				$("#info").append("<button type = 'button' title = 'Add Records'  class = 'glyphicon glyphicon-plus-sign btn btn-info btn-sm highlight ' id='update'  >&nbsp;Add</buttton> ");
				
				
			
			
					//"td").dblclick(edit);
					
			$("#table").on('dblclick','td',function(event){
				
				event.preventDefault();
				var elem;
				var init = $(this).text().trim();
				elem = $(this);
				
				$(this).html('<input id= "in" type= "text" value="'+init + '" />');
				$(this).children().first().focus();
			
				$(document).on({
					keypress: function(event)
				{
					if(event.which == 13){
						elem.text(elem.children().val());
					}
				},
					click: function(event)
					{	
						if(event.target.tagName != "INPUT")
						{
							elem.text(elem.children().val());
						}
					}
				});
			
		});
		
					$("#update").bind("click",function(event){
						
					event.preventDefault();
					$("table").append("<tr> </tr>")
					$(".up").each(function(){

						$("tr:last").append("<td>" + $(this).val() + "</td>");
					});
					$(".up").each(function(){

						$(this).val("");

					});
					$("input:first").focus();
					//$("td").dblclick(edit);
					
				});
					userInput.bind("keypress",function(event){
						if(event.which == 13)
						{
							$("#update").click();
						}
					});
				
					

			
		
			
			/*$(function(){
				$("#del").click(function(){
					alert("select row");
					$("tr").click(function(){
						$(this).remove();
					});
				});
			});
		*/
			
				/*$("#field").click(function(event){
					event.preventDefault();
					$("div").append("<input id='enter' type='text' value= 'Enter A Field' /> ");
					$("#enter").focus();
					$()

					$("tr:first").append("<th>"+$("#enter").val()+"</th>");
					for(var i=1;i<($("#table tr").length);i++)
					{
						$("tr:eq("+i+")").append("<td>&nbsp;</td>");
						//$("td").dblclick(edit);
					}
					//$("th").dblclick(edit);

				});*/
			
			/*
			$(function(){
				$("#delcol").click(function(event){
					event.preventDefault();
					alert("Click on the field you want to delete");
					var cells=$("#table tr td").length;
					var rows=$("#table tr").length;
					$("th").click(function(){
						var index=$(this).index();
						$('tr', '#table').find('td:eq(' + index + '), th:eq(' + index + ')').remove();
						
					});
				});
			});
		*/
		
			var pos;
			$("#selectRows").bind("click",function(){
				$("#table td").unbind("click").bind("click",function(event){
					var row=$(this).parent();	
					row.children().toggleClass("selectrow");
				});
				$("#table th").unbind("click").bind("click",function(event){
					 pos=$(this).index();

					$('tr').find('td:eq(' + pos + '), th:eq(' + pos + ')').toggleClass("selectcol");
				});
			});

			
				$("#confirm").click(function(){
					if($(".selectrow").length == 0 && $(".selectcol").length == 0)
					{
						alert("Please Select Rows or Fields");
					}
					else
					{
						if($(".selectcol").length!=0){
					$("#userInput h5").remove(":contains('"+$("th.selectcol").text().trim()+"')");
					$("td.selectcol,th.selectcol").remove();
				}
					else if($(".selectrow").length!=0){
					$("td.selectrow").parent().remove();
				}
				}
				});
				
			$("#newCol").click(function(){
				var temp;
				var txt;
				console.log($("tr:first"));
				$("#table tr").each(function(){
							

					if($(this).is($("tr#headContainer")))
					{		
						$(this).append("<th class='newfield'><input class='inpBox' type='text' value='&nbsp;' ></th>");
					}
					else
					{
						$(this).append("<td class='newfield'><input class='inpBox' type='text' value='&nbsp;'></td>");
					}
				});			
						
					$("td:last-child").children().bind("keypress",function(event){
						if(event.which==13){
						$("#table tr").each(function(){	
							txt = $(this).children().last().children().val();
							$(this).children().last().text(txt);
							
						});
						temp=$("tr:first").children().last().text();
					userInput.append("<h5 align = 'left'>&nbsp;Enter " + temp + ":&nbsp;"+"<input  class = 'form-control up'  align='left' type='text' placeholder='"+temp+"'/></h5>");
					}
					
					});
				});
				
	});
			