 function packages_list()
 {
 	$.ajax({
         url:"http://beta.zotey.com/m-api/d-packages/listing",
         type:'GET',
         dataType: 'json',
         success:function(data){
         	var load = document.getElementById("loading");
         	$(load).css('display','none');
         	var wrapper_element = document.getElementsByClassName("cust-wrapper")[0];
         	for (i=0;i<data.length;i++) 
         	{
         	
           var div_cont = document.createElement('div');
           $(div_cont).addClass("two-cont");
           $(div_cont).css('cursor','pointer');
           $(div_cont).attr('data-packageid',data[i].packageSlug);
           $(div_cont).attr('data-packagename',data[i].packageName);
           $(div_cont).attr('data-packageconsultations',data[i].consultationsCount);
           $(div_cont).on('click',function () 
           {
           	 
           	  var package_slug = $(this).data('packageid');
           	  var package_name = $(this).data('packagename');
           	  var package_consultation = $(this).data('packageconsultations');
           	  loadingimage_handler();
           	 package_details(package_slug,package_name,package_consultation);
           	});//btn click
           	
           var div_row = document.createElement('div');
           $(div_row).addClass("row pack_cont cust_pack");
           var div_col_pkg = document.createElement('div');
           $(div_col_pkg).addClass("col-md-1 pad0");
           var div_img = document.createElement('div');
           $(div_img).addClass("package_img");
           var pkg_test_name = data[i].packageName;
           var pkg_img = document.createElement('img');
           if (pkg_test_name.charAt(0) == "A") 
           {
              $(pkg_img).attr("src","images/A.png");
           }
           if (pkg_test_name.charAt(0) == "B") 
           {
              $(pkg_img).attr("src","images/B.png");
           }
           if (pkg_test_name.charAt(0) == "C") 
           {
              $(pkg_img).attr("src","images/C.png");
           }
           if (pkg_test_name.charAt(0) == "D") 
           {
              $(pkg_img).attr("src","images/D.png");
           }
           if (pkg_test_name.charAt(0) == "E") 
           {
              $(pkg_img).attr("src","images/E.png");
           }
           if (pkg_test_name.charAt(0) == "F") 
           {
              $(pkg_img).attr("src","images/F.png");
           }
           if (pkg_test_name.charAt(0) == "G") 
           {
              $(pkg_img).attr("src","images/G.png");
           }
           if (pkg_test_name.charAt(0) == "H") 
           {
              $(pkg_img).attr("src","images/H.png");
           }
           if (pkg_test_name.charAt(0) == "I") 
           {
              $(pkg_img).attr("src","images/I.png");
           }
           if (pkg_test_name.charAt(0) == "J") 
           {
              $(pkg_img).attr("src","images/J.png");
           }
           if (pkg_test_name.charAt(0) == "K") 
           {
              $(pkg_img).attr("src","images/K.png");
           }
           if (pkg_test_name.charAt(0) == "L") 
           {
              $(pkg_img).attr("src","images/L.png");
           }
           if (pkg_test_name.charAt(0) == "M") 
           {
              $(pkg_img).attr("src","images/M.png");
           }
           if (pkg_test_name.charAt(0) == "N") 
           {
              $(pkg_img).attr("src","images/N.png");
           }
           if (pkg_test_name.charAt(0) == "O") 
           {
              $(pkg_img).attr("src","images/O.png");
           }
           if (pkg_test_name.charAt(0) == "P") 
           {
              $(pkg_img).attr("src","images/P.png");
           }
           if (pkg_test_name.charAt(0) == "Q") 
           {
              $(pkg_img).attr("src","images/Q.png");
           }
           if (pkg_test_name.charAt(0) == "R") 
           {
              $(pkg_img).attr("src","images/R.png");
           }
           if (pkg_test_name.charAt(0) == "S") 
           {
              $(pkg_img).attr("src","images/S.png");
           }
           if (pkg_test_name.charAt(0) == "T") 
           {
              $(pkg_img).attr("src","images/T.png");
           }
           if (pkg_test_name.charAt(0) == "U") 
           {
              $(pkg_img).attr("src","images/U.png");
           }
           if (pkg_test_name.charAt(0) == "V") 
           {
              $(pkg_img).attr("src","images/V.png");
           }
           if (pkg_test_name.charAt(0) == "W") 
           {
              $(pkg_img).attr("src","images/W.png");
           }
           if (pkg_test_name.charAt(0) == "X") 
           {
              $(pkg_img).attr("src","images/X.png");
           }
           if (pkg_test_name.charAt(0) == "Y") 
           {
              $(pkg_img).attr("src","images/Y.png");
           }
           if (pkg_test_name.charAt(0) == "Z") 
           {
              $(pkg_img).attr("src","images/Z.png");
           } 
           var div_pkg_details = document.createElement('div');
           $(div_pkg_details).addClass("col-md-8 pad0");
           var pkg_details = document.createElement('div');
           $(pkg_details).addClass("pack_details");
           var pkg_name = document.createElement('p');
           $(pkg_name).html(data[i].packageName);
           var pkg_tests = document.createElement('h6');
           $(pkg_tests).css('float','left');
           var pkg_span = document.createElement('span');
           $(pkg_span).html("Tests Available"+"&nbsp"+":"+data[i].testCount);
           $(pkg_span).css('paddingRight','6px');
           if (data[i].testCount == "0") 
           {
           	  $(pkg_tests).css('display','none');
           }
           var pkg_consultation = document.createElement('h6');
           //$(pkg_consultation).css('float','left');
           var consult_span = document.createElement('span');
           $(consult_span).html("Consultations"+"&nbsp"+":"+data[i].consultationsCount);
           if (data[i].consultationsCount == "0") 
           {
           	 $(pkg_consultation).css('display','none');
           }
           var details_btn = document.createElement('div');
           $(details_btn).addClass("col-md-2 pad0");
           var btn_cont = document.createElement('div');
           $(btn_cont).addClass("bv_cont");
           var view_btn = document.createElement('a');
           $(view_btn).addClass("View-btn");
           $(view_btn).html("View Details");
           $(div_img).append(pkg_img);
           $(div_col_pkg).append(div_img);
           $(pkg_tests).append(pkg_span);
           $(pkg_consultation).append(consult_span);
           $(pkg_details).append(pkg_name);
           $(pkg_details).append(pkg_tests);
           $(pkg_details).append(pkg_consultation);
           $(div_pkg_details).append(pkg_details);
           $(btn_cont).append(view_btn);
           $(details_btn).append(btn_cont);
           $(div_row).append(div_col_pkg);
           $(div_row).append(div_pkg_details);
           $(div_row).append(details_btn);
           $(div_cont).append(div_row);
           $(wrapper_element).append(div_cont);
           }//for loop

                   
 }//suc fntn
 });//ajax
 }//fnctn
 window.onload = packages_list();
  function loadingimage_handler() 
   {
   	         var error_page = document.createElement('div');
               $(error_page).addClass("modal");
               $(error_page).attr('id','loading_page');
               $(error_page).css('backgroundColor','#fff');
               $(error_page).css('position','relative');
               var load_msg = document.createElement('div');
               $(load_msg).html("Please wait"+"&nbsp"+","+"&nbsp"+"while your request is being processed");
               $(load_msg).css('textAlign','center');
               var load_img = document.createElement('img');
               $(load_img).attr('id','loading_img');
               $(load_img).attr('src','images/loading.gif');
               $(load_img).css('marginLeft','256px');
                $(error_page).append(load_img);
                $(error_page).append(load_msg);
               $(error_page).modal().open();
    } 
              /*$(document).ready(function() 
               { 
                 alert("tablesorter");
                $("#myTable").tablesorter( {sortList: [[0,0], [1,0]]} ); 
                } 
                ); */
 function package_details(package_slug,package_name,package_consultation) 
 {
 	$.ajax({
         url:"http://beta.zotey.com/m-api/d-packages/package-offering-labs",
         type:'POST',
         dataType: 'json',
         data:{packageSlug:package_slug},
         success:function(data){
               console.log(data);
               var package_details_modal = document.createElement('div');
               $(package_details_modal).addClass("modal");
               $(package_details_modal).attr('id', 'modal_packages_firstpage');
               $(package_details_modal).css('position','relative');
               $(package_details_modal).css('backgroundColor','#fff');
               $(package_details_modal).css('paddingRight','0px');
               $(package_details_modal).css('width','960px');
               var close_element = document.createElement('a');
               $(close_element).addClass("close");
               $(close_element).attr('href','#');
               $(close_element).html("&times;");
               $(close_element).css('marginTop' ,'-19px');
               $(close_element).css('fontSize','26px');
               $(close_element).css('marginRight','7px');
               var head_name = document.createElement('h4');
               $(head_name).html(package_name);
               $(head_name).css('textAlign','center');
               $(head_name).css('fontSize','18px');
               $(head_name).css('fontWeight','bold');
               $(head_name).css('color','#5cb0cf');
                var offer_labs = document.createElement('div');
                 $(offer_labs).html("Offering Labs");
                 $(offer_labs).css("fontWeight","bold");
                 $(offer_labs).css("marginBottom","11px");
                 $(offer_labs).css("marginRight",'20px');
                 $(offer_labs).css("marginTop",'15px');
              var labs_table = document.createElement('table');
              $(labs_table).addClass("tablesorter");
              $(labs_table).attr("id","myTable");
              $(labs_table).css('marginRight','20px');
              $(labs_table).css('cursor','pointer');
              var table_head = document.createElement('thead');
              $(table_head).addClass("table_head");
              var labs_tr = document.createElement('tr');
               $(labs_tr).css("background", "#41A7B3");
              $(labs_tr).css("color","white");
              var labname_th = document.createElement('th');
              $(labname_th).css('border', '1px solid #ddd');
              $(labname_th).css('width','227px');
              var pkg_labname_th = document.createElement('div');
              $(pkg_labname_th).html("Lab Name");
              $(pkg_labname_th).css('padding','10px');
              $(pkg_labname_th).css('textAlign','center');
              $(pkg_labname_th).css('float','left');
             var pkg_imgs = document.createElement('div');
             $(pkg_imgs).css('float','right');
             var pkg_asc = document.createElement('div');
             var img_asc = document.createElement('img');
             $(img_asc).attr('src','images/asc.gif');
             $(img_asc).css('paddingBottom','14px');
             $(img_asc).css('paddingLeft','1px');
             var pkg_desc = document.createElement('div');
             var img_desc = document.createElement('img');
             $(img_desc).attr('src','images/desc.gif');
             $(img_desc).css('paddingTop','13px');
             $(pkg_asc).append(img_asc);
             $(pkg_desc).append(img_desc);
             $(pkg_imgs).append(pkg_desc);
             $(pkg_imgs).append(pkg_asc);
             $(labname_th).append(pkg_labname_th);
             $(labname_th).append(pkg_imgs);
              var labarea_th = document.createElement('th');
              $(labarea_th).css('border', '1px solid #ddd');
              $(labarea_th).css('width','122px');
              var pkg_labarea = document.createElement('div');
              $(pkg_labarea).html("Location");
              $(pkg_labarea).css('textAlign','center');
              $(pkg_labarea).css('float','left');
              $(pkg_labarea).css('padding','10px');
              var pkg_area_imgs = document.createElement('div');
              $(pkg_area_imgs).css('float','right');
              var pkg_area_asc = document.createElement('div');
              var pkg_area_img_asc = document.createElement('img');
              $(pkg_area_img_asc).attr('src','images/asc.gif');
              $(pkg_area_img_asc).css('paddingBottom','14px');
              $(pkg_area_img_asc).css('paddingLeft','1px');
             var pkg_area_desc = document.createElement('div');
             var pkg_area_img_desc = document.createElement('img');
             $(pkg_area_img_desc).attr('src','images/desc.gif');
             $(pkg_area_img_desc).css('paddingTop','13px');
             $(pkg_area_desc).append(pkg_area_img_desc);
             $(pkg_area_asc).append(pkg_area_img_asc);
             $(pkg_area_imgs).append(pkg_area_desc);
             $(pkg_area_imgs).append(pkg_area_asc);
             $(labarea_th).append(pkg_labarea);
             $(labarea_th).append(pkg_area_imgs);
              var labtests_th = document.createElement('th');
              $(labtests_th).css('border', '1px solid #ddd');
              var pkg_labparameters = document.createElement('div');
              $(pkg_labparameters).html("Test"+"&nbsp"+"Parameters");
              $(pkg_labparameters).css('float', 'left');
              $(pkg_labparameters).css('textAlign','center');
              $(pkg_labparameters).css('padding','10px');
              var pkg_parameters_imgs = document.createElement('div');
              $(pkg_parameters_imgs).css('float','right');
              var pkg_parameters_asc = document.createElement('div');
              var pkg_parameters_img_asc = document.createElement('img');
              $(pkg_parameters_img_asc).attr('src','images/asc.gif');
              $(pkg_parameters_img_asc).css('paddingBottom','14px');
              $(pkg_parameters_img_asc).css('paddingLeft','1px');
             var pkg_parameters_desc = document.createElement('div');
             var pkg_parameters_img_desc = document.createElement('img');
             $(pkg_parameters_img_desc).attr('src','images/desc.gif');
             $(pkg_parameters_img_desc).css('paddingTop','13px');
             $(pkg_parameters_desc).append(pkg_parameters_img_desc);
             $(pkg_parameters_asc).append(pkg_parameters_img_asc);
             $(pkg_parameters_imgs).append(pkg_parameters_desc);
             $(pkg_parameters_imgs).append(pkg_parameters_asc);
             $(labtests_th).append(pkg_labparameters);
             $(labtests_th).append(pkg_parameters_imgs);
              var labconsultations_th = document.createElement('th');
               $(labconsultations_th).css('border', '1px solid #ddd');
               $(labconsultations_th).css('width','165px');
               var pkg_labconsultations = document.createElement('div');
              $(pkg_labconsultations).html("Dr"+"&nbsp"+"Consultations");
              $(pkg_labconsultations).css('float', 'left');
              $(pkg_labconsultations).css('textAlign','center');
              $(pkg_labconsultations).css('padding','10px');
              var pkg_consultations_imgs = document.createElement('div');
              $(pkg_consultations_imgs).css('float','right');
              var pkg_consultations_asc = document.createElement('div');
              var pkg_consultations_img_asc = document.createElement('img');
              $(pkg_consultations_img_asc).attr('src','images/asc.gif');
              $(pkg_consultations_img_asc).css('paddingBottom','14px');
              $(pkg_consultations_img_asc).css('paddingLeft','1px');
             var pkg_consultations_desc = document.createElement('div');
             var pkg_consultations_img_desc = document.createElement('img');
             $(pkg_consultations_img_desc).attr('src','images/desc.gif');
             $(pkg_consultations_img_desc).css('paddingTop','13px');
             $(pkg_consultations_desc).append(pkg_consultations_img_desc);
             $(pkg_consultations_asc).append(pkg_consultations_img_asc);
             $(pkg_consultations_imgs).append(pkg_consultations_desc);
             $(pkg_consultations_imgs).append(pkg_consultations_asc);
             $(labconsultations_th).append(pkg_labconsultations);
             $(labconsultations_th).append(pkg_consultations_imgs);
              var labprice_th = document.createElement('th');
              $(labprice_th).css('border', '1px solid #ddd');
              var pkg_labprice = document.createElement('div');
              $(pkg_labprice).html("Price");
              $(pkg_labprice).css('float', 'left');
              $(pkg_labprice).css('textAlign','center');
              $(pkg_labprice).css('padding','10px');
              var pkg_labprice_imgs = document.createElement('div');
              $(pkg_labprice_imgs).css('float','right');
              var pkg_price_asc = document.createElement('div');
              var pkg_price_img_asc = document.createElement('img');
              $(pkg_price_img_asc).attr('src','images/asc.gif');
              $(pkg_price_img_asc).css('paddingBottom','14px');
              $(pkg_price_img_asc).css('paddingLeft','1px');
             var pkg_price_desc = document.createElement('div');
             var pkg_price_img_desc = document.createElement('img');
             $(pkg_price_img_desc).attr('src','images/desc.gif');
             $(pkg_price_img_desc).css('paddingTop','13px');
             $(pkg_price_desc).append(pkg_price_img_desc);
             $(pkg_price_asc).append(pkg_price_img_asc);
             $(pkg_labprice_imgs).append(pkg_price_desc);
             $(pkg_labprice_imgs).append(pkg_price_asc);
             $(labprice_th).append(pkg_labprice);
             $(labprice_th).append(pkg_labprice_imgs);
             var labdiscount_th = document.createElement('th');
              $(labdiscount_th).css('border', '1px solid #ddd');
               var pkg_labdiscount = document.createElement('div');
              $(pkg_labdiscount).html("Discount");
              $(pkg_labdiscount).css('float', 'left');
              $(pkg_labdiscount).css('textAlign','center');
              $(pkg_labdiscount).css('padding','10px');
              var pkg_labdiscount_imgs = document.createElement('div');
              $(pkg_labdiscount_imgs).css('float','right');
              var pkg_discount_asc = document.createElement('div');
              var pkg_discount_img_asc = document.createElement('img');
              $(pkg_discount_img_asc).attr('src','images/asc.gif');
              $(pkg_discount_img_asc).css('paddingBottom','14px');
              $(pkg_discount_img_asc).css('paddingLeft','1px');
             var pkg_discount_desc = document.createElement('div');
             var pkg_discount_img_desc = document.createElement('img');
             $(pkg_discount_img_desc).attr('src','images/desc.gif');
             $(pkg_discount_img_desc).css('paddingTop','13px');
             $(pkg_discount_desc).append(pkg_discount_img_desc);
             $(pkg_discount_asc).append(pkg_discount_img_asc);
             $(pkg_labdiscount_imgs).append(pkg_discount_desc);
             $(pkg_labdiscount_imgs).append(pkg_discount_asc);
             $(labdiscount_th).append(pkg_labdiscount);
             $(labdiscount_th).append(pkg_labdiscount_imgs);
              var book_th = document.createElement('th');
              $(book_th).html("Details");
              $(book_th).css('textAlign','center');
               $(labs_tr).append(labname_th);
              $(labs_tr).append(labarea_th);
              $(labs_tr).append(labtests_th);
              $(labs_tr).append(labconsultations_th);
              $(labs_tr).append(labprice_th);
              $(labs_tr).append(labdiscount_th);
              $(labs_tr).append(book_th);
              $(table_head).append(labs_tr);
              $(labs_table).append(table_head);	
              for (i=0; i<data.length; i++) 
              {
              	 var lab_details_tr = document.createElement('tr');
              	  $(lab_details_tr).attr('id','deal_data');
              	 var labname_td = document.createElement('td');
              	 $(labname_td).html(data[i].labName);
              	 $(labname_td).css('border', '1px solid #ddd');
              	 $(labname_td).css('padding-left','6px');
              	 $(labname_td).css('padding-right','6px');
              	 var labarea_td = document.createElement('td');
              	 $(labarea_td).html(data[i].labArea);
              	 $(labarea_td).css('border', '1px solid #ddd');
              	 $(labarea_td).css('padding-left','6px');
              	 var labtests_td = document.createElement('td');
              	 $(labtests_td).html(data[i].offeringTestsCount);
              	 $(labtests_td).css('border', '1px solid #ddd');
              	 $(labtests_td).css('textAlign','right');
              	 $(labtests_td).css('padding-left','6px');
              	 $(labtests_td).css('paddingRight','6px');
              	 var consultations_td = document.createElement('td');
              	 $(consultations_td).html(package_consultation);
              	 $(consultations_td).css('border', '1px solid #ddd');
              	 $(consultations_td).css('textAlign','right');
              	 $(consultations_td).css('padding-left','6px');
              	 $(consultations_td).css('paddingRight','6px');
              	 var price_td = document.createElement('td');
              	 var div_td = document.createElement('div');
                $(div_td).html(data[i].labFinalPrice+"&nbsp"+"(");
              	 $(price_td).css('border', '1px solid #ddd');
              	 $(div_td).css('float','left');
              	 $(price_td).css('padding-left',	'9px');
              	 var fp = document.createElement('div');
              	 var finalprice = document.createElement('div');
              	 $(finalprice).html(data[i].labMRP);
              	 $(finalprice).css('textDecoration','line-through');
              	 $(finalprice).css('color','rgb(236,73,73)');
              	 $(finalprice).css('position','relative');
              	 $(finalprice).css('float','left');
              	 var close_bracket = document.createElement('div');
              	 $(close_bracket).html(")");
              	 $(close_bracket).css('position','relative');
              	 $(fp).append(finalprice);
              	 $(fp).append(close_bracket);
              	 $(price_td).append(div_td);
              	 $(price_td).append(fp);
              	 var discount_td = document.createElement('td');
              	 $(discount_td).html(data[i].labDiscount+"%");
              	 $(discount_td).css('border', '1px solid #ddd');
              	 $(discount_td).css('padding','6px');
              	 $(discount_td).css('textAlign','right');
              	 var book_td = document.createElement('td');
              	 $(book_td).css('paddingLeft','6px');
              	 $(book_td).css('paddingRight','6px');
              	 $(book_td).css('border', '1px solid #ddd');
              	 var book_div = document.createElement('div');
              	 $(book_div).html("View");
              	 $(book_div).css("background","#ea494f");
              	 $(book_div).css('borderRadius','5px');
              	 $(book_div).css("color","white");
              	 $(book_div).css("fontSize","12px");
              	 $(book_div).css("paddingLeft","8px");
              	 $(book_td).append(book_div);
              	 $(lab_details_tr).append(labname_td);
                $(lab_details_tr).append(labarea_td);
                $(lab_details_tr).append(labtests_td);
                $(lab_details_tr).append(consultations_td);
                $(lab_details_tr).append(price_td);
                $(lab_details_tr).append(discount_td);
                $(lab_details_tr).append(book_td);
                 $(labs_table).append(lab_details_tr);
                 $(lab_details_tr).on('click',function () 
                 {
                 	 alert("package details");
                 	});//click
              	}  
                $(labs_tr).on('click',function () 
                {
                	   $("#myTable").tablesorter( {sortList: [[0,1], [1,0],[4,0]]} ); 
                	});
               var close_button = document.createElement('button');
               $(close_button).html("Close");
               $(close_button).css("background" ,"#ea494f");
               $(close_button).css('color','white');
               $(close_button).css('border','0px');
               $(close_button).css('marginTop','16px');
               $(close_button).css('marginRight','23px');
               $(close_button).css('borderRadius','5px');
               $(package_details_modal).append(close_element);
               $(package_details_modal).append(head_name);
               $(package_details_modal).append(offer_labs);
               $(package_details_modal).append(labs_table);
               $(package_details_modal).append(close_button);
                 $(close_element).on('click',function () 
                 {
                 	 
               	  $(package_details_modal).modal().close(); 
                 });//click
                 $(close_button).on('click',function () 
                 {
                 	 
               	  $(package_details_modal).modal().close(); 
                 });//click
                $(package_details_modal).modal().open();
 }
 });
 }
 