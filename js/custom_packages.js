 var pkg_host_api = "http://beta.zotey.com/m-api"; 
 function packages_list()
 {
 	  $.ajax({
     url:pkg_host_api+"/d-packages/listing",
     type:'GET',
     dataType: 'json',
     success:function(data)
     {	
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
         $(pkg_search_form).css('width','164%');
         $(pkg_search_form).on('keyup',function () 
         {
           	 $(search_div_img).append(search_img);
           	 var search_input = $("#search").val();
           	 $(search_div_img).css('display','block')
             for (var j=0;j<data.length;j++) 
             {  
           	    var pkg_search_name = document.getElementById(data[j].packageName);
           	    var pkg_title = document.getElementById(data[j].packageSlug);
           	    var pkg_search_id = pkg_search_name.id; 
           	    search_handler(pkg_search_name,pkg_search_id,pkg_title);
           	  }//for
         });//key event 
         var pkg_search_ip_img = document.createElement('div');
         $(pkg_search_ip_img).css('width','80%');
         var pkg_search_input = document.createElement('input');
         $(pkg_search_input).addClass("form-control");
         $(pkg_search_input).attr('id','search');
         $(pkg_search_input).attr('type','text');
         $(pkg_search_input).attr('placeholder','Search');
         $(pkg_search_input).css('borderRadius','5px 0px 0px 5px');
         $(pkg_search_input).attr('autofocus','autofocus'); 
         var search_div_img = document.createElement('div');
         $(search_div_img).css('float','right');
         $(search_div_img).css('position','relative');
         $(search_div_img).css('bottom','27px');
         $(search_div_img).css('cursor','pointer');
         $(search_div_img).on('click',function () 
         {
             $(pkg_search_input).val("");
             for (var pkg=0;pkg<data.length;pkg++) 
             {
                 var pkg_input_click = document.getElementById(data[pkg].packageName);
                 $(pkg_input_click).css('display','block');
                 var pkg_title = document.getElementById(data[pkg].packageSlug);
                 $(pkg_title).html(data[pkg].packageName);
                 $(search_div_img).css('display','none');
              }//for loop	
              $("#search").focus();
         });//img clck
         var search_img = document.createElement('img');
         $(search_img).attr("src","images/Black_Remove.png");
         $(search_img).css('height','14px');
         $(search_img).css('width','15px');
         var pkg_search_span = document.createElement('span');
         var pkg_search_span_i = document.createElement('i');
         $(pkg_search_span_i).addClass('fa fa-search');
         $(pkg_search_span).append(pkg_search_span_i);
         $(pkg_search_ip_img).append(pkg_search_input);
         $(pkg_search_ip_img).append(search_div_img);
         $(pkg_search_form).append(pkg_search_ip_img);
         $(pkg_search_form).append(pkg_search_span);
         $(pkg_search).append(pkg_search_form);
         $(pkgs_col).append(pkg_search);
         $(hlth_pkg_head).append(pkgs_head);
         $(hlth_pkg_head).append(pkgs_col);
         $(health_row).append(hlth_pkg_head); 
         $(wrapper_element).append(health_row);
         var pkgs_list = document.createElement('div');
         $(pkgs_list).addClass("packages_list");
         for (i=0;i<data.length;i++) 
         {
            var div_cont = document.createElement('div');
            $(div_cont).addClass("two_cont");
            $(div_cont).css('cursor','pointer');
            $(div_cont).attr('id',data[i].packageName);
            $(div_cont).attr('data-packageid',data[i].packageSlug);
            $(div_cont).attr('data-packagename',data[i].packageName);
            $(div_cont).attr('data-packageconsultations',data[i].consultationsCount);
            $(div_cont).attr('data-pkgwindow',data[i].packageProfilePageURL);
            $(div_cont).on('click',function () 
            {
           	   var pkg_href_windw = $(this).data('pkgwindow');
           	   open_wndw_handler(pkg_href_windw);
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
            var pkg_details_row = document.createElement('div');
            $(pkg_details_row).addClass("row");
            var pkg_details = document.createElement('div');
            $(pkg_details).addClass("pack_details");
            var pkg_name = document.createElement('p');
            $(pkg_name).html(data[i].packageName);
            $(pkg_name).attr('id',data[i].packageSlug);
            var pkg_tst_conslt_row = document.createElement('div');
            $(pkg_tst_conslt_row).addClass("row");
            var pkg_tst_conslt = document.createElement('div');
            $(pkg_tst_conslt).addClass("tst_consult");
            var pkg_tests = document.createElement('h6');
            $(pkg_tests).css('float','left');
            $(pkg_tests).css('fontWeight','600');
            var pkg_span = document.createElement('span');
            $(pkg_span).html("Tests Available"+"&nbsp"+":"+data[i].testCount);
            $(pkg_span).css('paddingRight','6px');
            if (data[i].testCount == "0") 
            {
           	  $(pkg_tests).css('display','none');
           	}
            var pkg_consultation = document.createElement('h6');
            $(pkg_consultation).css('fontWeight','600');
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
            $(pkg_tst_conslt).append(pkg_tests);
            $(pkg_tst_conslt).append(pkg_consultation);
            $(pkg_tst_conslt_row).append(pkg_tst_conslt);
            $(pkg_details_row).append(pkg_details);
            $(div_pkg_details).append(pkg_details_row);
            $(div_pkg_details).append(pkg_tst_conslt_row);
            $(btn_cont).append(view_btn);
            $(details_btn).append(btn_cont);
            $(div_row).append(div_col_pkg);
            $(div_row).append(div_pkg_details);
            $(div_row).append(details_btn);
            $(div_cont).append(div_row);
            $(pkgs_list).append(div_cont);
            $(wrapper_element).append(pkgs_list);
           }//for loop
    }//suc fntn
  });//ajax
 }//fnctn
 function open_wndw_handler(pkg_href_windw)
 {
    window.open(pkg_href_windw);
 }
 
 function search_handler(pkg_search_name,pkg_search_id,pkg_title)
 {
 	 var input_value = $("#search").val();
 	 var inpt_val_lowercase = input_value.toLowerCase();
 	 var inputs_value = new RegExp(inpt_val_lowercase);
 	 var pkg_id = pkg_search_name.id;
 	 var pkg_id_lowercase = pkg_id.toLowerCase();
 	 var pkg_id_lnth = pkg_id.length;
 	 	$(pkg_title).html('');
  if (inputs_value.test(pkg_id_lowercase)) 
  {
  	   var pos_value = pkg_id_lowercase.indexOf(input_value);
      $(pkg_search_name).css('display','block');
      var pkg_lnth = input_value.length;
      var pkg_index = pkg_id_lowercase.indexOf(inpt_val_lowercase);
      var pkg_str = pkg_id.substr(pkg_index,pkg_lnth);
      var left_pkg = pkg_id.substr(0,pkg_index);
      var substr_lnth = pkg_index+pkg_lnth;
      var right_pkg = pkg_id.substr(substr_lnth);
       var pkg_left_name = document.createElement('div');
       $(pkg_left_name).css('float','left');
       var pkg_str_name = document.createElement('div');
       $(pkg_str_name).html(pkg_str);
       $(pkg_str_name).addClass("pkgs");
       $(pkg_str_name).css('float','left');
       $(pkg_str_name).css('background','rgb(65,167,179)');
       $(pkg_str_name).css('color','white');
       $(pkg_str_name).css('padding','0px');
       $(pkg_str_name).css('lineHeight','1');
       $(pkg_str_name).css('marginTop','3px');
       var pkg_right_name =document.createElement('div');
       $(pkg_right_name).css('float','left');
       var pkg_text_ip = input_value;
       var pkg_text_ip_lnth = input_value.length; 
       var pkg_empty_space = input_value.charAt(pkg_text_ip_lnth -1);
        if ((right_pkg.charAt(0)==" ")  ||(input_value.charAt(pkg_text_ip_lnth -1)==" " ))   
        {
        	  $(pkg_right_name).html("&nbsp;"+right_pkg);
        }//if char 
        else 
        {
        	  $(pkg_right_name).html(right_pkg);
        }//else
        var pkg_left_length = left_pkg.length;
        if (left_pkg.charAt(pkg_left_length -1)==" ") 
        {
        	    $(pkg_left_name).html(left_pkg+"&nbsp");
        } // if left
        else 
        {
                  $(pkg_left_name).html(left_pkg);
         }//else
        $(pkg_title).append(pkg_left_name);
        $(pkg_title).append(pkg_str_name);
        $(pkg_title).append(pkg_right_name);
   }//if ip val
   else
    {
    	 $(pkg_search_name).css('display','none');
    }  
   
 }//search fnctn 
 window.onload = packages_list();
 
 

  
  
     
   
   