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
           $(div_cont).addClass("two_cont");
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
           	 package_list(package_slug,package_name,package_consultation);
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
              $(pkg_img).attr("src","images/a.png");
           }
           if (pkg_test_name.charAt(0) == "B") 
           {
              $(pkg_img).attr("src","images/b.png");
           }
           if (pkg_test_name.charAt(0) == "C") 
           {
              $(pkg_img).attr("src","images/c.png");
           }
           if (pkg_test_name.charAt(0) == "D") 
           {
              $(pkg_img).attr("src","images/d.png");
           }
           if (pkg_test_name.charAt(0) == "E") 
           {
              $(pkg_img).attr("src","images/e.png");
           }
           if (pkg_test_name.charAt(0) == "F") 
           {
              $(pkg_img).attr("src","images/f.png");
           }
           if (pkg_test_name.charAt(0) == "G") 
           {
              $(pkg_img).attr("src","images/g.png");
           }
           if (pkg_test_name.charAt(0) == "H") 
           {
              $(pkg_img).attr("src","images/h.png");
           }
           if (pkg_test_name.charAt(0) == "I") 
           {
              $(pkg_img).attr("src","images/i.png");
           }
           if (pkg_test_name.charAt(0) == "J") 
           {
              $(pkg_img).attr("src","images/j.png");
           }
           if (pkg_test_name.charAt(0) == "K") 
           {
              $(pkg_img).attr("src","images/k.png");
           }
           if (pkg_test_name.charAt(0) == "L") 
           {
              $(pkg_img).attr("src","images/l.png");
           }
           if (pkg_test_name.charAt(0) == "M") 
           {
              $(pkg_img).attr("src","images/m.png");
           }
           if (pkg_test_name.charAt(0) == "N") 
           {
              $(pkg_img).attr("src","images/n.png");
           }
           if (pkg_test_name.charAt(0) == "O") 
           {
              $(pkg_img).attr("src","images/o.png");
           }
           if (pkg_test_name.charAt(0) == "P") 
           {
              $(pkg_img).attr("src","images/p.png");
           }
           if (pkg_test_name.charAt(0) == "Q") 
           {
              $(pkg_img).attr("src","images/q.png");
           }
           if (pkg_test_name.charAt(0) == "R") 
           {
              $(pkg_img).attr("src","images/r.png");
           }
           if (pkg_test_name.charAt(0) == "S") 
           {
              $(pkg_img).attr("src","images/s.png");
           }
           if (pkg_test_name.charAt(0) == "T") 
           {
              $(pkg_img).attr("src","images/t.png");
           }
           if (pkg_test_name.charAt(0) == "U") 
           {
              $(pkg_img).attr("src","images/u.png");
           }
           if (pkg_test_name.charAt(0) == "V") 
           {
              $(pkg_img).attr("src","images/v.png");
           }
           if (pkg_test_name.charAt(0) == "W") 
           {
              $(pkg_img).attr("src","images/w.png");
           }
           if (pkg_test_name.charAt(0) == "X") 
           {
              $(pkg_img).attr("src","images/x.png");
           }
           if (pkg_test_name.charAt(0) == "Y") 
           {
              $(pkg_img).attr("src","images/y.png");
           }
           if (pkg_test_name.charAt(0) == "Z") 
           {
              $(pkg_img).attr("src","images/z.png");
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
 function package_list(package_slug,package_name,package_consultation) 
 {
 	$.ajax({
         url:"http://beta.zotey.com/m-api/d-packages/package-offering-labs",
         type:'POST',
         dataType: 'json',
         data:{packageSlug:package_slug},
         success:function(data)
         {
               console.log(data);
                var pkg_dataToStore = JSON.stringify(data);
             localStorage.setItem('pkg_someData',pkg_dataToStore);
               var package_list_modal = document.createElement('div');
               $(package_list_modal).addClass("modal");
               $(package_list_modal).attr('id', 'modal_packages_firstpage');
               $(package_list_modal).css('position','relative');
               $(package_list_modal).css('backgroundColor','#fff');
               $(package_list_modal).css('paddingRight','0px');
               $(package_list_modal).css('width','818px');
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
             $(img_asc).attr('src','images/table_sorter_asc.png');
             $(img_asc).css('paddingBottom','14px');
             $(img_asc).css('paddingLeft','1px');
             var pkg_desc = document.createElement('div');
             var img_desc = document.createElement('img');
             $(img_desc).attr('src','images/table_sorter_desc.png');
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
              $(pkg_area_img_asc).attr('src','images/table_sorter_asc.png');
              $(pkg_area_img_asc).css('paddingBottom','14px');
              $(pkg_area_img_asc).css('paddingLeft','1px');
             var pkg_area_desc = document.createElement('div');
             var pkg_area_img_desc = document.createElement('img');
             $(pkg_area_img_desc).attr('src','images/table_sorter_desc.png');
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
              $(pkg_parameters_img_asc).attr('src','images/table_sorter_asc.png');
              $(pkg_parameters_img_asc).css('paddingBottom','14px');
              $(pkg_parameters_img_asc).css('paddingLeft','1px');
             var pkg_parameters_desc = document.createElement('div');
             var pkg_parameters_img_desc = document.createElement('img');
             $(pkg_parameters_img_desc).attr('src','images/table_sorter_desc.png');
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
              $(pkg_price_img_asc).attr('src','images/table_sorter_asc.png');
              $(pkg_price_img_asc).css('paddingBottom','14px');
              $(pkg_price_img_asc).css('paddingLeft','1px');
             var pkg_price_desc = document.createElement('div');
             var pkg_price_img_desc = document.createElement('img');
             $(pkg_price_img_desc).attr('src','images/table_sorter_desc.png');
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
              $(pkg_discount_img_asc).attr('src','images/table_sorter_asc.png');
              $(pkg_discount_img_asc).css('paddingBottom','14px');
              $(pkg_discount_img_asc).css('paddingLeft','1px');
             var pkg_discount_desc = document.createElement('div');
             var pkg_discount_img_desc = document.createElement('img');
             $(pkg_discount_img_desc).attr('src','images/table_sorter_desc.png');
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
              $(book_th).css('padding','10px');
               $(labs_tr).append(labname_th);
              $(labs_tr).append(labarea_th);
              $(labs_tr).append(labtests_th);
              $(labs_tr).append(labprice_th);
              $(labs_tr).append(labdiscount_th);
              $(labs_tr).append(book_th);
              $(table_head).append(labs_tr);
              $(labs_table).append(table_head);	
              for (i=0; i<data.length; i++) 
              {
              	 var lab_details_tr = document.createElement('tr');
              	  $(lab_details_tr).attr('id','deal_data');
              	 $(lab_details_tr).attr('data-package_labslug',data[i].labSlug);
              	 $(lab_details_tr).attr('data-package_selectedlabname',data[i].labName);
              	 $(lab_details_tr).attr('data-package_selectedlabarea',data[i].labArea);
              	 $(lab_details_tr).attr('data-package_selectedprice',data[i].labFinalPrice);
              	 $(lab_details_tr).attr('data-package_selectedmrp',data[i].labMRP);
              	 $(lab_details_tr).attr('data-package_selecteddiscount',data[i].labDiscount);
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
              	 $(labtests_td).css('textAlign','center');
              	 $(labtests_td).css('padding-left','6px');
              	 $(labtests_td).css('paddingRight','6px');
              	 var price_td = document.createElement('td');
              	 var div_td = document.createElement('div');
                $(div_td).html(data[i].labFinalPrice+"&nbsp"+"(");
              	 $(price_td).css('border', '1px solid #ddd');
              	 $(div_td).css('float','left');
              	 $(price_td).css('padding-left',	'9px');
              	  if(data[i].labFinalPrice.length == "3" && data[i].labMRP.length =="3")
              	  {
              	    $(price_td).css('padding-left',	'24px');
              	  }  
              	  if((data[i].labFinalPrice.length == "3" && data[i].labMRP.length =="4") || (data[i].labFinalPrice.length == "4" && data[i].labMRP.length =="3"))
                 {
                   $(price_td).css('padding-left',	'19px');
                 }  
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
              	 $(discount_td).css('textAlign','center');
              	 var book_td = document.createElement('td');
              	 $(book_td).css('paddingLeft','6px');
              	 $(book_td).css('paddingRight','6px');
              	 $(book_td).css('border', '1px solid #ddd');
              	 var book_div = document.createElement('div');
              	 //$(book_div).html("View");
              	 $(book_div).addClass("view_btn");
              	 $(book_div).css("background","#ea494f");
              	 $(book_div).css('borderRadius','5px');
              	 $(book_div).css("color","white");
              	 //$(book_div).css("fontSize","11px");
              	 //$(book_div).css('width','36px');
              	 //$(book_div).css("paddingLeft","5px");
              	 //$(book_div).css("paddingRight","5px");
              	 $(book_div).css('border','0px');
              	 $(book_div).css('height','18px');
              	 $(book_div).css('width','32px');
              	 $(book_div).css('marginLeft','10px');
              	 var book_view_div = document.createElement('div');
              	 $(book_view_div).html("View");
              	 $(book_view_div).css('fontSize','10px');
              	 $(book_view_div).css('height','16px');
              	 $(book_view_div).css('paddingTop','2px');
              	 $(book_view_div).css('paddingLeft','5px');
              	 $(book_view_div).css('paddingRight','5px');
              	 $(book_div).append(book_view_div);
              	 $(book_td).append(book_div);
              	 $(lab_details_tr).append(labname_td);
                $(lab_details_tr).append(labarea_td);
                $(lab_details_tr).append(labtests_td);
                $(lab_details_tr).append(price_td);
                $(lab_details_tr).append(discount_td);
                $(lab_details_tr).append(book_td);
                 $(labs_table).append(lab_details_tr);
                 $(lab_details_tr).on('click',function () 
                 {
                 	 
                 	 loadingimage_handler();
                 	 var package_labslug = $(this).data('package_labslug');
                 	 var package_labname = $(this).data('package_selectedlabname');
                 	 var package_finalprice = $(this).data('package_selectedprice');
                 	 var package_discount = $(this).data('package_selecteddiscount');
                 	 var package_mrp = $(this).data('package_selectedmrp');
                 	 var package_labarea = $(this).data('package_selectedlabarea');
                 	 pkg_test_details(package_labslug,package_slug,package_name,package_consultation,package_labname,package_finalprice,package_discount,package_labarea,package_mrp);
                 	});//click
              	}//for data length  
                $(labs_tr).on('click',function () 
                {
                	   $("#myTable").tablesorter({sortList: [[0,1], [1,0],[4,0]]}); 
                	});
               var close_button = document.createElement('button');
               $(close_button).html("Close");
               $(close_button).css("background" ,"#ea494f");
               $(close_button).css('color','white');
               $(close_button).css('border','0px');
               $(close_button).css('marginTop','16px');
               $(close_button).css('marginRight','23px');
               $(close_button).css('borderRadius','5px');
               $(close_button).css('width','60px');
               $(package_list_modal).append(close_element);
               $(package_list_modal).append(head_name);
               $(package_list_modal).append(offer_labs);
               $(package_list_modal).append(labs_table);
               $(package_list_modal).append(close_button);
                 $(close_element).on('click',function () 
                 {
                 	 
               	  $(package_list_modal).modal().close(); 
                 });//click
                 $(close_button).on('click',function () 
                 {
                 	 
               	  $(package_list_modal).modal().close(); 
                 });//click
                $(package_list_modal).modal().open();
 }//success fnctn
 });//ajax
 }//fnctn handler
 
 
 function pkg_test_details(package_labslug,package_slug,package_name,package_consultation,package_labname,package_finalprice,package_discount,package_labarea,package_mrp)
 {
 	 $.ajax({
         url:"http://beta.zotey.com/m-api/d-packages/lab-package-info",
         type:'POST',
         dataType: 'json',
         data:{packageSlug:package_slug,labSlug:package_labslug},
         success:function(data)
         {
         	console.log(data);
         	var pkg_lab_dataToStore = JSON.stringify(data);
             localStorage.setItem('pkg_labData',pkg_lab_dataToStore);
               var package_test_modal = document.createElement('div');
               $(package_test_modal).addClass("modal");
               $(package_test_modal).attr('id', 'modal_packages_firstpage');
               $(package_test_modal).css('position','relative');
               $(package_test_modal).css('backgroundColor','#fff');
               $(package_test_modal).css('paddingRight','0px');
               var pkg_test_close = document.createElement('a');
               $(pkg_test_close).addClass("close");
               $(pkg_test_close).attr('href','#');
               $(pkg_test_close).html("&times;");
               $(pkg_test_close).css('marginTop' ,'-19px');
               $(pkg_test_close).css('fontSize','26px');
               $(pkg_test_close).css('marginRight','7px');
               var pkg_test_name = document.createElement('h4');
              $(pkg_test_name).html(data.packageName);
               $(pkg_test_name).css('textAlign','center');
               $(pkg_test_name).css('fontSize','18px');
               $(pkg_test_name).css('fontWeight','bold');
               $(pkg_test_name).css('color','#5cb0cf');
               var pkg_test_details = document.createElement('div');
               var pkg_labinfo_price = document.createElement('div');
               $(pkg_labinfo_price).html("Price & Lab Information");
               $(pkg_labinfo_price).css('background','#41A7B3');
               $(pkg_labinfo_price).css('color','white');
               $(pkg_labinfo_price).css('fontWeight','bold');
               $(pkg_labinfo_price).css('paddingLeft','6px');
               $(pkg_labinfo_price).css('marginTop','16px');
               $(pkg_labinfo_price).css('marginRight','20px');
               var pkg_lab_mrp  = document.createElement('div');
               $(pkg_lab_mrp).css('marginRight','20px');
               $(pkg_lab_mrp).css('paddingLeft','6px');
               $(pkg_lab_mrp).css('paddingRight','6px');
               $(pkg_lab_mrp).css('paddingTop','3px');
               $(pkg_lab_mrp).css('height','20px');
               var pkg_labname_info = document.createElement('div');
                $(pkg_labname_info).html(data.labName);
               $(pkg_labname_info).css('float','left');
               $(pkg_labname_info).css('width','290px');
               var pkg_mrp_info = document.createElement('div');
               $(pkg_mrp_info).css('float','right'); 
               var pkg_mrp_data = document.createElement('div');
                $(pkg_mrp_data).css('float','left');
               var pkg_Mrp = document.createElement('div');
               $(pkg_Mrp).html(data.packageMRP);
               $(pkg_Mrp).addClass("fa fa-inr");
               $(pkg_Mrp).css('textDecoration','line-through');
               $(pkg_Mrp).css('paddingTop','3px');
               $(pkg_Mrp).css('float','left');
                $(pkg_Mrp).css('width','27px');
               if (data.packageMRP.length == "4")
              {
               $(pkg_Mrp).css('paddingRight','46px');
              }
              else 
              {
                $(pkg_Mrp).css('paddingRight','36px');
              }
              
              
               $(pkg_mrp_data).append(pkg_Mrp);
               var pkg_Mrp_element = document.createElement('div'); 
               $(pkg_Mrp_element).html("&nbsp"+"-"+"&nbsp"+"&nbsp"+"Max"+"&nbsp"+"Retail"+"&nbsp"+"Price");
              	$(pkg_Mrp_element).css('fontSize','12px');
              	$(pkg_Mrp_element).css('float','right');
              	 var pkg_address_finalprice  = document.createElement('div');
               $(pkg_address_finalprice).css('marginRight','20px');
               $(pkg_address_finalprice).css('width','554px');
               $(pkg_address_finalprice).css('paddingLeft','6px');
               if (data.labAddress.length <= "30") 
               {
               $(pkg_address_finalprice).css('height','60px');
               }
               else if (data.labAddress.length <= "60") 
               {
               	$(pkg_address_finalprice).css('height','80px');
               }
               else  if (data.labAddress.length <= "90")
                {
               	$(pkg_address_finalprice).css('height','100px');
               }
               else if (data.labAddress.length <= "120")
                {
               	$(pkg_address_finalprice).css('height','120px');
               }
               var pkg_address_location =document.createElement('div');
               $(pkg_address_location).css('float','left'); 
               $(pkg_address_location).css('width','264px');
               $(pkg_address_location).css('marginRight','100px');
               var pkg_address_img = document.createElement('div');
               $(pkg_address_img).css('float','left');
               $(pkg_address_img).css('width','12px');
               var pkg_address_img_loc = document.createElement('img');
               $(pkg_address_img_loc).attr('src','images/location-bi.png');
               $(pkg_address_img_loc).css('height','17px');
               $(pkg_address_img).append(pkg_address_img_loc);
               $(pkg_address_location).append(pkg_address_img);
               var pkg_labaddress_info = document.createElement('div');
               $(pkg_labaddress_info).css('float','right');
               $(pkg_labaddress_info).css('width','246px');
                var pkg_labaddress_info_left = document.createElement('div');
                $(pkg_labaddress_info_left).html(data.labAddress+","+"&nbsp"+"&nbsp");
                $(pkg_labaddress_info_left).css('float','left');
                $(pkg_labaddress_info_left).css('width','216px');
                var pkg_labaddress_info_right = document.createElement('div');
                $(pkg_labaddress_info_right).html(data.labArea+","+"&nbsp"+data.labPincode);
                $(pkg_labaddress_info_right).css('float','right');
                $(pkg_labaddress_info_right).css('width','263px');
                $(pkg_labaddress_info).append(pkg_labaddress_info_left);
                $(pkg_labaddress_info).append(pkg_labaddress_info_right);
               var pkg_finalprice_info = document.createElement('div');
               $(pkg_finalprice_info).css('float','right'); 
               $(pkg_finalprice_info).css('width','169px');
               $(pkg_finalprice_info).css('paddingRight','6px');
               var pkg_finalprice = document.createElement('div');
               $(pkg_finalprice).css('float','left');
               if (data.packageDiscount.length == "2") 
               {
               $(pkg_finalprice).css('paddingLeft','70px');
               }
               else
               {
               	$(pkg_finalprice).css('paddingLeft','78px');
               }  
               var pkg_finalprice_left = document.createElement('div');
               $(pkg_finalprice_left).html(data.packageDiscount+"%"+"&nbsp"+"&nbsp");
               $(pkg_finalprice_left).css('float','left');
               $(pkg_finalprice_left).css('color','rgb(236,73,73)');
               var pkg_finalprice_right = document.createElement('div');
               $(pkg_finalprice_right).html("-"+"&nbsp"+"Discount");
               $(pkg_finalprice_right).css('float','right');
               $(pkg_finalprice_right).css('fontSize','12px');
               $(pkg_finalprice).append(pkg_finalprice_left);
               $(pkg_finalprice).append(pkg_finalprice_right);
               var pkg_finalprice_element = document.createElement('div');
              	$(pkg_finalprice_element).css('float','right');
              	var pkg_finalprice_element_left = document.createElement('div');
              	$(pkg_finalprice_element_left).addClass("fa fa-inr");
              	$(pkg_finalprice_element_left).html(data.packageFinalPrice+"&nbsp");
              	$(pkg_finalprice_element_left).css('float','left');
              	$(pkg_finalprice_element_left).css('color','rgb(236,73,73)');
              	$(pkg_finalprice_element_left).css('paddingTop','2px');
               var pkg_finalprice_element_right = document.createElement('div');
               $(pkg_finalprice_element_right).css('fontSize','12px');
               $(pkg_finalprice_element_right).html("-"+"&nbsp"+"&nbsp"+"Final Offering Price");
               $(pkg_finalprice_element_right).css('float','right');
               $(pkg_finalprice_element).append(pkg_finalprice_element_left);
               $(pkg_finalprice_element).append(pkg_finalprice_element_right); 
               
              /* var pkg_details_table = document.createElement('table');
               $(pkg_details_table).css('float','left');
               $(pkg_details_table).css('marginRight','120px');
               var pkg_details_lab_tr = document.createElement('tr');
               var pkg_details_lab_td = document.createElement('td');
               $(pkg_details_lab_td).html(data.labName);
               var pkg_details_loc_tr = document.createElement('tr');
               var pkg_details_loc_td = document.createElement('td');
               var pkg_address_img = document.createElement('div');
               $(pkg_address_img).css('float','left');
               $(pkg_address_img).css('width','12px');
               var pkg_address_img_loc = document.createElement('img');
               $(pkg_address_img_loc).attr('src','images/location-bi.png');
               $(pkg_address_img_loc).css('height','17px');
                //$(pkg_address_location).append(pkg_address_img);
               var pkg_labaddress_info = document.createElement('div');
               $(pkg_labaddress_info).css('float','right');
               $(pkg_labaddress_info).css('width','248px');
                var pkg_labaddress_info_left = document.createElement('div');
                $(pkg_labaddress_info_left).html(data.labAddress+","+"&nbsp"+"&nbsp");
                $(pkg_labaddress_info_left).css('float','left');
                $(pkg_labaddress_info_left).css('width','216px');
                var pkg_labaddress_info_right = document.createElement('div');
                $(pkg_labaddress_info_right).html(data.labArea+","+"&nbsp"+data.labPincode);
                $(pkg_labaddress_info_right).css('float','right');
                $(pkg_labaddress_info_right).css('width','251px');
                $(pkg_labaddress_info).append(pkg_labaddress_info_left);
                $(pkg_labaddress_info).append(pkg_labaddress_info_right);
                $(pkg_address_img).append(pkg_address_img_loc);
               $(pkg_details_loc_td).append(pkg_address_img);
               $(pkg_details_loc_td).append(pkg_labaddress_info);
               $(pkg_details_lab_tr).append(pkg_details_lab_td);
               $(pkg_details_loc_tr).append(pkg_details_loc_td);
               $(pkg_details_table).append(pkg_details_lab_tr);
               $(pkg_details_table).append(pkg_details_loc_tr);*/
               /*var pkg_test_price_table = document.createElement('table');
               $(pkg_test_price_table).css('float','right');
               $(pkg_test_price_table).css('width','175px');
               $(pkg_test_price_table).css('marginRight','20px'); 
               var pkg_mrp_data_tr = document.createElement('tr');
               var pkg_mrp_data_td = document.createElement('td');
               var pkg_Mrp = document.createElement('div');
               $(pkg_Mrp).html(data.packageMRP);
               $(pkg_Mrp).addClass("fa fa-inr");
               $(pkg_Mrp).css('textDecoration','line-through');
               $(pkg_Mrp).css('paddingTop','3px');
               $(pkg_Mrp).css('float','left');
               if (data.packageMRP.length == "4")
              {
               $(pkg_Mrp).css('paddingLeft','11px');
              }
              else 
              {
                $(pkg_Mrp).css('paddingLeft','21px');
              }
              
              
              // $(pkg_mrp_data).append(pkg_Mrp);
               var pkg_Mrp_element = document.createElement('div'); 
               $(pkg_Mrp_element).html("&nbsp"+"-"+"&nbsp"+"&nbsp"+"Max"+"&nbsp"+"Retail"+"&nbsp"+"Price"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp");
              	$(pkg_Mrp_element).css('fontSize','12px');
              	$(pkg_Mrp_element).css('float','right');
              	$(pkg_mrp_data_td).append(pkg_Mrp);
              	$(pkg_mrp_data_td).append(pkg_Mrp_element);
              	$(pkg_mrp_data_tr).append(pkg_mrp_data_td);
              	$(pkg_test_price_table).append(pkg_mrp_data_tr);
              	/* var pkg_address_finalprice  = document.createElement('div');
               $(pkg_address_finalprice).css('marginRight','20px');
               $(pkg_address_finalprice).css('width','554px');
               $(pkg_address_finalprice).css('paddingLeft','6px');*/
              /* var pkg_finalprice_element_tr = document.createElement('tr');
              	//$(pkg_finalprice_element).css('float','right');
              	var pkg_finalprice_element_td = document.createElement('td');
              	var pkg_finalprice_element_left = document.createElement('div');
              	$(pkg_finalprice_element_left).addClass("fa fa-inr");
              	$(pkg_finalprice_element_left).html(data.packageFinalPrice+"&nbsp");
              	$(pkg_finalprice_element_left).css('float','left');
              	$(pkg_finalprice_element_left).css('color','rgb(236,73,73)');
              	$(pkg_finalprice_element_left).css('paddingTop','2px');
              	if (data.packageFinalPrice.length == "3") 
              	{
              		 $(pkg_finalprice_element_left).css('paddingLeft','6px');
               }
               var pkg_finalprice_element_right = document.createElement('div');
               $(pkg_finalprice_element_right).css('fontSize','12px');
               $(pkg_finalprice_element_right).html("-"+"&nbsp"+"&nbsp"+"Final Offering Price"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp");
               $(pkg_finalprice_element_right).css('float','right');
               $(pkg_finalprice_element_td).append(pkg_finalprice_element_left);
               $(pkg_finalprice_element_td).append(pkg_finalprice_element_right);
               $(pkg_finalprice_element_tr).append(pkg_finalprice_element_td);
               var pkg_discount_element_tr = document.createElement('tr');
               var pkg_discount_element_td = document.createElement('td');
               var pkg_discount_left = document.createElement('div');
               $(pkg_discount_left).html(data.packageDiscount+"%"+"&nbsp"+"&nbsp");
               $(pkg_discount_left).css('float','left');
               $(pkg_discount_left).css('color','rgb(236,73,73)');
               $(pkg_discount_left).css('paddingLeft','70px');
               var pkg_discount_right = document.createElement('div');
               $(pkg_discount_right).html("-"+"&nbsp"+"Discount"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp");
               $(pkg_discount_right).css('float','right');
               $(pkg_discount_right).css('fontSize','12px');
               $(pkg_discount_element_td).append(pkg_discount_left);
               $(pkg_discount_element_td).append(pkg_discount_right);
               $(pkg_discount_element_tr).append(pkg_discount_element_td);
               $(pkg_test_price_table).append(pkg_discount_element_tr);
               $(pkg_test_price_table).append(pkg_finalprice_element_tr); */
               var pkg_contents_head = document.createElement('div');
               $(pkg_contents_head).css('marginRight','20px');
               var package_contents_head_element = document.createElement('h5');
               $(package_contents_head_element).html("&nbsp"+"&nbsp"+"&nbsp"+"Package Contents");
               $(package_contents_head_element).css('backgroundColor','#41A7B3');
                 $(package_contents_head_element).css('color','white');
                 $(package_contents_head_element).css('fontWeight','bold');
                 $(package_contents_head_element).css('height','19px');
                 $(package_contents_head_element).css('paddingTop','1px');
                 $(pkg_contents_head).append(package_contents_head_element);
                 var pkg_counter_element = document.createElement('div');
                 $(pkg_counter_element).addClass("pkg_tests-list");
                 $(pkg_counter_element).css('marginRight','20px');
                 var pkg_left_element = document.createElement('div');
                 $(pkg_left_element).addClass("pkg_left_list");
                 var pkg_right_element = document.createElement('div');
                 $(pkg_right_element).addClass("pkg_right_list");
                 var pkg_totalcount =0;
                 for(var i=0;i<data.packageDetails.GroupsInfo.length;i++)
                 {
                 	  var pkg_new_str  =  data.packageDetails.GroupsInfo[i].testsInGroup;
                 	  var pkg_temp_str = pkg_new_str.split(",");
                    //console.log(pkg_temp_str);
                 	  pkg_totalcount = pkg_totalcount+pkg_temp_str.length+1;
                  }//for groupsinfo
                 if(data.packageDetails.TestsInfo.length !=0)
                 {
                    pkg_totalcount = data.packageDetails.TestsInfo.length+1+pkg_totalcount;                 
                 }//if testslength
                 if(data.packageDetails.Consultations.length !=0)
                 {
                    pkg_totalcount = data.packageDetails.Consultations.length+1+pkg_totalcount;                 
                 }//if consultationslength
             if ((pkg_totalcount%2) =="0") 
             {
             	 var pkg_count_var = 1;
             }
             if ((pkg_totalcount%2) !="0") 
             {
             	 var pkg_count_var = 0;
             }
             
              if(data.packageDetails.GroupsInfo.length !=0)
               {
               	
                for(var i=0;i<data.packageDetails.GroupsInfo.length;i++)
                 {
                    if((pkg_totalcount >20) && (pkg_count_var >(pkg_totalcount/2)) ) 
                    {  
                        var pkg_group_heading = document.createElement('div');
                 	      $(pkg_group_heading).addClass("pkg_data");
                        $(pkg_group_heading).html(data.packageDetails.GroupsInfo[i].groupName);
                        $(pkg_group_heading).css('fontWeight', 'bold');
                        $(pkg_right_element).append(pkg_group_heading);
                        $(pkg_left_element).css('float','left');
                        $(pkg_left_element).css('width','260px');
                        pkg_count_var++;
                    }//if groupheading
                  else 
                   {
                   	 var pkg_group_heading = document.createElement('div');
                 	    $(pkg_group_heading).addClass("pkg_data");
                      $(pkg_group_heading).html(data.packageDetails.GroupsInfo[i].groupName);
                      $(pkg_group_heading).css('fontWeight', 'bold');
                   	 $(pkg_left_element).append(pkg_group_heading);
                	    pkg_count_var++;
                	 }//else groupheading
                	
                   var pkg_new_str = data.packageDetails.GroupsInfo[i].testsInGroup;
                   var pkg_temp_str = pkg_new_str.split(",");
                   
                    for(var j=0;j<pkg_temp_str.length;j++)
                    {
                       
                       if((pkg_totalcount > 20)&& (pkg_count_var>(pkg_totalcount/2)))
                       { 
                       
                         var pkg_group_data = document.createElement('div');
                         $(pkg_group_data).addClass("pkg_data");
                         $(pkg_group_data).html(pkg_temp_str[j]);
                         $(pkg_group_data).css('textIndent','10pt');
                         $(pkg_right_element).append(pkg_group_data);
                         $(pkg_left_element).css('float','left');
                          $(pkg_left_element).css('width','260px');
                         pkg_count_var++;  
                       }//if groupdata
                       else 
                        { 
                           var pkg_group_data = document.createElement('div');
                           $(pkg_group_data).addClass("pkg_data");
                           $(pkg_group_data).html(pkg_temp_str[j]);
                           $(pkg_group_data).css('textIndent','10pt');
                           $(pkg_left_element).append(pkg_group_data);
                           pkg_count_var++;
                        }//else groupdata
                        
                    }//for strlength 
                   }//for
                  }//if
              if(data.packageDetails.TestsInfo.length != 0)
              {
                if((pkg_totalcount >20) && (pkg_count_var >(pkg_totalcount/2)) ) 
                 {        
                    var pkg_tests_heading = document.createElement('div'); 
                    $(pkg_tests_heading).addClass("pkg_data");
                    $(pkg_tests_heading).html("Individual Tests");
                    $(pkg_tests_heading).css('fontWeight','bold');
                    $(pkg_right_element).append(pkg_tests_heading);
                    $(pkg_left_element).css('float','left');
                     $(pkg_left_element).css('width','260px');
                    pkg_count_var++;
                 }//if testsheading
               else 
               {
               	 var pkg_tests_heading = document.createElement('div');
               	 $(pkg_tests_heading).addClass("pkg_data");
                   $(pkg_tests_heading).html("Individual Tests");
                   $(pkg_tests_heading).css('fontWeight','bold');
                   $(pkg_left_element).append(pkg_tests_heading);
                   pkg_count_var++;               	
               }//else testsheading
                 
                for(var i=0;i<data.packageDetails.TestsInfo.length;i++)
                 {
                    
                     if((pkg_totalcount >20) && (pkg_count_var >(pkg_totalcount/2)) ) 
                      {
                          var pkg_content_data = document.createElement('div');
                          $(pkg_content_data).addClass("pkg_data");
                          $(pkg_content_data).html(data.packageDetails.TestsInfo[i]);
                          $(pkg_content_data).css('textIndent','10pt');
                          $(pkg_right_element).append(pkg_content_data);
                          $(pkg_left_element).css('float','left');
                           $(pkg_left_element).css('width','260px');
                          pkg_count_var++;
                      }//if contentdata
                    else 
                     {
                     	var pkg_content_data = document.createElement('div');
                        $(pkg_content_data).addClass("pkg_data");
                        $(pkg_content_data).html(data.packageDetails.TestsInfo[i]);
                        $(pkg_content_data).css('textIndent','10pt');
                    	   $(pkg_left_element).append(pkg_content_data);
                    	   pkg_count_var++;
                     	}//else contentdata
                 }//for TestsInfo
                }//if testsinfolength
             if(data.packageDetails.Consultations.length !=0)
              {
                if((pkg_totalcount >20) && (pkg_count_var >(pkg_totalcount/2)) ) 
                   {
                   	   var pkg_consult_heading = document.createElement('div');
                   	   $(pkg_consult_heading).addClass("pkg_data");
                        $(pkg_consult_heading).html("Consultations");
                        $(pkg_consult_heading).css('fontWeight','bold');
                        $(pkg_right_element).append(pkg_consult_heading);
                        $(pkg_left_element).css('float','left');
                         $(pkg_left_element).css('width','260px');
                       pkg_count_var++;
                   }//if consultheading
                 else  
                    {
                   	  var pkg_consult_heading = document.createElement('div');
                   	  $(pkg_consult_heading).addClass("pkg_data");
                       $(pkg_consult_heading).html("Consultations");
                       $(pkg_consult_heading).css('fontWeight','bold');
                       $(pkg_left_element).append(pkg_consult_heading);
                       pkg_count_var++;
                 	 }//else consultheading
                      	
                 for(var i=0;i<data.packageDetails.Consultations.length;i++)
                 {
                    
                    if((pkg_totalcount >20) && (pkg_count_var >(pkg_totalcount/2)) ) 
                     { 
                        var pkg_consult_data = document.createElement('div');
                        $(pkg_consult_data).addClass("pkg_data");
                        $(pkg_consult_data).html(data.packageDetails.Consultations[i]);
                        $(pkg_consult_data).css('textIndent','10pt');
                        $(pkg_right_element).append(pkg_consult_data); 
                        $(pkg_left_element).css('float','left');
                         $(pkg_left_element).css('width','260px');
                        pkg_count_var++;
                     }//if consultdata
                   else 
                    {
                    	  var pkg_consult_data = document.createElement('div');
                       $(pkg_consult_data).addClass("pkg_data");
                       $(pkg_consult_data).html(data.packageDetails.Consultations[i]);
                       $(pkg_consult_data).css('textIndent','10pt');
                   	 $(pkg_left_element).append(pkg_consult_data);
                   	 pkg_count_var++;        
                    }//else consultdata
                 }//for Consultations   
              }//if dataconsultationslength 
                if((pkg_totalcount >20) && ((pkg_totalcount%2) !=0))  
                {
                	
                var pkg_empty_element = document.createElement('div');
                $(pkg_empty_element).addClass("pkg_data");
                $(pkg_empty_element).html("-");
                $(pkg_empty_element).css('textIndent','20pt')
                $(pkg_right_element).append(pkg_empty_element);
                }//if odd 
                 var pkg_back_btn = document.createElement('button');
                 $(pkg_back_btn).html("Back");
                 $(pkg_back_btn).css('float','left');
                 $(pkg_back_btn).css('background', '#ea494f');
                 $(pkg_back_btn).css('marginTop','16px');
                 $(pkg_back_btn).css('color','white');
                 $(pkg_back_btn).css('width','60px');
                 $(pkg_back_btn).css('borderRadius','6px');
                 //$(pkg_back_btn).css('paddingLeft','6px');
                 $(pkg_back_btn).css('border','0px');
                 $(pkg_back_btn).css('fontWeight','bold');
                  var pkg_next_btn = document.createElement('button');
                 $(pkg_next_btn).html("Order Now");
                 $(pkg_next_btn).css('marginTop','16px');
                 $(pkg_next_btn).css('marginRight','20px');
                 $(pkg_next_btn).css('float','right');
                 $(pkg_next_btn).css('background', '#ea494f');
                 $(pkg_next_btn).css('color','white');
                 $(pkg_next_btn).css('width','90px');
                 $(pkg_next_btn).css('borderRadius','6px');
                 //$(pkg_next_btn).css('paddingLeft','6px');
                 $(pkg_next_btn).css('fontWeight','bold');
                 $(pkg_next_btn).css('border','0px');
                 $(pkg_back_btn).on('click',function () 
                 {
                 	   //loadingimage_handler();
                 	  //pkg_test_details_back(package_slug,package_labslug,package_name,package_consultation,package_labname,package_finalprice,package_discount,package_labarea,package_mrp);
                 	});
                 	
                 $(pkg_mrp_info).append(pkg_mrp_data);
                 $(pkg_mrp_info).append(pkg_Mrp_element);
                 $(pkg_lab_mrp).append(pkg_labname_info)
                 $(pkg_lab_mrp).append(pkg_mrp_info);
                 $(pkg_finalprice_info).append(pkg_finalprice);
                 $(pkg_finalprice_info).append(pkg_finalprice_element);
                
                 $(pkg_address_location).append(pkg_labaddress_info);
                 $(pkg_address_finalprice).append(pkg_address_location);
                 $(pkg_address_finalprice).append(pkg_finalprice_info);
                 
                 $(pkg_counter_element).append(pkg_left_element);
                $(pkg_counter_element).append(pkg_right_element);
                 $(package_test_modal).append(pkg_test_close);
                $(package_test_modal).append(pkg_test_name);
                $(package_test_modal).append(pkg_labinfo_price);
                $(pkg_test_details).append(pkg_labinfo_price);
                $(pkg_test_details).append(pkg_lab_mrp);
                $(pkg_test_details).append(pkg_address_finalprice);
                $(package_test_modal).append(pkg_test_details);
                //$(package_test_modal).append(pkg_details_table);
                //$(package_test_modal).append(pkg_test_price_table);
                $(package_test_modal).append(pkg_contents_head);
                var div_element = document.createElement('h5');
                $(div_element).html("Deal Contents");
                //$(package_test_modal).append(div_element);
                $(package_test_modal).append(pkg_counter_element);
                //if (data.packageDetails.TestsInfo.length ==0) 
               $(package_test_modal).append(pkg_back_btn);
                $(pkg_next_btn).on('click',function () 
                {
                      pkg_form_handler(package_name,package_labname,package_slug,package_consultation,package_labslug,package_finalprice,package_discount,package_labarea,package_mrp);                	
                	});
                $(package_test_modal).append(pkg_next_btn);
                $(pkg_test_close).on('click',function () 
                 {
                 	 
               	  $(package_test_modal).modal().close(); 
                 });//click
               $(package_test_modal).modal().open();
            }//success
            });//ajax
 }//fnctn handler 
  
 
 function pkg_test_details_back(package_slug,package_labslug,package_name,package_consultation,package_labname,package_finalprice,package_discount,package_labarea,package_mrp)
 {
     var pkg_localData = JSON.parse(localStorage.getItem('pkg_someData')); 
     var local_package_list_modal = document.createElement('div');
               $(local_package_list_modal).addClass("modal");
               $(local_package_list_modal).attr('id', 'modal_packages_firstpage');
               $(local_package_list_modal).css('position','relative');
               $(local_package_list_modal).css('backgroundColor','#fff');
               $(local_package_list_modal).css('paddingRight','0px');
               $(local_package_list_modal).css('width','818px');
               var local_close_element = document.createElement('a');
               $(local_close_element).addClass("close");
               $(local_close_element).attr('href','#');
               $(local_close_element).html("&times;");
               $(local_close_element).css('marginTop' ,'-19px');
               $(local_close_element).css('fontSize','26px');
               $(local_close_element).css('marginRight','7px');
               var local_head_name = document.createElement('h4');
               $(local_head_name).html(package_name);
               $(local_head_name).css('textAlign','center');
               $(local_head_name).css('fontSize','18px');
               $(local_head_name).css('fontWeight','bold');
               $(local_head_name).css('color','#5cb0cf');
                var local_offer_labs = document.createElement('div');
                 $(local_offer_labs).html("Offering Labs");
                 $(local_offer_labs).css("fontWeight","bold");
                 $(local_offer_labs).css("marginBottom","11px");
                 $(local_offer_labs).css("marginRight",'20px');
                 $(local_offer_labs).css("marginTop",'15px');
              var local_labs_table = document.createElement('table');
              $(local_labs_table).addClass("tablesorter");
              $(local_labs_table).attr("id","myTable");
              $(local_labs_table).css('marginRight','20px');
              $(local_labs_table).css('cursor','pointer');
              var local_table_head = document.createElement('thead');
              $(local_table_head).addClass("table_head");
              var local_labs_tr = document.createElement('tr');
               $(local_labs_tr).css("background", "#41A7B3");
              $(local_labs_tr).css("color","white");
              var local_labname_th = document.createElement('th');
              $(local_labname_th).css('border', '1px solid #ddd');
              $(local_labname_th).css('width','227px');
              var local_pkg_labname_th = document.createElement('div');
              $(local_pkg_labname_th).html("Lab Name");
              $(local_pkg_labname_th).css('padding','10px');
              $(local_pkg_labname_th).css('textAlign','center');
              $(local_pkg_labname_th).css('float','left');
             var local_pkg_imgs = document.createElement('div');
             $(local_pkg_imgs).css('float','right');
             var local_pkg_asc = document.createElement('div');
             var local_img_asc = document.createElement('img');
             $(local_img_asc).attr('src','images/table_sorter_asc.png');
             $(local_img_asc).css('paddingBottom','14px');
             $(local_img_asc).css('paddingLeft','1px');
             var local_pkg_desc = document.createElement('div');
             var local_img_desc = document.createElement('img');
             $(local_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_img_desc).css('paddingTop','13px');
             $(local_pkg_asc).append(local_img_asc);
             $(local_pkg_desc).append(local_img_desc);
             $(local_pkg_imgs).append(local_pkg_desc);
             $(local_pkg_imgs).append(local_pkg_asc);
             $(local_labname_th).append(local_pkg_labname_th);
             $(local_labname_th).append(local_pkg_imgs);
              var local_labarea_th = document.createElement('th');
              $(local_labarea_th).css('border', '1px solid #ddd');
              $(local_labarea_th).css('width','122px');
              var local_pkg_labarea = document.createElement('div');
              $(local_pkg_labarea).html("Location");
              $(local_pkg_labarea).css('textAlign','center');
              $(local_pkg_labarea).css('float','left');
              $(local_pkg_labarea).css('padding','10px');
              var local_pkg_area_imgs = document.createElement('div');
              $(local_pkg_area_imgs).css('float','right');
              var local_pkg_area_asc = document.createElement('div');
              var local_pkg_area_img_asc = document.createElement('img');
              $(local_pkg_area_img_asc).attr('src','images/table_sorter_asc.png');
              $(local_pkg_area_img_asc).css('paddingBottom','14px');
              $(local_pkg_area_img_asc).css('paddingLeft','1px');
             var local_pkg_area_desc = document.createElement('div');
             var local_pkg_area_img_desc = document.createElement('img');
             $(local_pkg_area_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_pkg_area_img_desc).css('paddingTop','13px');
             $(local_pkg_area_desc).append(local_pkg_area_img_desc);
             $(local_pkg_area_asc).append(local_pkg_area_img_asc);
             $(local_pkg_area_imgs).append(local_pkg_area_desc);
             $(local_pkg_area_imgs).append(local_pkg_area_asc);
             $(local_labarea_th).append(local_pkg_labarea);
             $(local_labarea_th).append(local_pkg_area_imgs);
              var local_labtests_th = document.createElement('th');
              $(local_labtests_th).css('border', '1px solid #ddd');
              var local_pkg_labparameters = document.createElement('div');
              $(local_pkg_labparameters).html("Test"+"&nbsp"+"Parameters");
              $(local_pkg_labparameters).css('float', 'left');
              $(local_pkg_labparameters).css('textAlign','center');
              $(local_pkg_labparameters).css('padding','10px');
              var local_pkg_parameters_imgs = document.createElement('div');
              $(local_pkg_parameters_imgs).css('float','right');
              var local_pkg_parameters_asc = document.createElement('div');
              var local_pkg_parameters_img_asc = document.createElement('img');
              $(local_pkg_parameters_img_asc).attr('src','images/table_sorter_asc.png');
              $(local_pkg_parameters_img_asc).css('paddingBottom','14px');
              $(local_pkg_parameters_img_asc).css('paddingLeft','1px');
             var local_pkg_parameters_desc = document.createElement('div');
             var local_pkg_parameters_img_desc = document.createElement('img');
             $(local_pkg_parameters_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_pkg_parameters_img_desc).css('paddingTop','13px');
             $(local_pkg_parameters_desc).append(local_pkg_parameters_img_desc);
             $(local_pkg_parameters_asc).append(local_pkg_parameters_img_asc);
             $(local_pkg_parameters_imgs).append(local_pkg_parameters_desc);
             $(local_pkg_parameters_imgs).append(local_pkg_parameters_asc);
             $(local_labtests_th).append(local_pkg_labparameters);
             $(local_labtests_th).append(local_pkg_parameters_imgs);
              var local_labconsultations_th = document.createElement('th');
               $(local_labconsultations_th).css('border', '1px solid #ddd');
               $(local_labconsultations_th).css('width','165px');
               var local_pkg_labconsultations = document.createElement('div');
              $(local_pkg_labconsultations).html("Dr"+"&nbsp"+"Consultations");
              $(local_pkg_labconsultations).css('float', 'left');
              $(local_pkg_labconsultations).css('textAlign','center');
              $(local_pkg_labconsultations).css('padding','10px');
              var local_pkg_consultations_imgs = document.createElement('div');
              $(local_pkg_consultations_imgs).css('float','right');
              var local_pkg_consultations_asc = document.createElement('div');
              var local_pkg_consultations_img_asc = document.createElement('img');
              $(local_pkg_consultations_img_asc).attr('src','images/table_sorter_asc.png');
              $(local_pkg_consultations_img_asc).css('paddingBottom','14px');
              $(local_pkg_consultations_img_asc).css('paddingLeft','1px');
             var local_pkg_consultations_desc = document.createElement('div');
             var local_pkg_consultations_img_desc = document.createElement('img');
             $(local_pkg_consultations_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_pkg_consultations_img_desc).css('paddingTop','13px');
             $(local_pkg_consultations_desc).append(local_pkg_consultations_img_desc);
             $(local_pkg_consultations_asc).append(local_pkg_consultations_img_asc);
             $(local_pkg_consultations_imgs).append(local_pkg_consultations_desc);
             $(local_pkg_consultations_imgs).append(local_pkg_consultations_asc);
             $(local_labconsultations_th).append(local_pkg_labconsultations);
             $(local_labconsultations_th).append(local_pkg_consultations_imgs);
              var local_labprice_th = document.createElement('th');
              $(local_labprice_th).css('border', '1px solid #ddd');
              var local_pkg_labprice = document.createElement('div');
              $(local_pkg_labprice).html("Price");
              $(local_pkg_labprice).css('float', 'left');
              $(local_pkg_labprice).css('textAlign','center');
              $(local_pkg_labprice).css('padding','10px');
              var local_pkg_labprice_imgs = document.createElement('div');
              $(local_pkg_labprice_imgs).css('float','right');
              var local_pkg_price_asc = document.createElement('div');
              var local_pkg_price_img_asc = document.createElement('img');
              $(local_pkg_price_img_asc).attr('src','images/table_sorter_asc.png');
              $(local_pkg_price_img_asc).css('paddingBottom','14px');
              $(local_pkg_price_img_asc).css('paddingLeft','1px');
             var local_pkg_price_desc = document.createElement('div');
             var local_pkg_price_img_desc = document.createElement('img');
             $(local_pkg_price_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_pkg_price_img_desc).css('paddingTop','13px');
             $(local_pkg_price_desc).append(local_pkg_price_img_desc);
             $(local_pkg_price_asc).append(local_pkg_price_img_asc);
             $(local_pkg_labprice_imgs).append(local_pkg_price_desc);
             $(local_pkg_labprice_imgs).append(local_pkg_price_asc);
             $(local_labprice_th).append(local_pkg_labprice);
             $(local_labprice_th).append(local_pkg_labprice_imgs);
             var local_labdiscount_th = document.createElement('th');
              $(local_labdiscount_th).css('border', '1px solid #ddd');
               var local_pkg_labdiscount = document.createElement('div');
              $(local_pkg_labdiscount).html("Discount");
              $(local_pkg_labdiscount).css('float', 'left');
              $(local_pkg_labdiscount).css('textAlign','center');
              $(local_pkg_labdiscount).css('padding','10px');
              var local_pkg_labdiscount_imgs = document.createElement('div');
              $(local_pkg_labdiscount_imgs).css('float','right');
              var local_pkg_discount_asc = document.createElement('div');
              var local_pkg_discount_img_asc = document.createElement('img');
              $(local_pkg_discount_img_asc).attr('src','images/table_sorter_asc.png');
              $(local_pkg_discount_img_asc).css('paddingBottom','14px');
              $(local_pkg_discount_img_asc).css('paddingLeft','1px');
             var local_pkg_discount_desc = document.createElement('div');
             var local_pkg_discount_img_desc = document.createElement('img');
             $(local_pkg_discount_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_pkg_discount_img_desc).css('paddingTop','13px');
             $(local_pkg_discount_desc).append(local_pkg_discount_img_desc);
             $(local_pkg_discount_asc).append(local_pkg_discount_img_asc);
             $(local_pkg_labdiscount_imgs).append(local_pkg_discount_desc);
             $(local_pkg_labdiscount_imgs).append(local_pkg_discount_asc);
             $(local_labdiscount_th).append(local_pkg_labdiscount);
             $(local_labdiscount_th).append(local_pkg_labdiscount_imgs);
              var local_book_th = document.createElement('th');
              $(local_book_th).html("Details");
              $(local_book_th).css('textAlign','center');
              $(local_book_th).css('padding','10px');
               $(local_labs_tr).append(local_labname_th);
              $(local_labs_tr).append(local_labarea_th);
              $(local_labs_tr).append(local_labtests_th);
              $(local_labs_tr).append(local_labprice_th);
              $(local_labs_tr).append(local_labdiscount_th);
              $(local_labs_tr).append(local_book_th);
              $(local_table_head).append(local_labs_tr);
              $(local_labs_table).append(local_table_head);	
              for (i=0; i<pkg_localData.length; i++) 
              {
              	 var local_lab_details_tr = document.createElement('tr');
              	 $(local_lab_details_tr).attr('id','deal_data');
              	 $(local_lab_details_tr).attr('data-package_labslug',pkg_localData[i].labSlug);
              	 $(local_lab_details_tr).attr('data-package_selectedlabname',pkg_localData[i].labName);
              	 $(local_lab_details_tr).attr('data-package_selectedlabarea',pkg_localData[i].labArea);
              	 $(local_lab_details_tr).attr('data-package_selectedprice',pkg_localData[i].labFinalPrice);
              	 $(local_lab_details_tr).attr('data-package_selectedmrp',pkg_localData[i].labMRP);
              	 $(local_lab_details_tr).attr('data-package_selecteddiscount',pkg_localData[i].labDiscount);
              	 var local_labname_td = document.createElement('td');
              	 $(local_labname_td).html(pkg_localData[i].labName);
              	 $(local_labname_td).css('border', '1px solid #ddd');
              	 $(local_labname_td).css('padding-left','6px');
              	 $(local_labname_td).css('padding-right','6px');
              	 var local_labarea_td = document.createElement('td');
              	 $(local_labarea_td).html(pkg_localData[i].labArea);
              	 $(local_labarea_td).css('border', '1px solid #ddd');
              	 $(local_labarea_td).css('padding-left','6px');
              	 var local_labtests_td = document.createElement('td');
              	 $(local_labtests_td).html(pkg_localData[i].offeringTestsCount);
              	 $(local_labtests_td).css('border', '1px solid #ddd');
              	 $(local_labtests_td).css('textAlign','center');
              	 $(local_labtests_td).css('padding-left','6px');
              	 $(local_labtests_td).css('paddingRight','6px');
              	 var local_consultations_td = document.createElement('td');
              	 $(local_consultations_td).html(package_consultation);
              	 $(local_consultations_td).css('border', '1px solid #ddd');
              	 $(local_consultations_td).css('textAlign','right');
              	 $(local_consultations_td).css('padding-left','6px');
              	 $(local_consultations_td).css('paddingRight','6px');
              	 var local_price_td = document.createElement('td');
              	 var local_div_td = document.createElement('div');
                $(local_div_td).html(pkg_localData[i].labFinalPrice+"&nbsp"+"(");
              	 $(local_price_td).css('border', '1px solid #ddd');
              	 $(local_div_td).css('float','left');
              	 $(local_price_td).css('padding-left',	'9px');
              	  if(pkg_localData[i].labFinalPrice.length == "3" && pkg_localData[i].labMRP.length =="3") 
              	  {
              	    $(local_price_td).css('padding-left',	'24px');
              	  }  
              	  if((pkg_localData[i].labFinalPrice.length == "3" && pkg_localData[i].labMRP.length =="4") || (pkg_localData[i].labFinalPrice.length == "4" && pkg_localData[i].labMRP.length =="3"))
                 {
                   $(local_price_td).css('padding-left',	'19px');
                 } 
              	 var local_fp = document.createElement('div');
              	 var local_finalprice = document.createElement('div');
              	 $(local_finalprice).html(pkg_localData[i].labMRP);
              	 $(local_finalprice).css('textDecoration','line-through');
              	 $(local_finalprice).css('color','rgb(236,73,73)');
              	 $(local_finalprice).css('position','relative');
              	 $(local_finalprice).css('float','left');
              	 var local_close_bracket = document.createElement('div');
              	 $(local_close_bracket).html(")");
              	 $(local_close_bracket).css('position','relative');
              	 $(local_fp).append(local_finalprice);
              	 $(local_fp).append(local_close_bracket);
              	 $(local_price_td).append(local_div_td);
              	 $(local_price_td).append(local_fp);
              	 var local_discount_td = document.createElement('td');
              	 $(local_discount_td).html(pkg_localData[i].labDiscount+"%");
              	 $(local_discount_td).css('border', '1px solid #ddd');
              	 $(local_discount_td).css('padding','6px');
              	 $(local_discount_td).css('textAlign','center');
              	 var local_book_td = document.createElement('td');
              	 $(local_book_td).css('paddingLeft','6px');
              	 $(local_book_td).css('paddingRight','6px');
              	 $(local_book_td).css('border', '1px solid #ddd');
              	 var local_book_div = document.createElement('div');
              	 //$(book_div).html("View");
              	 $(local_book_div).addClass("view_btn");
              	 $(local_book_div).css("background","#ea494f");
              	 $(local_book_div).css('borderRadius','5px');
              	 $(local_book_div).css("color","white");
              	 //$(book_div).css("fontSize","11px");
              	 //$(book_div).css('width','36px');
              	 //$(book_div).css("paddingLeft","5px");
              	 //$(book_div).css("paddingRight","5px");
              	 $(local_book_div).css('border','0px');
              	 $(local_book_div).css('height','18px');
              	 $(local_book_div).css('width','32px');
              	 $(local_book_div).css('marginLeft','10px');
              	 var local_book_view_div = document.createElement('div');
              	 $(local_book_view_div).html("View");
              	 $(local_book_view_div).css('fontSize','10px');
              	 $(local_book_view_div).css('height','16px');
              	 $(local_book_view_div).css('paddingTop','2px');
              	 $(local_book_view_div).css('paddingLeft','5px');
              	 $(local_book_view_div).css('paddingRight','5px');
              	 $(local_book_div).append(local_book_view_div);
              	 $(local_book_td).append(local_book_div);
              	 $(local_lab_details_tr).append(local_labname_td);
                $(local_lab_details_tr).append(local_labarea_td);
                $(local_lab_details_tr).append(local_labtests_td);
                $(local_lab_details_tr).append(local_price_td);
                $(local_lab_details_tr).append(local_discount_td);
                $(local_lab_details_tr).append(local_book_td);
                 $(local_labs_table).append(local_lab_details_tr);
                 $(local_lab_details_tr).on('click',function () 
                 {
                 	 
                 	 var local_package_labslug = $(this).data('package_labslug');
          
              	 var local_package_labname = $(this).data('package_selectedlabname');
              	 var local_package_labarea = $(this).data('package_selectedlabarea');
              	 var local_package_finalprice = $(this).data('package_selectedprice');
              	 var local_package_mrp = $(this).data('package_selectedmrp');
              	 var local_package_discount = $(this).data('package_selecteddiscount');
                 	 console.log(local_package_labname);
                 	 console.log(local_package_labarea);
                  console.log(local_package_finalprice);
                   console.log(local_package_mrp);
                console.log(local_package_discount);
                console.log(local_package_labslug);
                
 
                 	 
                 	 //pkg_test_details(local_package_labslug,package_slug,package_name,package_consultation,package_labname,package_finalprice,package_discount,package_labarea,package_mrp);
                  //pkg_form_backbtn(local_package_labslug,local_package_labarea,local_package_finalprice,local_package_mrp,local_package_discount,local_package_labname)           
                 console.log(local_package_labname);
                 	 console.log(local_package_labarea);
                  console.log(local_package_finalprice);
                   console.log(local_package_mrp);
                console.log(local_package_discount);
                console.log(local_package_labslug);
                               
                 	});//click
              	}//for loop  
                $(local_labs_tr).on('click',function () 
                {
                	   $("#myTable").tablesorter( {sortList: [[0,1], [1,0],[4,0]]} ); 
                	});
               var local_close_button = document.createElement('button');
               $(local_close_button).html("Close");
               $(local_close_button).css("background" ,"#ea494f");
               $(local_close_button).css('color','white');
               $(local_close_button).css('border','0px');
               $(local_close_button).css('marginTop','16px');
               $(local_close_button).css('marginRight','23px');
               $(local_close_button).css('borderRadius','5px');
               $(local_close_button).css('width','60px');
               $(local_package_list_modal).append(local_close_element);
               $(local_package_list_modal).append(local_head_name);
               $(local_package_list_modal).append(local_offer_labs);
               $(local_package_list_modal).append(local_labs_table);
               $(local_package_list_modal).append(local_close_button);
                 $(local_close_element).on('click',function () 
                 {
                 	 
               	  $(local_package_list_modal).modal().close(); 
                 });//click
                 $(local_close_button).on('click',function () 
                 {
                 	 
               	  $(local_package_list_modal).modal().close(); 
                 });//click
                $(local_package_list_modal).modal().open();
 }
 
    function pkg_form_handler(package_name,package_labname,package_consultation,package_slug,package_labslug,package_finalprice,package_discount,package_labarea,package_mrp)
      {
                  var pkg_booking_page = document.createElement('div');
                  $(pkg_booking_page).addClass("modal");
                  $(pkg_booking_page).attr('id','pkg_modal_secondpage');
                  $(pkg_booking_page).css('backgroundColor','#fff');
                  $(pkg_booking_page).css('height','578px');
                  $(pkg_booking_page).css('paddingRight','0px');
                  $(pkg_booking_page).modal().open();
                  var pkg_form_close_element = document.createElement('a');
                  $(pkg_form_close_element).addClass("close");
                  $(pkg_form_close_element).attr('href','#');
                  $(pkg_form_close_element).html("&times;");
                  $(pkg_form_close_element).css('marginTop' ,'-19px');
                  $(pkg_form_close_element).css('fontSize','26px');
                  $(pkg_form_close_element).css('marginRight','7px');
                  $(pkg_form_close_element).attr('id','modal_close');
                  var pkg_contact_heading = document.createElement('h4');
                  $(pkg_contact_heading).html("Patient Information");
                  $(pkg_contact_heading).css('textAlign','center');
                  $(pkg_contact_heading).css('fontSize','18px');
                  $(pkg_contact_heading).css('fontWeight','bold');
                  $(pkg_contact_heading).css('color','#5cb0cf');
                  var pkg_lab_details = document.createElement('div');
                  $(pkg_lab_details).html(package_labname);
                  $(pkg_lab_details).css('textAlign' ,'right');
                  $(pkg_lab_details).css('paddingRight','17px');
                  $(pkg_lab_details).css('fontWeight','bold');
                  $(pkg_lab_details).css('marginTop','6px');  
                  $(pkg_lab_details).css('marginRight','20px');
                  var pkg_deal_name  = document.createElement('div');
                  $(pkg_deal_name).html(package_name);
                  $(pkg_deal_name).css('textAlign' ,'right');
                  $(pkg_deal_name).css('paddingRight','14px');
                  $(pkg_deal_name).css('fontWeight','bold');
                  $(pkg_deal_name).css('marginTop','6px');
                  $(pkg_deal_name).css('marginRight','20px');
                  var pkg_parent_wizard = document.createElement('div');
                  $(pkg_parent_wizard).attr('id','tmm-form-wizard');
                  $(pkg_parent_wizard).addClass('container substrate');
                  $(pkg_parent_wizard).css('width','100%');
                  $(pkg_parent_wizard).css('paddingTop','1px');
                  var pkg_form_element = document.createElement('form');
                  $(pkg_form_element).attr('method','post');
                  $(pkg_form_element).attr('id','patient_info'); 
                  $(pkg_form_element).attr('name','patient_info');
                  $(pkg_form_element).attr('action','#');
                  $(pkg_form_element).attr('role','form');
                  $(pkg_form_element).css('marginRight','20px');
                  var pkg_wizard_element = document.createElement('div');
                  $(pkg_wizard_element).addClass("form-wizard");
                  $(pkg_wizard_element).css('padding-top','0px');
                  var pkg_row_element = document.createElement('div');
                  $(pkg_row_element).addClass("row");
                  var pkg_col_element = document.createElement('div');
                  $(pkg_col_element).addClass("col-md-12 no-pad");
                  var pkg_form_class = document.createElement('form-wizard');
                  $(pkg_form_class).addClass("form-wizard");
                  $(pkg_form_class).css('border','0px');
                  $(pkg_form_class).css('paddingTop','4px');
                  var pkg_second_row = document.createElement('div');
                  $(pkg_second_row).addClass("row");
                   var pkg_col_class_element = document.createElement('div');
                  $(pkg_col_class_element).addClass("col-md-12 col-sm-12");
                  $(pkg_col_class_element).css('paddingTop','5px');
                  var pkg_name_row = document.createElement('div');
                  $(pkg_name_row).addClass("row");
                  var pkg_name_col_class = document.createElement('div');
                  $(pkg_name_col_class).addClass("col-md-12 col-sm-12");
                  var pkg_fieldset_element = document.createElement('fieldset');
                  $(pkg_fieldset_element).addClass("input-block");
                  var pkg_label_ptntname = document.createElement('label');
                  $(pkg_label_ptntname).attr('for','patient_name');
                  $(pkg_label_ptntname).html("Full Name");
                  var pkg_input_element = document.createElement('input');
                  $(pkg_input_element).attr('type','text');
                  $(pkg_input_element).attr('id', 'pkg_patient_name');
                  $(pkg_input_element).attr('name','patient_name');
                  $(pkg_input_element).attr('value','');
                  $(pkg_input_element).addClass("form-icon form-icon-user");
                  $(pkg_input_element).attr('placeholder','Please enter your name');
                  $(pkg_input_element).attr('required','');
                  var pkg_email_row = document.createElement('div');
                  $(pkg_email_row).addClass("row");
                  var pkg_email_col_class = document.createElement('div');
                  $(pkg_email_col_class).addClass("col-md-12 col-sm-12");
                  var pkg_fieldset_email = document.createElement('fieldset');
                  $(pkg_fieldset_email).addClass("input-block");
                  var pkg_label_email = document.createElement('label');
                  $(pkg_label_email).attr('for','email');
                  $(pkg_label_email).html("Email");
                  var pkg_input_email = document.createElement('input');
                  $(pkg_input_email).attr('type','text');
                  $(pkg_input_email).attr('id','pkg_email');
                  $(pkg_input_email).attr('name','patient_email');
                  $(pkg_input_email).attr('value','');
                  $(pkg_input_email).addClass('form-icon form-icon-mail');
                  $(pkg_input_email).attr('placeholder','Please enter your email ID');
                  $(pkg_input_email).attr('required','required');
                  var pkg_address_row = document.createElement('div');
                  $(pkg_address_row).addClass("row");
                  var pkg_address_col_class = document.createElement('div');
                  $(pkg_address_col_class).addClass("col-md-12 col-sm-12");
                  var pkg_fieldset_address = document.createElement('fieldset');
                  $(pkg_fieldset_address).addClass("input-block");
                  var pkg_label_address = document.createElement('label');
                  $(pkg_label_address).attr('for','Address');
                  $(pkg_label_address).html("Address");
                  var pkg_input_address = document.createElement('input');
                  $(pkg_input_address).attr('type','text');
                  $(pkg_input_address).attr('id','pkg_address');
                  $(pkg_input_address).attr('name','patient_address');
                  $(pkg_input_address).attr('value','');
                  //$(pkg_input_address).addClass('form-icon form-icon-lock');
                  $(pkg_input_address).attr('placeholder','Please enter your Address');
                  $(pkg_input_address).attr('required','required');
                  $(pkg_input_address).css('paddingRight','11px');
                  var pkg_phno_row = document.createElement('div');
                  $(pkg_phno_row).addClass("row");
                  var pkg_phno_col_class = document.createElement('div');
                  $(pkg_phno_col_class).addClass("col-md-6 col-sm-12");
                  var pkg_fieldset_phno = document.createElement('fieldset');
                  $(pkg_fieldset_phno).addClass("input-block");
                  var pkg_label_phno = document.createElement('label');
                  $(pkg_label_phno).attr('for','phone1');
                  $(pkg_label_phno).html('Mobile No:');
                  var pkg_input_phno = document.createElement('input');
                  $(pkg_input_phno).attr('type','text');
                  $(pkg_input_phno).attr('id','pkg_phone');
                  $(pkg_input_phno).attr('name','patient_mobile');
                  $(pkg_input_phno).attr('value','');
                  $(pkg_input_phno).addClass('form-icon form-icon-phone');
                  $(pkg_input_phno).attr('placeholder','Number');
                  $(pkg_input_phno).attr('required','required');
                  var pkg_apptime_col_class = document.createElement('div');
                  $(pkg_apptime_col_class).addClass('col-md-6 col-sm-12');
                  var pkg_fieldset_booking = document.createElement('fieldset');
                  $(pkg_fieldset_booking).addClass("input-block");
                  var pkg_label_booking = document.createElement('label');
                  $(pkg_label_booking).attr('for','app_time');
                  $(pkg_label_booking).html('Appointment Timing:');
                  var pkg_input_booking = document.createElement('input');
                  $(pkg_input_booking).attr('type','text');
                  $(pkg_input_booking).attr('id','pkg_app_time');
                  $(pkg_input_booking).attr('name','appointment_time');
                  $(pkg_input_booking).attr('value','');
                  $(pkg_input_booking).attr('placeholder','Select Timeslot');
                  $(pkg_input_booking).addClass("form_datetime");
                  $(pkg_input_booking).attr('required','required');
                  var pkg_information_row = document.createElement('row');
                  $(pkg_information_row).addClass("row");
                  var pkg_note_col_class = document.createElement('div');
                  $(pkg_note_col_class).addClass("col-md-12 col-sm-12");
                  var pkg_font_element = document.createElement('font');
                  $(pkg_font_element).html("*Note: Patient Information is kept confidential and is used only for booking appointments and to improve the service.");
                  $(pkg_font_element).css('fontSize','10px');
                  var pkg_prevbtn_element = document.createElement('div');
                  $(pkg_prevbtn_element).css('marginLeft','30px');
                  $(pkg_prevbtn_element).addClass('prev');
                  var pkg_backbtn = document.createElement('button');
                  $(pkg_backbtn).attr('id','step2_back_btn');
                  $(pkg_backbtn).addClass("button button-control");
                  $(pkg_backbtn).attr('type','button');
                  var pkg_span_backbtn = document.createElement('span');
                  $(pkg_span_backbtn).html("Back");
                  $(pkg_backbtn).append(pkg_span_backbtn);
                  var pkg_backbtn_divider = document.createElement('div');
                  $(pkg_backbtn_divider).addClass("button-divider");
                  var pkg_nextbtn_element = document.createElement('div');
                  $(pkg_nextbtn_element).css('marginLeft','50px');
                  $(pkg_nextbtn_element).addClass('next');
                  var pkg_nextbtn = document.createElement('button');
                  $(pkg_nextbtn).attr('id','step2_next_btn');
                  $(pkg_nextbtn).addClass("button button-control");
                  $(pkg_nextbtn).attr('type','button');
                  var pkg_span_nextbtn = document.createElement('span');
                  $(pkg_span_nextbtn).html("Next");
                  $(pkg_nextbtn).append(pkg_span_nextbtn);
                  var pkg_nextbtn_divider = document.createElement('div');
                  $(pkg_nextbtn_divider).addClass("button-divider");
                  $(pkg_fieldset_element).append(pkg_label_ptntname);
                  $(pkg_fieldset_element).append(pkg_input_element);
                  $(pkg_fieldset_email).append(pkg_label_email);
                  $(pkg_fieldset_email).append(pkg_input_email);
                  $(pkg_fieldset_phno).append(pkg_label_phno);
                  $(pkg_fieldset_phno).append(pkg_input_phno);
                  $(pkg_fieldset_booking).append(pkg_label_booking);
                  $(pkg_fieldset_booking).append(pkg_input_booking);
                  $(pkg_fieldset_address).append(pkg_label_address);
                  $(pkg_fieldset_address).append(pkg_input_address);
                  $(pkg_name_col_class).append(pkg_fieldset_element);
                  $(pkg_email_col_class).append(pkg_fieldset_email);
                  $(pkg_phno_col_class).append(pkg_fieldset_phno);
                  $(pkg_apptime_col_class).append(pkg_fieldset_booking);
                  $(pkg_address_col_class).append(pkg_fieldset_address);
                  $(pkg_note_col_class).append(pkg_font_element);
                  $(pkg_name_row).append(pkg_name_col_class);
                  $(pkg_email_row).append(pkg_email_col_class);
                  $(pkg_phno_row).append(pkg_phno_col_class);
                  $(pkg_phno_row).append(pkg_apptime_col_class);
                  $(pkg_address_row).append(pkg_address_col_class);
                  $(pkg_information_row).append(pkg_note_col_class);
                  $(pkg_col_class_element).append(pkg_name_row);
                  $(pkg_col_class_element).append(pkg_email_row);
                  $(pkg_col_class_element).append(pkg_phno_row);
                  $(pkg_col_class_element).append(pkg_address_row);
                  $(pkg_col_class_element).append(pkg_information_row);
                  $(pkg_second_row).append(pkg_col_class_element);
                  $(pkg_form_class).append(pkg_second_row);
                  $(pkg_col_element).append(pkg_form_class);
                  $(pkg_row_element).append(pkg_col_element);
                  $(pkg_prevbtn_element).append(pkg_backbtn);
                  $(pkg_prevbtn_element).append(pkg_backbtn_divider);
                  $(pkg_row_element).append(pkg_prevbtn_element);
                  $(pkg_nextbtn_element).append(pkg_nextbtn);
                  $(pkg_nextbtn_element).append(pkg_nextbtn_divider);
                  $(pkg_row_element).append(pkg_nextbtn_element);
                  $(pkg_wizard_element).append(pkg_row_element);
                  $(pkg_form_element).append(pkg_wizard_element);
                  $(pkg_parent_wizard).append(pkg_form_element);
                  var pkg_error_display = document.createElement('div');
                  $(pkg_error_display).addClass("pkg_display_error");
                  $(pkg_error_display).css('height','30px');
                 var pkg_name_element = document.createElement('div');
                 $(pkg_name_element).addClass("err_msg");
                 $(pkg_name_element).attr('id','pkg_err_name');
                 $(pkg_name_element).css('color','rgb(236,73,73)');
                 $(pkg_name_element).css('textAlign','left');
                 $(pkg_name_element).css('marginLeft','16px');
                 $(pkg_name_element).css('display','none');
                  var pkg_star_element = document.createElement('span');
                  $(pkg_star_element).addClass('star');
                  $(pkg_star_element).html("&#x2605");
                  $(pkg_star_element).css('float','left');
                  var pkg_error_name_element = document.createElement('div');
                  $(pkg_error_name_element).html('Enter Full Name');
                  $(pkg_name_element).append(pkg_star_element);
                  $(pkg_name_element).append(pkg_error_name_element);
                  var pkg_email_element = document.createElement('div');
               	$(pkg_email_element).addClass("err_msg");
                  $(pkg_email_element).attr('id','pkg_err_email');
                  $(pkg_email_element).css('color','rgb(236,73,73)');
                  $(pkg_email_element).css('textAlign','left');
                  $(pkg_email_element).css('marginLeft','16px');
                  $(pkg_email_element).css('display','none');
                  var pkg_star_email = document.createElement('span');
                  $(pkg_star_email).addClass('star');
                  $(pkg_star_email).html("&#x2605");
                  $(pkg_star_email).css('float','left');
                  var pkg_error_email_element = document.createElement('div');
                  $(pkg_error_email_element).html('Enter valid e-mail id');
                 	$(pkg_email_element).append(pkg_star_email);
                 	$(pkg_email_element).append(pkg_error_email_element);
                  var pkg_mbno_element = document.createElement('div');
                 	$(pkg_mbno_element).addClass("err_msg");
                 	$(pkg_mbno_element).attr('id','pkg_err_mbno');
                  $(pkg_mbno_element).css('color','rgb(236,73,73)');
                  $(pkg_mbno_element).css('textAlign','left');
                 	$(pkg_mbno_element).css('marginLeft','16px');
                  $(pkg_mbno_element).css('display','none');
                  var pkg_star_mbno = document.createElement('span');
                  $(pkg_star_mbno).addClass('star');
                  $(pkg_star_mbno).html("&#x2605");
                  $(pkg_star_mbno).css('float','left');
                  var pkg_error_mbno_element = document.createElement('div');
                  $(pkg_error_mbno_element).html('Enter correct mobile number');
                  $(pkg_mbno_element).append(pkg_star_mbno);
                  $(pkg_mbno_element).append(pkg_error_mbno_element);
                  var pkg_phno_element = document.createElement('div');
                  $(pkg_phno_element).addClass("err_msg");
                  $(pkg_phno_element).css('color','rgb(236,73,73)');
                  $(pkg_phno_element).css('textAlign','left');
                  $(pkg_phno_element).css('marginLeft','16px');
                  $(pkg_phno_element).css('display','none');
                  var pkg_star_phno = document.createElement('span');
                  $(pkg_star_phno).addClass('star');
                  $(pkg_star_phno).html("&#x2605");
                  $(pkg_star_phno).css('float','left');
                  var pkg_error_phno_element = document.createElement('div');
                  $(pkg_error_phno_element).html('Mobile number is not valid');
                  $(pkg_phno_element).append(pkg_star_phno);
                  $(pkg_phno_element).append(pkg_error_phno_element);
                  var pkg_apptime_element = document.createElement('div');
                 	$(pkg_apptime_element).attr('id','pkg_err_apptime');
                 	$(pkg_apptime_element).addClass("err_msg");
                  $(pkg_apptime_element).css('color','rgb(236,73,73)');
                 	$(pkg_apptime_element).css('textAlign','left');
                 	$(pkg_apptime_element).css('marginLeft','16px');
                 	$(pkg_apptime_element).css('display','none');
                 	var pkg_star_apptime = document.createElement('span');
                 	$(pkg_star_apptime).addClass('star');
                 	$(pkg_star_apptime).html("&#x2605");
                 	$(pkg_star_apptime).css('float','left');
                  var pkg_error_apptime_element = document.createElement('div');
                  $(pkg_error_apptime_element).html('Please select Appointment Time');
               	 $(pkg_apptime_element).append(pkg_star_apptime);
                   $(pkg_apptime_element).append(pkg_error_apptime_element);
                  var pkg_app_time_element = document.createElement('div');
                   $(pkg_app_time_element).attr('id','pkg_err_app_time');
                   $(pkg_app_time_element).addClass("err_msg");
                   $(pkg_app_time_element).css('color','rgb(236,73,73)');
                   $(pkg_app_time_element).css('textAlign','left');
                   $(pkg_app_time_element).css('marginLeft','16px');
                 	 $(pkg_app_time_element).css('display','none');
                   var pkg_star_app_time = document.createElement('span');
                    $(pkg_star_app_time).addClass('star');
                    $(pkg_star_app_time).html("&#x2605");
                    $(pkg_star_app_time).css('float','left');
                    var pkg_error_app_time_element = document.createElement('div');
                     $(pkg_error_app_time_element).html('You have given past time.Give future time');
                     $(pkg_app_time_element).append(pkg_star_app_time);
                     $(pkg_app_time_element).append(pkg_error_app_time_element);
                     $(pkg_error_display).append(pkg_name_element);
                     $(pkg_error_display).append(pkg_email_element);
                     $(pkg_error_display).append(pkg_mbno_element);
                     $(pkg_error_display).append(pkg_apptime_element);
                     $(pkg_error_display).append(pkg_app_time_element);
                     $("#pkg_modal_secondpage").append(pkg_form_close_element);
                     $("#pkg_modal_secondpage").append(pkg_contact_heading);
                     $("#pkg_modal_secondpage").append(pkg_lab_details);
                     $("#pkg_modal_secondpage").append(pkg_deal_name);
                     $("#pkg_modal_secondpage").append(pkg_error_display);
                     $("#pkg_modal_secondpage").append(pkg_parent_wizard);
                         
                   $(pkg_input_booking).on('keyup' ,function (event)
                      { 
                         event.preventDefault();
                    	 });//keyup
                   $(pkg_input_booking).on('keypress' ,function (event)
                      {
                    	    event.preventDefault();
                      });//keypress	
                   $(pkg_input_booking).on('keydown' ,function (event) 
                     {
                   	  event.preventDefault();
                  	});//keydown
                  	 
                  $("#modal_close").on('click',function ()
                     {
                     	 if(typeof(Storage)!=="undefined")
                          {
                            pkg_datastore_handler();
                          }//if
               	    $("#modal_secondpage").modal().close(); 
                     });//click
                  var pkg_body_element = document.getElementsByClassName("themodal-lock")[0];
                    	 $(pkg_body_element).on('keyup' ,function (event)
                    	 {
                             if(event.keyCode == 27)
                             {
                             	 
                        	    if(typeof(Storage)!=="undefined")
                               {
                                 pkg_datastore_handler();
                                }//if storage
                              }//if keycode
                         });//key fnctn
                          
                  var pkg_today = new Date();  
                 var pkg_minutes = pkg_today.getMinutes();
                 
                 if((pkg_minutes >= '0'))  
                {
                     
               	 $('.form_datetime').datetimepicker
                   ({ 
                     
                     format:'dd/M/yyyy HH:ii P',
                     startDate: new Date(pkg_today.getFullYear(), pkg_today.getMonth(), pkg_today.getDate(),pkg_today.getHours()+1,pkg_today.getMinutes()-pkg_today.getMinutes()),
                     weekStart: 1,
                     todayBtn:  0,
                     autoclose: 1,
                     todayHighlight: 1,
                     startView: 2,
                     forceParse: 0,
                     minuteStep: 30,
                 }); //datetimepicker	
                }//if
              
                  $('.form_datetime').datetimepicker('setHoursDisabled', '0,1,2,3,4,5,22,23,24'); 
                   
                 var pkg_pat_name = $("#pkg_patient_name").val();
                 var pkg_pat_email = $("#pkg_email").val();
                 var pkg_pat_phno = $("#pkg_phone").val();
                 var pkg_pat_apptime = $("#pkg_app_time").val();
                      if ((pkg_pat_name == "") && (pkg_pat_email =="") && (pkg_pat_phno == "") && (pkg_pat_apptime == ""))
                     {
                       pkg_Filling_localdata(); 
                     }//
                    $('#step2_back_btn').on('click',function () 
                    {
                    	 //package_list(package_slug,package_name,package_consultation)
                    	 pkg_form_backbtn(local_package_labslug,local_package_labname,local_package_labarea,local_package_finalprice,local_package_mrp,local_package_discount,package_name,package_labname,package_slug,package_consultation,package_labslug,package_finalprice,package_discount,package_labarea,package_mrp) 
                    	 //pkg_test_details(package_labslug,package_slug,package_name,package_consultation,package_slug,package_labslug,package_labname,package_finalprice,package_discount,package_labarea,package_mrp)
                    	});//back btn click
                    $('#step2_next_btn').on('click', function()
                    {
                     			if(typeof(Storage)!=="undefined")
                       { 
                     	 pkg_datastore_handler();
                       }//if  
                        var pkg_patient_name = $('#pkg_patient_name').val();
                         var pkg_patient_email = $('#pkg_email').val();
                       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        var pkg_mobile_number = $('#pkg_phone').val();
                         var pkg_patient_apptime =  $('#pkg_app_time').val();
                         if(typeof(Storage)!=="undefined")
                       { 
                     	 pkg_datastore_handler();
                       }//if
                      
                   var pkg_appt_time = localStorage.getItem("pkg_app_time");
                   var  pkg_tday = new Date();
                     
                   var i;
                   function addZero(i) 
                     {
                         if (i < 10) 
                           {
                               i = "0" + i;
                           }//if i
                       return i;
                      }//fnctn
                          var pkg_year = pkg_tday.getFullYear();
                          var pkg_date = addZero(pkg_tday.getDate());
                          var pkg_month = addZero(pkg_tday.getMonth()+1);
                          var pkg_hours = addZero(pkg_tday.getHours());
                          var pkg_mnt = addZero(pkg_tday.getMinutes());
                          var pkg_sec =  addZero(pkg_tday.getSeconds());
                          var pkg_selected_time =pkg_year+"-"+pkg_month+"-"+pkg_date+" "+pkg_hours +":"+ pkg_mnt+":"+pkg_sec;
                         
                          
                          var pkg_currenttime = new Date();
                          var pkg_current_year = pkg_currenttime.getFullYear();
                          var pkg_current_month = addZero(pkg_currenttime.getMonth()+1);
                          
                          var pkg_current_date = addZero(pkg_currenttime.getDate());
                          var pkg_current_hours = addZero(pkg_currenttime.getHours());
                          var pkg_current_minutes = addZero(pkg_currenttime.getMinutes());
                          var pkg_current_time = pkg_current_year+"-"+pkg_current_month+"-"+pkg_current_date+" "+pkg_current_hours+":"+pkg_current_minutes;
                     if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none'))
                    { 
                      if ( !(pkg_patient_name.length >= 6 && pkg_patient_name.length <= 26) || pkg_patient_name.match(/[^a-zA-Z ]/)  )
                        {
                           $(pkg_name_element).css('display','block');
                          return false;
                        
                        }//if patient name
                      if(document.getElementById('pkg_err_name').style.display = 'block')
                        {
                            document.getElementById('pkg_err_name').style.display = 'none';
                          
                        }//if err_name
                      }//if 
                     if((document.getElementById("pkg_err_name").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none')) 
                    {
                    	 if(!filter.test(pkg_patient_email))
                       {
                         $(pkg_email_element).css('display','block');
                        return false;
                       }//if email
                     if(document.getElementById('pkg_err_email').style.display = 'block')
                       {
                          document.getElementById('pkg_err_email').style.display = 'none';
                          
                       }//if err_email
                       }//if
                       if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none'))
                       {
                       	 if((pkg_mobile_number.match(/[^0-9]/) || pkg_mobile_number.length != 10) || (!(pkg_mobile_number.charAt(0)=="9" || pkg_mobile_number.charAt(0)=="8" || pkg_mobile_number.charAt(0)=="7")))
                       {
                       	 $(pkg_mbno_element).css('display','block');
                       	 return false;
                       }//if mble
                        if(document.getElementById('pkg_err_mbno').style.display = 'block')
                       {
                       	
                          document.getElementById('pkg_err_mbno').style.display = 'none';
                         
                       }//if err_mbno
                       }//if
                      
                       if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none'))
                     {
                     	
                     	if(! ($('#pkg_app_time').val()))   
                       {
                         	$(pkg_apptime_element).css('display','block');
                           return false;
                       }//if app_time
                       
                       var pkg_val_time = pkg_date+"-"+pkg_month+"-"+pkg_year+" "+pkg_hours +":"+ pkg_mnt+":"+pkg_sec;
                      //var appt_time = localStorage.getItem("app_time");
                         
                          var pkg_sel_month_name = pkg_appt_time.substr(3,3);
    
    
    if (pkg_sel_month_name == 'Jan') 
     {
    	 var pkg_sel_month = '01';
    	 
     }//if mnth 1
    if (pkg_sel_month_name == 'Feb') 
     {
        var  pkg_sel_month = '02';
     }//if mnth 2
    if (pkg_sel_month_name == 'Mar') 
     {
    	 var pkg_sel_month = '03';
     }//if mnth 3
    if (pkg_sel_month_name == 'Apr') 
     {
    	var pkg_sel_month = '04';
  	  }//if mnth 4
    if (pkg_sel_month_name == 'May') 
  	  {
    		var pkg_sel_month = '05';
    	}//if mnth 5
    if (pkg_sel_month_name == 'Jun') 
  	  {
    		var pkg_sel_month = '06';
     }//if mnth 6
    if (pkg_sel_month_name == 'Jul') 
     {
    		var pkg_sel_month = '07';
     }//if mnth 7
    if (pkg_sel_month_name == 'Aug') 
     {
    		var pkg_sel_month = '08';
     	}//if mnth 8
     if (pkg_sel_month_name == 'Sep') 
    	{
    		var pkg_sel_month = '09';
    	}//if mnth 9
    	if (pkg_sel_month_name == 'Oct') 
    	{
    		var pkg_sel_month = '10';
    	}//if mnth 10
    	if (pkg_sel_month_name == 'Nov') 
    	{
    			var pkg_sel_month = '11';
    	}//if mnth 11
    	if (pkg_sel_month_name == 'Dec') 
    	{
    		var pkg_sel_month = '12';
    	}//if mnth 12
    	 var pkg_tday = new Date();
    	       var pkg_sel_year = pkg_appt_time.substr(7,4);
             var pkg_sel_date = pkg_appt_time.substr(0,2);
             var pkg_sel_hours = pkg_appt_time.substr(12,2);
             var pkg_sel_minutes = pkg_appt_time.substr(15,2);
             var pkg_sel_sec = addZero(pkg_tday.getSeconds());
             var pkg_sel_meridian = pkg_appt_time.substr(18,2);
             var pkg_sel_hours_meridian = pkg_sel_hours +" "+ pkg_sel_meridian;
             if (pkg_sel_meridian == "AM") 
             {
             	 var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
             	
              }//if AM
              if (pkg_sel_hours_meridian == "12 PM")
              {
              	   var pkg_sel_hours = "12";
              	 var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                 
              	}//if 12
             if (pkg_sel_hours_meridian == "01 PM")
              {
              	   var pkg_sel_hours = "13";
              	 var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                 
              	}//if 01
              	if (pkg_sel_hours_meridian == "02 PM")
               {
              	   var pkg_sel_hours = "14";
                  var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                 
                }//if 02
               	if (pkg_sel_hours_meridian == "03 PM")
                  {
              	      var pkg_sel_hours = "15";
                      var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                     
                 }//if 03
                 if (pkg_sel_hours_meridian == "04 PM")
                 {
              	    var pkg_sel_hours = "16";
                   var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                  
                  }// if 04
                  if (pkg_sel_hours_meridian == "05 PM")
                 {
              	    var pkg_sel_hours = "17";
                   var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                  
                  }// if 05
                   if (pkg_sel_hours_meridian == "06 PM")
                 {
              	    var pkg_sel_hours = "18";
                   var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                  
                  }// if 06
                   if (pkg_sel_hours_meridian == "07 PM")
                 {
              	    var pkg_sel_hours = "19";
                   var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                   
                  }// if 07
                   if (pkg_sel_hours_meridian == "08 PM")
                 {
              	    var pkg_sel_hours = "20";
                   var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                   
                  }// if 08
                   if (pkg_sel_hours_meridian == "09 PM")
                 {
              	    var pkg_sel_hours = "21";
                   var pkg_sel_time = pkg_sel_year+"-"+pkg_sel_month+"-"+pkg_sel_date+" "+pkg_sel_hours+":"+pkg_sel_minutes+":"+pkg_sel_sec;
                   
                  }// if 09
                       if(!(pkg_sel_time.match(/\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}/)))
                     
                        {
                       	  
                         $(pkg_apptime_element).css('display','block');
                        
                         return false;
                       }//if val time 
                        if(document.getElementById('pkg_err_apptime').style.display = 'block')
                       {
                          document.getElementById('pkg_err_apptime').style.display = 'none';
                          
                       }
                       }//if
                          if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none'))
                         {
                          if(pkg_current_time > pkg_sel_time)
                          {
                          	
                          	$(pkg_app_time_element).css('display','block');
                          	return false;
                          	}//if time
                         if (document.getElementById('pkg_err_app_time').style.display = 'block') 
                          {
                          	  document.getElementById('pkg_err_app_time').style.display = 'none';
                          	  
                           }//if err_time
                         }//if
                       pkg_preview_handler(package_name,package_labname,package_slug,package_labslug,package_finalprice,package_discount,package_labarea,package_mrp) 
                       
                       
                 
                    });//btn onclick handler
                    
                
          }//form_handler 
            function pkg_datastore_handler()
    {
   	  var pkg_ptnt_name = document.getElementById("pkg_patient_name");
        var pkg_ptnt_email = document.getElementById("pkg_email");
        var pkg_ptnt_phone = document.getElementById("pkg_phone");
        var pkg_ptnt_apptime = document.getElementById("pkg_app_time");
        var pkg_ptnt_address = document.getElementById("pkg_address");
        localStorage.setItem("pkg_patient_name",pkg_ptnt_name.value);
        localStorage.setItem("pkg_email" ,pkg_ptnt_email.value);
        localStorage.setItem("pkg_phone" ,pkg_ptnt_phone.value);
        localStorage.setItem("pkg_app_time" ,pkg_ptnt_apptime.value);
        localStorage.setItem("pkg_address",pkg_ptnt_address.value);
    } //fnctn handler
    function pkg_Filling_localdata()
    {
     	    document.getElementById("pkg_patient_name").value = localStorage.getItem("pkg_patient_name");
          document.getElementById("pkg_email").value = localStorage.getItem("pkg_email");
          document.getElementById("pkg_phone").value = localStorage.getItem("pkg_phone");
          document.getElementById("pkg_app_time").value = localStorage.getItem("pkg_app_time");
          document.getElementById("pkg_address").value = localStorage.getItem("pkg_address");
    }//fnctn handler
     
     
     
     //function pkg_form_backbtn(local_package_labslug,local_package_labname,local_package_labarea,local_package_finalprice,local_package_mrp,local_package_discount,package_name,package_labname,package_slug,package_consultation,package_labslug,package_finalprice,package_discount,package_labarea,package_mrp)
     function pkg_form_backbtn(local_package_labslug,local_package_labarea,local_package_finalprice,local_package_mrp,local_package_discount,local_package_labname)
   {   
   var pkg_lablocalData = JSON.parse(localStorage.getItem('pkg_labData'));
   //console.log(pkg_lablocalData);
   
   //console.log(local_package_labarea);
   //console.log(local_package_finalprice);
   //console.log(local_package_mrp);
   //console.log(local_package_discount);
   //console.log(local_package_labslug);
   console.log(local_package_labname);
   var local_package_test_modal = document.createElement('div');
               $(local_package_test_modal).addClass("modal");
               $(local_package_test_modal).attr('id', 'modal_packages_firstpage');
               $(local_package_test_modal).css('position','relative');
               $(local_package_test_modal).css('backgroundColor','#fff');
               $(local_package_test_modal).css('paddingRight','0px');
               var local_pkg_test_close = document.createElement('a');
               $(local_pkg_test_close).addClass("close");
               $(local_pkg_test_close).attr('href','#');
               $(local_pkg_test_close).html("&times;");
               $(local_pkg_test_close).css('marginTop' ,'-19px');
               $(local_pkg_test_close).css('fontSize','26px');
               $(local_pkg_test_close).css('marginRight','7px');
               var local_pkg_test_name = document.createElement('h4');
               $(local_pkg_test_name).html(pkg_lablocalData.packageName);
              
               $(local_pkg_test_name).css('textAlign','center');
               $(local_pkg_test_name).css('fontSize','18px');
               $(local_pkg_test_name).css('fontWeight','bold');
               $(local_pkg_test_name).css('color','#5cb0cf');
               var local_pkg_test_details = document.createElement('div');
               var local_pkg_labinfo_price = document.createElement('div');
               $(local_pkg_labinfo_price).html("Price & Lab Information");
               $(local_pkg_labinfo_price).css('background','#41A7B3');
               $(local_pkg_labinfo_price).css('color','white');
               $(local_pkg_labinfo_price).css('fontWeight','bold');
               $(local_pkg_labinfo_price).css('paddingLeft','6px');
               $(local_pkg_labinfo_price).css('marginTop','16px');
               $(local_pkg_labinfo_price).css('marginRight','20px');
               var local_pkg_lab_mrp  = document.createElement('div');
               $(local_pkg_lab_mrp).css('marginRight','20px');
               $(local_pkg_lab_mrp).css('paddingLeft','6px');
               $(local_pkg_lab_mrp).css('paddingRight','6px');
               $(local_pkg_lab_mrp).css('paddingTop','3px');
               $(local_pkg_lab_mrp).css('height','20px');
               var local_pkg_labname_info = document.createElement('div');
                //$(local_pkg_labname_info).html(pkg_lablocalData.labName);
                console.log(local_package_labname);
                console.log(local_package_labname);
               $(local_pkg_labname_info).html(local_package_labname);
               $(local_pkg_labname_info).css('float','left');
               $(local_pkg_labname_info).css('width','290px');
               var local_pkg_mrp_info = document.createElement('div');
               $(local_pkg_mrp_info).css('float','right'); 
               var local_pkg_mrp_data = document.createElement('div');
                $(local_pkg_mrp_data).css('float','left');
               var local_pkg_Mrp = document.createElement('div');
               //$(local_pkg_Mrp).html(pkg_lablocalData.packageMRP);
               $(local_pkg_Mrp).html(local_package_mrp);
               $(local_pkg_Mrp).addClass("fa fa-inr");
               $(local_pkg_Mrp).css('textDecoration','line-through');
               $(local_pkg_Mrp).css('paddingTop','3px');
               $(local_pkg_Mrp).css('float','left');
                $(local_pkg_Mrp).css('width','27px');
               if (local_package_mrp.length == "4")
              {
               $(local_pkg_Mrp).css('paddingRight','46px');
              }
              else 
              {
                $(local_pkg_Mrp).css('paddingRight','36px');
              }
              
              
               $(local_pkg_mrp_data).append(local_pkg_Mrp);
               var local_pkg_Mrp_element = document.createElement('div'); 
               $(local_pkg_Mrp_element).html("&nbsp"+"-"+"&nbsp"+"&nbsp"+"Max"+"&nbsp"+"Retail"+"&nbsp"+"Price");
              	$(local_pkg_Mrp_element).css('fontSize','12px');
              	$(local_pkg_Mrp_element).css('float','right');
              	 var local_pkg_address_finalprice  = document.createElement('div');
               $(local_pkg_address_finalprice).css('marginRight','20px');
               $(local_pkg_address_finalprice).css('width','554px');
               $(local_pkg_address_finalprice).css('paddingLeft','6px');
               if (pkg_lablocalData.labAddress.length <= "30") 
               {
               $(local_pkg_address_finalprice).css('height','60px');
               }
               else if (pkg_lablocalData.labAddress.length <= "60") 
               {
               	$(local_pkg_address_finalprice).css('height','80px');
               }
               else  if (pkg_labLocalData.labAddress.length <= "90")
                {
               	$(local_pkg_address_finalprice).css('height','100px');
               }
               else if (pkg_labLocalData.labAddress.length <= "120")
                {
               	$(local_pkg_address_finalprice).css('height','120px');
               }
               var local_pkg_address_location =document.createElement('div');
               $(local_pkg_address_location).css('float','left'); 
               $(local_pkg_address_location).css('width','264px');
               $(local_pkg_address_location).css('marginRight','100px');
               var local_pkg_address_img = document.createElement('div');
               $(local_pkg_address_img).css('float','left');
               $(local_pkg_address_img).css('width','12px');
               var local_pkg_address_img_loc = document.createElement('img');
               $(local_pkg_address_img_loc).attr('src','images/location-bi.png');
               $(local_pkg_address_img_loc).css('height','17px');
               $(local_pkg_address_img).append(local_pkg_address_img_loc);
               $(local_pkg_address_location).append(local_pkg_address_img);
               var local_pkg_labaddress_info = document.createElement('div');
               $(local_pkg_labaddress_info).css('float','right');
               $(local_pkg_labaddress_info).css('width','246px');
                var local_pkg_labaddress_info_left = document.createElement('div');
                $(local_pkg_labaddress_info_left).html(pkg_lablocalData.labAddress+","+"&nbsp"+"&nbsp");
                $(local_pkg_labaddress_info_left).css('float','left');
                $(local_pkg_labaddress_info_left).css('width','216px');
                var local_pkg_labaddress_info_right = document.createElement('div');
                $(local_pkg_labaddress_info_right).html(pkg_lablocalData.labArea+","+"&nbsp"+pkg_lablocalData.labPincode);
                $(local_pkg_labaddress_info_right).css('float','right');
                $(local_pkg_labaddress_info_right).css('width','263px');
                $(local_pkg_labaddress_info).append(local_pkg_labaddress_info_left);
                $(local_pkg_labaddress_info).append(local_pkg_labaddress_info_right);
               var local_pkg_finalprice_info = document.createElement('div');
               $(local_pkg_finalprice_info).css('float','right'); 
               $(local_pkg_finalprice_info).css('width','169px');
               $(local_pkg_finalprice_info).css('paddingRight','6px');
               var local_pkg_finalprice = document.createElement('div');
               $(local_pkg_finalprice).css('float','left');
               if (pkg_lablocalData.packageDiscount.length == "2") 
               {
               $(local_pkg_finalprice).css('paddingLeft','70px');
               }
               else
               {
               	$(local_pkg_finalprice).css('paddingLeft','78px');
               }  
               var local_pkg_finalprice_left = document.createElement('div');
               $(local_pkg_finalprice_left).html(local_package_discount+"%"+"&nbsp"+"&nbsp");
               $(local_pkg_finalprice_left).css('float','left');
               $(local_pkg_finalprice_left).css('color','rgb(236,73,73)');
               var local_pkg_finalprice_right = document.createElement('div');
               $(local_pkg_finalprice_right).html("-"+"&nbsp"+"Discount");
               $(local_pkg_finalprice_right).css('float','right');
               $(local_pkg_finalprice_right).css('fontSize','12px');
               $(local_pkg_finalprice).append(local_pkg_finalprice_left);
               $(local_pkg_finalprice).append(local_pkg_finalprice_right);
               var local_pkg_finalprice_element = document.createElement('div');
              	$(local_pkg_finalprice_element).css('float','right');
              	var local_pkg_finalprice_element_left = document.createElement('div');
              	$(local_pkg_finalprice_element_left).addClass("fa fa-inr");
              	$(local_pkg_finalprice_element_left).html(local_package_finalprice+"&nbsp");
              	$(local_pkg_finalprice_element_left).css('float','left');
              	$(local_pkg_finalprice_element_left).css('color','rgb(236,73,73)');
              	$(local_pkg_finalprice_element_left).css('paddingTop','2px');
               var local_pkg_finalprice_element_right = document.createElement('div');
               $(local_pkg_finalprice_element_right).css('fontSize','12px');
               $(local_pkg_finalprice_element_right).html("-"+"&nbsp"+"&nbsp"+"Final Offering Price");
               $(local_pkg_finalprice_element_right).css('float','right');
               $(local_pkg_finalprice_element).append(local_pkg_finalprice_element_left);
               $(local_pkg_finalprice_element).append(local_pkg_finalprice_element_right); 
                var local_pkg_contents_head = document.createElement('div');
               $(local_pkg_contents_head).css('marginRight','20px');
               var local_package_contents_head_element = document.createElement('h5');
               $(local_package_contents_head_element).html("&nbsp"+"&nbsp"+"&nbsp"+"Package Contents");
               $(local_package_contents_head_element).css('backgroundColor','#41A7B3');
                 $(local_package_contents_head_element).css('color','white');
                 $(local_package_contents_head_element).css('fontWeight','bold');
                 $(local_package_contents_head_element).css('height','19px');
                 $(local_package_contents_head_element).css('paddingTop','1px');
                 $(local_pkg_contents_head).append(local_package_contents_head_element);
                 var local_pkg_counter_element = document.createElement('div');
                 $(local_pkg_counter_element).addClass("pkg_tests-list");
                 $(local_pkg_counter_element).css('marginRight','20px');
                 var local_pkg_left_element = document.createElement('div');
                 $(local_pkg_left_element).addClass("pkg_left_list");
                 var local_pkg_right_element = document.createElement('div');
                 $(local_pkg_right_element).addClass("pkg_right_list");
                 var local_pkg_totalcount =0;
                 for(var i=0;i<pkg_lablocalData.packageDetails.GroupsInfo.length;i++)
                 {
                 	  var local_pkg_new_str  =  pkg_lablocalData.packageDetails.GroupsInfo[i].testsInGroup;
                 	  var local_pkg_temp_str = local_pkg_new_str.split(",");
                    //console.log(pkg_temp_str);
                 	  local_pkg_totalcount = local_pkg_totalcount+local_pkg_temp_str.length+1;
                  }//for groupsinfo
                 if(pkg_lablocalData.packageDetails.TestsInfo.length !=0)
                 {
                    local_pkg_totalcount = pkg_lablocalData.packageDetails.TestsInfo.length+1+local_pkg_totalcount;                 
                 }//if testslength
                 if(pkg_lablocalData.packageDetails.Consultations.length !=0)
                 {
                    local_pkg_totalcount = pkg_lablocalData.packageDetails.Consultations.length+1+local_pkg_totalcount;                 
                 }//if consultationslength
             if ((local_pkg_totalcount%2) =="0") 
             {
             	 var local_pkg_count_var = 1;
             }
             if ((local_pkg_totalcount%2) !="0") 
             {
             	 var local_pkg_count_var = 0;
             }
             
              if(pkg_lablocalData.packageDetails.GroupsInfo.length !=0)
               {
               	
                for(var i=0;i<pkg_lablocalData.packageDetails.GroupsInfo.length;i++)
                 {
                    if((local_pkg_totalcount >20) && (local_pkg_count_var >(local_pkg_totalcount/2)) ) 
                    {  
                        var local_pkg_group_heading = document.createElement('div');
                 	      $(local_pkg_group_heading).addClass("pkg_data");
                        $(local_pkg_group_heading).html(pkg_lablocalData.packageDetails.GroupsInfo[i].groupName);
                        $(local_pkg_group_heading).css('fontWeight', 'bold');
                        $(local_pkg_right_element).append(local_pkg_group_heading);
                        $(local_pkg_left_element).css('float','left');
                        $(local_pkg_left_element).css('width','260px');
                        local_pkg_count_var++;
                    }//if groupheading
                  else 
                   {
                   	 var local_pkg_group_heading = document.createElement('div');
                 	    $(local_pkg_group_heading).addClass("pkg_data");
                      $(local_pkg_group_heading).html(pkg_lablocalData.packageDetails.GroupsInfo[i].groupName);
                      $(local_pkg_group_heading).css('fontWeight', 'bold');
                   	 $(local_pkg_left_element).append(local_pkg_group_heading);
                	    local_pkg_count_var++;
                	 }//else groupheading
                	
                   var local_pkg_new_str = pkg_lablocalData.packageDetails.GroupsInfo[i].testsInGroup;
                   var local_pkg_temp_str = local_pkg_new_str.split(",");
                   
                    for(var j=0;j<local_pkg_temp_str.length;j++)
                    {
                       
                       if((local_pkg_totalcount > 20)&& (local_pkg_count_var>(local_pkg_totalcount/2)))
                       { 
                       
                         var local_pkg_group_data = document.createElement('div');
                         $(local_pkg_group_data).addClass("pkg_data");
                         $(local_pkg_group_data).html(local_pkg_temp_str[j]);
                         $(local_pkg_group_data).css('textIndent','10pt');
                         $(local_pkg_right_element).append(local_pkg_group_data);
                         $(local_pkg_left_element).css('float','left');
                          $(local_pkg_left_element).css('width','260px');
                         local_pkg_count_var++;  
                       }//if groupdata
                       else 
                        { 
                           var local_pkg_group_data = document.createElement('div');
                           $(local_pkg_group_data).addClass("pkg_data");
                           $(local_pkg_group_data).html(local_pkg_temp_str[j]);
                           $(local_pkg_group_data).css('textIndent','10pt');
                           $(local_pkg_left_element).append(local_pkg_group_data);
                           local_pkg_count_var++;
                        }//else groupdata
                        
                    }//for strlength 
                   }//for
                  }//if
              if(pkg_lablocalData.packageDetails.TestsInfo.length != 0)
              {
                if((local_pkg_totalcount >20) && (local_pkg_count_var >(local_pkg_totalcount/2)) ) 
                 {        
                    var local_pkg_tests_heading = document.createElement('div'); 
                    $(local_pkg_tests_heading).addClass("pkg_data");
                    $(local_pkg_tests_heading).html("Individual Tests");
                    $(local_pkg_tests_heading).css('fontWeight','bold');
                    $(local_pkg_right_element).append(local_pkg_tests_heading);
                    $(local_pkg_left_element).css('float','left');
                     $(local_pkg_left_element).css('width','260px');
                    local_pkg_count_var++;
                 }//if testsheading
               else 
               {
               	 var local_pkg_tests_heading = document.createElement('div');
               	 $(local_pkg_tests_heading).addClass("pkg_data");
                   $(local_pkg_tests_heading).html("Individual Tests");
                   $(local_pkg_tests_heading).css('fontWeight','bold');
                   $(local_pkg_left_element).append(local_pkg_tests_heading);
                   local_pkg_count_var++;               	
               }//else testsheading
                 
                for(var i=0;i<pkg_lablocalData.packageDetails.TestsInfo.length;i++)
                 {
                    
                     if((local_pkg_totalcount >20) && (local_pkg_count_var >(local_pkg_totalcount/2)) ) 
                      {
                          var local_pkg_content_data = document.createElement('div');
                          $(local_pkg_content_data).addClass("pkg_data");
                          $(local_pkg_content_data).html(pkg_lablocalData.packageDetails.TestsInfo[i]);
                          $(local_pkg_content_data).css('textIndent','10pt');
                          $(local_pkg_right_element).append(local_pkg_content_data);
                          $(local_pkg_left_element).css('float','left');
                           $(local_pkg_left_element).css('width','260px');
                          local_pkg_count_var++;
                      }//if contentdata
                    else 
                     {
                     	var local_pkg_content_data = document.createElement('div');
                        $(local_pkg_content_data).addClass("pkg_data");
                        $(local_pkg_content_data).html(pkg_lablocalData.packageDetails.TestsInfo[i]);
                        $(local_pkg_content_data).css('textIndent','10pt');
                    	   $(local_pkg_left_element).append(local_pkg_content_data);
                    	   local_pkg_count_var++;
                     	}//else contentdata
                 }//for TestsInfo
                }//if testsinfolength
             if(pkg_lablocalData.packageDetails.Consultations.length !=0)
              {
                if((local_pkg_totalcount >20) && (local_pkg_count_var >(local_pkg_totalcount/2)) ) 
                   {
                   	   var local_pkg_consult_heading = document.createElement('div');
                   	   $(local_pkg_consult_heading).addClass("pkg_data");
                        $(local_pkg_consult_heading).html("Consultations");
                        $(local_pkg_consult_heading).css('fontWeight','bold');
                        $(local_pkg_right_element).append(local_pkg_consult_heading);
                        $(local_pkg_left_element).css('float','left');
                         $(local_pkg_left_element).css('width','260px');
                       local_pkg_count_var++;
                   }//if consultheading
                 else  
                    {
                   	  var local_pkg_consult_heading = document.createElement('div');
                   	  $(local_pkg_consult_heading).addClass("pkg_data");
                       $(local_pkg_consult_heading).html("Consultations");
                       $(local_pkg_consult_heading).css('fontWeight','bold');
                       $(local_pkg_left_element).append(local_pkg_consult_heading);
                       local_pkg_count_var++;
                 	 }//else consultheading
                      	
                 for(var i=0;i<pkg_lablocalData.packageDetails.Consultations.length;i++)
                 {
                    
                    if((local_pkg_totalcount >20) && (local_pkg_count_var >(local_pkg_totalcount/2)) ) 
                     { 
                        var local_pkg_consult_data = document.createElement('div');
                        $(local_pkg_consult_data).addClass("pkg_data");
                        $(local_pkg_consult_data).html(pkg_lablocalData.packageDetails.Consultations[i]);
                        $(local_pkg_consult_data).css('textIndent','10pt');
                        $(local_pkg_right_element).append(local_pkg_consult_data); 
                        $(local_pkg_left_element).css('float','left');
                         $(local_pkg_left_element).css('width','260px');
                        local_pkg_count_var++;
                     }//if consultdata
                   else 
                    {
                    	  var local_pkg_consult_data = document.createElement('div');
                       $(local_pkg_consult_data).addClass("pkg_data");
                       $(local_pkg_consult_data).html(pkg_lablocalData.packageDetails.Consultations[i]);
                       $(local_pkg_consult_data).css('textIndent','10pt');
                   	 $(local_pkg_left_element).append(local_pkg_consult_data);
                   	 local_pkg_count_var++;        
                    }//else consultdata
                 }//for Consultations   
              }//if dataconsultationslength 
                if((local_pkg_totalcount >20) && ((local_pkg_totalcount%2) !=0))  
                {
                	
                var local_pkg_empty_element = document.createElement('div');
                $(local_pkg_empty_element).addClass("pkg_data");
                $(local_pkg_empty_element).html("-");
                $(local_pkg_empty_element).css('textIndent','20pt')
                $(local_pkg_right_element).append(local_pkg_empty_element);
                }//if odd 
                 var local_pkg_back_btn = document.createElement('button');
                 $(local_pkg_back_btn).html("Back");
                 $(local_pkg_back_btn).css('float','left');
                 $(local_pkg_back_btn).css('background', '#ea494f');
                 $(local_pkg_back_btn).css('marginTop','16px');
                 $(local_pkg_back_btn).css('color','white');
                 $(local_pkg_back_btn).css('width','60px');
                 $(local_pkg_back_btn).css('borderRadius','6px');
                 //$(pkg_back_btn).css('paddingLeft','6px');
                 $(local_pkg_back_btn).css('border','0px');
                 $(local_pkg_back_btn).css('fontWeight','bold');
                  var local_pkg_next_btn = document.createElement('button');
                 $(local_pkg_next_btn).html("Order Now");
                 $(local_pkg_next_btn).css('marginTop','16px');
                 $(local_pkg_next_btn).css('marginRight','20px');
                 $(local_pkg_next_btn).css('float','right');
                 $(local_pkg_next_btn).css('background', '#ea494f');
                 $(local_pkg_next_btn).css('color','white');
                 $(local_pkg_next_btn).css('width','90px');
                 $(local_pkg_next_btn).css('borderRadius','6px');
                 //$(pkg_next_btn).css('paddingLeft','6px');
                 $(local_pkg_next_btn).css('fontWeight','bold');
                 $(local_pkg_next_btn).css('border','0px');
                 $(local_pkg_back_btn).on('click',function () 
                 {
                 	   //loadingimage_handler();
                 	   //pkg_test_details_back(package_slug,package_labslug,package_name,package_consultation,package_labname,package_finalprice,package_discount,package_labarea,package_mrp)

                 	  //pkg_test_details_back(package_slug,package_name,package_consultation)
                 	  //pkg_test_details_back(package_slug,package_name,package_consultation,package_labname,package_finalprice,package_discount,package_labarea,package_mrp);
                 	});
                 $(local_pkg_mrp_info).append(local_pkg_mrp_data);
                 $(local_pkg_mrp_info).append(local_pkg_Mrp_element);
                 $(local_pkg_lab_mrp).append(local_pkg_labname_info)
                 $(local_pkg_lab_mrp).append(local_pkg_mrp_info);
                 $(local_pkg_finalprice_info).append(local_pkg_finalprice);
                 $(local_pkg_finalprice_info).append(local_pkg_finalprice_element);
                
                 $(local_pkg_address_location).append(local_pkg_labaddress_info);
                 $(local_pkg_address_finalprice).append(local_pkg_address_location);
                 $(local_pkg_address_finalprice).append(local_pkg_finalprice_info);
                 
                 $(local_pkg_counter_element).append(local_pkg_left_element);
                $(local_pkg_counter_element).append(local_pkg_right_element);
                 $(local_package_test_modal).append(local_pkg_test_close);
                $(local_package_test_modal).append(local_pkg_test_name);
                $(local_package_test_modal).append(local_pkg_labinfo_price);
                $(local_pkg_test_details).append(local_pkg_labinfo_price);
                $(local_pkg_test_details).append(local_pkg_lab_mrp);
                $(local_pkg_test_details).append(local_pkg_address_finalprice);
                $(local_package_test_modal).append(local_pkg_test_details);
                //$(package_test_modal).append(pkg_details_table);
                //$(package_test_modal).append(pkg_test_price_table);
                $(local_package_test_modal).append(local_pkg_contents_head);
                $(local_package_test_modal).append(local_pkg_counter_element);
                //if (data.packageDetails.TestsInfo.length ==0) 
               $(local_package_test_modal).append(local_pkg_back_btn);
                $(local_pkg_next_btn).on('click',function () 
                {
                      pkg_form_handler(package_name,package_labname,package_slug,package_consultation,package_labslug,package_finalprice,package_discount,package_labarea,package_mrp);                	
                	});
                $(local_package_test_modal).append(local_pkg_next_btn);
                $(local_pkg_test_close).on('click',function () 
                 {
                 	 
               	  $(local_package_test_modal).modal().close(); 
                 });//click
               $(local_package_test_modal).modal().open();
               
  
 }
     //function preview_handler(dataid,labname,labslug,dealname,deal_slug,deal_mrp,deal_discount,deal_finalprice,labarea)
      function pkg_preview_handler(package_name,package_labname,package_slug,package_labslug,package_finalprice,package_discount,package_labarea,package_mrp) 
   {
   	            
   	            var pkg_order_page = document.createElement('div');
                  $(pkg_order_page).addClass("modal");
                  $(pkg_order_page).attr('id','pkg_modal_thirdpage');
                  $(pkg_order_page).css('backgroundColor','#fff');
                  $(pkg_order_page).css('position','relative');
                  $(pkg_order_page).css('paddingRight','0px');
                  $(pkg_order_page).modal().open();
                  var pkg_closing_element = document.createElement('a');
                  $(pkg_closing_element).addClass("close");
                  $(pkg_closing_element).attr('href','#');
                  $(pkg_closing_element).html("&times;");
                  $(pkg_closing_element).css('marginTop' ,'-19px');
                  $(pkg_closing_element).css('fontSize','26px');
                  $(pkg_closing_element).css('marginRight','7px');
                  $(pkg_closing_element).attr('id','modal_close');
                  var pkg_preview_box = document.createElement('div');
                  $(pkg_preview_box).addClass("preview_details");
                  $(pkg_preview_box).css('height','364px')
                  $(pkg_preview_box).css('padding','10px');
                  $(pkg_preview_box).css('marginRight','20px');
                 
                  var pkg_preview_heading = document.createElement('h4');
                  $(pkg_preview_heading).html("Order Preview");
                  $(pkg_preview_heading).css('textAlign','center');
                  $(pkg_preview_heading).css('fontSize','18px');
                  $(pkg_preview_heading).css('fontWeight','bold');
                  $(pkg_preview_heading).css('color','#5cb0cf');
                  var pkg_time_error = document.createElement('div');
                   var pkg_preview_pkg_info = document.createElement('div');
                  $(pkg_preview_pkg_info).html("Package Information");
                  $(pkg_preview_pkg_info).css('background','rgb(65, 167, 179)');
                  $(pkg_preview_pkg_info).css('color','white');
                  $(pkg_preview_pkg_info).css('fontWeight','bold');
                  $(pkg_preview_pkg_info).css('paddingLeft','6px');
                  var pkg_table_dealname = document.createElement('table');
                  $(pkg_table_dealname).css('float','left');
                  $(pkg_table_dealname).css('marginBottom','15px');
                  //$(pkg_table_dealname).css('marginTop','21px');
                  $(pkg_table_dealname).css('width','316px');
                  /*var pkg_deal_th = document.createElement('th');
                  $(pkg_deal_th).html("Package Information");
                  $(pkg_table_dealname).append(pkg_deal_th);*/
                   var pkg_tr_dealname = document.createElement('tr');
                  var pkg_td_dealname = document.createElement('td');
                  $(pkg_td_dealname).html("&nbsp"+"&nbsp"+"&nbsp"+package_name);
                  $(pkg_td_dealname).css('paddingTop','3px');
                  var pkg_tr_labname = document.createElement('tr');
                  var pkg_td_labname = document.createElement('td');
                  $(pkg_td_labname).html("&nbsp"+"&nbsp"+"&nbsp"+"Lab"+"&nbsp"+":"+"&nbsp"+package_labname+"&nbsp"+"&nbsp"+"("+package_labarea+")");
                  var pkg_td_labarea = document.createElement('td');
                  var pkg_price_table = document.createElement('table');
                  $(pkg_price_table).css('float','right');
                  $(pkg_price_table).css('marginBottom','15px');
                  //$(pkg_price_table).css('marginTop','44px');
                  var pkg_tr_price = document.createElement('tr');
                  var pkg_td_price = document.createElement('td');
                  $(pkg_td_price).html("Price");
                  var pkg_td_fp = document.createElement('td');
                  $(pkg_td_fp).html(":"+"&nbsp"+"Rs."+package_finalprice);
                  $(pkg_td_fp).css('paddingLeft','11px');
                  var pkg_td_mrp_openbracket = document.createElement('td');
                  $(pkg_td_mrp_openbracket).html("&nbsp"+"(");
                  var pkg_td_mrp_price = document.createElement('td');
                  $(pkg_td_mrp_price).html(package_mrp);
                  $(pkg_td_mrp_price).css('textDecoration','line-through');
                  $(pkg_td_mrp_price).css('color','rgb(236,73,73)');
                  var pkg_td_mrp_closebracket = document.createElement('td');
                  $(pkg_td_mrp_closebracket).html(")");
                  var pkg_tr_discount = document.createElement('tr');
                  var pkg_td_dealdiscount = document.createElement('td');
                  $(pkg_td_dealdiscount).html("Discount");
                  var pkg_td_deal_discount = document.createElement('td');
                  $(pkg_td_deal_discount).html(":"+"&nbsp"+package_discount+"%");
                  $(pkg_td_deal_discount).css('paddingLeft','11px');
                  var pkg_ptnt_info_heading = document.createElement('div');
                  $(pkg_ptnt_info_heading).html("&nbsp"+"&nbsp"+"&nbsp"+"Patient Information");
                  $(pkg_ptnt_info_heading).css('marginTop','63px');
                  $(pkg_ptnt_info_heading).css('color','white');
                  $(pkg_ptnt_info_heading).css('background','rgb(65, 167, 179)');
                  $(pkg_ptnt_info_heading).css('fontWeight','bold');
                  var pkg_patient_details_table = document.createElement('table');
                  $(pkg_patient_details_table).css('marginBottom','30px');
                  $(pkg_patient_details_table).css('width','100%');
                  $(pkg_patient_details_table).addClass("pkg_ptnt_details");
                  var pkg_details_table_head = document.createElement('thead');
                  $(pkg_details_table_head).addClass("pkg_table");
                  var pkg_tr_ptntinfo_head = document.createElement('tr');
                  $(pkg_tr_ptntinfo_head).css('fontWeight' ,'bold');
                  $(pkg_tr_ptntinfo_head).css('background','rgb(65, 167, 179)');
                  $(pkg_tr_ptntinfo_head).css('color','white');
                  //$(pkg_tr_ptntinfo_head).addClass("ptnt_preview_info")
                  var pkg_th_ptntinfo_head = document.createElement('td');
                  $(pkg_th_ptntinfo_head).html("Patient Information");
                  $(pkg_th_ptntinfo_head).css('fontWeight','bold');
                  $(pkg_tr_ptntinfo_head).append(pkg_th_ptntinfo_head);
                  var pkg_tr_patient = document.createElement('tr');
                   $(pkg_tr_patient).css('lineHeight','2');
                   $(pkg_tr_patient).addClass("ptnt_preview_info");
                   $(pkg_tr_patient).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_patientname = document.createElement('td');
                  $(pkg_td_patientname).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Name");
                  $(pkg_td_patientname).css('width','40%');
                  var pkg_td_patient_name = document.createElement('td');
                  $(pkg_td_patient_name).html(":"+"&nbsp"+localStorage.getItem("pkg_patient_name"));
                 
                  var pkg_tr_email = document.createElement('tr');
                  $(pkg_tr_email).addClass("ptnt_preview_info");
                  $(pkg_tr_email).css('lineHeight','2');
                  $(pkg_tr_email).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_emailheading = document.createElement('td');
                  $(pkg_td_emailheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Email");
                  $(pkg_td_emailheading).css('width','40%');
                  var pkg_td_email_heading = document.createElement('td');
                  $(pkg_td_email_heading).html(":"+"&nbsp"+localStorage.getItem("pkg_email"));
                  var pkg_tr_phno = document.createElement('tr');
                  $(pkg_tr_phno).css('lineHeight','2');
                  $(pkg_tr_phno).addClass("ptnt_preview_info");
                  $(pkg_tr_phno).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_phnoheading = document.createElement('td');
                  $(pkg_td_phnoheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Mobile No");
                  $(pkg_td_phnoheading).css('width','40%');
                  var pkg_td_phno_heading = document.createElement('td');
                  $(pkg_td_phno_heading).html(":"+"&nbsp"+localStorage.getItem("pkg_phone"));
                  var pkg_tr_apptime = document.createElement('tr');
                  $(pkg_tr_apptime).css('lineHeight','2');
                  $(pkg_tr_apptime).addClass("ptnt_preview_info");
                  $(pkg_tr_apptime).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_apptimeheading = document.createElement('td');
                  $(pkg_td_apptimeheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Appointment Timing");
                  var pkg_td_apptime_heading = document.createElement('td');
                  $(pkg_td_apptime_heading).html(":"+"&nbsp"+localStorage.getItem("pkg_app_time"));
                  var pkg_tr_address = document.createElement('tr');
                  $(pkg_tr_address).css('lineHeight','2');
                  $(pkg_tr_address).addClass("ptnt_preview_info");
                  $(pkg_tr_address).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_address_heading = document.createElement('td');
                  $(pkg_td_address_heading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Address");
                  $(pkg_td_address_heading).css('width','40%');
                  var pkg_td_address = document.createElement('td');
                  $(pkg_td_address).html(":"+"&nbsp"+localStorage.getItem("pkg_address"));
                  $(pkg_tr_address).append(pkg_td_address_heading);
                  $(pkg_tr_address).append(pkg_td_address);
                  var pkg_ptnt_info = document.createElement('div');
                  $(pkg_ptnt_info).html("Patient Information");
                  var pkg_back_button = document.createElement('button');
                  $(pkg_back_button).html("Back");
                  $(pkg_back_button).css('float','left');
                  $(pkg_back_button).css('backgroundColor','#ec4949');
                  $(pkg_back_button).css('width','98px');
                  $(pkg_back_button).css('borderRadius','3px');
                  $(pkg_back_button).css('border','0px');
                  $(pkg_back_button).css('marginTop','11px');
                  var pkg_order_button = document.createElement('button');
                  $(pkg_order_button).html("Order");
                  $(pkg_order_button).css('float','right');
                  $(pkg_order_button).css('backgroundColor','#ec4949');
                  $(pkg_order_button).css('width','98px');
                  $(pkg_order_button).css('borderRadius','3px');
                  $(pkg_order_button).css('border','0px');
                  $(pkg_order_button).css('marginTop','11px');
                  var pkg_tmm_form_element = document.createElement('div');
                  $(pkg_tmm_form_element).attr('id','tmm-form-wizard');
                  var pkg_prevbtn_element = document.createElement('div');
                  $(pkg_prevbtn_element).css('margin','0px');
                  $(pkg_prevbtn_element).addClass('prev');
                  var pkg_backbtn = document.createElement('button');
                  $(pkg_backbtn).attr('id','step2_back_btn');
                  $(pkg_backbtn).addClass("button button-control");
                  $(pkg_backbtn).attr('type','button');
                  var pkg_span_backbtn = document.createElement('span');
                  $(pkg_span_backbtn).html("Back");
                  var pkg_backbtn_divider = document.createElement('div');
                  $(pkg_backbtn_divider).addClass("button-divider");
                  var pkg_orderbtn_element = document.createElement('div');
                  $(pkg_orderbtn_element).css('margin','0px');
                  $(pkg_orderbtn_element).addClass('next');
                  var pkg_nextbtn = document.createElement('button');
                  $(pkg_nextbtn).attr('id','step2_next_btn');
                  $(pkg_nextbtn).addClass("button button-control");
                  $(pkg_nextbtn).attr('type','button');
                  var pkg_span_nextbtn = document.createElement('span');
                  $(pkg_span_nextbtn).html("Order");
                  var pkg_nextbtn_divider = document.createElement('div');
                  $(pkg_nextbtn_divider).addClass("button-divider");
                  $(pkg_backbtn).append(pkg_span_backbtn);
                  $(pkg_prevbtn_element).append(pkg_backbtn);
                  $(pkg_prevbtn_element).append(pkg_backbtn_divider);
                   $(pkg_nextbtn).append(pkg_span_nextbtn);
                   $(pkg_orderbtn_element).append(pkg_nextbtn);
                   $(pkg_orderbtn_element).append(pkg_nextbtn_divider);
                  $(pkg_tr_labname).append(pkg_td_labname);
                  $(pkg_tr_dealname).append(pkg_td_dealname);
                  $(pkg_table_dealname).append(pkg_tr_dealname);
                  $(pkg_table_dealname).append(pkg_tr_labname);
                  $(pkg_tr_price).append(pkg_td_price);
                  $(pkg_tr_price).append(pkg_td_fp);
                  $(pkg_tr_price).append(pkg_td_mrp_openbracket);
                  $(pkg_tr_price).append(pkg_td_mrp_price);
                  $(pkg_tr_price).append(pkg_td_mrp_closebracket);
                  $(pkg_tr_discount).append(pkg_td_dealdiscount);
                  $(pkg_tr_discount).append(pkg_td_deal_discount);
                  $(pkg_price_table).append(pkg_tr_price);
                  $(pkg_price_table).append(pkg_tr_discount);
                  $(pkg_tr_patient).append(pkg_td_patientname);
                  $(pkg_tr_patient).append(pkg_td_patient_name);
                  $(pkg_tr_email).append(pkg_td_emailheading);
                  $(pkg_tr_email).append(pkg_td_email_heading);
                  $(pkg_tr_phno).append(pkg_td_phnoheading);
                  $(pkg_tr_phno).append(pkg_td_phno_heading);
                  $(pkg_tr_apptime).append(pkg_td_apptimeheading);
                  $(pkg_tr_apptime).append(pkg_td_apptime_heading);
                  //$(pkg_details_table_head).append(pkg_tr_ptntinfo_head);
                  $(pkg_details_table_head).append(pkg_tr_patient);
                  $(pkg_details_table_head).append(pkg_tr_email);
                  $(pkg_details_table_head).append(pkg_tr_phno);
                  $(pkg_details_table_head).append(pkg_tr_address);
                  $( pkg_details_table_head).append(pkg_tr_apptime); 
                  $(pkg_patient_details_table).append(pkg_details_table_head);
                  $(pkg_tmm_form_element).append(pkg_prevbtn_element);
                  $(pkg_tmm_form_element).append(pkg_orderbtn_element);
                  //$(pkg_preview_div_element).append(pkg_preview_heading);
                  $("#pkg_modal_thirdpage").append(pkg_closing_element);
                  //$(pkg_preview_box).append(pkg_preview_div_element);
                  //$(pkg_preview_box).append(pkg_time_error);
                  $(pkg_preview_box).append(pkg_preview_pkg_info);
                  $(pkg_preview_box).append(pkg_table_dealname); 
                  $(pkg_preview_box).append(pkg_price_table);
                  $(pkg_preview_box).append(pkg_ptnt_info_heading);
                  $(pkg_preview_box).append(pkg_patient_details_table);
                  $(pkg_preview_box).append(pkg_tmm_form_element);
                  $(".close").on('click',function () 
                 {
               	  $(order_page).modal().close(); 
                 });//click
                   $("#pkg_modal_thirdpage").append(pkg_preview_box);  
                    
                     /*$(prevbtn_element).on('click', function ()
                      {
                      	 
                          form_handler(dataid,labname,labslug,dealname,deal_slug,deal_mrp,deal_discount,deal_finalprice,labarea);
                     	});//click fnctn  
                     	$(orderbtn_element).on('click',function ()
                     	 {
                            loadingimage_page();                    		
                             confirm_pagehandler(labname,labslug,dealname,deal_slug,deal_mrp,deal_discount,deal_finalprice,labarea)                     		
                     	      
                     		});//click  */        
                 
   }//fnctn handler
   
     