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
           $(div_row).addClass("row pack-cont cust-pack");
           var div_col_pkg = document.createElement('div');
           $(div_col_pkg).addClass("col-md-2 pad0");
           var div_img = document.createElement('div');
           $(div_img).addClass("pack-img");
           var pkg_img = document.createElement('img');
           $(pkg_img).attr("src","images/pack.jpg");
           var div_pkg_details = document.createElement('div');
           $(div_pkg_details).addClass("col-md-8 pad0");
           var pkg_details = document.createElement('div');
           $(pkg_details).addClass("pack-details");
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
           $(btn_cont).addClass("bv-cont");
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
           var section_element = document.createElement('section');
           var bottom_menu = document.createElement('div');
           $(bottom_menu).addClass("bottom-menu-holder");
           var company_menu = document.createElement('div');
           $(company_menu).addClass("company-menu");
           var company_ul = document.createElement('ul');
           var tests_li = document.createElement('li');
           var tests_href = document.createElement('a');
           $(tests_href).attr("href","");
           $(tests_href).html("Health Tests");
           $(tests_li).append(tests_href);
           var packages_li = document.createElement('li');
           var packages_href = document.createElement('a');
           $(packages_href).attr("href","");
           $(packages_href).html("Health Packages");
           $(packages_li).append(packages_href);
           var deals_li = document.createElement('li');
           var deals_href = document.createElement('a');
           $(deals_href).attr("href","");
           $(deals_href).html("Hot Deals");
           $(deals_li).append(deals_href);
           var labs_li = document.createElement('li');
           var labs_href = document.createElement('a');
           $(labs_href).attr("href","");
           $(labs_href).html("Labs in Bangalore");
           $(labs_li).append(labs_href);
           var knowledge_li = document.createElement('li');
           var knowledge_href = document.createElement('a');
           $(knowledge_href).attr("href","");
           $(knowledge_href).html("Knowledge Series");
           $(knowledge_li).append(knowledge_href);
           $(company_ul).append(tests_li);
           $(company_ul).append(packages_li);
           $(company_ul).append(deals_li);
           $(company_ul).append(labs_li);
           $(company_ul).append(knowledge_li);
           $(company_menu).append(company_ul);
           $(bottom_menu).append(company_menu);
           var web_menu = document.createElement('div');
           $(web_menu).addClass("web-menu");
           var web_ul = document.createElement('ul');
           var about_li = document.createElement('li');
           var about_href = document.createElement('a');
           $(about_href).attr("href","");
           $(about_href).html("About Us");
           $(about_li).append(about_href);
           var policy_li = document.createElement('li');
           var policy_href = document.createElement('a');
           $(policy_href).attr("href","");
           $(policy_href).html("Privacy Policy");
           $(policy_li).append(policy_href);
           var terms_li = document.createElement('li');
           var terms_href = document.createElement('a');
           $(terms_href).attr("href","");
           $(terms_href).html("Terms and conditions");
           $(terms_li).append(terms_href);
           $(web_ul).append(about_li);
           $(web_ul).append(policy_li);
           $(web_ul).append(terms_li);
           $(web_menu).append(web_ul);
           $(section_element).append(bottom_menu);
           $(section_element).append(web_menu);
           var healthtests_element = document.getElementsByClassName("health_tests")[0];
           //$(healthtests_element).append(section_element);
           var footer_section = document.createElement('section');
           var container_element = document.createElement('div');
           $(container_element).addClass("container cont-12");
           var footer_element = document.createElement('div');
           $(footer_element).addClass("footer");
           var footer_container = document.createElement('div');
           $(footer_container).addClass("container cont-12");
           var copy_rights = document.createElement('div');
           $(copy_rights).addClass("copy-right");
           var copy_rights_heading = document.createElement('h4');
           $(copy_rights_heading).html("Copyright © 2015 Zoty Hospital. All rights reserved");
           $(copy_rights).append(copy_rights_heading);
           var social_icon =  document.createElement('div');
           $(social_icon).addClass("social-icon");
           var footer_ul = document.createElement('ul');
           var follow_us_li = document.createElement('li');
           var follow_us_href = document.createElement('a');
           $(follow_us_href).attr("href","");
           var follow_us_hdng = document.createElement('h4');
           $(follow_us_hdng).html("Follow Us");
           $(follow_us_href).append(follow_us_hdng);
           $(follow_us_li).append(follow_us_href);
           $(footer_ul).append(follow_us_li);
           var facebook_li = document.createElement('li');
           var facebook_href = document.createElement('a');
           $(facebook_href).attr("href","");
           var facebook_img = document.createElement('img');
           $(facebook_img).attr('src','images/facebook.png');
           $(facebook_href).append(facebook_img);
           $(facebook_li).append(facebook_href);
           $(footer_ul).append(facebook_li);
           var twitter_li = document.createElement('li');
           var twitter_href = document.createElement('a');
           $(twitter_href).attr("href","");
           var twitter_img = document.createElement('img');
           $(twitter_img).attr('src','images/twitter.png');
           $(twitter_href).append(twitter_img);
           $(twitter_li).append(twitter_href);
           $(footer_ul).append(twitter_li);
           var g_plus_li = document.createElement('li');
           var g_plus_href = document.createElement('a');
           $(g_plus_href).attr("href","");
           var g_plus_img = document.createElement('img');
           $(g_plus_img).attr('src','images/g-plus.png');
           $(g_plus_href).append(g_plus_img);
           $(g_plus_li).append(g_plus_href);
           $(footer_ul).append(g_plus_li);
           var logo_li = document.createElement('li');
           var logo_href = document.createElement('a');
           $(logo_href).attr("href","");
           var logo_img = document.createElement('img');
           $(logo_img).attr('src','images/in_logo.png');
           $(logo_href).append(logo_img);
           $(logo_li).append(logo_href);
           $(footer_ul).append(logo_li);
           $(social_icon).append(footer_ul);
           $(footer_element).append(social_icon);
           $(footer_element).append(footer_container);
           $(container_element).append(footer_element);
           $(footer_section).append(container_element);
            //$(healthtests_element).append(footer_section);
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
    
    /*#loading
{
  margin-left:388px !important;
}
.tablesorter
{
  border: 1px solid #ddd;
}
#deal_data:nth-child(2n)
{
 background:rgba(236,246,248,0.99) !important;
}
.table_head tr th:nth-child(5)
 {
    width: 86px !important;
  }
  #deal_data:hover
  {
      background:rgb(214,242,242) !important;
  }
 .package_img
 {
   /* margin: 25px;
    margin-right: 0px;
    margin-left: 20px;*/
    padding:10px;
  }
  .package_img img 
  {
    width: 40px;
    height: 40px;
    border-radius: 40px;
   }
   .pack_details
   {
     padding: 14px;
    padding-left: 0px;
   }
   .pack_details p
   {
      float:left;
      color: #4a9aa5;
      font-size: 20px;
      font-weight: 600;
      vertical-align: middle;
      text-align: left;
     /* padding-top: 18px;*/
    
   }
   .cust_pack
   {
     border: 0px;
    margin-top: 0px;
    /* border-bottom: 1px solid #ddd; */
   }
   .pack_cont 
   {
    background: #fff;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0px auto;
    margin-right: auto !important;
   /* border: 2px solid #D7D7D7;*/
    margin-top: 4px;
   }
   .bv_cont 
   {
    /* padding: 29px; */
    /*border-left: 2px solid #ddd;*/
    /* height: 70px; */
    width:0px;
    padding-right: 20px;
    padding-top: 8px;
    float: right;
   }
   .bv_cont a 
   {
    display: block;
    height: 28px;
    background: red;
    /*line-height: 30px;*/
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    font-weight: 600;
    margin-top: 7px;
    margin: 3px auto;
    cursor: pointer;
    width:100px;
    padding-top: 4px;
    padding-right: 3px;
    padding-left: 3px;
}*/

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
               $(package_details_modal).attr('id', 'modal_firstpage');
               $(package_details_modal).css('position','relative');
               $(package_details_modal).css('backgroundColor','#fff');
               $(package_details_modal).css('paddingRight','0px');
               $(package_details_modal).css('width','900px');
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
                // $(offer_labs).css("background", "#41A7B3");
                 //$(offer_labs).css("color","white");
                 $(offer_labs).css("fontWeight","bold");
                 $(offer_labs).css("marginBottom","11px");
                 $(offer_labs).css("marginRight",'20px');
                 $(offer_labs).css("marginTop",'15px');
              var labs_table = document.createElement('table');
              //$(labs_table).addClass("table cf table-bordered");
              $(labs_table).addClass("table-data");
              $(labs_table).css('marginRight','20px');
             // $(labs_table).css("background", "#41A7B3");
              //$(labs_table).css("color","white");
              $(labs_table).css('cursor','pointer');
              var table_head = document.createElement('thead');
              $(table_head).addClass("table_head");
              var labs_tr = document.createElement('tr');
               $(labs_tr).css("background", "#41A7B3");
              $(labs_tr).css("color","white");
              var labname_th = document.createElement('th');
              //$(labname_th).addClass("col-md-5");
              $(labname_th).html("Lab Name");
              $(labname_th).css('border', '1px solid #ddd');
              $(labname_th).css('padding','6px');
              $(labname_th).css('textAlign','center');
              var labarea_th = document.createElement('th');
             // $(labarea_th).addClass("col-md-2");
              $(labarea_th).html("Location");
              $(labarea_th).css('border', '1px solid #ddd');
              $(labarea_th).css('textAlign','center');
              var tests_th = document.createElement('th');
              //$(tests_th).addClass("col-md-2");
              $(tests_th).html("Tests"+"&nbsp"+"Parameters");
              $(tests_th).css('border', '1px solid #ddd');
              $(tests_th).css('textAlign','center');
              var consultations_th = document.createElement('th');
              $(consultations_th).addClass("col-md-2");
              $(consultations_th).html("Dr"+"&nbsp"+"&nbsp"+"Consultations");
               $(consultations_th).css('border', '1px solid #ddd');
              var price_th = document.createElement('th');
              //$(price_th).addClass("col-md-2");
              $(price_th).html("Price");
              $(price_th).css('border', '1px solid #ddd');
              $(price_th).css('textAlign','center');
              var discount_th = document.createElement('th');
              //$(discount_th).addClass("col-md-2");
              $(discount_th).html("Discount"); 
              $(discount_th).css('border', '1px solid #ddd');
              $(discount_th).css('textAlign','center');
              var book_th = document.createElement('th');
              $(book_th).html("Book");
              $(book_th).css('textAlign','center');
               $(labs_tr).append(labname_th);
              $(labs_tr).append(labarea_th);
              $(labs_tr).append(tests_th);
              $(labs_tr).append(consultations_th);
              $(labs_tr).append(price_th);
              $(labs_tr).append(discount_th);
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
                $(price_td).html(data[i].labFinalPrice+"&nbsp"+"(");
                //$(price_td).html(data[i].labFinalPrice);
              	 $(price_td).css('border', '1px solid #ddd');
              	 $(price_td).css('padding-left',	'6px');
              	 //$(price_td).css('position','relative');
              	 //$(price_td).css('top','9px');
              	 var fp = document.createElement('div');
              	 var finalprice = document.createElement('div');
              	 $(finalprice).html(data[i].labMRP);
              	 $(finalprice).css('textDecoration','line-through');
              	 $(finalprice).css('color','rgb(236,73,73)');
              	 $(finalprice).css('position','relative');
              	 $(finalprice).css('float','left');
              	 $(finalprice).css('bottom','19px');
              	 $(finalprice).css('left','39px');
              	 var close_bracket = document.createElement('div');
              	 $(close_bracket).html(")");
              	 $(close_bracket).css('position','relative');
              	 $(close_bracket).css('bottom','19px');
              	 $(close_bracket).css('left','42px');
              	 //$(price_td).append(finalprice);
              	 //$(price_td).append(close_bracket);
              	 $(fp).append(finalprice);
              	 $(fp).append(close_bracket);
              	 //$(price_td).append(fp);
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
              	 $(book_div).html("Book Now");
              	 $(book_div).css("background","#ea494f");
              	 $(book_div).css('borderRadius','5px');
              	 $(book_div).css("color","white");
              	 $(book_div).css("fontSize","10px");
              	 $(book_div).css("paddingTop","3px");
              	 $(book_div).css("paddingRight","3px");
              	 $(book_div).css("paddingLeft","3px");
              	 $(book_div).css("paddingBottom","3px");
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
            
               var close_button = document.createElement('button');
               $(close_button).html("Close");
               $(close_button).css("background" ,"#ea494f");
               $(close_button).css('color','white');
               $(close_button).css('border','0px');
               $(close_button).css('float','right');
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
  //mod before span
 /* function packages_list()
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
           $(div_row).addClass("row pack-cont cust-pack");
           var div_col_pkg = document.createElement('div');
           $(div_col_pkg).addClass("col-md-2 pad0");
           var div_img = document.createElement('div');
           $(div_img).addClass("package_img");
           var pkg_img = document.createElement('img');
           $(pkg_img).attr("src","images/pack.jpg");
           var div_pkg_details = document.createElement('div');
           $(div_pkg_details).addClass("col-md-8 pad0");
           var pkg_details = document.createElement('div');
           $(pkg_details).addClass("pack_details");
           var pkg_name = document.createElement('p');
           $(pkg_name).html(data[i].packageName);
           var pkg_tests = document.createElement('h6');
           $(pkg_tests).css('float','right');
           $(pkg_tests).css('paddingRight','176px');
           $(pkg_tests).css('paddingTop','13px');
           $(pkg_tests).css('fontSize','11px');
           var pkg_span = document.createElement('span');
           $(pkg_span).html("Tests Available"+"&nbsp"+":"+data[i].testCount);
           if (data[i].testCount == "0") 
           {
           	  $(pkg_tests).css('display','none');
           }
           var pkg_consultation = document.createElement('h6');
           $(pkg_consultation).css('float','right');
           $(pkg_consultation).css('paddingRight','186px');
           $(pkg_consultation).css('fontSize','11px');
           var consult_span = document.createElement('span');
           $(consult_span).html("Consultations"+"&nbsp"+":"+data[i].consultationsCount);
           if (data[i].consultationsCount == "0") 
           {
           	 $(pkg_consultation).css('display','none');
           }
           var details_btn = document.createElement('div');
           $(details_btn).addClass("col-md-2 pad0");
           var btn_cont = document.createElement('div');
           $(btn_cont).addClass("bv-cont");
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
 }//fnctn */
