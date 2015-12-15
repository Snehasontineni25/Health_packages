 var pkg_host_api = "http://beta.zotey.com/m-api"; 
 function packages_list()
 {
 	$.ajax({
         url:pkg_host_api+"/d-packages/listing",
         type:'GET',
         dataType: 'json',
         success:function(data){
         	
         	 console.log(data);
         	var load = document.getElementById("loading");
         	$(load).css('display','none');
         	var wrapper_element = document.getElementsByClassName("cust-wrapper")[0];
         	var health_row = document.createElement('div');
         	$(health_row).addClass("row");
         	var hlth_pkg_head = document.createElement('div');
         	$(hlth_pkg_head).addClass('health_pkg_head');
         	var pkgs_head = document.createElement('h4');
         	$(pkgs_head).html("Health Packages");
         	var pkgs_col = document.createElement('div');
         	$(pkgs_col).addClass("col-md-3");
         	$(pkgs_col).css('height','30px');
         	var pkg_search = document.createElement('div');
         	$(pkg_search).addClass('search-container');
         	var pkg_search_form = document.createElement('div');
         	$(pkg_search_form).addClass("form-group cust_input");
         	$(pkg_search_form).css('width','138%');
         	//$(div_cont).attr('data-packagename',data[i].packageName);
         	  var pkg_search_ip_img = document.createElement('div');
         	  $(pkg_search_ip_img).css('width','79%');
         	var pkg_search_input = document.createElement('input');
         	$(pkg_search_input).addClass("form-control");
         	$(pkg_search_input).attr('id','search');
         	$(pkg_search_input).attr('type','text');
         	$(pkg_search_input).attr('placeholder','Search');
         	$(pkg_search_input).css('borderRadius','5px 0px 0px 5px');
            $(pkg_search_input).attr('autofocus','autofocus'); 
         	//$(pkg_search_input).attr('value',"");
         	//$(pkg_search_input).html("&#x2716");
         	//$("#search").select();
         	var search_div_img = document.createElement('div');
         	$(search_div_img).css('float','right');
         	$(search_div_img).css('position','relative');
         	$(search_div_img).css('bottom','27px');
         	$(search_div_img).css('cursor','pointer');
         	var search_img = document.createElement('img');
         	$(search_img).attr("src","images/Black_Remove.png");
         	$(search_img).css('height','14px');
         	$(search_img).css('width','15px');
         	var pkg_search_span = document.createElement('span');
         	var pkg_search_span_i = document.createElement('i');
         	$(pkg_search_span_i).addClass('fa fa-search');
         	$(pkg_search_span).append(pkg_search_span_i);
         	//$(pkg_search_form).append(pkg_search_input);
         	//$(pkg_search_form).append(search_img);
         	$(pkg_search_ip_img).append(pkg_search_input);
         	 //$(search_div_img).append(search_img);
         	$(pkg_search_ip_img).append(search_div_img);
         	$(pkg_search_form).append(pkg_search_ip_img);
         	$(pkg_search_form).append(pkg_search_span);
         	$(pkg_search).append(pkg_search_form);
         	$(pkgs_col).append(pkg_search);
         	$(hlth_pkg_head).append(pkgs_head);
         	$(hlth_pkg_head).append(pkgs_col);
         	$(health_row).append(hlth_pkg_head); 
         	 $(wrapper_element).append(health_row);
         	  
         	 /*for (i=0;i<data.length;i++) 
         	{
         	 
         	}*/
         	 var pkgs_list =[];
         	 var   pkgs_list = document.createElement('div');
         	 $(pkgs_list).addClass("packages_list");
         	 //console.log(pkgs_list = data[m].packageName);
         	
         	for (i=0;i<data.length;i++) 
         	{
           
             var div_cont = document.createElement('div');
             $(div_cont).addClass("two_cont");
             $(div_cont).css('cursor','pointer');
             $(div_cont).attr('id',data[i].packageName);
             $(div_cont).attr('data-packageid',data[i].packageSlug);
             $(div_cont).attr('data-packagename',data[i].packageName);
             $(div_cont).attr('data-packageconsultations',data[i].consultationsCount);
           //console.log(div_cont);
           //var arr = jQuery.makeArray( div_cont );
           //console.log(div_cont);
           //$(pkgs_list).attr('data-searchpkgname',data[i].packageName);
          
           $(div_cont).on('click',function () 
           {
           	 
           	  var package_slug = $(this).data('packageid');
           	  var package_name = $(this).data('packagename');
           	  var package_consultation = $(this).data('packageconsultations');
           	  loadingimage_handler();
           	 package_details_list(package_name,package_slug);
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
           $(div_pkg_details).css('float','left');
           var pkg_details = document.createElement('div');
           $(pkg_details).addClass("pack_details");
           
           var pkg_name = document.createElement('p');
           $(pkg_name).html(data[i].packageName);
            $(pkg_name).attr('id',data[i].packageSlug);
          var pkg_para = document.createElement('p');
           $(pkg_para).addClass("pkgs_name");
           $(pkg_para).attr('id',data[i].testCount);
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
           $(details_btn).css('float','right');
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
           $(pkg_details).append(pkg_para);
           $(pkg_details).append(pkg_tests);
           $(pkg_details).append(pkg_consultation);
           $(div_pkg_details).append(pkg_details);
           $(btn_cont).append(view_btn);
           $(details_btn).append(btn_cont);
           $(div_row).append(div_col_pkg);
           $(div_row).append(div_pkg_details);
           $(div_row).append(details_btn);
           //$(div_row).append(btn_cont);
           $(div_cont).append(div_row);
           $(pkgs_list).append(div_cont);
           $(wrapper_element).append(pkgs_list);
           }//for loop
           $(pkg_search_form).on('keyup',function () 
           {
           	$(search_div_img).append(search_img);
           	var search_input = $("#search").val();
             for (var j=0;j<data.length;j++) 
             {
           	  var pkg_search_name = document.getElementById(data[j].packageName);
           	  var pkg_title = document.getElementById(data[j].packageSlug);
           	  var pkg_search_id = pkg_search_name.id; 
           	 
           	  
           	  var pkg_par_class = document.getElementById(data[j].testCount);
           	  search_handler(pkg_search_name,pkg_search_id,pkg_title,pkg_par_class);
           	   }//for
           	});//key event 
           	$(search_div_img).on('click',function () 
           	{
                  
                  $(pkg_search_input).val("");
                   for (var pkg=0;pkg<data.length;pkg++) 
                   {
                   	 var pkg_input_click = document.getElementById(data[pkg].packageName);
                   	 $(pkg_input_click).css('display','block');
                       var pkg_title = document.getElementById(data[pkg].packageSlug);
                      $(pkg_title).css('background','none');
                      $(search_div_img).css('display','none');
                   }//for loop	
                             	$("#search").focus();	
           		});
           		
                  	           		
          //}        
 }//suc fntn
 });//ajax
 }//fnctn
 function search_handler(pkg_search_name,pkg_search_id,pkg_title,pkg_par_class)
 {
 	 var input_value = $("#search").val();
 	 var inputs_value = new RegExp(input_value);
 	 var pkg_id = pkg_search_name.id;
 	 var pkg_id_lowercase = pkg_id.toLowerCase();
 	 var pkg_id_lnth = pkg_id.length;
 	 	
  if (inputs_value.test(pkg_id_lowercase)) 
  {
  	   var pos_value = pkg_id_lowercase.indexOf(input_value);
      $(pkg_search_name).css('display','block');
      var pkg_lnth = input_value.length;
      var pkg_index = pkg_id_lowercase.indexOf(input_value);
      var pkg_str = pkg_id_lowercase.substr(pkg_index,pkg_lnth);
      var left_pkg = pkg_id_lowercase.substr(0,pkg_index);
      var substr_lnth = pkg_index+pkg_lnth;
      var right_pkg = pkg_id_lowercase.substr(substr_lnth);
       var pkgs_title = left_pkg+pkg_str+right_pkg;
       var pkg_left_name = document.createElement('div');
       var left_pkg_upper = left_pkg;
       var pkg_left_upper = left_pkg_upper.charAt(0).toUpperCase()+left_pkg_upper.slice(1).toLowerCase();
       //$(pkg_left_name).html(left_pkg);
       $(pkg_left_name).html(pkg_left_upper);
       $(pkg_left_name).css('float','left');
       var pkg_str_name = document.createElement('div');
       $(pkg_str_name).html(pkg_str);
       $(pkg_str_name).css('float','left');
       $(pkg_str_name).css('background','rgb(65,167,179)');
       $(pkg_str_name).css('color','white');
       var pkg_right_name =document.createElement('div');
       $(pkg_right_name).html(right_pkg); 
        $(pkg_title).html('');
        $(pkg_title).append(pkg_left_name);
        $(pkg_title).append(pkg_str_name);
        $(pkg_title).append(pkg_right_name);
       
   }
   else
    {
    	 $(pkg_search_name).css('display','none');
    }  
   
 }//search fnctn 
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
 function package_details_list(package_name,package_slug) 
 {
 	$.ajax({
         url:pkg_host_api+"/d-packages/package-offering-labs",
         type:'POST',
         dataType: 'json',
         data:{packageSlug:package_slug},
         success:function(data)
         {
                var pkg_dataToStore = JSON.stringify(data);
             localStorage.setItem('pkg_someData',pkg_dataToStore);
             
             pkg_test_details_back(package_name,package_slug);
             
               }//success fnctn
 });//ajax
 }//fnctn handler
 
 
 function pkg_test_details(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount)
 {
 	 $.ajax({
         url:pkg_host_api+"/d-packages/lab-package-info",
         type:'POST',
         dataType: 'json',
         data:{packageSlug:package_slug,labSlug:local_package_labslug},
         success:function(data)
         {
         	  var pkg_lab_dataToStore = JSON.stringify(data);
             localStorage.setItem('pkg_labData',pkg_lab_dataToStore);
            
             //pkg_form_backbtn(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);
             pkg_form_backbtn(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);

             }//success
            });//ajax
 }//fnctn handler 
 
 function pkg_test_details_back(package_name,package_slug)
 
 {
     var pkg_localData = JSON.parse(localStorage.getItem('pkg_someData')); 
                   
     var local_package_list_modal = document.createElement('div');
               $(local_package_list_modal).addClass("modal");
               $(local_package_list_modal).attr('id', 'modal_packages_firstpage');
               $(local_package_list_modal).css('position','relative');
               $(local_package_list_modal).css('backgroundColor','#fff');
               $(local_package_list_modal).css('paddingRight','0px');
               $(local_package_list_modal).css('width','64%');
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
              $(local_labname_th).css('width','29%');
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
              $(local_labarea_th).css('width','16%');
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
              	 $(local_lab_details_tr).attr('data-package_locallabslug',pkg_localData[i].labSlug);
              	 $(local_lab_details_tr).attr('data-package_localselectedlabname',pkg_localData[i].labName);
              	 $(local_lab_details_tr).attr('data-package_localselectedlabarea',pkg_localData[i].labArea);
              	 $(local_lab_details_tr).attr('data-package_localselectedprice',pkg_localData[i].labFinalPrice);
              	 $(local_lab_details_tr).attr('data-package_localselectedmrp',pkg_localData[i].labMRP);
              	 $(local_lab_details_tr).attr('data-package_localselecteddiscount',pkg_localData[i].labDiscount);
              	 $(local_lab_details_tr).attr('data-package_homevisit',pkg_localData[i].visitType);
              	 $(local_lab_details_tr).attr('data-package_onlinereport',pkg_localData[i].onlineReports);
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
              	 //$(local_consultations_td).html(package_consultation);
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
              	 $(local_book_div).addClass("view_btn");
              	 $(local_book_div).css("background","#ea494f");
              	 $(local_book_div).css('borderRadius','5px');
              	 $(local_book_div).css("color","white");
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
              	 
                 	  var local_package_labslug = $(this).data('package_locallabslug');
                 	  var local_package_labname = $(this).data('package_localselectedlabname');
                 	  var local_package_labarea = $(this).data('package_localselectedlabarea');
                 	  var local_package_price = $(this).data('package_localselectedprice');
                 	  var local_package_mrp = $(this).data('package_localselectedmrp');
                 	  var local_package_discount = $(this).data('package_localselecteddiscount');
                 	   var local_package_onlinereport = $(this).data('package_onlinereport');
                 	   var local_package_homevisit = $(this).data('package_homevisit');
                 	  
                 	  //pkg_form_backbtn(package_slug,package_name,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount) 
                    loadingimage_handler();
                 	  pkg_test_details(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);
                 	  
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
   function  pkg_form_backbtn(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount) 
 {
 	  
   var pkg_lablocalData = JSON.parse(localStorage.getItem('pkg_labData'));
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
                $(local_pkg_labname_info).html(pkg_lablocalData.labName);
               $(local_pkg_labname_info).css('float','left');
               $(local_pkg_labname_info).css('width','290px');
               var local_pkg_mrp_info = document.createElement('div');
               $(local_pkg_mrp_info).css('float','right'); 
               var local_pkg_mrp_data = document.createElement('div');
                $(local_pkg_mrp_data).css('float','left');
               var local_pkg_Mrp = document.createElement('div');
               $(local_pkg_Mrp).html(pkg_lablocalData.packageMRP);
               $(local_pkg_Mrp).addClass("fa fa-inr");
               $(local_pkg_Mrp).css('textDecoration','line-through');
               $(local_pkg_Mrp).css('paddingTop','3px');
               $(local_pkg_Mrp).css('float','left');
                $(local_pkg_Mrp).css('width','27px');
               if (pkg_lablocalData.packageMRP.length == "4")
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
               if (pkg_lablocalData.labAddress.length+pkg_lablocalData.labArea.length+pkg_lablocalData.labPincode.length <= "30") 
               {
               $(local_pkg_address_finalprice).css('height','40px');
               }
  
               else if (pkg_lablocalData.labAddress.length+pkg_lablocalData.labArea.length+pkg_lablocalData.labPincode.length <= "60") 
               {
               	$(local_pkg_address_finalprice).css('height','60px');
               }
               else  if (pkg_lablocalData.labAddress.length+pkg_lablocalData.labArea.length+pkg_lablocalData.labPincode.length <= "90")
                {
               	$(local_pkg_address_finalprice).css('height','80px');
               }
               else if (pkg_lablocalData.labAddress.length+pkg_lablocalData.labArea.length+pkg_lablocalData.labPincode.length <= "120")
                {
               	$(local_pkg_address_finalprice).css('height','100px');
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
               $(local_pkg_labaddress_info).attr('id','right_labaddress');
               $(local_pkg_labaddress_info).css('float','right');
               $(local_pkg_labaddress_info).css('width','246px');
                var local_pkg_labaddress_info_left = document.createElement('div');
                $(local_pkg_labaddress_info_left).html(pkg_lablocalData.labAddress+","+"&nbsp"+"&nbsp"+pkg_lablocalData.labArea+","+"&nbsp"+pkg_lablocalData.labPincode);
                $(local_pkg_labaddress_info_left).css('float','left');
                $(local_pkg_labaddress_info_left).css('width','216px');
                $(local_pkg_labaddress_info).append(local_pkg_labaddress_info_left);
                var local_pkg_contents_head = document.createElement('div');
               $(local_pkg_contents_head).css('marginRight','20px');
                /*var local_pkg_labaddress_info_right = document.createElement('div');
                $(local_pkg_labaddress_info_right).html(pkg_lablocalData.labArea+","+"&nbsp"+"&nbsp"+pkg_lablocalData.labPincode);
                $(local_pkg_labaddress_info_right).css('float','right');
                $(local_pkg_labaddress_info_right).css('width','248px');*/
                //if (pkg_lablocalData.homeVisit == "no" && pkg_lablocalData.onlineReports == "no") 
                if (local_package_onlinereport == "no" &&local_package_homevisit == "no") 
                {
                	  //alert("no home visit");
                   var pkg_homevisit_element = document.createElement('div');
               	$(pkg_homevisit_element).addClass("err_msg");
                  $(pkg_homevisit_element).attr('id','pkg_reports_msg');
                  $(pkg_homevisit_element).css('color','rgb(236,73,73)');
                  $(pkg_homevisit_element).css('textAlign','left');
                  $(pkg_homevisit_element).css('width','262px');
                  $(pkg_homevisit_element).css('fontSize','10px');
                  $(pkg_homevisit_element).css('float','right');
                  $(pkg_homevisit_element).css('display','block');
                  var pkg_star_homevisit = document.createElement('span');
                  $(pkg_star_homevisit).addClass('star');
                  $(pkg_star_homevisit).html("&#x2605");
                  $(pkg_star_homevisit).css('float','left');
                  var pkg_error_homevisit_element = document.createElement('div');
                  $(pkg_error_homevisit_element).html('Home visit is available'+","+"&nbsp"+"Online reports are available");
                 	$(pkg_homevisit_element).append(pkg_star_homevisit);
                 	$(pkg_homevisit_element).append(pkg_error_homevisit_element);
                  //$(local_package_test_modal).append(pkg_homevisit_element);
                   $(local_pkg_labaddress_info).append(pkg_homevisit_element);
                   $(local_pkg_contents_head).css('marginTop','10px');
                	}// if hme_vst , online rpts 
                	
                   //if (pkg_lablocalData.homeVisit != "no" && pkg_lablocalData.onlineReports == "no")
                   if (local_package_onlinereport == "no" && local_package_homevisit != "no") 
                   {
                      var pkg_homevisit_one_element = document.createElement('div');
               	    $(pkg_homevisit_one_element).addClass("err_msg");
                      $(pkg_homevisit_one_element).attr('id','pkg_reports_msg');
                       $(pkg_homevisit_one_element).css('color','rgb(236,73,73)');
                     $(pkg_homevisit_one_element).css('textAlign','left');
                     $(pkg_homevisit_one_element).css('width','262px');
                    $(pkg_homevisit_one_element).css('fontSize','10px');
                    $(pkg_homevisit_one_element).css('float','right');
                    $(pkg_homevisit_one_element).css('display','block');
                    var pkg_star_homevisit_one = document.createElement('span');
                    $(pkg_star_homevisit_one).addClass('star');
                    $(pkg_star_homevisit_one).html("&#x2605");
                    $(pkg_star_homevisit_one).css('float','left');
                    var pkg_error_homevisit_one_element = document.createElement('div');
                    $(pkg_error_homevisit_one_element).html('Home visit is available');
                 	  $(pkg_homevisit_one_element).append(pkg_star_homevisit_one);
                 	  $(pkg_homevisit_one_element).append(pkg_error_homevisit_one_element);
                  $(local_pkg_labaddress_info).append(pkg_homevisit_one_element); 
                  $(local_pkg_contents_head).css('marginTop','10px');          
                  }//if home visit
                 //if (pkg_lablocalData.onlineReports != "no" && pkg_lablocalData.homeVisit == "no") 
                 if (local_package_onlinereport != "no" && local_package_homevisit == "no") 
                 { 
                     var pkg_onlinereports_one_element = document.createElement('div');
               	    $(pkg_onlinereports_one_element).addClass("err_msg");
                      $(pkg_onlinereports_one_element).attr('id','pkg_reports_msg');
                       $(pkg_onlinereports_one_element).css('color','rgb(236,73,73)');
                     $(pkg_onlinereports_one_element).css('textAlign','left');
                     $(pkg_onlinereports_one_element).css('width','262px');
                    $(pkg_onlinereports_one_element).css('fontSize','10px');
                    $(pkg_onlinereports_one_element).css('float','right');
                    $(pkg_onlinereports_one_element).css('display','block');
                    var pkg_star_onlinereports_one = document.createElement('span');
                    $(pkg_star_onlinereports_one).addClass('star');
                    $(pkg_star_onlinereports_one).html("&#x2605");
                    $(pkg_star_onlinereports_one).css('float','left');
                    var pkg_error_onlinereports_one_element = document.createElement('div');
                    $(pkg_error_onlinereports_one_element).html('Online reports are available');
                 	  $(pkg_onlinereports_one_element).append(pkg_star_onlinereports_one);
                 	  $(pkg_onlinereports_one_element).append(pkg_error_onlinereports_one_element);
                  $(local_pkg_labaddress_info).append(pkg_onlinereports_one_element);    
                  $(local_pkg_contents_head).css('marginTop','10px');       
                 }
                //$(local_pkg_labaddress_info).append(local_pkg_labaddress_info_right);
                  
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
               $(local_pkg_finalprice_left).html(pkg_lablocalData.packageDiscount+"%"+"&nbsp"+"&nbsp");
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
              	$(local_pkg_finalprice_element_left).html(pkg_lablocalData.packageFinalPrice+"&nbsp");
              	$(local_pkg_finalprice_element_left).css('float','left');
              	$(local_pkg_finalprice_element_left).css('color','rgb(236,73,73)');
              	$(local_pkg_finalprice_element_left).css('paddingTop','2px');
               var local_pkg_finalprice_element_right = document.createElement('div');
               $(local_pkg_finalprice_element_right).css('fontSize','12px');
               $(local_pkg_finalprice_element_right).html("-"+"&nbsp"+"&nbsp"+"Final Offering Price");
               $(local_pkg_finalprice_element_right).css('float','right');
               $(local_pkg_finalprice_element).append(local_pkg_finalprice_element_left);
               $(local_pkg_finalprice_element).append(local_pkg_finalprice_element_right); 
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
                 $(local_pkg_next_btn).css('fontWeight','bold');
                 $(local_pkg_next_btn).css('border','0px');
                 $(local_pkg_back_btn).on('click',function () 
                 {
                 	   pkg_test_details_back(package_name,package_slug)
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
                /*if(document.getElementById('pkg_reports_msg').style.display = 'block')
                  { 
                     $(local_pkg_contents_head).css('marginTop','10px');
                  } */
                $(local_package_test_modal).append(local_pkg_contents_head);
                $(local_package_test_modal).append(local_pkg_counter_element);
                //if (data.packageDetails.TestsInfo.length ==0) 
                if((pkg_lablocalData.packageDetails.Consultations.length == "0") && (pkg_lablocalData.packageDetails.GroupsInfo.length == "0") && (pkg_lablocalData.packageDetails.TestsInfo.length == "0"))
                {
                   
                   var pkg_pkgdetails_name = document.createElement('div');
                   $(pkg_pkgdetails_name).html(package_name);
                   $(pkg_pkgdetails_name).css('border','1px solid #ddd');
                   $(pkg_pkgdetails_name).css('paddingLeft','6px');
                   $(pkg_pkgdetails_name).css('marginRight','20px');
                   $(pkg_pkgdetails_name).css('background','rgba(236,246,248,0.99)');
                   $(local_package_test_modal).append(pkg_pkgdetails_name);
                
                }
               /* if (pkg_lablocalData.homeVisit == "no" && pkg_lablocalData.onlineReports == "no") 
                {
                	  alert("no home visit");
                   var pkg_homevisit_element = document.createElement('div');
               	$(pkg_homevisit_element).addClass("err_msg");
                  $(pkg_homevisit_element).attr('id','pkg_err_email');
                  $(pkg_homevisit_element).css('color','rgb(236,73,73)');
                  $(pkg_homevisit_element).css('textAlign','left');
                  $(pkg_homevisit_element).css('marginLeft','16px');
                  $(pkg_homevisit_element).css('fontSize','11px');
                  //$(pkg_homevisit_element).css('display','none');
                  var pkg_star_homevisit = document.createElement('span');
                  $(pkg_star_homevisit).addClass('star');
                  $(pkg_star_homevisit).html("&#x2605");
                  $(pkg_star_homevisit).css('float','left');
                  var pkg_error_homevisit_element = document.createElement('div');
                  $(pkg_error_homevisit_element).html('Home visit is available'+","+"&nbsp"+"Online reports are available");
                 	$(pkg_homevisit_element).append(pkg_star_homevisit);
                 	$(pkg_homevisit_element).append(pkg_error_homevisit_element);
                  //$(local_package_test_modal).append(pkg_homevisit_element);
                	} */
               $(local_package_test_modal).append(local_pkg_back_btn);
                $(local_pkg_next_btn).on('click',function () 
                {
                      //pkg_form_handler(package_name,package_slug,local_package_labslug); 
                      pkg_form_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);
                      //pkg_form_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);               	
                	});
                $(local_package_test_modal).append(local_pkg_next_btn);
                $(local_pkg_test_close).on('click',function () 
                 {
                 	 
               	  $(local_package_test_modal).modal().close(); 
                 });//click
               $(local_package_test_modal).modal().open();
               
  
 }  
 
  
    function  pkg_form_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount)     
      {
      	         
                  var pkg_booking_page = document.createElement('div');
                  $(pkg_booking_page).addClass("modal");
                  $(pkg_booking_page).attr('id','pkg_modal_secondpage');
                  $(pkg_booking_page).css('backgroundColor','#fff');
                  $(pkg_booking_page).css('height','128%');
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
                  $(pkg_lab_details).html(local_package_labname);
                  $(pkg_lab_details).css('textAlign' ,'right');
                  $(pkg_lab_details).css('paddingRight','17px');
                  $(pkg_lab_details).css('fontWeight','bold');
                  $(pkg_lab_details).css('marginTop','6px');  
                  $(pkg_lab_details).css('marginRight','20px');
                  $(pkg_lab_details).css('fontSize','12px');
                  var pkg_deal_name  = document.createElement('div');
                  $(pkg_deal_name).html(package_name);
                  $(pkg_deal_name).css('textAlign' ,'right');
                  $(pkg_deal_name).css('paddingRight','14px');
                  $(pkg_deal_name).css('fontWeight','bold');
                  $(pkg_deal_name).css('marginTop','6px');
                  $(pkg_deal_name).css('marginRight','20px');
                  $(pkg_deal_name).css('fontSize','12px');
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
                  $(pkg_input_address).css('width','468px');
                  $(pkg_input_address).css('border','1px solid #c4cdcf');
                  //$(pkg_input_address).addClass('form-icon form-icon-lock');
                  $(pkg_input_address).attr('placeholder','Please enter your Address');
                  $(pkg_input_address).attr('required','required');
                   
                  //$(pkg_input_address).attr('maxlength','56');
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
                  var pkg_address_element = document.createElement('div');
                  $(pkg_address_element).addClass("err_msg");
                  $(pkg_address_element).attr('id','pkg_err_address');
                  $(pkg_address_element).css('color','rgb(236,73,73)');
                  $(pkg_address_element).css('textAlign','left');
                  $(pkg_address_element).css('marginLeft','16px');
                  $(pkg_address_element).css('display','none');
                  var pkg_star_address = document.createElement('span');
                  $(pkg_star_address).addClass('star');
                  $(pkg_star_address).html("&#x2605");
                  $(pkg_star_address).css('float','left');
                  var pkg_error_address_element = document.createElement('div');
                  $(pkg_error_address_element).html('Enter your address');
                  $(pkg_address_element).append(pkg_star_address);
                  $(pkg_address_element).append(pkg_error_address_element);
                 /* var pkg_address_element = document.createElement('div');
                  $(pkg_address_element).addClass("err_msg");
                  $(pkg_address_element).css('color','rgb(236,73,73)');
                  $(pkg_address_element).css('textAlign','left');
                  $(pkg_address_element).css('marginLeft','16px');
                  $(pkg_address_element).css('display','none');
                  var pkg_star_address = document.createElement('span');
                  $(pkg_star_address).addClass('star');
                  $(pkg_star_address).html("&#x2605");
                  $(pkg_star_address).css('float','left');
                  var pkg_error_address_element = document.createElement('div');
                  $(pkg_error_address_element).html('Enter your address');
                  $(pkg_address_element).append(pkg_star_address);
                  $(pkg_address_element).append(pkg_error_address_element); */
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
                     $(pkg_error_display).append(pkg_address_element);
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
                       // pkg_form_backbtn(package_slug,package_name,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);
                          pkg_form_backbtn(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);    
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
                     if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none'))  
                    { 
                      if ( !(pkg_patient_name.length >= 6 && pkg_patient_name.length <= 26) || pkg_patient_name.match(/[^a-zA-Z ]/)  )
                        {
                           $(pkg_name_element).css('display','block');
                          return false;
                        
                        }//if patient name
                      if(document.getElementById('pkg_err_name').style.display = 'block')
                        {
                            document.getElementById('pkg_err_name').style.display = 'none';
                            //document.getElementById('pkg_address').style.display = 'none'
                           
                        }//if err_name
                      }//if 
                     if((document.getElementById("pkg_err_name").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none')) 
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
                       if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none'))
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
                      
                       if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none'))
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
                          if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none')) 
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
                         if(local_package_homevisit.length == "13")
                      {
                       if((document.getElementById('pkg_err_name').style.display = 'none') && (document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none'))
                       {
                            if(! ($('#pkg_address').val()))  
                          {
                             $(pkg_address_element).css('display','block');
                              return false;
                          }// if visit type
                       
                         if (document.getElementById('pkg_err_address').style.display = 'block') 
                          {
                          	  document.getElementById('pkg_err_address').style.display = 'none';
                          	  
                           }//if err_visittype
                       }//if display
                      }// if length
                        
                        
                 	   
                 pkg_preview_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);
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
     
   
   function    pkg_preview_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount)
       //function pkg_preview_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount) 
      {
    	           
      	      var pkg_ptnt_address = localStorage.getItem("pkg_address");
      	      
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
                  $(pkg_preview_box).css('height','386px')
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
                  $(pkg_preview_pkg_info).css('marginTop','10px');
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
                  $(pkg_td_labname).html("&nbsp"+"&nbsp"+"&nbsp"+"Lab"+"&nbsp"+":"+"&nbsp"+local_package_labname+"&nbsp"+"&nbsp"+"("+local_package_labarea+")");
                  //var pkg_td_labarea = document.createElement('td');
                  $(pkg_tr_labname).append(pkg_td_labname);
                  $(pkg_tr_dealname).append(pkg_td_dealname);
                  $(pkg_table_dealname).append(pkg_tr_dealname);
                  $(pkg_table_dealname).append(pkg_tr_labname);
                  var pkg_ptnt_info_heading = document.createElement('div');
                  $(pkg_ptnt_info_heading).html("&nbsp"+"&nbsp"+"&nbsp"+"Patient Information");
                  $(pkg_ptnt_info_heading).css('marginTop','63px');
                  $(pkg_ptnt_info_heading).css('color','white');
                  $(pkg_ptnt_info_heading).css('background','rgb(65, 167, 179)');
                  $(pkg_ptnt_info_heading).css('fontWeight','bold');
                 
                 if (local_package_onlinereport == "yes") 
                {
                 	 var pkg_onlinereports_tr = document.createElement('tr');
                   var pkg_onlinereports_element = document.createElement('td');
               	$(pkg_onlinereports_element).addClass("err_msg");
                  $(pkg_onlinereports_element).attr('id','pkg_reports_msg');
                  $(pkg_onlinereports_element).css('color','rgb(236,73,73)');
                  $(pkg_onlinereports_element).css('textAlign','left');
                  $(pkg_onlinereports_element).css('fontSize','10px');
                  $(pkg_onlinereports_element).css('display','block');
                  var pkg_star_onlinereports = document.createElement('span');
                  $(pkg_star_onlinereports).addClass('star');
                  $(pkg_star_onlinereports).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
                  $(pkg_star_onlinereports).css('float','left');
                  var pkg_error_onlinereports_element = document.createElement('div');
                  $(pkg_error_onlinereports_element).html("Online reports  available");
                 	$(pkg_onlinereports_element).append(pkg_star_onlinereports);
                 	$(pkg_onlinereports_element).append(pkg_error_onlinereports_element);
                   $(pkg_onlinereports_tr).append(pkg_onlinereports_element);
                   $(pkg_table_dealname).append(pkg_onlinereports_tr);
                    $(pkg_ptnt_info_heading).css('marginTop','72px');
                	}
                	
                	  if(local_package_homevisit.length == "13")
                   {
                   	   var pkg_homevisit_tr_one_element = document.createElement('tr');
                      var pkg_homevisit_one_element = document.createElement('td');
               	    $(pkg_homevisit_one_element).addClass("err_msg");
                      $(pkg_homevisit_one_element).attr('id','pkg_reports_msg');
                       $(pkg_homevisit_one_element).css('color','rgb(236,73,73)');
                     $(pkg_homevisit_one_element).css('textAlign','left');
                     
                    $(pkg_homevisit_one_element).css('fontSize','10px');
                    
                    $(pkg_homevisit_one_element).css('display','block');
                    var pkg_star_homevisit_one = document.createElement('span');
                    $(pkg_star_homevisit_one).addClass('star');
                    $(pkg_star_homevisit_one).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
                    $(pkg_star_homevisit_one).css('float','left');
                    var pkg_error_homevisit_one_element = document.createElement('div');
                    $(pkg_error_homevisit_one_element).html('Home visit only');
                 	  $(pkg_homevisit_one_element).append(pkg_star_homevisit_one);
                 	  $(pkg_homevisit_one_element).append(pkg_error_homevisit_one_element);
                  $(pkg_homevisit_tr_one_element).append(pkg_homevisit_one_element);   
                  $(pkg_table_dealname).append(pkg_homevisit_tr_one_element); 
                   $(pkg_ptnt_info_heading).css('marginTop','72px');       
                  }//if home visit
                  
                   if(local_package_homevisit.length > "13")
                   {
                   	   var pkg_labvisit_homevisit_tr_one_element = document.createElement('tr');
                      var pkg_labvisit_homevisit_one_element = document.createElement('td');
               	    $(pkg_labvisit_homevisit_one_element).addClass("err_msg");
                      $(pkg_labvisit_homevisit_one_element).attr('id','pkg_reports_msg');
                       $(pkg_labvisit_homevisit_one_element).css('color','rgb(236,73,73)');
                     $(pkg_labvisit_homevisit_one_element).css('textAlign','left');
                     
                    $(pkg_labvisit_homevisit_one_element).css('fontSize','10px');
                    
                    $(pkg_labvisit_homevisit_one_element).css('display','block');
                    var pkg_star_labvisit_homevisit_one = document.createElement('span');
                    $(pkg_star_labvisit_homevisit_one).addClass('star');
                    $(pkg_star_labvisit_homevisit_one).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
                    $(pkg_star_labvisit_homevisit_one).css('float','left');
                    var pkg_error_labvisit_homevisit_one_element = document.createElement('div');
                    $(pkg_error_labvisit_homevisit_one_element).html('Home visit and lab visit available');
                 	  $(pkg_labvisit_homevisit_one_element).append(pkg_star_labvisit_homevisit_one);
                 	  $(pkg_labvisit_homevisit_one_element).append(pkg_error_labvisit_homevisit_one_element);
                  $(pkg_labvisit_homevisit_tr_one_element).append(pkg_labvisit_homevisit_one_element);   
                  $(pkg_table_dealname).append(pkg_labvisit_homevisit_tr_one_element); 
                  $(pkg_ptnt_info_heading).css('marginTop','72px');  
                          
                  }//if home visit
                  
                   if ((local_package_onlinereport == "yes" && local_package_homevisit.length  == "13") || (local_package_onlinereport == "yes" && local_package_homevisit.length  > "13")) 
                   {
                      $(pkg_ptnt_info_heading).css('marginTop','86px');
                   } 

                  var pkg_price_table = document.createElement('table');
                  $(pkg_price_table).css('float','right');
                  $(pkg_price_table).css('marginBottom','15px');
                  //$(pkg_price_table).css('marginTop','44px');
                  var pkg_tr_price = document.createElement('tr');
                  var pkg_td_price = document.createElement('td');
                  $(pkg_td_price).html("Price");
                  var pkg_td_fp = document.createElement('td');
                  $(pkg_td_fp).html(":"+"&nbsp"+"Rs."+local_package_price);
                  $(pkg_td_fp).css('paddingLeft','11px');
                  var pkg_td_mrp_openbracket = document.createElement('td');
                  $(pkg_td_mrp_openbracket).html("&nbsp"+"(");
                  var pkg_td_mrp_price = document.createElement('td');
                  $(pkg_td_mrp_price).html(local_package_mrp);
                  $(pkg_td_mrp_price).css('textDecoration','line-through');
                  $(pkg_td_mrp_price).css('color','rgb(236,73,73)');
                  var pkg_td_mrp_closebracket = document.createElement('td');
                  $(pkg_td_mrp_closebracket).html(")");
                  var pkg_tr_discount = document.createElement('tr');
                  var pkg_td_dealdiscount = document.createElement('td');
                  $(pkg_td_dealdiscount).html("Discount");
                  var pkg_td_deal_discount = document.createElement('td');
                  $(pkg_td_deal_discount).html(":"+"&nbsp"+local_package_discount+"%");
                  $(pkg_td_deal_discount).css('paddingLeft','11px');
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
                  $(pkg_td_patientname).css('width','50%');
                  $(pkg_td_patientname).css('border','1px solid #ddd');
                  var pkg_td_patient_name = document.createElement('td');
                  $(pkg_td_patient_name).html("&nbsp"+localStorage.getItem("pkg_patient_name"));
                 
                  var pkg_tr_email = document.createElement('tr');
                  $(pkg_tr_email).addClass("ptnt_preview_info");
                  $(pkg_tr_email).css('lineHeight','2');
                  $(pkg_tr_email).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_emailheading = document.createElement('td');
                  $(pkg_td_emailheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Email");
                  $(pkg_td_emailheading).css('width','50%');
                  $(pkg_td_emailheading).css('border','1px solid #ddd');
                  var pkg_td_email_heading = document.createElement('td');
                  $(pkg_td_email_heading).html("&nbsp"+localStorage.getItem("pkg_email"));
                  var pkg_tr_phno = document.createElement('tr');
                  $(pkg_tr_phno).css('lineHeight','2');
                  $(pkg_tr_phno).addClass("ptnt_preview_info");
                  $(pkg_tr_phno).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_phnoheading = document.createElement('td');
                  $(pkg_td_phnoheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Mobile No");
                  $(pkg_td_phnoheading).css('width','50%');
                  $(pkg_td_phnoheading).css('border','1px solid #ddd');
                  var pkg_td_phno_heading = document.createElement('td');
                  $(pkg_td_phno_heading).html("&nbsp"+localStorage.getItem("pkg_phone"));
                  var pkg_tr_apptime = document.createElement('tr');
                  $(pkg_tr_apptime).css('lineHeight','2');
                  $(pkg_tr_apptime).addClass("ptnt_preview_info");
                  $(pkg_tr_apptime).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_apptimeheading = document.createElement('td');
                  $(pkg_td_apptimeheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Appointment Timing");
                  $(pkg_td_apptimeheading).css('border','1px solid #ddd');
                  $(pkg_td_apptimeheading).css('width','50%');
                  var pkg_td_apptime_heading = document.createElement('td');
                  $(pkg_td_apptime_heading).html("&nbsp"+localStorage.getItem("pkg_app_time"));
                  var pkg_tr_address = document.createElement('tr');
                  $(pkg_tr_address).css('lineHeight','2');
                  $(pkg_tr_address).addClass("ptnt_preview_info");
                  $(pkg_tr_address).css('border' ,'1px solid rgb(221, 221, 221)');
                  var pkg_td_address_heading = document.createElement('td');
                  $(pkg_td_address_heading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Address");
                  $(pkg_td_address_heading).css('width','50%');
                  $(pkg_td_address_heading).css('border','1px solid rgb(221, 221, 221)');
                  var pkg_td_address = document.createElement('td');
                  $(pkg_td_address).html("&nbsp"+localStorage.getItem("pkg_address"));
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
                  if ( pkg_ptnt_address == "") 
      	      {
      	      	  
      	      	 $(pkg_tr_address).detach();

      	      }
                  $( pkg_details_table_head).append(pkg_tr_apptime); 
                  $(pkg_patient_details_table).append(pkg_details_table_head);
                  $(pkg_tmm_form_element).append(pkg_prevbtn_element);
                  $(pkg_tmm_form_element).append(pkg_orderbtn_element);
                  //$(pkg_preview_div_element).append(pkg_preview_heading);
                  $("#pkg_modal_thirdpage").append(pkg_closing_element);
                  //$(pkg_preview_box).append(pkg_preview_div_element);
                  //$(pkg_preview_box).append(pkg_time_error);
                  $(pkg_preview_box).append(pkg_preview_heading);
                  $(pkg_preview_box).append(pkg_preview_pkg_info);
                  $(pkg_preview_box).append(pkg_table_dealname); 
                  $(pkg_preview_box).append(pkg_price_table);
                  $(pkg_preview_box).append(pkg_ptnt_info_heading);
                  $(pkg_preview_box).append(pkg_patient_details_table);
                  $(pkg_preview_box).append(pkg_tmm_form_element);
                  $(".close").on('click',function () 
                 {
                 	  $(pkg_order_page).modal().close();
               	  //$(order_page).modal().close(); 
                 });//click
                   $("#pkg_modal_thirdpage").append(pkg_preview_box);  
                    
                     $(pkg_prevbtn_element).on('click', function ()
                      {
                      	  //pkg_form_handler(package_slug,package_name,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount)
                            pkg_form_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);                  
                     	});//click fnctn  
                     	$(pkg_orderbtn_element).on('click',function ()
                     	 {
                            //loadingimage_page();   
                            loadingimage_handler();
                            confirm_pagehandler(package_slug,package_name,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);                 		
                             //confirm_pagehandler(labname,labslug,dealname,deal_slug,deal_mrp,deal_discount,deal_finalprice,labarea)                     		
                     	      
                     		});//click        
                 
   }//fnctn handler
   
     //function confirm_pagehandler(labname,labslug,dealname,deal_slug,deal_mrp,deal_discount,deal_finalprice,labarea)
      function confirm_pagehandler(package_slug,package_name,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount)
 {
 	 var pkg_pnt_name =localStorage.getItem("pkg_patient_name");
    var pkg_pnt_mobileno = localStorage.getItem("pkg_phone");
    var pkg_mail = localStorage.getItem("pkg_email");
    var pkg_appt_time = localStorage.getItem("pkg_app_time");
    var pkg_address = localStorage.getItem("pkg_address");
    /*if (pkg_address == "") 
    { 
       alert("s");
     }*/
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
    	   var i ;
         function addZero(i)
         {
            if (i < 10) 
            {
               i = "0" + i;
            }//if i
              return i;
            }//fnctn
                       
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
                       
         $.ajax({
         url:pkg_host_api+"/m-checkout/book-order",
         type:'POST',
         dataType:'json',
         data:{labSlug:local_package_labslug,homeVisitAddress:pkg_address,packageSlugs:package_slug,patientName:pkg_pnt_name,patientMobile:pkg_pnt_mobileno,patientEmail:pkg_mail,apptTime:pkg_sel_time},
          success:function(data)
          {
          	
          	 if(data.error)
          	{
          	     var pkg_error_page = document.createElement('div');
                  $(pkg_error_page).addClass("modal");
                  $(pkg_error_page).attr('id','modal_errorpage');
                  $(pkg_error_page).css('backgroundColor','#fff');
                  $(pkg_error_page).css('position','relative');
                  $(pkg_error_page).css('paddingRight','0px');
                  $(pkg_error_page).modal().open();
                   var pkg_error_closing = document.createElement('a');
                  $(pkg_error_closing).addClass("confirm_close");
                  $(pkg_error_closing).attr('href','#');
                  $(pkg_error_closing).html("&times;");
                  $(pkg_error_closing).css('marginTop' ,'-24px');
                   $(pkg_error_closing).css('marginRight','8px');
                  $(pkg_error_closing).css('fontSize','26px');
                  $(pkg_error_closing).css('float','right');
                  var pkg_error_heading = document.createElement('h4');
                  $(pkg_error_heading).html("Order Confirmation failed");
                   $(pkg_error_heading).css('color','#5cb0cf');
                  $(pkg_error_heading).css('textAlign','center');
                  var pkg_error_detail = document.createElement('div');
                  $(pkg_error_detail).html(data.error);
                  $(pkg_error_detail).css('marginTop','16px');
                  $(pkg_error_detail).css('marginLeft','16px');
                  var pkg_error_close = document.createElement('button');
                  $(pkg_error_close).addClass("close_modal");
                  $(pkg_error_close).attr('type','button');
                  $(pkg_error_close).html("Close");
                  $(pkg_error_close).css('float','right');
                  $(pkg_error_close).css('marginTop','8px');
                  $(pkg_error_close).css('width','80px');
                  $(pkg_error_close).css('borderRadius','5px');
                  $(pkg_error_close).css('color','white');
                  $(pkg_error_close).css('background','rgb(236,73,73)');
                  $(pkg_error_close).css('border','0px');
                  $(pkg_error_close).css('marginRight','20px');
                   $("#modal_errorpage").append(pkg_error_closing);
                   $("#modal_errorpage").append(pkg_error_heading);
                   $("#modal_errorpage").append(pkg_error_detail);
                   $("#modal_errorpage").append(pkg_error_close);
                   $(pkg_error_closing).on('click',function () 
                   {
                   	$(pkg_error_page).modal().close();
                   	});
                   $(pkg_error_close).on('click',function () 
                   {
                   	$(pkg_error_page).modal().close();
                   	});
          	}//if error
          	else
          	 {
                  var pkg_confirm_page = document.createElement('div');
                  $(pkg_confirm_page).addClass("modal");
                  $(pkg_confirm_page).attr('id','modal_fourthpage');
                  $(pkg_confirm_page).css('backgroundColor','#fff');
                  $(pkg_confirm_page).css('position','relative');
                  $(pkg_confirm_page).css('paddingRight','0px');
                  $(pkg_confirm_page).modal().open();
                  var pkg_confirm_closing = document.createElement('a');
                  $(pkg_confirm_closing).addClass("confirm_close");
                  $(pkg_confirm_closing).attr('href','#');
                  $(pkg_confirm_closing).html("&times;");
                  $(pkg_confirm_closing).css('marginTop' ,'-23px');
                  $(pkg_confirm_closing).css('fontSize','26px');
                  $(pkg_confirm_closing).css('float','right');
                  $(pkg_confirm_closing).css('marginRight','8px');
                  var pkg_order_element = document.createElement('div');
                  $(pkg_order_element).addClass("order_details");
                  $(pkg_order_element).css('marginTop','9px');
                  var pkg_booking_heading = document.createElement('h4');
                  $(pkg_booking_heading).html("Order Confirmation");
                  $(pkg_booking_heading).css('textAlign','center');
                  $(pkg_booking_heading).css('fontSize','18px');
                  $(pkg_booking_heading).css('fontWeight','bold');
                  $(pkg_booking_heading).css('color','#5cb0cf');
                  var pkg_success_element = document.createElement('div');
                  $(pkg_success_element).html("Your order is successfully placed."+"&nbsp"+"&nbsp"+"Please check your mail for details.");
                  $(pkg_success_element).css('marginLeft','24px');
                  $(pkg_success_element).css('marginTop','8px');
                  var pkg_ordered_table = document.createElement('table');
                  $(pkg_ordered_table).css('marginTop','8px');
                  $(pkg_ordered_table).css('width','552px');
                  var pkg_labname_tr = document.createElement('tr');
                  $(pkg_labname_tr).addClass("pkg_order_class");
                  $(pkg_labname_tr).attr('id','ordered_lab');
                  var pkg_labname_td= document.createElement('td');
                  $(pkg_labname_td).html("Lab name");
                  $(pkg_labname_td).css('borderRight','1px solid #ddd');
                  var pkg_lab_name_td = document.createElement('td');
                  $(pkg_lab_name_td).html("&nbsp"+data.labName);
                  var pkg_orderid_tr = document.createElement('tr');
                  $(pkg_orderid_tr).addClass("pkg_order_class");
                  var pkg_orderid_td = document.createElement('td');
                  $(pkg_orderid_td).html("OrderId");
                  $(pkg_orderid_td).css('borderRight','1px solid #ddd');
                  var pkg_order_id_td = document.createElement('td');
                  $(pkg_order_id_td).html("&nbsp"+data.orderId);
                  var pkg_ptnt_name_tr = document.createElement('tr');
                  $(pkg_ptnt_name_tr).addClass("pkg_order_class");
                  $(pkg_ptnt_name_tr).attr('id','order_name');
                  var pkg_ptnt_name_td = document.createElement('td');
                  $(pkg_ptnt_name_td).html("Name");
                  $(pkg_ptnt_name_td).css('borderRight','1px solid #ddd');
                  var pkg_ptntname_td = document.createElement('td');
                  $(pkg_ptntname_td).html("&nbsp"+data.patientName);
                  var pkg_apptime_tr = document.createElement('tr');
                  $(pkg_apptime_tr).addClass("pkg_order_class");
                  var pkg_apptime_td = document.createElement('td');
                  $(pkg_apptime_td).html("Appointment Timing");
                  $(pkg_apptime_td).css('borderRight','1px solid #ddd');
                  var pkg_appt_time_td = document.createElement('td');
                  $(pkg_appt_time_td).html("&nbsp"+data.apptTime);
                  var pkg_close_button = document.createElement('button');
                  $(pkg_close_button).addClass("close_modal");
                  $(pkg_close_button).attr('type','button');
                  $(pkg_close_button).html("Close");
                  $(pkg_close_button).css('float','right');
                  $(pkg_close_button).css('marginTop','8px');
                  $(pkg_close_button).css('width','80px');
                  $(pkg_close_button).css('borderRadius','5px');
                  $(pkg_close_button).css('color','white');
                  $(pkg_close_button).css('background','rgb(236,73,73)');
                  $(pkg_close_button).css('border','0px');
                  $(pkg_close_button).css('marginRight','20px');
                  $(pkg_labname_tr).append(pkg_labname_td);
                  $(pkg_labname_tr).append(pkg_lab_name_td);
                  $(pkg_orderid_tr).append(pkg_orderid_td);
                  $(pkg_orderid_tr).append(pkg_order_id_td);
                  $(pkg_ptnt_name_tr).append(pkg_ptnt_name_td);
                  $(pkg_ptnt_name_tr).append(pkg_ptntname_td);
                  $(pkg_apptime_tr).append(pkg_apptime_td);
                  $(pkg_apptime_tr).append(pkg_appt_time_td);
                  $(pkg_ordered_table).append(pkg_labname_tr);
                  $(pkg_ordered_table).append(pkg_orderid_tr);
                  $(pkg_ordered_table).append(pkg_ptnt_name_tr);
                  $(pkg_ordered_table).append(pkg_apptime_tr);
                  $(pkg_order_element).append(pkg_booking_heading);
                  $(pkg_order_element).append(pkg_success_element);
                  $(pkg_order_element).append(pkg_ordered_table);
                  $(pkg_order_element).append(pkg_close_button);
                  $("#modal_fourthpage").append(pkg_confirm_closing);
                  $("#modal_fourthpage").append(pkg_order_element);
                 
                   $(".confirm_close").on('click',function () 
                 {
               	  $(pkg_confirm_page).modal().close(); 
                 });//click
                  $(".close_modal").on('click',function () 
                  {
                  	 $(pkg_confirm_page).modal().close(); 
                 	});//click btn
                  }//else
                   }//success
                 
                  });//ajax   
 }//fnctn handler
 