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
         success:function(data){
               console.log(data);
                var pkg_dataToStore = JSON.stringify(data);
                console.log(pkg_dataToStore);
             localStorage.setItem('pkg_someData',pkg_dataToStore);
               var package_list_modal = document.createElement('div');
               $(package_list_modal).addClass("modal");
               $(package_list_modal).attr('id', 'modal_packages_firstpage');
               $(package_list_modal).css('position','relative');
               $(package_list_modal).css('backgroundColor','#fff');
               $(package_list_modal).css('paddingRight','0px');
               $(package_list_modal).css('width','960px');
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
               var pkg_labconsultations = document.createElement('div');
              $(pkg_labconsultations).html("Dr"+"&nbsp"+"Consultations");
              $(pkg_labconsultations).css('float', 'left');
              $(pkg_labconsultations).css('textAlign','center');
              $(pkg_labconsultations).css('padding','10px');
              var pkg_consultations_imgs = document.createElement('div');
              $(pkg_consultations_imgs).css('float','right');
              var pkg_consultations_asc = document.createElement('div');
              var pkg_consultations_img_asc = document.createElement('img');
              $(pkg_consultations_img_asc).attr('src','images/table_sorter_asc.png');
              $(pkg_consultations_img_asc).css('paddingBottom','14px');
              $(pkg_consultations_img_asc).css('paddingLeft','1px');
             var pkg_consultations_desc = document.createElement('div');
             var pkg_consultations_img_desc = document.createElement('img');
             $(pkg_consultations_img_desc).attr('src','images/table_sorter_desc.png');
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
              	 $(lab_details_tr).attr('data-package_labslug',data[i].labSlug);
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
              	 $(book_div).css("fontSize","11px");
              	 $(book_div).css('width','36px');
              	 $(book_div).css("paddingLeft","5px");
              	 $(book_div).css("paddingRight","5px");
              	 $(book_div).css('border','0px');
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
                 	 //alert("package details");
                 	 var package_labslug = $(this).data('package_labslug');
                 	 pkg_test_details(package_labslug,package_slug,package_name,package_consultation);
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
 }
 });
 }
 
 function pkg_test_details(package_labslug,package_slug,package_name,package_consultation)
 {
 	 $.ajax({
         url:"http://beta.zotey.com/m-api/d-packages/lab-package-info",
         type:'POST',
         dataType: 'json',
         data:{packageSlug:package_slug,labSlug:package_labslug},
         success:function(data){
         	console.log(data);
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
               var pkg_test_name = document.createElement('div');
              $(pkg_test_name).html(data.packageName);
               $(pkg_test_name).css('textAlign','center');
               $(pkg_test_name).css('fontSize','18px');
               $(pkg_test_name).css('fontWeight','bold');
               $(pkg_test_name).css('color','#5cb0cf');
               var pkg_labinfo_price = document.createElement('div');
               $(pkg_labinfo_price).html("Price & Lab Information");
               $(pkg_labinfo_price).css('background','#41A7B3');
               $(pkg_labinfo_price).css('color','white');
               $(pkg_labinfo_price).css('fontWeight','bold');
               $(pkg_labinfo_price).css('paddingLeft','6px');
              //$(pkg_labinfo_price).css('textAlign','center');
               $(pkg_labinfo_price).css('marginTop','16px');
               $(pkg_labinfo_price).css('marginRight','10px');
               var pkg_lab_mrp  = document.createElement('div');
               $(pkg_lab_mrp).css('marginRight','10px');
               var pkg_labname_info = document.createElement('div');
                $(pkg_labname_info).html(data.labName);
               $(pkg_labname_info).css('float','left');
               $(pkg_labname_info).css('width','477px');
               var pkg_mrp_info = document.createElement('div');
               $(pkg_mrp_info).css('float','right'); 
               var pkg_mrp_data = document.createElement('div');
                $(pkg_mrp_data).css('float','left');
               var pkg_Mrp = document.createElement('div');
               $(pkg_Mrp).html("&nbsp"+"&nbsp"+data.packageMRP);
               $(pkg_Mrp).css('color','rgb(236,73,73)');
               //$(pkg_Mrp).html("MRP"+"&nbsp"+"&nbsp");
               $(pkg_Mrp).css('float','left');
               $(pkg_Mrp).css('paddingRight','36px');
               $(pkg_Mrp).css('width','27px');
               $(pkg_mrp_data).append(pkg_Mrp);
               var pkg_Mrp_element = document.createElement('div');
               //$(pkg_Mrp_element).html(data.packageMRP); 
               $(pkg_Mrp_element).html("&nbsp"+"("+"Mrp"+")");
               //$(pkg_Mrp_element).css('textDecoration','line-through');
              	//$(pkg_Mrp_element).css('color','rgb(236,73,73)');
              	$(pkg_Mrp_element).css('fontSize','13px');
              	$(pkg_Mrp_element).css('float','right');
              	 var pkg_address_finalprice  = document.createElement('div');
               $(pkg_address_finalprice).css('marginRight','10px');
               //$(pkg_address_finalprice).css('float','left');
               var pkg_address_location =document.createElement('div');
               $(pkg_address_location).css('float','left'); 
               var pkg_address_img = document.createElement('div');
               $(pkg_address_img).css('float','left');
               var pkg_address_img_loc = document.createElement('img');
               $(pkg_address_img_loc).attr('src','images/location-bi.png');
               $(pkg_address_img_loc).css('height','17px');
               $(pkg_address_img).append(pkg_address_img_loc);
               $(pkg_address_location).append(pkg_address_img);
               var pkg_labaddress_info = document.createElement('div');
               $(pkg_labaddress_info).css('float','right');
                $(pkg_labaddress_info).html("&nbsp"+data.labAddress);
                $(pkg_labaddress_info).css('width','423px');
               var pkg_labaddress_element = document.createElement('div');
               $(pkg_labaddress_element).html(data.labAddress);
               var pkg_finalprice_info = document.createElement('div');
               $(pkg_finalprice_info).css('float','right'); 
               var pkg_finalprice = document.createElement('div');
              // $(pkg_finalprice).html("Final Price"+"&nbsp"+"&nbsp"+":"+"&nbsp");
              $(pkg_finalprice).html("Discount"+"&nbsp"+"&nbsp"+"&nbsp");
               $(pkg_finalprice).css('float','left');
               var pkg_finalprice_element = document.createElement('div');
               //$(pkg_finalprice_element).html(data.packageFinalPrice); 
               $(pkg_finalprice_element).html("&nbsp"+":"+"&nbsp"+"&nbsp"+"&nbsp"+data.packageDiscount+"%");
              	$(pkg_finalprice_element).css('float','right');
              	 var pkg_area_discount  = document.createElement('div');
               $(pkg_area_discount).css('marginRight','10px');
               var pkg_area_pincode = document.createElement('div');
               $(pkg_area_pincode).css('float','left');
                $(pkg_area_pincode).html(data.labArea+","+data.labPincode);
                $(pkg_area_pincode).css('width','426px');
                //$(pkg_area_pincode).css('marginBottom','16px');
               var pkg_discount_info = document.createElement('div');
               $(pkg_discount_info).css('float','right'); 
               //$(pkg_discount_info).css('marginBottom','16px');
               var pkg_discount = document.createElement('div');
               //$(pkg_discount).html("Discount"+"&nbsp"+"&nbsp"+"&nbsp");
               $(pkg_discount).html("Final Price"+"&nbsp"+"&nbsp"+":"+"&nbsp");
               $(pkg_discount).css('float','left');
               //$(pkg_discount).css('paddingRight','1px');
               var pkg_discount_element = document.createElement('div');
               //$(pkg_discount_element).html("&nbsp"+":"+data.packageDiscount+"%"); 
               $(pkg_discount_element).addClass("fa fa-inr");
               $(pkg_discount_element).html(data.packageFinalPrice);
              	$(pkg_discount_element).css('float','right');
              	$(pkg_discount_element).css('paddingTop','5px');
               var pkg_contents_head = document.createElement('div');
               $(pkg_contents_head).css('marginTop','93px');
               $(pkg_contents_head).css('marginRight','10px');
               var pkg_contents_head_element = document.createElement('h5');
               $(pkg_contents_head_element).html("&nbsp"+"&nbsp"+"&nbsp"+"Package Contents");
               $(pkg_contents_head_element).css('backgroundColor','#41A7B3');
                 $(pkg_contents_head_element).css('color','white');
                 $(pkg_contents_head_element).css('fontWeight','bold');
                 $(pkg_contents_head_element).css('height','19px');
                 $(pkg_contents_head_element).css('paddingTop','1px');
                 $(pkg_contents_head).append(pkg_contents_head_element);
                 var pkg_count_var = 1;
                 var pkg_counter_element = document.createElement('div');
                 $(pkg_counter_element).addClass("tests_count");
                 $(pkg_counter_element).css("marginRight","10px");
                 var pkg_left_counter = document.createElement('div');
                 $(pkg_left_counter).addClass("left_count");
                 var pkg_right_counter = document.createElement('div');
                 $(pkg_right_counter).addClass("right_count");
                 for (var i=0 ;i<data.packageDetails.TestsInfo.length;i++) 
               {
               	if((data.packageDetails.TestsInfo.length >20) && (pkg_count_var>(data.packageDetails.TestsInfo.length)))
               {
               	var pkg_contents_data = document.createElement('div');
               	$(pkg_contents_data).addClass("package_contents");
               	var pkgcontentname = data.packageDetails.TestsInfo[i];
               	var pkgcontentname_result = pkgcontentname.split(",");
               	$(pkg_contents_data).html(pkgcontentname_result);
               	$(pkg_right_counter).append(pkg_contents_data);
               	$(pkg_left_counter).css('float','left');
               	pkg_count_var++;
               }//if
               else 
               {
               	 var pkg_contents_data = document.createElement('div');
               	$(pkg_contents_data).addClass("package_contents");
               	var pkgcontentname = data.packageDetails.TestsInfo[i];
               	var pkgcontentname_result = pkgcontentname.split(",");
               	$(pkg_contents_data).html(pkgcontentname_result);
               	$(pkg_left_counter).append(pkg_contents_data);
               	 pkg_count_var++;
               }//else
               }//for
               $(pkg_counter_element).append(pkg_left_counter);
               $(pkg_counter_element).append(pkg_right_counter);
                 var pkg_back_btn = document.createElement('button');
                 $(pkg_back_btn).html("Back");
                 $(pkg_back_btn).css('float','left');
                 $(pkg_back_btn).css('background', '#ea494f');
                 $(pkg_back_btn).css('marginTop','16px');
                 $(pkg_back_btn).css('color','white');
                 //$(pkg_back_btn).css('width','50px');
                 $(pkg_back_btn).css('borderRadius','6px');
                 //$(pkg_back_btn).css('paddingLeft','6px');
                 $(pkg_back_btn).css('border','0px');
                  var pkg_next_btn = document.createElement('button');
                 $(pkg_next_btn).html("Book");
                 $(pkg_next_btn).css('marginTop','16px');
                 $(pkg_next_btn).css('marginRight','10px');
                 $(pkg_next_btn).css('float','right');
                 $(pkg_next_btn).css('background', '#ea494f');
                 $(pkg_next_btn).css('color','white');
                 //$(pkg_next_btn).css('width','50px');
                 $(pkg_next_btn).css('borderRadius','6px');
                 //$(pkg_next_btn).css('paddingLeft','6px');
                 $(pkg_next_btn).css('border','0px');
                 $(pkg_back_btn).on('click',function () 
                 {
                 	  //package_list(package_slug,package_name,package_consultation);
                 	  pkg_test_details_back(package_slug,package_name,package_consultation)
                 	});
                 	$(pkg_next_btn).on('click',function () 
                 	{
                 		alert("book");
                 		});
                 $(pkg_mrp_info).append(pkg_mrp_data);
                 $(pkg_mrp_info).append(pkg_Mrp_element);
                 $(pkg_lab_mrp).append(pkg_labname_info)
                 $(pkg_lab_mrp).append(pkg_mrp_info);
                 $(pkg_finalprice_info).append(pkg_finalprice);
                 $(pkg_finalprice_info).append(pkg_finalprice_element);
                 $(pkg_discount_info).append(pkg_discount);
                 $(pkg_discount_info).append(pkg_discount_element);
                 //$(pkg_address_finalprice).append(pkg_labaddress_info);
                 $(pkg_address_location).append(pkg_labaddress_info);
                 $(pkg_address_finalprice).append(pkg_address_location);
                 $(pkg_address_finalprice).append(pkg_finalprice_info);
                 $(pkg_area_discount).append(pkg_area_pincode);
                 $(pkg_area_discount).append(pkg_discount_info);
                 $(package_test_modal).append(pkg_test_close);
                $(package_test_modal).append(pkg_test_name);
                $(package_test_modal).append(pkg_labinfo_price);
                $(package_test_modal).append(pkg_lab_mrp);
                $(package_test_modal).append(pkg_address_finalprice);
                $(package_test_modal).append(pkg_area_discount);

                $(package_test_modal).append(pkg_contents_head);
                $(package_test_modal).append(pkg_counter_element);
                if (data.packageDetails.TestsInfo.length ==0) 
                {
                	 $(pkg_contents_head).detach();
                }
                $(package_test_modal).append(pkg_back_btn);
                $(package_test_modal).append(pkg_next_btn);
                $(pkg_test_close).on('click',function () 
                 {
                 	 
               	  $(package_test_modal).modal().close(); 
                 });//click
               $(package_test_modal).modal().open();
            }//success
            });//ajax
 }//fnctn handler 
 
 function pkg_test_details_back(package_slug,package_name,package_consultation)
 {
     var pkg_localData = JSON.parse(localStorage.getItem('pkg_someData')); 
     var local_package_list_modal = document.createElement('div');
               $(local_package_list_modal).addClass("modal");
               $(local_package_list_modal).attr('id', 'modal_packages_firstpage');
               $(local_package_list_modal).css('position','relative');
               $(local_package_list_modal).css('backgroundColor','#fff');
               $(local_package_list_modal).css('paddingRight','0px');
               $(local_package_list_modal).css('width','960px');
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
               $(local_labs_tr).append(local_labname_th);
              $(local_labs_tr).append(local_labarea_th);
              $(local_labs_tr).append(local_labtests_th);
              $(local_labs_tr).append(local_labconsultations_th);
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
              	 $(local_labtests_td).css('textAlign','right');
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
              	 $(local_discount_td).css('textAlign','right');
              	 var local_book_td = document.createElement('td');
              	 $(local_book_td).css('paddingLeft','6px');
              	 $(local_book_td).css('paddingRight','6px');
              	 $(local_book_td).css('border', '1px solid #ddd');
              	 var local_book_div = document.createElement('div');
              	 $(local_book_div).html("View");
              	 $(local_book_div).css("background","#ea494f");
              	 $(local_book_div).css('borderRadius','5px');
              	 $(local_book_div).css("color","white");
              	 $(local_book_div).css("fontSize","11px");
              	 $(local_book_div).css('width','36px');
              	 $(local_book_div).css("paddingLeft","5px");
              	 $(local_book_div).css("paddingRight","5px");
              	 $(local_book_div).css('border','0px');
              	 $(local_book_td).append(local_book_div);
              	 $(local_lab_details_tr).append(local_labname_td);
                $(local_lab_details_tr).append(local_labarea_td);
                $(local_lab_details_tr).append(local_labtests_td);
                $(local_lab_details_tr).append(local_consultations_td);
                $(local_lab_details_tr).append(local_price_td);
                $(local_lab_details_tr).append(local_discount_td);
                $(local_lab_details_tr).append(local_book_td);
                 $(local_labs_table).append(local_lab_details_tr);
                 $(local_lab_details_tr).on('click',function () 
                 {
                 	 //alert("package details");
                 	 var local_package_labslug = $(this).data('package_labslug');
                 	 pkg_test_details(local_package_labslug,package_slug,package_name,package_consultation);
                 	});//click
              	}  
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
 
  function pkg_form_handler(dataid,labname,labslug,dealname,deal_slug,deal_mrp,deal_discount,deal_finalprice,labarea)
      {
                  var pkg_booking_page = document.createElement('div');
                  $(pkg_booking_page).addClass("modal");
                  $(pkg_booking_page).attr('id','modal_secondpage');
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
                  $(pkg_lab_details).html(labname);
                  $(pkg_lab_details).css('textAlign' ,'right');
                  $(pkg_lab_details).css('paddingRight','17px');
                  $(pkg_lab_details).css('fontWeight','bold');
                  $(pkg_lab_details).css('marginTop','6px');  
                  $(pkg_lab_details).css('marginRight','20px');
                  var pkg_deal_name  = document.createElement('div');
                  $(pkg_deal_name).html(dealname);
                  $(pkg_deal_name).css('textAlign' ,'right');
                  $(pkg_deal_name).css('paddingRight','14px');
                  $(pkg_deal_name).css('fontWeight','bold');
                  $(deal_name).css('marginTop','6px');
                  $(deal_name).css('marginRight','20px');
                  var parent_wizard = document.createElement('div');
                  $(parent_wizard).attr('id','tmm-form-wizard');
                  $(parent_wizard).addClass('container substrate');
                  $(parent_wizard).css('width','100%');
                  $(parent_wizard).css('paddingTop','1px');
                  var form_element = document.createElement('form');
                  $(form_element).attr('method','post');
                  $(form_element).attr('id','patient_info'); 
                  $(form_element).attr('name','patient_info');
                  $(form_element).attr('action','#');
                  $(form_element).attr('role','form');
                  $(form_element).css('marginRight','20px');
                  var wizard_element = document.createElement('div');
                  $(wizard_element).addClass("form-wizard");
                  $(wizard_element).css('padding-top','0px');
                  var row_element = document.createElement('div');
                  $(row_element).addClass("row");
                  var col_element = document.createElement('div');
                  $(col_element).addClass("col-md-12 no-pad");
                  var form_class = document.createElement('form-wizard');
                  $(form_class).addClass("form-wizard");
                  $(form_class).css('border','0px');
                  $(form_class).css('paddingTop','4px');
                  var second_row = document.createElement('div');
                  $(second_row).addClass("row");
                   var col_class_element = document.createElement('div');
                  $(col_class_element).addClass("col-md-12 col-sm-12");
                  $(col_class_element).css('paddingTop','5px');
                  var name_row = document.createElement('div');
                  $(name_row).addClass("row");
                  var name_col_class = document.createElement('div');
                  $(name_col_class).addClass("col-md-12 col-sm-12");
                  var fieldset_element = document.createElement('fieldset');
                  $(fieldset_element).addClass("input-block");
                  var label_ptntname = document.createElement('label');
                  $(label_ptntname).attr('for','patient_name');
                  $(label_ptntname).html("Full Name");
                  var input_element = document.createElement('input');
                  $(input_element).attr('type','text');
                  $(input_element).attr('id', 'patient_name');
                  $(input_element).attr('name','patient_name');
                  $(input_element).attr('value','');
                  $(input_element).addClass("form-icon form-icon-user");
                  $(input_element).attr('placeholder','Please enter your name');
                  $(input_element).attr('required','');
                  var email_row = document.createElement('div');
                  $(email_row).addClass("row");
                  var email_col_class = document.createElement('div');
                  $(email_col_class).addClass("col-md-12 col-sm-12");
                  var fieldset_email = document.createElement('fieldset');
                  $(fieldset_email).addClass("input-block");
                  var label_email = document.createElement('label');
                  $(label_email).attr('for','email');
                  $(label_email).html("Email");
                  var input_email = document.createElement('input');
                  $(input_email).attr('type','text');
                  $(input_email).attr('id','email');
                  $(input_email).attr('name','patient_email');
                  $(input_email).attr('value','');
                  $(input_email).addClass('form-icon form-icon-mail');
                  $(input_email).attr('placeholder','Please enter your email ID');
                  $(input_email).attr('required','required');
                  var phno_row = document.createElement('div');
                  $(phno_row).addClass("row");
                  var phno_col_class = document.createElement('div');
                  $(phno_col_class).addClass("col-md-6 col-sm-12");
                  var fieldset_phno = document.createElement('fieldset');
                  $(fieldset_phno).addClass("input-block");
                  var label_phno = document.createElement('label');
                  $(label_phno).attr('for','phone1');
                  $(label_phno).html('Mobile No:');
                  var input_phno = document.createElement('input');
                  $(input_phno).attr('type','text');
                  $(input_phno).attr('id','phone');
                  $(input_phno).attr('name','patient_mobile');
                  $(input_phno).attr('value','');
                  $(input_phno).addClass('form-icon form-icon-phone');
                  $(input_phno).attr('placeholder','Number');
                  $(input_phno).attr('required','required');
                  var apptime_col_class = document.createElement('div');
                  $(apptime_col_class).addClass('col-md-6 col-sm-12');
                  var fieldset_booking = document.createElement('fieldset');
                  $(fieldset_booking).addClass("input-block");
                  var label_booking = document.createElement('label');
                  $(label_booking).attr('for','app_time');
                  $(label_booking).html('Appointment Timing:');
                  var input_booking = document.createElement('input');
                  $(input_booking).attr('type','text');
                  $(input_booking).attr('id','app_time');
                  $(input_booking).attr('name','appointment_time');
                  $(input_booking).attr('value','');
                  $(input_booking).attr('placeholder','Select Timeslot');
                  $(input_booking).addClass("form_datetime");
                  $(input_booking).attr('required','required');
                  var information_row = document.createElement('row');
                  $(information_row).addClass("row");
                  var note_col_class = document.createElement('div');
                  $(note_col_class).addClass("col-md-12 col-sm-12");
                  var font_element = document.createElement('font');
                  $(font_element).html("*Note: Patient Information is kept confidential and is used only for booking appointments and to improve the service.");
                  $(font_element).css('fontSize','10px');
                  var prevbtn_element = document.createElement('div');
                  $(prevbtn_element).css('marginLeft','30px');
                  $(prevbtn_element).addClass('prev');
                  var backbtn = document.createElement('button');
                  $(backbtn).attr('id','step2_back_btn');
                  $(backbtn).addClass("button button-control");
                  $(backbtn).attr('type','button');
                  var span_backbtn = document.createElement('span');
                  $(span_backbtn).html("Back");
                  $(backbtn).append(span_backbtn);
                  var backbtn_divider = document.createElement('div');
                  $(backbtn_divider).addClass("button-divider");
                  var nextbtn_element = document.createElement('div');
                  $(nextbtn_element).css('marginLeft','50px');
                  $(nextbtn_element).addClass('next');
                  var nextbtn = document.createElement('button');
                  $(nextbtn).attr('id','step2_next_btn');
                  $(nextbtn).addClass("button button-control");
                  $(nextbtn).attr('type','button');
                  var span_nextbtn = document.createElement('span');
                  $(span_nextbtn).html("Next");
                  $(nextbtn).append(span_nextbtn);
                  var nextbtn_divider = document.createElement('div');
                  $(nextbtn_divider).addClass("button-divider");
                  $(fieldset_element).append(label_ptntname);
                  $(fieldset_element).append(input_element);
                  $(fieldset_email).append(label_email);
                  $(fieldset_email).append(input_email);
                  $(fieldset_phno).append(label_phno);
                  $(fieldset_phno).append(input_phno);
                  $(fieldset_booking).append(label_booking);
                  $(fieldset_booking).append(input_booking);
                  $(name_col_class).append(fieldset_element);
                  $(email_col_class).append(fieldset_email);
                  $(phno_col_class).append(fieldset_phno);
                  $(apptime_col_class).append(fieldset_booking);
                  $(note_col_class).append(font_element);
                  $(name_row).append(name_col_class);
                  $(email_row).append(email_col_class);
                  $(phno_row).append(phno_col_class);
                  $(phno_row).append(apptime_col_class);
                  $(information_row).append(note_col_class);
                  $(col_class_element).append(name_row);
                  $(col_class_element).append(email_row);
                  $(col_class_element).append(phno_row);
                  $(col_class_element).append(information_row);
                  $(second_row).append(col_class_element);
                  $(form_class).append(second_row);
                  $(col_element).append(form_class);
                  $(row_element).append(col_element);
                  $(prevbtn_element).append(backbtn);
                  $(prevbtn_element).append(backbtn_divider);
                  $(row_element).append(prevbtn_element);
                  $(nextbtn_element).append(nextbtn);
                  $(nextbtn_element).append(nextbtn_divider);
                  $(row_element).append(nextbtn_element);
                  $(wizard_element).append(row_element);
                  $(form_element).append(wizard_element);
                  $(parent_wizard).append(form_element);
                  var error_display = document.createElement('div');
                  $(error_display).addClass("display_error");
                 var name_element = document.createElement('div');
                 $(name_element).addClass("err_msg");
                 $(name_element).attr('id','err_name');
                 $(name_element).css('color','rgb(236,73,73)');
                 $(name_element).css('textAlign','left');
                 $(name_element).css('marginLeft','16px');
                 $(name_element).css('display','none');
                  var star_element = document.createElement('span');
                  $(star_element).addClass('star');
                  $(star_element).html("&#x2605");
                  $(star_element).css('float','left');
                  var error_name_element = document.createElement('div');
                  $(error_name_element).html('Enter Full Name');
                  $(name_element).append(star_element);
                  $(name_element).append(error_name_element);
                  var email_element = document.createElement('div');
               	$(email_element).addClass("err_msg");
                  $(email_element).attr('id','err_email');
                  $(email_element).css('color','rgb(236,73,73)');
                  $(email_element).css('textAlign','left');
                  $(email_element).css('marginLeft','16px');
                  $(email_element).css('display','none');
                  var star_email = document.createElement('span');
                  $(star_email).addClass('star');
                  $(star_email).html("&#x2605");
                  $(star_email).css('float','left');
                  var error_email_element = document.createElement('div');
                  $(error_email_element).html('Enter valid e-mail id');
                 	$(email_element).append(star_email);
                 	$(email_element).append(error_email_element);
                  var mbno_element = document.createElement('div');
                 	$(mbno_element).addClass("err_msg");
                 	$(mbno_element).attr('id','err_mbno');
                  $(mbno_element).css('color','rgb(236,73,73)');
                  $(mbno_element).css('textAlign','left');
                 	$(mbno_element).css('marginLeft','16px');
                  $(mbno_element).css('display','none');
                  var star_mbno = document.createElement('span');
                  $(star_mbno).addClass('star');
                  $(star_mbno).html("&#x2605");
                  $(star_mbno).css('float','left');
                  var error_mbno_element = document.createElement('div');
                  $(error_mbno_element).html('Enter correct mobile number');
                  $(mbno_element).append(star_mbno);
                  $(mbno_element).append(error_mbno_element);
                  var phno_element = document.createElement('div');
                  $(phno_element).addClass("err_msg");
                  $(phno_element).css('color','rgb(236,73,73)');
                  $(phno_element).css('textAlign','left');
                  $(phno_element).css('marginLeft','16px');
                  $(phno_element).css('display','none');
                  var star_phno = document.createElement('span');
                  $(star_phno).addClass('star');
                  $(star_phno).html("&#x2605");
                  $(star_phno).css('float','left');
                  var error_phno_element = document.createElement('div');
                  $(error_phno_element).html('Mobile number is not valid');
                  $(phno_element).append(star_phno);
                  $(phno_element).append(error_phno_element);
                  var apptime_element = document.createElement('div');
                 	$(apptime_element).attr('id','err_apptime');
                 	$(apptime_element).addClass("err_msg");
                  $(apptime_element).css('color','rgb(236,73,73)');
                 	$(apptime_element).css('textAlign','left');
                 	$(apptime_element).css('marginLeft','16px');
                 	$(apptime_element).css('display','none');
                 	var star_apptime = document.createElement('span');
                 	$(star_apptime).addClass('star');
                 	$(star_apptime).html("&#x2605");
                 	$(star_apptime).css('float','left');
                  var error_apptime_element = document.createElement('div');
                  $(error_apptime_element).html('Please select Appointment Time');
               	 $(apptime_element).append(star_apptime);
                   $(apptime_element).append(error_apptime_element);
                  var app_time_element = document.createElement('div');
                   $(app_time_element).attr('id','err_app_time');
                   $(app_time_element).addClass("err_msg");
                   $(app_time_element).css('color','rgb(236,73,73)');
                   $(app_time_element).css('textAlign','left');
                   $(app_time_element).css('marginLeft','16px');
                 	 $(app_time_element).css('display','none');
                   var star_app_time = document.createElement('span');
                    $(star_app_time).addClass('star');
                    $(star_app_time).html("&#x2605");
                    $(star_app_time).css('float','left');
                    var error_app_time_element = document.createElement('div');
                     $(error_app_time_element).html('You have given past time.Give future time');
                     $(app_time_element).append(star_app_time);
                     $(app_time_element).append(error_app_time_element);
                     $(error_display).append(name_element);
                     $(error_display).append(email_element);
                     $(error_display).append(mbno_element);
                     $(error_display).append(apptime_element);
                     $(error_display).append(app_time_element);
                     $("#modal_secondpage").append(close_element);
                     $("#modal_secondpage").append(contact_heading);
                     $("#modal_secondpage").append(lab_details);
                     $("#modal_secondpage").append(deal_name);
                     $("#modal_secondpage").append(error_display);
                     $("#modal_secondpage").append(parent_wizard);
                         
                   $(input_booking).on('keyup' ,function (event)
                      { 
                         event.preventDefault();
                    	 });//keyup
                   $(input_booking).on('keypress' ,function (event)
                      {
                    	    event.preventDefault();
                      });//keypress	
                   $(input_booking).on('keydown' ,function (event) 
                     {
                   	  event.preventDefault();
                  	});//keydown
                  	 
                  $("#modal_close").on('click',function ()
                     {
                     	 if(typeof(Storage)!=="undefined")
                          {
                            datastore_handler();
                          }//if
               	    $("#modal_secondpage").modal().close(); 
                     });//click
                  var body_element = document.getElementsByClassName("themodal-lock")[0];
                    	 $(body_element).on('keyup' ,function (event)
                    	 {
                             if(event.keyCode == 27)
                             {
                        	    if(typeof(Storage)!=="undefined")
                               {
                                 datastore_handler();
                                }//if storage
                              }//if keycode
                         });//key fnctn
                          
                  var today = new Date();  
                 var minutes = today.getMinutes();
                 
                 if((minutes >= '0'))  
                {
                     
               	 $('.form_datetime').datetimepicker
                   ({ 
                     
                     format:'dd/M/yyyy HH:ii P',
                     startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(),today.getHours()+1,today.getMinutes()-today.getMinutes()),
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
                   
                 var pat_name = $("#patient_name").val();
                 var pat_email = $("#email").val();
                 var pat_phno = $("#phone").val();
                 var pat_apptime = $("#app_time").val();
                       if ((pat_name == "") && (pat_email =="") && (pat_phno == "") && (pat_apptime == ""))
                     {
                       Filling_localdata(); 
                     }//if
                    $('#step2_back_btn').on('click',function () 
                    {
                    	  form_backbtn(dataid,labname,labslug,dealname,deal_slug,deal_mrp,deal_discount,deal_finalprice,labarea);
                    	});//back btn click
                    $('#step2_next_btn').on('click', function()
                    {
                     		 	if(typeof(Storage)!=="undefined")
                       { 
                     	 datastore_handler();
                       }//if  
                        var patient_name = $('#patient_name').val();
                         var patient_email = $('#email').val();
                       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        var mobile_number = $('#phone').val();
                         var patient_apptime =  $('#app_time').val();
                         if(typeof(Storage)!=="undefined")
                       { 
                     	 datastore_handler();
                       }//if
                      
                   var appt_time = localStorage.getItem("app_time");
                   var  tday = new Date();
                     
                   var i;
                   function addZero(i) 
                     {
                         if (i < 10) 
                           {
                               i = "0" + i;
                           }//if i
                       return i;
                      }//fnctn
                          var year = tday.getFullYear();
                          var date = addZero(tday.getDate());
                          var month = addZero(tday.getMonth()+1);
                          var hours = addZero(tday.getHours());
                          var mnt = addZero(tday.getMinutes());
                          var sec =  addZero(tday.getSeconds());
                          var selected_time =year+"-"+month+"-"+date+" "+hours +":"+ mnt+":"+sec;
                         
                          
                          var currenttime = new Date();
                          var current_year = currenttime.getFullYear();
                          var current_month = addZero(currenttime.getMonth()+1);
                          
                          var current_date = addZero(currenttime.getDate());
                          var current_hours = addZero(currenttime.getHours());
                          var current_minutes = addZero(currenttime.getMinutes());
                          var current_time = current_year+"-"+current_month+"-"+current_date+" "+current_hours+":"+current_minutes;
                     if((document.getElementById("err_email").style.display ='none') && (document.getElementById('err_mbno').style.display = 'none') &&(document.getElementById('err_apptime').style.display = 'none') &&(document.getElementById('err_app_time').style.display = 'none'))
                    { 
                      if ( !(patient_name.length >= 6 && patient_name.length <= 26) || patient_name.match(/[^a-zA-Z ]/)  )
                        {
                           $(name_element).css('display','block');
                          return false;
                        
                        }//if patient name
                      if(document.getElementById('err_name').style.display = 'block')
                        {
                            document.getElementById('err_name').style.display = 'none';
                          
                        }//if err_name
                      }//if 
                     if((document.getElementById("err_name").style.display ='none') && (document.getElementById('err_mbno').style.display = 'none') &&(document.getElementById('err_apptime').style.display = 'none') &&(document.getElementById('err_app_time').style.display = 'none')) 
                    {
                    	 if(!filter.test(patient_email))
                       {
                         $(email_element).css('display','block');
                        return false;
                       }//if email
                     if(document.getElementById('err_email').style.display = 'block')
                       {
                          document.getElementById('err_email').style.display = 'none';
                          
                       }//if err_email
                       }//if
                       if((document.getElementById("err_email").style.display ='none') && (document.getElementById('err_name').style.display = 'none') &&(document.getElementById('err_apptime').style.display = 'none') &&(document.getElementById('err_app_time').style.display = 'none'))
                       {
                       	 if((mobile_number.match(/[^0-9]/) || mobile_number.length != 10) || (!(mobile_number.charAt(0)=="9" || mobile_number.charAt(0)=="8" || mobile_number.charAt(0)=="7")))
                       {
                       	 $(mbno_element).css('display','block');
                       	 return false;
                       }//if mble
                        if(document.getElementById('err_mbno').style.display = 'block')
                       {
                       	
                          document.getElementById('err_mbno').style.display = 'none';
                         
                       }//if err_mbno
                       }//if
                      
                       if((document.getElementById("err_email").style.display ='none') && (document.getElementById('err_mbno').style.display = 'none') &&(document.getElementById('err_name').style.display = 'none') &&(document.getElementById('err_app_time').style.display = 'none'))
                     {
                     	
                     	if(! ($('#app_time').val()))   
                       {
                         	$(apptime_element).css('display','block');
                           return false;
                       }//if app_time
                       
                       var val_time = date+"-"+month+"-"+year+" "+hours +":"+ mnt+":"+sec;
                      //var appt_time = localStorage.getItem("app_time");
                         
                          var sel_month_name = appt_time.substr(3,3);
    
    
    if (sel_month_name == 'Jan') 
     {
    	 var sel_month = '01';
    	 
     }//if mnth 1
    if (sel_month_name == 'Feb') 
     {
        var  sel_month = '02';
     }//if mnth 2
    if (sel_month_name == 'Mar') 
     {
    	 var sel_month = '03';
     }//if mnth 3
    if (sel_month_name == 'Apr') 
     {
    	var sel_month = '04';
  	  }//if mnth 4
    if (sel_month_name == 'May') 
  	  {
    		var sel_month = '05';
    	}//if mnth 5
    if (sel_month_name == 'Jun') 
  	  {
    		var sel_month = '06';
     }//if mnth 6
    if (sel_month_name == 'Jul') 
     {
    		var sel_month = '07';
     }//if mnth 7
    if (sel_month_name == 'Aug') 
     {
    		var sel_month = '08';
     	}//if mnth 8
     if (sel_month_name == 'Sep') 
    	{
    		var sel_month = '09';
    	}//if mnth 9
    	if (sel_month_name == 'Oct') 
    	{
    		var sel_month = '10';
    	}//if mnth 10
    	if (sel_month_name == 'Nov') 
    	{
    			var sel_month = '11';
    	}//if mnth 11
    	if (sel_month_name == 'Dec') 
    	{
    		var sel_month = '12';
    	}//if mnth 12
    	 var tday = new Date();
    	       var sel_year = appt_time.substr(7,4);
             var sel_date = appt_time.substr(0,2);
             var sel_hours = appt_time.substr(12,2);
             var sel_minutes = appt_time.substr(15,2);
             var sel_sec = addZero(tday.getSeconds());
             var sel_meridian = appt_time.substr(18,2);
             var sel_hours_meridian = sel_hours +" "+ sel_meridian;
             if (sel_meridian == "AM") 
             {
             	 var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
             	
              }//if AM
              if (sel_hours_meridian == "12 PM")
              {
              	   var sel_hours = "12";
              	 var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                 
              	}//if 12
             if (sel_hours_meridian == "01 PM")
              {
              	   var sel_hours = "13";
              	 var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                 
              	}//if 01
              	if (sel_hours_meridian == "02 PM")
               {
              	   var sel_hours = "14";
                  var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                 
                }//if 02
               	if (sel_hours_meridian == "03 PM")
                  {
              	      var sel_hours = "15";
                      var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                     
                 }//if 03
                 if (sel_hours_meridian == "04 PM")
                 {
              	    var sel_hours = "16";
                   var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                  
                  }// if 04
                  if (sel_hours_meridian == "05 PM")
                 {
              	    var sel_hours = "17";
                   var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                  
                  }// if 05
                   if (sel_hours_meridian == "06 PM")
                 {
              	    var sel_hours = "18";
                   var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                  
                  }// if 06
                   if (sel_hours_meridian == "07 PM")
                 {
              	    var sel_hours = "19";
                   var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                   
                  }// if 07
                   if (sel_hours_meridian == "08 PM")
                 {
              	    var sel_hours = "20";
                   var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                   
                  }// if 08
                   if (sel_hours_meridian == "09 PM")
                 {
              	    var sel_hours = "21";
                   var sel_time = sel_year+"-"+sel_month+"-"+sel_date+" "+sel_hours+":"+sel_minutes+":"+sel_sec;
                   
                  }// if 09
                       if(!(sel_time.match(/\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}/)))
                     
                        {
                       	  
                         $(apptime_element).css('display','block');
                        
                         return false;
                       }//if val time 
                        if(document.getElementById('err_apptime').style.display = 'block')
                       {
                          document.getElementById('err_apptime').style.display = 'none';
                          
                       }
                       }//if
                          if((document.getElementById("err_email").style.display ='none') && (document.getElementById('err_mbno').style.display = 'none') &&(document.getElementById('err_name').style.display = 'none') &&(document.getElementById('err_apptime').style.display = 'none'))
                         {
                          if(current_time > selected_time) 
                          {
                          	
                          	$(app_time_element).css('display','block');
                          	return false;
                          	}//if time
                         if (document.getElementById('err_app_time').style.display = 'block') 
                          {
                          	  document.getElementById('err_app_time').style.display = 'none';
                          	  
                           }//if err_time
                         }//if
                         
                       
                       //preview_handler(dataid,labname,labslug,dealname,deal_slug,deal_mrp,deal_discount,deal_finalprice,labarea);
                 
                    });//btn onclick handler
                    
                
          }//form_handler
     