var pkg_profile_slug ="thyroid-profile-t3-t4-tsh";
var pkg_profile_host = "http://beta.zotey.com/m-api";
var pkg_profile_pkg_name;
var pkg_profile_pkg_slug;
var package_pfl_pkg_det;
function pkg_profile_details_handler()
{
   $.ajax({
   url:pkg_profile_host+"/d-packages/profile",
   type:'GET',
   dataType: 'json',
   data:{packageSlug:pkg_profile_slug},
   success:function(data)
   {
   	console.log(data);
   	pkg_profile_pkg_name = data.packageInfo.packageName;
   	pkg_profile_pkg_slug = data.packageInfo.packageSlug;
   	var pkg_profile_loading = document.getElementById("pkg_profile_loader");
      $(pkg_profile_loading).css('display','none');
      var pkg_cust_profile_container = document.getElementsByClassName("cust-container")[0];
	   var pkg_profile_heading_row = document.createElement('div');
	   $(pkg_profile_heading_row).addClass("row");
	   var pkg_profile_details_col = document.createElement('div');
	   $(pkg_profile_details_col).addClass("col-md-9 col-sm-3");
	   var pkg_profile_cust_wrapper = document.createElement('div');
	   $(pkg_profile_cust_wrapper).addClass("pkg_cust_profile_wrapper");
	   var pkg_profile_testname_row = document.createElement('div');
	   $(pkg_profile_testname_row).addClass("row");
	   var pkg_profile_name = document.createElement('div');
	   $(pkg_profile_name).html(data.packageInfo.packageName);
	   $(pkg_profile_name).css('textAlign','center');
	   $(pkg_profile_name).css('color','rgb(65, 167, 179)');
	   $(pkg_profile_name).css('fontWeight','bold');
	   $(pkg_profile_name).css('fontSize','18px');
	   $(pkg_profile_name).css('paddingTop','13px');
	   var pkg_profile_description_data = document.createElement('div');
	   $(pkg_profile_description_data).html(data.packageInfo.packageDesc);
	   $(pkg_profile_description_data).css('textAlign','justify');
	   $(pkg_profile_description_data).css('paddingTop','26px');
	   $(pkg_profile_description_data).css('textIndent','38px');
	   $(pkg_profile_testname_row).append(pkg_profile_name);
	   $(pkg_profile_testname_row).append(pkg_profile_description_data);
	   if (data.packageInfo.packageFeatures != null) 
	   {
	     var pkg_profile_packagefeatures_head = document.createElement('div');
	      $(pkg_profile_packagefeatures_head).html("Package Features");
	     $(pkg_profile_packagefeatures_head).css('fontWeight','bold');
	     $(pkg_profile_packagefeatures_head).css('color','rgb(65, 167, 179)');
	     $(pkg_profile_packagefeatures_head).css('fontSize','16px');
	     $(pkg_profile_packagefeatures_head).css('marginBottom','6px');
	     $(pkg_profile_packagefeatures_head).css('marginTop','25px');
	     $(pkg_profile_testname_row).append(pkg_profile_packagefeatures_head);
	     var index = 0;
	     while (index<data.packageInfo.packageFeatures.length)
        {
            var pkg_profile_packagefeatures_row = document.createElement('div');
            $(pkg_profile_packagefeatures_row).addClass("row");
            $(pkg_profile_packagefeatures_row).css('marginBottom','16px');
            var pkg_profile_packagefeatures_left_row = document.createElement('div');
            $(pkg_profile_packagefeatures_left_row).css('marginLeft','30px');
            $(pkg_profile_packagefeatures_left_row).css('display','list-item');
            $(pkg_profile_packagefeatures_left_row).html(data.packageInfo.packageFeatures[index]);
            $(pkg_profile_packagefeatures_row).append(pkg_profile_packagefeatures_left_row);
            index++;
            if (index<data.packageInfo.packageFeatures.length) 
            {
                var pkg_profile_packagefeatures_right_row = document.createElement('div');
                $(pkg_profile_packagefeatures_left_row).css('float','left');
                $(pkg_profile_packagefeatures_left_row).css('width','50%');
                $(pkg_profile_packagefeatures_right_row).css('display','list-item');
                $(pkg_profile_packagefeatures_right_row).html(data.packageInfo.packageFeatures[index]);
                $(pkg_profile_packagefeatures_row).append(pkg_profile_packagefeatures_right_row);
             }//if
             index++;
              $(pkg_profile_testname_row).append(pkg_profile_packagefeatures_row);
         }//while loop
       }//if not null
      var pkg_profile_offering_labs = document.createElement('div');
	   $(pkg_profile_offering_labs).html("Offering Labs");
	   $(pkg_profile_offering_labs).css('color','rgb(65, 167, 179)');
	   $(pkg_profile_offering_labs).css('fontWeight','bold');
	   $(pkg_profile_offering_labs).css('paddingTop','11px');
	   $(pkg_profile_offering_labs).css('fontSize','16px');
	   $(pkg_profile_offering_labs).css('paddingBottom','11px');
      var pkg_profile_labs_table = document.createElement('table');
	   $(pkg_profile_labs_table).addClass("tablesorter");
	   $(pkg_profile_labs_table).attr('id','tst_profile_tab');
	   $(pkg_profile_labs_table).css('width','100%');
	   $(pkg_profile_labs_table).css('fontSize','13px');
	   var pkg_profile_table_head = document.createElement('thead');
      $(pkg_profile_table_head).addClass("table_head");
      var pkg_profile_labs_tr = document.createElement('tr');
      $(pkg_profile_labs_tr).css("background", "#41A7B3");
      $(pkg_profile_labs_tr).css("color","white");
      $(pkg_profile_labs_tr).css('cursor','pointer');
      var pkg_profile_labname_th = document.createElement('th');
      $(pkg_profile_labname_th).css('border', '1px solid #ddd');
      $(pkg_profile_labname_th).css('width','31%');
      var pkg_profile_labname_element = document.createElement('div');
      $(pkg_profile_labname_element).html("Lab Name");
      $(pkg_profile_labname_element).css('padding','10px');
      $(pkg_profile_labname_element).css('textAlign','center');
      $(pkg_profile_labname_element).css('float','left');
      var pkg_profile_imgs = document.createElement('div');
      $(pkg_profile_imgs).css('float','right');
      var pkg_profile_asc = document.createElement('div');
      var pkg_profile_img_asc = document.createElement('img');
      $(pkg_profile_img_asc).attr('src','images/table_sorter_asc.png');
      $(pkg_profile_img_asc).css('paddingBottom','14px');
      $(pkg_profile_img_asc).css('paddingLeft','1px');
      var pkg_profile_desc = document.createElement('div');
      var pkg_profile_img_desc = document.createElement('img');
      $(pkg_profile_img_desc).attr('src','images/table_sorter_desc.png');
      $(pkg_profile_img_desc).css('paddingTop','13px');
      var pkg_profile_labaddress_th = document.createElement('th');
      $(pkg_profile_labaddress_th).css('border', '1px solid #ddd');
      $(pkg_profile_labaddress_th).css('width','19%');
      var pkg_profile_labaddress = document.createElement('div');
      $(pkg_profile_labaddress).html("Test Parameters");
      $(pkg_profile_labaddress).css('textAlign','center');
      $(pkg_profile_labaddress).css('float','left');
      $(pkg_profile_labaddress).css('padding','10px');
      var pkg_profile_address_imgs = document.createElement('div');
      $(pkg_profile_address_imgs).css('float','right');
      var pkg_profile_address_asc = document.createElement('div');
      var pkg_profile_address_img_asc = document.createElement('img');
      $(pkg_profile_address_img_asc).attr('src','images/table_sorter_asc.png');
      $(pkg_profile_address_img_asc).css('paddingBottom','14px');
      $(pkg_profile_address_img_asc).css('paddingLeft','1px');
      var pkg_profile_address_desc = document.createElement('div');
      var pkg_profile_address_img_desc = document.createElement('img');
      $(pkg_profile_address_img_desc).attr('src','images/table_sorter_desc.png');
      $(pkg_profile_address_img_desc).css('paddingTop','13px');
      var pkg_profile_labarea_th = document.createElement('th');
      $(pkg_profile_labarea_th).css('border', '1px solid #ddd');
      $(pkg_profile_labarea_th).css('width','20%');
      var pkg_profile_labarea = document.createElement('div');
      $(pkg_profile_labarea).html("Location");
      $(pkg_profile_labarea).css('textAlign','center');
      $(pkg_profile_labarea).css('float','left');
      $(pkg_profile_labarea).css('padding','10px');
      var pkg_profile_area_imgs = document.createElement('div');
      $(pkg_profile_area_imgs).css('float','right');
      var pkg_profile_area_asc = document.createElement('div');
      var pkg_profile_area_img_asc = document.createElement('img');
      $(pkg_profile_area_img_asc).attr('src','images/table_sorter_asc.png');
      $(pkg_profile_area_img_asc).css('paddingBottom','14px');
      $(pkg_profile_area_img_asc).css('paddingLeft','1px');
      var pkg_profile_area_desc = document.createElement('div');
      var pkg_profile_area_img_desc = document.createElement('img');
      $(pkg_profile_area_img_desc).attr('src','images/table_sorter_desc.png');
      $(pkg_profile_area_img_desc).css('paddingTop','13px');
      var pkg_profile_labprice_th = document.createElement('th');
      $(pkg_profile_labprice_th).css('border', '1px solid #ddd');
      $(pkg_profile_labprice_th).css('width','10%');
      var pkg_profile_labprice = document.createElement('div');
      $(pkg_profile_labprice).html("Price");
      $(pkg_profile_labprice).css('float', 'left');
      $(pkg_profile_labprice).css('textAlign','center');
      $(pkg_profile_labprice).css('padding','10px');
      var pkg_profile_labprice_imgs = document.createElement('div');
      $(pkg_profile_labprice_imgs).css('float','right');
      var pkg_profile_price_asc = document.createElement('div');
      var pkg_profile_price_img_asc = document.createElement('img');
      $(pkg_profile_price_img_asc).attr('src','images/table_sorter_asc.png');
      $(pkg_profile_price_img_asc).css('paddingBottom','14px');
      $(pkg_profile_price_img_asc).css('paddingLeft','1px');
      var pkg_profile_price_desc = document.createElement('div');
      var pkg_profile_price_img_desc = document.createElement('img');
      $(pkg_profile_price_img_desc).attr('src','images/table_sorter_desc.png');
      $(pkg_profile_price_img_desc).css('paddingTop','13px');
      $(pkg_profile_price_desc).append(pkg_profile_price_img_desc);
      $(pkg_profile_price_asc).append(pkg_profile_price_img_asc);
      $(pkg_profile_labprice_imgs).append(pkg_profile_price_desc);
      $(pkg_profile_labprice_imgs).append(pkg_profile_price_asc);
      $(pkg_profile_labprice_th).append(pkg_profile_labprice);
      $(pkg_profile_labprice_th).append(pkg_profile_labprice_imgs);
      var pkg_profile_labdiscount_th = document.createElement('th');
      $(pkg_profile_labdiscount_th).css('border', '1px solid #ddd');
      $(pkg_profile_labdiscount_th).css('width','13%');
      var pkg_profile_labdiscount = document.createElement('div');
      $(pkg_profile_labdiscount).html("Discount");
      $(pkg_profile_labdiscount).css('float', 'left');
      $(pkg_profile_labdiscount).css('textAlign','center');
      $(pkg_profile_labdiscount).css('padding','10px');
      var pkg_profile_labdiscount_imgs = document.createElement('div');
      $(pkg_profile_labdiscount_imgs).css('float','right');
      var pkg_profile_discount_asc = document.createElement('div');
      var pkg_profile_discount_img_asc = document.createElement('img');
      $(pkg_profile_discount_img_asc).attr('src','images/table_sorter_asc.png');
      $(pkg_profile_discount_img_asc).css('paddingBottom','14px');
      $(pkg_profile_discount_img_asc).css('paddingLeft','1px');
      var pkg_profile_discount_desc = document.createElement('div');
      var pkg_profile_discount_img_desc = document.createElement('img');
      $(pkg_profile_discount_img_desc).attr('src','images/table_sorter_desc.png');
      $(pkg_profile_discount_img_desc).css('paddingTop','13px');
      var pkg_profile_book_th = document.createElement('th');
      $(pkg_profile_book_th).html("Book");
      $(pkg_profile_book_th).css('textAlign','center');
      $(pkg_profile_book_th).css('padding','10px');
      $(pkg_profile_book_th).css('width','7%');
      $(pkg_profile_address_desc).append(pkg_profile_address_img_desc);
      $(pkg_profile_address_asc).append(pkg_profile_address_img_asc);
      $(pkg_profile_address_imgs).append(pkg_profile_address_desc);
      $(pkg_profile_address_imgs).append(pkg_profile_address_asc);
      $(pkg_profile_labaddress_th).append(pkg_profile_labaddress);
      $(pkg_profile_labaddress_th).append(pkg_profile_address_imgs);
      $(pkg_profile_discount_desc).append(pkg_profile_discount_img_desc);
      $(pkg_profile_discount_asc).append(pkg_profile_discount_img_asc);
      $(pkg_profile_labdiscount_imgs).append(pkg_profile_discount_desc);
      $(pkg_profile_labdiscount_imgs).append(pkg_profile_discount_asc);
      $(pkg_profile_labdiscount_th).append(pkg_profile_labdiscount);
      $(pkg_profile_labdiscount_th).append(pkg_profile_labdiscount_imgs);
      $(pkg_profile_area_desc).append(pkg_profile_area_img_desc);
      $(pkg_profile_area_asc).append(pkg_profile_area_img_asc);
      $(pkg_profile_area_imgs).append(pkg_profile_area_desc);
      $(pkg_profile_area_imgs).append(pkg_profile_area_asc);
      $(pkg_profile_labarea_th).append(pkg_profile_labarea);
      $(pkg_profile_labarea_th).append(pkg_profile_area_imgs);
      $(pkg_profile_asc).append(pkg_profile_img_asc);
      $(pkg_profile_desc).append(pkg_profile_img_desc);
      $(pkg_profile_imgs).append(pkg_profile_desc);
      $(pkg_profile_imgs).append(pkg_profile_asc);
      $(pkg_profile_labname_th).append(pkg_profile_labname_element);
      $(pkg_profile_labname_th).append(pkg_profile_imgs);
      $(pkg_profile_labs_tr).append(pkg_profile_labname_th);
      $(pkg_profile_labs_tr).append(pkg_profile_labarea_th);
       $(pkg_profile_labs_tr).append(pkg_profile_labaddress_th);
      $(pkg_profile_labs_tr).append(pkg_profile_labprice_th);
      $(pkg_profile_labs_tr).append(pkg_profile_labdiscount_th);
      $(pkg_profile_labs_tr).append(pkg_profile_book_th);
      $(pkg_profile_table_head).append(pkg_profile_labs_tr);
      $(pkg_profile_labs_table).append(pkg_profile_table_head);
      var pkg_profile_table_body = document.createElement('tbody');
       for (var i=0;i<data.offeringLabs.length;i++) 
       {
          var pkg_profile_lab_details_tr = document.createElement('tr');
          $(pkg_profile_lab_details_tr).attr('id','pkg_profile_details');
          var pkg_profile_labname_td = document.createElement('td');
          $(pkg_profile_labname_td).css('border', '1px solid #ddd');
          $(pkg_profile_labname_td).css('paddingLeft','6px'); 
          $(pkg_profile_labname_td).css('cursor','pointer');
          var pkg_profile_labname_a = document.createElement('a');
          $(pkg_profile_labname_a).html(data.offeringLabs[i].labName);
          $(pkg_profile_labname_a).addClass("pkg_profile_lab_page");
          $(pkg_profile_labname_a).attr('href',data.offeringLabs[i].labProfilePageURL);
          $(pkg_profile_labname_a).attr('target','_blank');
          $(pkg_profile_labname_td).append(pkg_profile_labname_a);
          var pkg_profile_labaddress_td = document.createElement('td');
          $(pkg_profile_labaddress_td).html(data.offeringLabs[i].offeringTestsCount);
          $(pkg_profile_labaddress_td).css('border', '1px solid #ddd');
          $(pkg_profile_labaddress_td).css('paddingLeft','6px');
          $(pkg_profile_labaddress_td).css('textAlign','center');
          var pkg_profile_labarea_td = document.createElement('td');
          $(pkg_profile_labarea_td).html(data.offeringLabs[i].labArea);
          $(pkg_profile_labarea_td).css('border', '1px solid #ddd'); 
          $(pkg_profile_labarea_td).css('paddingLeft','6px');
          var pkg_profile_price_td = document.createElement('td');
          var pkg_profile_div_td = document.createElement('div');
          $(pkg_profile_div_td).html(data.offeringLabs[i].labPackageDiscountedPrice+"&nbsp"+"(");
          $(pkg_profile_price_td).css('border', '1px solid #ddd');
          $(pkg_profile_div_td).css('float','left');
          $(pkg_profile_div_td).css('width','50%');
          $(pkg_profile_div_td).css('textAlign','right');
          $(pkg_profile_price_td).css('padding-left',	'7px');
          var pkg_profile_dp = document.createElement('div');
          $(pkg_profile_dp).css('width','50%');
          $(pkg_profile_dp).css('float','right');
          var pkg_profile_discountedprice = document.createElement('div');
          $(pkg_profile_discountedprice).html(data.offeringLabs[i].labPackageMRP);
          $(pkg_profile_discountedprice).css('textDecoration','line-through');
          $(pkg_profile_discountedprice).css('color','rgb(236,73,73)');
          $(pkg_profile_discountedprice).css('position','relative');
          $(pkg_profile_discountedprice).css('float','left');
          var pkg_profile_close_bracket = document.createElement('div');
          $(pkg_profile_close_bracket).html(")");
          $(pkg_profile_close_bracket).css('float','left');
          $(pkg_profile_close_bracket).css('position','relative');
          $(pkg_profile_dp).append(pkg_profile_discountedprice);
          $(pkg_profile_dp).append(pkg_profile_close_bracket);
          $(pkg_profile_price_td).append(pkg_profile_div_td);
          $(pkg_profile_price_td).append(pkg_profile_dp);
          var pkg_profile_discount_td = document.createElement('td');
          $(pkg_profile_discount_td).html(data.offeringLabs[i].labPackageDiscount+"%");
          $(pkg_profile_discount_td).css('border', '1px solid #ddd');
          $(pkg_profile_discount_td).css('padding','6px');
          $(pkg_profile_discount_td).css('textAlign','center');
          var pkg_profile_book_td = document.createElement('td');
          $(pkg_profile_book_td).attr('data-pkg-profile-discount', data.offeringLabs[i].labPackageDiscount);
          $(pkg_profile_book_td).attr('data-pkg-profile-mrp', data.offeringLabs[i].labPackageMRP);
          $(pkg_profile_book_td).attr('data-pkg-profile-dp', data.offeringLabs[i].labPackageDiscountedPrice);
          $(pkg_profile_book_td).attr('data-pkg-profile-labname', data.offeringLabs[i].labName);
          $(pkg_profile_book_td).attr('data-pkg-profile-labslug', data.offeringLabs[i].labSlug);
          $(pkg_profile_book_td).attr('data-pkg-profile-labarea', data.offeringLabs[i].labArea);
          $(pkg_profile_book_td).attr('data-pkg-profile-labaddress', data.offeringLabs[i].labAddress);
          $(pkg_profile_book_td).attr('data-pkg-profile-labpin', data.offeringLabs[i].labPincode);
          $(pkg_profile_book_td).attr('data-pkg-profile-onlinereport', data.offeringLabs[i].onlineReports);
          $(pkg_profile_book_td).attr('data-pkg-profile-labvisit', data.offeringLabs[i].visitType);
          $(pkg_profile_book_td).css('paddingLeft','6px');
          $(pkg_profile_book_td).css('paddingRight','6px');
          $(pkg_profile_book_td).css('border', '1px solid #ddd');
          $(pkg_profile_book_td).css('cursor','pointer');
          $(pkg_profile_book_td).on('click',pkg_details_handler);
          var pkg_profile_book_div = document.createElement('div');
          $(pkg_profile_book_div).addClass("pkg_pfl_view_btn");
          $(pkg_profile_book_div).css("background","#ea494f");
          $(pkg_profile_book_div).css('borderRadius','5px');
          $(pkg_profile_book_div).css("color","white");
          $(pkg_profile_book_div).css('border','0px');
          $(pkg_profile_book_div).css('height','18px');
          $(pkg_profile_book_div).css('width','32px');
          $(pkg_profile_book_div).css('marginLeft','10px');
          var pkg_profile_book_view_div = document.createElement('div');
          $(pkg_profile_book_view_div).html("View");
          $(pkg_profile_book_view_div).css('fontSize','10px');
          $(pkg_profile_book_view_div).css('paddingTop','2px');
          $(pkg_profile_book_view_div).css('paddingLeft','5px');
          $(pkg_profile_book_view_div).css('paddingRight','5px');
          $(pkg_profile_book_div).append(pkg_profile_book_view_div);
          $(pkg_profile_book_td).append(pkg_profile_book_div);
          $(pkg_profile_lab_details_tr).append(pkg_profile_labname_td);
          $(pkg_profile_lab_details_tr).append(pkg_profile_labarea_td);
          $(pkg_profile_lab_details_tr).append(pkg_profile_labaddress_td);
          $(pkg_profile_lab_details_tr).append(pkg_profile_price_td);
          $(pkg_profile_lab_details_tr).append(pkg_profile_discount_td);
          $(pkg_profile_lab_details_tr).append(pkg_profile_book_td);
          $(pkg_profile_table_body).append(pkg_profile_lab_details_tr);
          $(pkg_profile_labs_table).append(pkg_profile_table_body); 
       }       	      
       $(pkg_profile_labs_tr).on('click',function () 
       {
          $("#tst_profile_tab").tablesorter( {sortList: [[0,0], [1,0],[2,0],[3,0],[4,0]]} ); 
       });//row on click
      $(pkg_profile_testname_row).append(pkg_profile_offering_labs);
      $(pkg_profile_testname_row).append(pkg_profile_labs_table);
	   $(pkg_profile_cust_wrapper).append(pkg_profile_testname_row);
	   $(pkg_profile_details_col).append(pkg_profile_cust_wrapper);
	   $(pkg_profile_heading_row).append(pkg_profile_details_col);
	   var pkg_profile_img_col = document.createElement('div');
	   $(pkg_profile_img_col).addClass("col-md-3 col-sm-3");
	   $(pkg_profile_img_col).attr('id','pkg_cloud_tests');
	   var pkg_profile_tst_ul = document.createElement('ul');
	   $(pkg_profile_tst_ul).css('listStyleType','none');
	   $(pkg_profile_tst_ul).css('textAlign','left');
	   $(pkg_profile_tst_ul).css('fontWeight','bold');
	   if (data.popular_packages.length != 0) 
	   {
	     var pkg_profile_popular_head = document.createElement('div');
	     $(pkg_profile_popular_head).html("Popular Packages");
	     $(pkg_profile_popular_head).css('fontSize','16px');
	     $(pkg_profile_popular_head).css('color','rgb(65, 167, 179)');
	     $(pkg_profile_popular_head).css('fontWeight','bold');
	     $(pkg_profile_popular_head).css('marginBottom','13px');
	     $(pkg_profile_popular_head).css('textAlign','center');
	     $(pkg_profile_popular_head).css('marginTop','25px');
	     $(pkg_profile_img_col).append(pkg_profile_popular_head);
	     for (var i=0;i<data.popular_packages.length;i++) 
	     {
	     	 var pkg_profile_tst_li = document.createElement('li');
	     	 $(pkg_profile_tst_li).addClass("pkg_tst_li");
	   	 var pkg_profile_pop_test = document.createElement('a');
	   	 $(pkg_profile_pop_test).attr('href',data.popular_packages[i].packageProfilePageURL);
	   	 $(pkg_profile_pop_test).addClass("pkg_pop_test");
	   	 $(pkg_profile_pop_test).html(data.popular_packages[i].packageName);
	   	 $(pkg_profile_tst_li).append(pkg_profile_pop_test);
	   	 $(pkg_profile_tst_ul).append(pkg_profile_tst_li);
	    }//for loop pop tsts
	    $(pkg_profile_img_col).append(pkg_profile_tst_ul);
	   $(pkg_profile_heading_row).append(pkg_profile_img_col);	
	   $(pkg_cust_profile_container).append(pkg_profile_heading_row);
	   }//if for rltd tsts
	   $(pkg_cust_profile_container).append(pkg_profile_heading_row);
   }//success fncn
  });//ajax
}
window.onload =pkg_profile_details_handler();
function pkg_details_handler()
{
	var pkg_pfl_labname = $(this).data('pkg-profile-labname');
	var pkg_pfl_labslug = $(this).data('pkg-profile-labslug');
	var pkg_pfl_discount = $(this).data('pkg-profile-discount');
	var pkg_pfl_mrp = $(this).data('pkg-profile-mrp');
	var pkg_pfl_dp =$(this).data('pkg-profile-dp');
	var pkg_pfl_labarea =$(this).data('pkg-profile-labarea');
	var pkg_pfl_labaddress = $(this).data('pkg-profile-labaddress');
	var pkg_pfl_labaddress_pin = $(this).data('pkg-profile-labpin');
	var pkg_pfl_online_rpt = $(this).data('pkg-profile-onlinereport');
	var pkg_pfl_vst_type = $(this).data('pkg-profile-labvisit');
	pkg_pfl_package_contents(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type);
   
}
function pkg_pfl_package_contents(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type)
{
    $.ajax({
         url:pkg_profile_host+"/d-packages/lab-package-info",
         type:'POST',
         dataType: 'json',
         data:{packageSlug:pkg_profile_pkg_slug,labSlug:pkg_pfl_labslug},
         success:function(data)
         {
           
            package_pfl_pkg_det = data.packageDetails;
            var package_pfl_test_modal = document.createElement('div');
            $(package_pfl_test_modal).addClass("modal");
            $(package_pfl_test_modal).attr('id', 'modal_packages_firstpage');
            $(package_pfl_test_modal).css('position','relative');
            $(package_pfl_test_modal).css('backgroundColor','#fff');
            $(package_pfl_test_modal).css('paddingRight','0px');
            var package_pfl_test_close = document.createElement('a');
            $(package_pfl_test_close).addClass("close");
            $(package_pfl_test_close).attr('href','#');
            $(package_pfl_test_close).html("&times;");
            $(package_pfl_test_close).css('marginTop' ,'-19px');
            $(package_pfl_test_close).css('fontSize','26px');
            $(package_pfl_test_close).css('marginRight','7px');
            var package_pfl_test_name = document.createElement('h4');
            $(package_pfl_test_name).html(pkg_profile_pkg_name);
            $(package_pfl_test_name).css('textAlign','center');
            $(package_pfl_test_name).css('fontSize','18px');
            $(package_pfl_test_name).css('fontWeight','bold');
            $(package_pfl_test_name).css('color','#5cb0cf');
            var package_pfl_test_details = document.createElement('div');
            $(package_pfl_test_details).addClass("row");
            $(package_pfl_test_details).css('marginBottom','16px');
            $(package_pfl_test_details).css('paddingRight','20px');
            var package_pfl_cnt_tst_price = document.createElement('div');
            $(package_pfl_cnt_tst_price).html("Lab & Price Information");
            $(package_pfl_cnt_tst_price).css('background','rgb(65, 167, 179)');
            $(package_pfl_cnt_tst_price).css('color','white');
            $(package_pfl_cnt_tst_price).css('fontWeight','bold');
            $(package_pfl_cnt_tst_price).css('paddingLeft','6px');
            $(package_pfl_cnt_tst_price).css('marginTop','10px');
            $(package_pfl_cnt_tst_price).css('marginBottom','2px');
            $(package_pfl_test_details).append(package_pfl_cnt_tst_price);
            var package_pfl_cnt_lab_info = document.createElement('div');
            $(package_pfl_cnt_lab_info).css('float','left');
            var package_pfl_cnt_lab_name = document.createElement('div');
            $(package_pfl_cnt_lab_name).html(pkg_pfl_labname);
            $(package_pfl_cnt_lab_name).css('fontWeight','bold');
            var package_pfl_cnt_lab_address_img = document.createElement('div');
            $(package_pfl_cnt_lab_address_img).css('width','264px');
            var package_pfl_cnt_lab_img = document.createElement('img');
            $(package_pfl_cnt_lab_img).attr('src','images/location-bi.png');
            $(package_pfl_cnt_lab_img).css('height','17px');
            $(package_pfl_cnt_lab_img).css('width','12px');
            $(package_pfl_cnt_lab_img).css('float','left');
            $(package_pfl_cnt_lab_address_img).append(package_pfl_cnt_lab_img);
            var package_pfl_cnt_lab_addr = document.createElement('div');
            $(package_pfl_cnt_lab_addr).html("&nbsp;"+pkg_pfl_labaddress+","+pkg_pfl_labarea+","+pkg_pfl_labaddress_pin);
            $(package_pfl_cnt_lab_addr).css('float','right');
            $(package_pfl_cnt_lab_addr).css('width','246px');
            $(package_pfl_cnt_lab_address_img).append(package_pfl_cnt_lab_addr);
            $(package_pfl_cnt_lab_info).append(package_pfl_cnt_lab_name);
            $(package_pfl_cnt_lab_info).append(package_pfl_cnt_lab_address_img);
            $(package_pfl_test_details).append(package_pfl_cnt_lab_info);
            var pkg_pfl_cnt_price_details = document.createElement('div');
            $(pkg_pfl_cnt_price_details).css('float','right');
            $(pkg_pfl_cnt_price_details).css('paddingTop','6px');
            $(pkg_pfl_cnt_price_details).css('paddingRight','12px');
            $(pkg_pfl_cnt_price_details).css('marginBottom','11px');
            var pkg_pfl_cnt_price_details_price = document.createElement('div');
            $(pkg_pfl_cnt_price_details_price).html("Rs."+pkg_pfl_dp);
            $(pkg_pfl_cnt_price_details_price).css('textAlign','center');
            $(pkg_pfl_cnt_price_details_price).css('fontSize','22px');
            $(pkg_pfl_cnt_price_details_price).css('color','rgb(236,73,73)');
            var pkg_pfl_cnt_price_details_mrp = document.createElement('div');
            $(pkg_pfl_cnt_price_details_mrp).css('fontSize','18px');
            var pkg_pfl_cnt_mrp_bracket_div = document.createElement('div');
            $(pkg_pfl_cnt_mrp_bracket_div).css('float','left');
            var pkg_pfl_cnt_mrp_openbracket = document.createElement('div');
            $(pkg_pfl_cnt_mrp_openbracket).html("("+"&nbsp");
            $(pkg_pfl_cnt_mrp_openbracket).css('float','left');
            var pkg_pfl_cnt_mrp_price = document.createElement('div');
            $(pkg_pfl_cnt_mrp_price).html("Rs."+"&nbsp"+pkg_pfl_mrp);
            $(pkg_pfl_cnt_mrp_price).css('textDecoration','line-through');
            $(pkg_pfl_cnt_mrp_price).css('float','left');
            var pkg_pfl_cnt_mrp_closebracket = document.createElement('div');
            $(pkg_pfl_cnt_mrp_closebracket).html("&nbsp"+")");
            $(pkg_pfl_cnt_mrp_closebracket).css('float','right');
            $(pkg_pfl_cnt_mrp_bracket_div).append(pkg_pfl_cnt_mrp_openbracket);
            $(pkg_pfl_cnt_mrp_bracket_div).append(pkg_pfl_cnt_mrp_price);
            $(pkg_pfl_cnt_mrp_bracket_div).append(pkg_pfl_cnt_mrp_closebracket);
            $(pkg_pfl_cnt_price_details_mrp).append(pkg_pfl_cnt_mrp_bracket_div);
            var pkg_pfl_cnt_discount_det = document.createElement('div');
             $(pkg_pfl_cnt_discount_det).html("&nbsp"+pkg_pfl_discount+"%");
             $(pkg_pfl_cnt_discount_det).css('float','right');
             $(pkg_pfl_cnt_price_details_mrp).append(pkg_pfl_cnt_discount_det);
             $(pkg_pfl_cnt_price_details).append(pkg_pfl_cnt_price_details_price);
             $(pkg_pfl_cnt_price_details).append(pkg_pfl_cnt_price_details_mrp);
             $(package_pfl_test_details).append(pkg_pfl_cnt_price_details);
             if (pkg_pfl_online_rpt == "yes") 
            {
                 	  var package_pfl_onlinereports_one_element = document.createElement('div');
                    $(package_pfl_onlinereports_one_element).attr('id','pkg_reports_msg');
                    $(package_pfl_onlinereports_one_element).css('color','rgb(236,73,73)');
                    $(package_pfl_onlinereports_one_element).css('textAlign','left');
                    $(package_pfl_onlinereports_one_element).css('width','262px');
                    $(package_pfl_onlinereports_one_element).css('fontSize','10px');
                    $(package_pfl_onlinereports_one_element).css('display','block');
                    var package_pfl_star_onlinereports_one = document.createElement('span');
                    $(package_pfl_star_onlinereports_one).addClass('star');
                    $(package_pfl_star_onlinereports_one).html("&#x2605");
                    $(package_pfl_star_onlinereports_one).css('float','left');
                    var package_pfl_error_onlinereports_one_element = document.createElement('div');
                    $(package_pfl_error_onlinereports_one_element).html('Online reports are available');
                 	  $(package_pfl_onlinereports_one_element).append(package_pfl_star_onlinereports_one);
                 	  $(package_pfl_onlinereports_one_element).append(package_pfl_error_onlinereports_one_element);
                    $(package_pfl_test_details).append(package_pfl_onlinereports_one_element);
                 }
                 $(package_pfl_test_modal).append(package_pfl_test_close);
                 $(package_pfl_test_modal).append(package_pfl_test_name);
                 $(package_pfl_test_modal).append(package_pfl_test_details);
                 var package_pfl_cnt_head = document.createElement('div');
                 $(package_pfl_cnt_head).addClass("pkg_pfl_cnt_head");
                  $(package_pfl_cnt_head).css('marginRight','20px');
                 var package_pfl_cnt_head_element = document.createElement('div');
                 $(package_pfl_cnt_head_element).html("Package Contents");
                 $(package_pfl_cnt_head_element).css('background','rgb(65, 167, 179)');
                 $(package_pfl_cnt_head_element).css('color','white');
                 $(package_pfl_cnt_head_element).css('fontWeight','bold');
                 $(package_pfl_cnt_head_element).css('paddingLeft','6px');
                 $(package_pfl_cnt_head).append(package_pfl_cnt_head_element);
                 $(package_pfl_test_modal).append(package_pfl_cnt_head);
                  pkg_pfl_cont_handler(package_pfl_pkg_det,package_pfl_cnt_head);
                 var package_pfl_cnt_btn_row = document.createElement('div');
                 $(package_pfl_cnt_btn_row).addClass("row"); 
                 var package_pfl_cnt_back_btn = document.createElement('button');
                 $(package_pfl_cnt_back_btn).html("Back");
                 $(package_pfl_cnt_back_btn).css('float','left');
                 $(package_pfl_cnt_back_btn).css('background', '#ea494f');
                 $(package_pfl_cnt_back_btn).css('marginTop','16px');
                 $(package_pfl_cnt_back_btn).css('color','white');
                 $(package_pfl_cnt_back_btn).css('width','60px');
                 $(package_pfl_cnt_back_btn).css('borderRadius','6px');
                 $(package_pfl_cnt_back_btn).css('border','0px');
                 $(package_pfl_cnt_back_btn).css('fontWeight','bold');
                  var package_pfl_cnt_next_btn = document.createElement('button');
                 $(package_pfl_cnt_next_btn).html("Order Now");
                 $(package_pfl_cnt_next_btn).css('marginTop','16px');
                 $(package_pfl_cnt_next_btn).css('marginRight','20px');
                 $(package_pfl_cnt_next_btn).css('float','right');
                 $(package_pfl_cnt_next_btn).css('background', '#ea494f');
                 $(package_pfl_cnt_next_btn).css('color','white');
                 $(package_pfl_cnt_next_btn).css('width','90px');
                 $(package_pfl_cnt_next_btn).css('borderRadius','6px');
                 $(package_pfl_cnt_next_btn).css('fontWeight','bold');
                 $(package_pfl_cnt_next_btn).css('border','0px');
                 $(package_pfl_cnt_btn_row).append(package_pfl_cnt_back_btn);
                 $(package_pfl_cnt_btn_row).append(package_pfl_cnt_next_btn);
                 $(package_pfl_test_modal).append(package_pfl_cnt_btn_row);
                 $(package_pfl_test_close).on('click',function () 
                 {
                 	  $(package_pfl_test_modal).modal().close(); 
                 });//click
                 $(package_pfl_cnt_next_btn).on('click',function () 
                 {
                 	 pkg_form_handler(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type);
                 	})//order btn clk
               $(package_pfl_test_modal).modal().open();
            }//sucss fnctn
      });
}//fnctn endng

function pkg_pfl_cont_handler(package_pfl_pkg_det,package_pfl_cnt_head)
{
   var pkg_pfl_totalcount =0;
   var pkg_pfl_cont_index = 0;
   var pkg_pfl_cont_array = [];
   var pkg_pfl_cont_type;
   for(var i=0;i<package_pfl_pkg_det.GroupsInfo.length;i++)
   {
      var pkg_pfl_new_str  =  package_pfl_pkg_det.GroupsInfo[i].testsInGroup;
      var pkg_pfl_temp_str = pkg_pfl_new_str.split(",");
      pkg_pfl_totalcount = pkg_pfl_totalcount+pkg_pfl_temp_str.length+1;
   }//for groupsinfo
   if(package_pfl_pkg_det.TestsInfo.length !=0)
   {
   	if (package_pfl_pkg_det.GroupsInfo.length != 0) 
      {
      pkg_pfl_totalcount = package_pfl_pkg_det.TestsInfo.length+1+pkg_pfl_totalcount; 
      }
      else 
      {          
        pkg_pfl_totalcount = package_pfl_pkg_det.TestsInfo.length+pkg_pfl_totalcount;  
      }    
   }//if testslength
   if(package_pfl_pkg_det.Consultations.length !=0)
   {
      pkg_pfl_totalcount = package_pfl_pkg_det.Consultations.length+1+ pkg_pfl_totalcount;                 
   }//if consultationslength */
   var pkg_pfl_cont_middle_count = Math.ceil(pkg_pfl_totalcount/2);
   if (package_pfl_pkg_det.GroupsInfo.length != 0) 
   {
     for (var grp =0;grp<package_pfl_pkg_det.GroupsInfo.length;grp++) 
     {
   	 pkg_pfl_name = package_pfl_pkg_det.GroupsInfo[grp].groupName;
   	 var pkg_pfl_var = pkg_pfl_cont_append_handler("title",pkg_pfl_name,pkg_pfl_cont_array,pkg_pfl_cont_index,pkg_pfl_cont_middle_count);
   	 pkg_pfl_cont_index = pkg_pfl_var[0];
   	 pkg_pfl_cont_array = pkg_pfl_var[1];
   	 var pkg_pfl_grp_tst_str  =  package_pfl_pkg_det.GroupsInfo[grp].testsInGroup;
       var pkg_pfl_grp_tst_splt = pkg_pfl_grp_tst_str.split(",");
       for (var grp_tst =0;grp_tst<pkg_pfl_grp_tst_splt.length;grp_tst++) 
       {
       	  pkg_pfl_name = pkg_pfl_grp_tst_splt[grp_tst]; 
       	   var pkg_pfl_var = pkg_pfl_cont_append_handler("value",pkg_pfl_name,pkg_pfl_cont_array,pkg_pfl_cont_index,pkg_pfl_cont_middle_count);
       	   pkg_pfl_cont_index = pkg_pfl_var[0];
   	      pkg_pfl_cont_array = pkg_pfl_var[1];
       }//for grps info tst lnth
     }//for grps info lnth
   }//if grpinfo lnth  
   if (package_pfl_pkg_det.TestsInfo.length !=0) 
   { 
        if (package_pfl_pkg_det.GroupsInfo.length != 0) 
        {
        pkg_pfl_name = "Individual Tests";
        var pkg_pfl_var  = pkg_pfl_cont_append_handler("title",pkg_pfl_name,pkg_pfl_cont_array,pkg_pfl_cont_index,pkg_pfl_cont_middle_count);
        pkg_pfl_cont_index = pkg_pfl_var[0];
   	  pkg_pfl_cont_array = pkg_pfl_var[1];
   	  }
       for (var pkg_tst =0;pkg_tst<package_pfl_pkg_det.TestsInfo.length;pkg_tst++) 
       {
       	 pkg_pfl_name = package_pfl_pkg_det.TestsInfo[pkg_tst];
       	 var pkg_pfl_var  = pkg_pfl_cont_append_handler("value",pkg_pfl_name,pkg_pfl_cont_array,pkg_pfl_cont_index,pkg_pfl_cont_middle_count);
       	 pkg_pfl_cont_index = pkg_pfl_var[0];
   	    pkg_pfl_cont_array = pkg_pfl_var[1];
       }//for tst info lnth
   }//if tst info lnth    
   if(package_pfl_pkg_det.Consultations.length !=0)
   {  
        pkg_pfl_name = "Consultations";
        var pkg_pfl_var = pkg_pfl_cont_append_handler("title",pkg_pfl_name,pkg_pfl_cont_array,pkg_pfl_cont_index,pkg_pfl_cont_middle_count);
        pkg_pfl_cont_index = pkg_pfl_var[0];
   	  pkg_pfl_cont_array = pkg_pfl_var[1];
        for (var pkg_conslt =0;pkg_conslt<package_pfl_pkg_det.Consultations.length;pkg_conslt++) 
        {
        	   pkg_pfl_name = package_pfl_pkg_det.Consultations[pkg_conslt];
        	   var pkg_pfl_var = pkg_pfl_cont_append_handler("value",pkg_pfl_name,pkg_pfl_cont_array,pkg_pfl_cont_index,pkg_pfl_cont_middle_count);
        	   pkg_pfl_cont_index = pkg_pfl_var[0];
   	      pkg_pfl_cont_array = pkg_pfl_var[1];
        }//for pkg consl lnth
    }//if pkg cnslt lnth  
    for(var i=0;i<pkg_pfl_cont_array.length;i++)
    {
      var pkg_pfl_cnt_row = document.createElement('div');
      $(pkg_pfl_cnt_row).addClass("row pkg_pfl_cnt_data");
      $(pkg_pfl_cnt_row).css('border','1px solid #ddd');
      $(pkg_pfl_cnt_row).append(pkg_pfl_cont_array[i][0]);
      if (pkg_pfl_cont_array[i][1] != undefined) 
      {
        $(pkg_pfl_cnt_row).append(pkg_pfl_cont_array[i][1]);
      }//if arry undefnd
      $(package_pfl_cnt_head).append(pkg_pfl_cnt_row);
    }//for loop array lnth
   
}//fnctn pkg_cont_hndlr endng
 
 function pkg_pfl_cont_append_handler(name_type,pkg_pfl_name,pkg_pfl_cont_array,pkg_pfl_cont_index,pkg_pfl_cont_middle_count)
 {
 	  var pkg_pfl_cnt_element = document.createElement('div');
 	  $(pkg_pfl_cnt_element).addClass("pkg_pfl_cont");
 	  $(pkg_pfl_cnt_element).html(pkg_pfl_name);
 	  if (name_type == "title") 
 	  {
 	  	  $(pkg_pfl_cnt_element).css('fontWeight','bold');
 	  	  $(pkg_pfl_cnt_element).css('paddingLeft','3px');
 	  }//if title
 	  else 
 	  {
 	  	 $(pkg_pfl_cnt_element).css('paddingLeft','8px');
 	  }//else title
 	  if(pkg_pfl_cont_index<pkg_pfl_cont_middle_count)
 	  {
 	  	  $(pkg_pfl_cnt_element).css('borderRight','1px solid #ddd');
 	  	  $(pkg_pfl_cnt_element).css('float','left');
 	  	  $(pkg_pfl_cnt_element).css('width','50%');
 	  	  var pkg_pfl_cnt_data_array =[];
 	  	  pkg_pfl_cnt_data_array.push(pkg_pfl_cnt_element);
 	  	  pkg_pfl_cont_array.push(pkg_pfl_cnt_data_array);
 	   }//if
 	   else 
 	   {
 	   	 $(pkg_pfl_cnt_element).css('borderLeft','1px solid #ddd');
 	   	  $(pkg_pfl_cnt_element).css('float','right');
 	  	  $(pkg_pfl_cnt_element).css('width','50%');
 	   	var pkg_temp_index = pkg_pfl_cont_index - pkg_pfl_cont_middle_count;
 	   	pkg_pfl_cont_array[pkg_temp_index].push(pkg_pfl_cnt_element);
 	   }
 	  pkg_pfl_cont_index++;
 	  return [pkg_pfl_cont_index, pkg_pfl_cont_array];
}//fnctn pkg_pfl_cont_appnd endng
function pkg_pfl_package_contents_back_btn(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type)
{
	
	var package_pfl_back_test_modal = document.createElement('div');
            $(package_pfl_back_test_modal).addClass("modal");
            $(package_pfl_back_test_modal).attr('id', 'modal_packages_firstpage');
            $(package_pfl_back_test_modal).css('position','relative');
            $(package_pfl_back_test_modal).css('backgroundColor','#fff');
            $(package_pfl_back_test_modal).css('paddingRight','0px');
            var package_pfl_back_test_close = document.createElement('a');
            $(package_pfl_back_test_close).addClass("close");
            $(package_pfl_back_test_close).attr('href','#');
            $(package_pfl_back_test_close).html("&times;");
            $(package_pfl_back_test_close).css('marginTop' ,'-19px');
            $(package_pfl_back_test_close).css('fontSize','26px');
            $(package_pfl_back_test_close).css('marginRight','7px');
            var package_pfl_back_test_name = document.createElement('h4');
            $(package_pfl_back_test_name).html(pkg_profile_pkg_name);
            $(package_pfl_back_test_name).css('textAlign','center');
            $(package_pfl_back_test_name).css('fontSize','18px');
            $(package_pfl_back_test_name).css('fontWeight','bold');
            $(package_pfl_back_test_name).css('color','#5cb0cf');
            var package_pfl_back_test_details = document.createElement('div');
            $(package_pfl_back_test_details).addClass("row");
            $(package_pfl_back_test_details).css('marginBottom','16px');
            $(package_pfl_back_test_details).css('paddingRight','20px');
            var package_pfl_back_cnt_tst_price = document.createElement('div');
            $(package_pfl_back_cnt_tst_price).html("Lab & Price Information");
            $(package_pfl_back_cnt_tst_price).css('background','rgb(65, 167, 179)');
            $(package_pfl_back_cnt_tst_price).css('color','white');
            $(package_pfl_back_cnt_tst_price).css('fontWeight','bold');
            $(package_pfl_back_cnt_tst_price).css('paddingLeft','6px');
            $(package_pfl_back_cnt_tst_price).css('marginTop','10px');
            $(package_pfl_back_cnt_tst_price).css('marginBottom','2px');
            $(package_pfl_back_test_details).append(package_pfl_back_cnt_tst_price);
            var package_pfl_back_cnt_lab_info = document.createElement('div');
            $(package_pfl_back_cnt_lab_info).css('float','left');
            var package_pfl_back_cnt_lab_name = document.createElement('div');
            $(package_pfl_back_cnt_lab_name).html(pkg_pfl_labname);
            $(package_pfl_back_cnt_lab_name).css('fontWeight','bold');
            var package_pfl_back_cnt_lab_address_img = document.createElement('div');
            $(package_pfl_back_cnt_lab_address_img).css('width','264px');
            var package_pfl_back_cnt_lab_img = document.createElement('img');
            $(package_pfl_back_cnt_lab_img).attr('src','images/location-bi.png');
            $(package_pfl_back_cnt_lab_img).css('height','17px');
            $(package_pfl_back_cnt_lab_img).css('width','12px');
            $(package_pfl_back_cnt_lab_img).css('float','left');
            $(package_pfl_back_cnt_lab_address_img).append(package_pfl_back_cnt_lab_img);
            var package_pfl_back_cnt_lab_addr = document.createElement('div');
            $(package_pfl_back_cnt_lab_addr).html("&nbsp;"+pkg_pfl_labaddress+","+pkg_pfl_labarea+","+pkg_pfl_labaddress_pin);
            $(package_pfl_back_cnt_lab_addr).css('float','right');
            $(package_pfl_back_cnt_lab_addr).css('width','246px');
            $(package_pfl_back_cnt_lab_address_img).append(package_pfl_back_cnt_lab_addr);
            $(package_pfl_back_cnt_lab_info).append(package_pfl_back_cnt_lab_name);
            $(package_pfl_back_cnt_lab_info).append(package_pfl_back_cnt_lab_address_img);
            $(package_pfl_back_test_details).append(package_pfl_back_cnt_lab_info);
            var pkg_pfl_back_cnt_price_details = document.createElement('div');
            $(pkg_pfl_back_cnt_price_details).css('float','right');
            $(pkg_pfl_back_cnt_price_details).css('paddingTop','6px');
            $(pkg_pfl_back_cnt_price_details).css('paddingRight','12px');
            $(pkg_pfl_back_cnt_price_details).css('marginBottom','11px');
            var pkg_pfl_back_cnt_price_details_price = document.createElement('div');
            $(pkg_pfl_back_cnt_price_details_price).html("Rs."+pkg_pfl_dp);
            $(pkg_pfl_back_cnt_price_details_price).css('textAlign','center');
            $(pkg_pfl_back_cnt_price_details_price).css('fontSize','22px');
            $(pkg_pfl_back_cnt_price_details_price).css('color','rgb(236,73,73)');
            var pkg_pfl_back_cnt_price_details_mrp = document.createElement('div');
            $(pkg_pfl_back_cnt_price_details_mrp).css('fontSize','18px');
            var pkg_pfl_back_cnt_mrp_bracket_div = document.createElement('div');
            $(pkg_pfl_back_cnt_mrp_bracket_div).css('float','left');
            var pkg_pfl_back_cnt_mrp_openbracket = document.createElement('div');
            $(pkg_pfl_back_cnt_mrp_openbracket).html("("+"&nbsp");
            $(pkg_pfl_back_cnt_mrp_openbracket).css('float','left');
            var pkg_pfl_back_cnt_mrp_price = document.createElement('div');
            $(pkg_pfl_back_cnt_mrp_price).html("Rs."+"&nbsp"+pkg_pfl_mrp);
            $(pkg_pfl_back_cnt_mrp_price).css('textDecoration','line-through');
            $(pkg_pfl_back_cnt_mrp_price).css('float','left');
            var pkg_pfl_back_cnt_mrp_closebracket = document.createElement('div');
            $(pkg_pfl_back_cnt_mrp_closebracket).html("&nbsp"+")");
            $(pkg_pfl_back_cnt_mrp_closebracket).css('float','right');
            $(pkg_pfl_back_cnt_mrp_bracket_div).append(pkg_pfl_back_cnt_mrp_openbracket);
            $(pkg_pfl_back_cnt_mrp_bracket_div).append(pkg_pfl_back_cnt_mrp_price);
            $(pkg_pfl_back_cnt_mrp_bracket_div).append(pkg_pfl_back_cnt_mrp_closebracket);
            $(pkg_pfl_back_cnt_price_details_mrp).append(pkg_pfl_back_cnt_mrp_bracket_div);
            var pkg_pfl_back_cnt_discount_det = document.createElement('div');
             $(pkg_pfl_back_cnt_discount_det).html("&nbsp"+pkg_pfl_discount+"%");
             $(pkg_pfl_back_cnt_discount_det).css('float','right');
             $(pkg_pfl_back_cnt_price_details_mrp).append(pkg_pfl_back_cnt_discount_det);
             $(pkg_pfl_back_cnt_price_details).append(pkg_pfl_back_cnt_price_details_price);
             $(pkg_pfl_back_cnt_price_details).append(pkg_pfl_back_cnt_price_details_mrp);
             $(package_pfl_back_test_details).append(pkg_pfl_back_cnt_price_details);
             if (pkg_pfl_online_rpt == "yes") 
                 {
                 	  var package_pfl_back_onlinereports_one_element = document.createElement('div');
                    $(package_pfl_back_onlinereports_one_element).attr('id','pkg_reports_msg');
                    $(package_pfl_back_onlinereports_one_element).css('color','rgb(236,73,73)');
                    $(package_pfl_back_onlinereports_one_element).css('textAlign','left');
                    $(package_pfl_back_onlinereports_one_element).css('width','262px');
                    $(package_pfl_back_onlinereports_one_element).css('fontSize','10px');
                    $(package_pfl_back_onlinereports_one_element).css('display','block');
                    var package_pfl_back_star_onlinereports_one = document.createElement('span');
                    $(package_pfl_back_star_onlinereports_one).addClass('star');
                    $(package_pfl_back_star_onlinereports_one).html("&#x2605");
                    $(package_pfl_back_star_onlinereports_one).css('float','left');
                    var package_pfl_back_error_onlinereports_one_element = document.createElement('div');
                    $(package_pfl_back_error_onlinereports_one_element).html('Online reports are available');
                 	  $(package_pfl_back_onlinereports_one_element).append(package_pfl_back_star_onlinereports_one);
                 	  $(package_pfl_back_onlinereports_one_element).append(package_pfl_back_error_onlinereports_one_element);
                    $(package_pfl_back_test_details).append(package_pfl_back_onlinereports_one_element);
                 }
                 $(package_pfl_back_test_modal).append(package_pfl_back_test_close);
                 $(package_pfl_back_test_modal).append(package_pfl_back_test_name);
                 $(package_pfl_back_test_modal).append(package_pfl_back_test_details);
                 var package_pfl_cnt_head = document.createElement('div');
                 $(package_pfl_cnt_head).addClass("pkg_pfl_cnt_head");
                 $(package_pfl_cnt_head).css('marginRight','20px');
                 var package_pfl_cnt_head_element = document.createElement('div');
                 $(package_pfl_cnt_head_element).html("Package Contents");
                 $(package_pfl_cnt_head_element).css('background','rgb(65, 167, 179)');
                 $(package_pfl_cnt_head_element).css('color','white');
                 $(package_pfl_cnt_head_element).css('fontWeight','bold');
                 $(package_pfl_cnt_head_element).css('paddingLeft','6px');
                 $(package_pfl_cnt_head).append(package_pfl_cnt_head_element);
                 $(package_pfl_back_test_modal).append(package_pfl_cnt_head);
                  pkg_pfl_cont_handler(package_pfl_pkg_det,package_pfl_cnt_head);
                 var package_pfl_back_cnt_btn_row = document.createElement('div');
                 $(package_pfl_back_cnt_btn_row).addClass("row"); 
                 var package_pfl_back_cnt_back_btn = document.createElement('button');
                 $(package_pfl_back_cnt_back_btn).html("Back");
                 $(package_pfl_back_cnt_back_btn).css('float','left');
                 $(package_pfl_back_cnt_back_btn).css('background', '#ea494f');
                 $(package_pfl_back_cnt_back_btn).css('marginTop','16px');
                 $(package_pfl_back_cnt_back_btn).css('color','white');
                 $(package_pfl_back_cnt_back_btn).css('width','60px');
                 $(package_pfl_back_cnt_back_btn).css('borderRadius','6px');
                 $(package_pfl_back_cnt_back_btn).css('border','0px');
                 $(package_pfl_back_cnt_back_btn).css('fontWeight','bold');
                 var package_pfl_back_cnt_next_btn = document.createElement('button');
                 $(package_pfl_back_cnt_next_btn).html("Order Now");
                 $(package_pfl_back_cnt_next_btn).css('marginTop','16px');
                 $(package_pfl_back_cnt_next_btn).css('marginRight','20px');
                 $(package_pfl_back_cnt_next_btn).css('float','right');
                 $(package_pfl_back_cnt_next_btn).css('background', '#ea494f');
                 $(package_pfl_back_cnt_next_btn).css('color','white');
                 $(package_pfl_back_cnt_next_btn).css('width','90px');
                 $(package_pfl_back_cnt_next_btn).css('borderRadius','6px');
                 $(package_pfl_back_cnt_next_btn).css('fontWeight','bold');
                 $(package_pfl_back_cnt_next_btn).css('border','0px');
                 $(package_pfl_back_cnt_btn_row).append(package_pfl_back_cnt_back_btn);
                 $(package_pfl_back_cnt_btn_row).append(package_pfl_back_cnt_next_btn);
                 $(package_pfl_back_test_modal).append(package_pfl_back_cnt_btn_row);
                 $(package_pfl_back_test_close).on('click',function () 
                 {
                 	  $(package_pfl_back_test_modal).modal().close(); 
                 });//click
                 $(package_pfl_back_cnt_next_btn).on('click',function () 
                 {
                 	 pkg_form_handler(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type);
                 	})//order btn clk
               $(package_pfl_back_test_modal).modal().open();
            
}//fnctn endng 

function pkg_form_handler(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type)
{
   var pkg_pfl_booking_page = document.createElement('div');
   $(pkg_pfl_booking_page).addClass("modal");
   $(pkg_pfl_booking_page).attr('id','pkg_pfl_modal_formpage');
   $(pkg_pfl_booking_page).css('backgroundColor','#fff');
   $(pkg_pfl_booking_page).css('height','578px');
   $(pkg_pfl_booking_page).css('paddingRight','0px');
   $(pkg_pfl_booking_page).modal().open();
   var pkg_pfl_form_close_element = document.createElement('a');
   $(pkg_pfl_form_close_element).addClass("close");
   $(pkg_pfl_form_close_element).attr('href','#');
   $(pkg_pfl_form_close_element).html("&times;");
   $(pkg_pfl_form_close_element).css('marginTop' ,'-19px');
   $(pkg_pfl_form_close_element).css('fontSize','26px');
   $(pkg_pfl_form_close_element).css('marginRight','7px');
   $(pkg_pfl_form_close_element).attr('id','modal_close');
   var pkg_pfl_contact_heading = document.createElement('h4');
   $(pkg_pfl_contact_heading).html("Patient Information");
   $(pkg_pfl_contact_heading).css('textAlign','center');
   $(pkg_pfl_contact_heading).css('fontSize','18px');
   $(pkg_pfl_contact_heading).css('fontWeight','bold');
   $(pkg_pfl_contact_heading).css('color','#5cb0cf');
   var pkg_pfl_lab_details = document.createElement('div');
   $(pkg_pfl_lab_details).html(pkg_pfl_labname);
   $(pkg_pfl_lab_details).css('textAlign' ,'right');
   $(pkg_pfl_lab_details).css('paddingRight','17px');
   $(pkg_pfl_lab_details).css('fontWeight','bold');
   $(pkg_pfl_lab_details).css('marginTop','6px');  
   $(pkg_pfl_lab_details).css('marginRight','20px');
   $(pkg_pfl_lab_details).css('fontSize','12px');
   var pkg_pfl_package_name = document.createElement('div');
   $(pkg_pfl_package_name).html(pkg_profile_pkg_name);
   $(pkg_pfl_package_name).css('textAlign' ,'right');
   $(pkg_pfl_package_name).css('paddingRight','17px');
   $(pkg_pfl_package_name).css('fontWeight','bold');
   $(pkg_pfl_package_name).css('marginTop','6px');  
   $(pkg_pfl_package_name).css('marginRight','20px');
   $(pkg_pfl_package_name).css('fontSize','12px');
   var pkg_pfl_deal_name  = document.createElement('div');
   $(pkg_pfl_deal_name).css('textAlign' ,'right');
   $(pkg_pfl_deal_name).css('paddingRight','14px');
   $(pkg_pfl_deal_name).css('fontWeight','bold');
   $(pkg_pfl_deal_name).css('marginTop','6px');
   $(pkg_pfl_deal_name).css('marginRight','20px');
   $(pkg_pfl_deal_name).css('fontSize','12px');
   var pkg_pfl_parent_wizard = document.createElement('div');
   $(pkg_pfl_parent_wizard).attr('id','tmm-form-wizard');
   $(pkg_pfl_parent_wizard).addClass('container substrate');
   $(pkg_pfl_parent_wizard).css('width','100%');
   $(pkg_pfl_parent_wizard).css('paddingTop','1px');
   var pkg_pfl_form_element = document.createElement('form');
   $(pkg_pfl_form_element).attr('method','post');
   $(pkg_pfl_form_element).attr('id','patient_info'); 
   $(pkg_pfl_form_element).attr('name','patient_info');
   $(pkg_pfl_form_element).attr('action','#');
   $(pkg_pfl_form_element).attr('role','form');
   $(pkg_pfl_form_element).css('marginRight','20px');
   var pkg_pfl_wizard_element = document.createElement('div');
   $(pkg_pfl_wizard_element).addClass("form-wizard");
   $(pkg_pfl_wizard_element).css('padding-top','0px');
   var pkg_pfl_row_element = document.createElement('div');
   $(pkg_pfl_row_element).addClass("row");
   var pkg_pfl_col_element = document.createElement('div');
   $(pkg_pfl_col_element).addClass("col-md-12 no-pad");
   var pkg_pfl_form_class = document.createElement('form-wizard');
   $(pkg_pfl_form_class).addClass("form-wizard");
   $(pkg_pfl_form_class).css('border','0px');
   $(pkg_pfl_form_class).css('paddingTop','4px');
   var pkg_pfl_second_row = document.createElement('div');
   $(pkg_pfl_second_row).addClass("row");
   var pkg_pfl_col_class_element = document.createElement('div');
   $(pkg_pfl_col_class_element).addClass("col-md-12 col-sm-12");
   $(pkg_pfl_col_class_element).css('paddingTop','5px');
   var pkg_pfl_name_row = document.createElement('div');
   $(pkg_pfl_name_row).addClass("row");
   var pkg_pfl_name_col_class = document.createElement('div');
   $(pkg_pfl_name_col_class).addClass("col-md-12 col-sm-12");
   var pkg_pfl_fieldset_element = document.createElement('fieldset');
   $(pkg_pfl_fieldset_element).addClass("input-block");
   var pkg_pfl_label_ptntname = document.createElement('label');
   $(pkg_pfl_label_ptntname).attr('for','patient_name');
   $(pkg_pfl_label_ptntname).html("Full Name");
   var pkg_pfl_input_element = document.createElement('input');
   $(pkg_pfl_input_element).attr('type','text');
   $(pkg_pfl_input_element).attr('id', 'pkg_pfl_patient_name');
   $(pkg_pfl_input_element).attr('name','patient_name');
   $(pkg_pfl_input_element).attr('value','');
   $(pkg_pfl_input_element).addClass("form-icon form-icon-user");
   $(pkg_pfl_input_element).attr('placeholder','Please enter your name');
   $(pkg_pfl_input_element).attr('required','');
   var pkg_pfl_email_row = document.createElement('div');
   $(pkg_pfl_email_row).addClass("row");
   var pkg_pfl_email_col_class = document.createElement('div');
   $(pkg_pfl_email_col_class).addClass("col-md-12 col-sm-12");
   var pkg_pfl_fieldset_email = document.createElement('fieldset');
   $(pkg_pfl_fieldset_email).addClass("input-block");
   var pkg_pfl_label_email = document.createElement('label');
   $(pkg_pfl_label_email).attr('for','email');
   $(pkg_pfl_label_email).html("Email");
   var pkg_pfl_input_email = document.createElement('input');
   $(pkg_pfl_input_email).attr('type','text');
   $(pkg_pfl_input_email).attr('id','pkg_pfl_email');
   $(pkg_pfl_input_email).attr('name','patient_email');
   $(pkg_pfl_input_email).attr('value','');
   $(pkg_pfl_input_email).addClass('form-icon form-icon-mail');
   $(pkg_pfl_input_email).attr('placeholder','Please enter your email ID');
   $(pkg_pfl_input_email).attr('required','required');
   var pkg_pfl_address_row = document.createElement('div');
   $(pkg_pfl_address_row).addClass("row");
   var pkg_pfl_address_col_class = document.createElement('div');
   $(pkg_pfl_address_col_class).addClass("col-md-12 col-sm-12");
   var pkg_pfl_fieldset_address = document.createElement('fieldset');
   $(pkg_pfl_fieldset_address).addClass("input-block");
   var pkg_pfl_label_address = document.createElement('label');
   $(pkg_pfl_label_address).attr('for','Address');
   $(pkg_pfl_label_address).html("Address");
   var pkg_pfl_input_address = document.createElement('input');
   $(pkg_pfl_input_address).attr('type','text');
   $(pkg_pfl_input_address).attr('id','pkg_pfl_address');
   $(pkg_pfl_input_address).attr('name','patient_address');
   $(pkg_pfl_input_address).attr('value','');
   $(pkg_pfl_input_address).css('border','1px solid #c4cdcf');
   $(pkg_pfl_input_address).attr('placeholder','Please enter your Address');
   $(pkg_pfl_input_address).attr('required','required');
   $(pkg_pfl_input_address).css('paddingRight','11px');
   var pkg_pfl_phno_row = document.createElement('div');
   $(pkg_pfl_phno_row).addClass("row");
   var pkg_pfl_phno_col_class = document.createElement('div');
   $(pkg_pfl_phno_col_class).addClass("col-md-6 col-sm-12");
   var pkg_pfl_fieldset_phno = document.createElement('fieldset');
   $(pkg_pfl_fieldset_phno).addClass("input-block");
   var pkg_pfl_label_phno = document.createElement('label');
   $(pkg_pfl_label_phno).attr('for','phone1');
   $(pkg_pfl_label_phno).html('Mobile No:');
   var pkg_pfl_input_phno = document.createElement('input');
   $(pkg_pfl_input_phno).attr('type','text');
   $(pkg_pfl_input_phno).attr('id','pkg_pfl_phone');
   $(pkg_pfl_input_phno).attr('name','patient_mobile');
   $(pkg_pfl_input_phno).attr('value','');
   $(pkg_pfl_input_phno).addClass('form-icon form-icon-phone');
   $(pkg_pfl_input_phno).attr('placeholder','Number');
   $(pkg_pfl_input_phno).attr('required','required');
   var pkg_pfl_apptime_col_class = document.createElement('div');
   $(pkg_pfl_apptime_col_class).addClass('col-md-6 col-sm-12');
   var pkg_pfl_fieldset_booking = document.createElement('fieldset');
   $(pkg_pfl_fieldset_booking).addClass("input-block");
   var pkg_pfl_label_booking = document.createElement('label');
   $(pkg_pfl_label_booking).attr('for','app_time');
   $(pkg_pfl_label_booking).html('Appointment Timing:');
   var pkg_pfl_input_booking = document.createElement('input');
   $(pkg_pfl_input_booking).attr('type','text');
   $(pkg_pfl_input_booking).attr('id','pkg_pfl_app_time');
   $(pkg_pfl_input_booking).attr('name','appointment_time');
   $(pkg_pfl_input_booking).attr('value','');
   $(pkg_pfl_input_booking).attr('placeholder','Select Timeslot');
   $(pkg_pfl_input_booking).addClass("form_datetime");
   $(pkg_pfl_input_booking).attr('required','required');
   var pkg_pfl_information_row = document.createElement('row');
   $(pkg_pfl_information_row).addClass("row");
   var pkg_pfl_note_col_class = document.createElement('div');
   $(pkg_pfl_note_col_class).addClass("col-md-12 col-sm-12");
   var pkg_pfl_font_element = document.createElement('font');
   $(pkg_pfl_font_element).html("*Note: Patient Information is kept confidential and is used only for booking appointments and to improve the service.");
   $(pkg_pfl_font_element).css('fontSize','10px');
   var pkg_pfl_prevbtn_element = document.createElement('div');
   $(pkg_pfl_prevbtn_element).css('marginLeft','30px');
   $(pkg_pfl_prevbtn_element).addClass('prev');
   var pkg_pfl_backbtn = document.createElement('button');
   $(pkg_pfl_backbtn).attr('id','pkg_pfl_step2_back_btn');
   $(pkg_pfl_backbtn).addClass("button button-control");
   $(pkg_pfl_backbtn).attr('type','button');
   var pkg_pfl_span_backbtn = document.createElement('span');
   $(pkg_pfl_span_backbtn).html("Back");
   $(pkg_pfl_backbtn).append(pkg_pfl_span_backbtn);
   var pkg_pfl_backbtn_divider = document.createElement('div');
   $(pkg_pfl_backbtn_divider).addClass("button-divider");
   var pkg_pfl_nextbtn_element = document.createElement('div');
   $(pkg_pfl_nextbtn_element).css('marginLeft','50px');
   $(pkg_pfl_nextbtn_element).addClass('next');
   var pkg_pfl_nextbtn = document.createElement('button');
   $(pkg_pfl_nextbtn).attr('id','pkg_pfl_step2_next_btn');
   $(pkg_pfl_nextbtn).addClass("button button-control");
   $(pkg_pfl_nextbtn).attr('type','button');
   var pkg_pfl_span_nextbtn = document.createElement('span');
   $(pkg_pfl_span_nextbtn).html("Next");
   $(pkg_pfl_nextbtn).append(pkg_pfl_span_nextbtn);
   var pkg_pfl_nextbtn_divider = document.createElement('div');
   $(pkg_pfl_nextbtn_divider).addClass("button-divider");
   $(pkg_pfl_fieldset_element).append(pkg_pfl_label_ptntname);
   $(pkg_pfl_fieldset_element).append(pkg_pfl_input_element);
   $(pkg_pfl_fieldset_email).append(pkg_pfl_label_email);
   $(pkg_pfl_fieldset_email).append(pkg_pfl_input_email);
   $(pkg_pfl_fieldset_phno).append(pkg_pfl_label_phno);
   $(pkg_pfl_fieldset_phno).append(pkg_pfl_input_phno);
   $(pkg_pfl_fieldset_booking).append(pkg_pfl_label_booking);
   $(pkg_pfl_fieldset_booking).append(pkg_pfl_input_booking);
   $(pkg_pfl_fieldset_address).append(pkg_pfl_label_address);
   $(pkg_pfl_fieldset_address).append(pkg_pfl_input_address);
   $(pkg_pfl_name_col_class).append(pkg_pfl_fieldset_element);
   $(pkg_pfl_email_col_class).append(pkg_pfl_fieldset_email);
   $(pkg_pfl_phno_col_class).append(pkg_pfl_fieldset_phno);
   $(pkg_pfl_apptime_col_class).append(pkg_pfl_fieldset_booking);
   $(pkg_pfl_address_col_class).append(pkg_pfl_fieldset_address);
   $(pkg_pfl_note_col_class).append(pkg_pfl_font_element);
   $(pkg_pfl_name_row).append(pkg_pfl_name_col_class);
   $(pkg_pfl_email_row).append(pkg_pfl_email_col_class);
   $(pkg_pfl_phno_row).append(pkg_pfl_phno_col_class);
   $(pkg_pfl_phno_row).append(pkg_pfl_apptime_col_class);
   $(pkg_pfl_address_row).append(pkg_pfl_address_col_class);
   $(pkg_pfl_information_row).append(pkg_pfl_note_col_class);
   $(pkg_pfl_col_class_element).append(pkg_pfl_name_row);
   $(pkg_pfl_col_class_element).append(pkg_pfl_email_row);
   $(pkg_pfl_col_class_element).append(pkg_pfl_phno_row);
   $(pkg_pfl_col_class_element).append(pkg_pfl_address_row);
   $(pkg_pfl_col_class_element).append(pkg_pfl_information_row);
   $(pkg_pfl_second_row).append(pkg_pfl_col_class_element);
   $(pkg_pfl_form_class).append(pkg_pfl_second_row);
   $(pkg_pfl_col_element).append(pkg_pfl_form_class);
   $(pkg_pfl_row_element).append(pkg_pfl_col_element);
   $(pkg_pfl_prevbtn_element).append(pkg_pfl_backbtn);
   $(pkg_pfl_prevbtn_element).append(pkg_pfl_backbtn_divider);
   $(pkg_pfl_row_element).append(pkg_pfl_prevbtn_element);
   $(pkg_pfl_nextbtn_element).append(pkg_pfl_nextbtn);
   $(pkg_pfl_nextbtn_element).append(pkg_pfl_nextbtn_divider);
   $(pkg_pfl_row_element).append(pkg_pfl_nextbtn_element);
   $(pkg_pfl_wizard_element).append(pkg_pfl_row_element);
   $(pkg_pfl_form_element).append(pkg_pfl_wizard_element);
   $(pkg_pfl_parent_wizard).append(pkg_pfl_form_element);
   var pkg_pfl_error_display = document.createElement('div');
   $(pkg_pfl_error_display).addClass("pkg_display_error");
   $(pkg_pfl_error_display).css('height','30px');
   var pkg_pfl_name_element = document.createElement('div');
   $(pkg_pfl_name_element).addClass("err_msg");
   $(pkg_pfl_name_element).attr('id','pkg_pfl_err_name');
   $(pkg_pfl_name_element).css('color','rgb(236,73,73)');
   $(pkg_pfl_name_element).css('textAlign','left');
   $(pkg_pfl_name_element).css('marginLeft','16px');
   $(pkg_pfl_name_element).css('display','none');
   var pkg_pfl_star_element = document.createElement('span');
   $(pkg_pfl_star_element).addClass('star');
   $(pkg_pfl_star_element).html("&#x2605");
   $(pkg_pfl_star_element).css('float','left');
   var pkg_pfl_error_name_element = document.createElement('div');
   $(pkg_pfl_error_name_element).html('Enter Full Name');
   $(pkg_pfl_name_element).append(pkg_pfl_star_element);
   $(pkg_pfl_name_element).append(pkg_pfl_error_name_element);
   var pkg_pfl_email_element = document.createElement('div');
   $(pkg_pfl_email_element).addClass("err_msg");
   $(pkg_pfl_email_element).attr('id','pkg_pfl_err_email');
   $(pkg_pfl_email_element).css('color','rgb(236,73,73)');
   $(pkg_pfl_email_element).css('textAlign','left');
   $(pkg_pfl_email_element).css('marginLeft','16px');
   $(pkg_pfl_email_element).css('display','none');
   var pkg_pfl_star_email = document.createElement('span');
   $(pkg_pfl_star_email).addClass('star');
   $(pkg_pfl_star_email).html("&#x2605");
   $(pkg_pfl_star_email).css('float','left');
   var pkg_pfl_error_email_element = document.createElement('div');
   $(pkg_pfl_error_email_element).html('Enter valid e-mail id');
   $(pkg_pfl_email_element).append(pkg_pfl_star_email);
   $(pkg_pfl_email_element).append(pkg_pfl_error_email_element);
   var pkg_pfl_mbno_element = document.createElement('div');
   $(pkg_pfl_mbno_element).addClass("err_msg");
   $(pkg_pfl_mbno_element).attr('id','pkg_pfl_err_mbno');
   $(pkg_pfl_mbno_element).css('color','rgb(236,73,73)');
   $(pkg_pfl_mbno_element).css('textAlign','left');
   $(pkg_pfl_mbno_element).css('marginLeft','16px');
   $(pkg_pfl_mbno_element).css('display','none');
   var pkg_pfl_star_mbno = document.createElement('span');
   $(pkg_pfl_star_mbno).addClass('star');
   $(pkg_pfl_star_mbno).html("&#x2605");
   $(pkg_pfl_star_mbno).css('float','left');
   var pkg_pfl_error_mbno_element = document.createElement('div');
   $(pkg_pfl_error_mbno_element).html('Enter correct mobile number');
   $(pkg_pfl_mbno_element).append(pkg_pfl_star_mbno);
   $(pkg_pfl_mbno_element).append(pkg_pfl_error_mbno_element);
   var pkg_pfl_phno_element = document.createElement('div');
   $(pkg_pfl_phno_element).addClass("err_msg");
   $(pkg_pfl_phno_element).css('color','rgb(236,73,73)');
   $(pkg_pfl_phno_element).css('textAlign','left');
   $(pkg_pfl_phno_element).css('marginLeft','16px');
   $(pkg_pfl_phno_element).css('display','none');
   var pkg_pfl_star_phno = document.createElement('span');
   $(pkg_pfl_star_phno).addClass('star');
   $(pkg_pfl_star_phno).html("&#x2605");
   $(pkg_pfl_star_phno).css('float','left');
   var pkg_pfl_error_phno_element = document.createElement('div');
   $(pkg_pfl_error_phno_element).html('Mobile number is not valid');
   $(pkg_pfl_phno_element).append(pkg_pfl_star_phno);
   $(pkg_pfl_phno_element).append(pkg_pfl_error_phno_element);
   var pkg_pfl_address_element = document.createElement('div');
   $(pkg_pfl_address_element).addClass("err_msg");
   $(pkg_pfl_address_element).attr('id','pkg_pfl_err_address');
   $(pkg_pfl_address_element).css('color','rgb(236,73,73)');
   $(pkg_pfl_address_element).css('textAlign','left');
   $(pkg_pfl_address_element).css('marginLeft','16px');
   $(pkg_pfl_address_element).css('display','none');
   var pkg_pfl_star_address = document.createElement('span');
   $(pkg_pfl_star_address).addClass('star');
   $(pkg_pfl_star_address).html("&#x2605");
   $(pkg_pfl_star_address).css('float','left');
   var pkg_pfl_error_address_element = document.createElement('div');
   $(pkg_pfl_error_address_element).html('Enter your address');
   $(pkg_pfl_address_element).append(pkg_pfl_star_address);
   $(pkg_pfl_address_element).append(pkg_pfl_error_address_element);
   var pkg_pfl_apptime_element = document.createElement('div');
   $(pkg_pfl_apptime_element).attr('id','pkg_pfl_err_apptime');
   $(pkg_pfl_apptime_element).addClass("err_msg");
   $(pkg_pfl_apptime_element).css('color','rgb(236,73,73)');
   $(pkg_pfl_apptime_element).css('textAlign','left');
   $(pkg_pfl_apptime_element).css('marginLeft','16px');
   $(pkg_pfl_apptime_element).css('display','none');
   var pkg_pfl_star_apptime = document.createElement('span');
   $(pkg_pfl_star_apptime).addClass('star');
   $(pkg_pfl_star_apptime).html("&#x2605");
  	$(pkg_pfl_star_apptime).css('float','left');
   var pkg_pfl_error_apptime_element = document.createElement('div');
   $(pkg_pfl_error_apptime_element).html('Please select Appointment Time');
   $(pkg_pfl_apptime_element).append(pkg_pfl_star_apptime);
   $(pkg_pfl_apptime_element).append(pkg_pfl_error_apptime_element);
   var pkg_pfl_app_time_element = document.createElement('div');
   $(pkg_pfl_app_time_element).attr('id','pkg_pfl_err_app_time');
   $(pkg_pfl_app_time_element).addClass("err_msg");
   $(pkg_pfl_app_time_element).css('color','rgb(236,73,73)');
   $(pkg_pfl_app_time_element).css('textAlign','left');
   $(pkg_pfl_app_time_element).css('marginLeft','16px');
   $(pkg_pfl_app_time_element).css('display','none');
   var pkg_pfl_star_app_time = document.createElement('span');
   $(pkg_pfl_star_app_time).addClass('star');
   $(pkg_pfl_star_app_time).html("&#x2605");
   $(pkg_pfl_star_app_time).css('float','left');
   var pkg_pfl_error_app_time_element = document.createElement('div');
   $(pkg_pfl_error_app_time_element).html('You have given past time.Give future time');
   $(pkg_pfl_app_time_element).append(pkg_pfl_star_app_time);
   $(pkg_pfl_app_time_element).append(pkg_pfl_error_app_time_element);
   $(pkg_pfl_error_display).append(pkg_pfl_name_element);
   $(pkg_pfl_error_display).append(pkg_pfl_email_element);
   $(pkg_pfl_error_display).append(pkg_pfl_mbno_element);
   $(pkg_pfl_error_display).append(pkg_pfl_apptime_element);
   $(pkg_pfl_error_display).append(pkg_pfl_app_time_element);
   $(pkg_pfl_error_display).append(pkg_pfl_address_element);
   $("#pkg_pfl_modal_formpage").append(pkg_pfl_form_close_element);
   $("#pkg_pfl_modal_formpage").append(pkg_pfl_contact_heading);
   $("#pkg_pfl_modal_formpage").append(pkg_pfl_package_name);
   $("#pkg_pfl_modal_formpage").append(pkg_pfl_lab_details);
   $("#pkg_pfl_modal_formpage").append(pkg_pfl_deal_name);
   $("#pkg_pfl_modal_formpage").append(pkg_pfl_error_display);
   $("#pkg_pfl_modal_formpage").append(pkg_pfl_parent_wizard);
   $(pkg_pfl_input_booking).on('keyup' ,function (event)
   { 
        event.preventDefault();
   });//keyup
   $(pkg_pfl_input_booking).on('keypress' ,function (event)
   {
        event.preventDefault();
   });//keypress	
   $(pkg_pfl_input_booking).on('keydown' ,function (event) 
   {
        event.preventDefault();
   });//keydown
   $("#modal_close").on('click',function ()
   {
       if(typeof(Storage)!=="undefined")
       {
            pkg_pfl_datastore_handler();
        }//if
        $("#pkg_pfl_modal_formpage").modal().close(); 
    });//click
    var pkg_pfl_body_element = document.getElementsByClassName("themodal-lock")[0];
    $(pkg_pfl_body_element).on('keyup' ,function (event)
    {
         if(event.keyCode == 27)
        {
            if(typeof(Storage)!=="undefined")
            {
                pkg_pfl_datastore_handler();
            }//if storage
         }//if keycode
     });//key fnctn
     var pkg_pfl_today = new Date();  
     var pkg_pfl_minutes = pkg_pfl_today.getMinutes();
     if((pkg_pfl_minutes >= '0'))  
     {
         $('.form_datetime').datetimepicker
         ({ 
             format:'dd/M/yyyy HH:ii P',
             startDate: new Date(pkg_pfl_today.getFullYear(), pkg_pfl_today.getMonth(), pkg_pfl_today.getDate(),pkg_pfl_today.getHours()+1,pkg_pfl_today.getMinutes()-pkg_pfl_today.getMinutes()),
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
      var pkg_pfl_pat_name = $("#pkg_pfl_patient_name").val();
      var pkg_pfl_pat_email = $("#pkg_pfl_email").val();
      var pkg_pfl_pat_phno = $("#pkg_pfl_phone").val();
      var pkg_pfl_pat_apptime = $("#pkg_pfl_app_time").val();
      if ((pkg_pfl_pat_name == "") && (pkg_pfl_pat_email =="") && (pkg_pfl_pat_phno == "") && (pkg_pfl_pat_apptime == ""))
      {
          pkg_pfl_Filling_localdata(); 
      }//
       $('#pkg_pfl_step2_back_btn').on('click',function () 
       {
            pkg_pfl_package_contents_back_btn(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type);
       });//back btn click
       $('#pkg_pfl_step2_next_btn').on('click', function()
       {
            if(typeof(Storage)!=="undefined")
            { 
                pkg_pfl_datastore_handler();
            }//if  
            var pkg_pfl_patient_name = $('#pkg_pfl_patient_name').val();
            var pkg_pfl_patient_email = $('#pkg_pfl_email').val();
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var pkg_pfl_mobile_number = $('#pkg_pfl_phone').val();
            var pkg_pfl_patient_apptime =  $('#pkg_pfl_app_time').val();
            if(typeof(Storage)!=="undefined")
            { 
                pkg_pfl_datastore_handler();
            }//if
            var pkg_pfl_appt_time = localStorage.getItem("patient_app_time");
            var pkg_pfl_tday = new Date();
            var i;
            function addZero(i) 
             {
                 if (i < 10) 
                 {
                      i = "0" + i;
                 }//if i	
                 return i;
              }//fnctn
              var pkg_pfl_year = pkg_pfl_tday.getFullYear();
              var pkg_pfl_date = addZero(pkg_pfl_tday.getDate());
              var pkg_pfl_month = addZero(pkg_pfl_tday.getMonth()+1);
              var pkg_pfl_hours = addZero(pkg_pfl_tday.getHours());
              var pkg_pfl_mnt = addZero(pkg_pfl_tday.getMinutes());
              var pkg_pfl_sec =  addZero(pkg_pfl_tday.getSeconds());
              var pkg_pfl_selected_time =pkg_pfl_year+"-"+pkg_pfl_month+"-"+pkg_pfl_date+" "+pkg_pfl_hours +":"+ pkg_pfl_mnt+":"+pkg_pfl_sec;
              var pkg_pfl_currenttime = new Date();
              var pkg_pfl_current_year = pkg_pfl_currenttime.getFullYear();
              var pkg_pfl_current_month = addZero(pkg_pfl_currenttime.getMonth()+1);
              var pkg_pfl_current_date = addZero(pkg_pfl_currenttime.getDate());
              var pkg_pfl_current_hours = addZero(pkg_pfl_currenttime.getHours());
              var pkg_pfl_current_minutes = addZero(pkg_pfl_currenttime.getMinutes());
              var pkg_pfl_current_time = pkg_pfl_current_year+"-"+pkg_pfl_current_month+"-"+pkg_pfl_current_date+" "+pkg_pfl_current_hours+":"+pkg_pfl_current_minutes;
              if((document.getElementById("pkg_pfl_err_email").style.display ='none') && (document.getElementById('pkg_pfl_err_mbno').style.display = 'none') &&(document.getElementById('pkg_pfl_err_apptime').style.display = 'none') &&(document.getElementById('pkg_pfl_err_app_time').style.display = 'none') &&(document.getElementById('pkg_pfl_err_address').style.display = 'none'))  
              {
                  if ( !(pkg_pfl_patient_name.length >= 6 && pkg_pfl_patient_name.length <= 26) || pkg_pfl_patient_name.match(/[^a-zA-Z ]/)  )
                  {
                     $(pkg_pfl_name_element).css('display','block');
                      return false;
                  }//if patient name
                  if(document.getElementById('pkg_pfl_err_name').style.display = 'block')
                  {
                      document.getElementById('pkg_pfl_err_name').style.display = 'none';
                  }//if err_name
              }//if 
              if((document.getElementById("pkg_pfl_err_name").style.display ='none') && (document.getElementById('pkg_pfl_err_mbno').style.display = 'none') &&(document.getElementById('pkg_pfl_err_apptime').style.display = 'none') &&(document.getElementById('pkg_pfl_err_app_time').style.display = 'none') &&(document.getElementById('pkg_pfl_err_address').style.display = 'none')) 
              {
                  if(!filter.test(pkg_pfl_patient_email))
                  {
                     $(pkg_pfl_email_element).css('display','block');
                      return false;
                  }//if email
                  if(document.getElementById('pkg_pfl_err_email').style.display = 'block')
                  {
                      document.getElementById('pkg_pfl_err_email').style.display = 'none';
                  }//if err_email
               }//if
               if((document.getElementById("pkg_pfl_err_email").style.display ='none') && (document.getElementById('pkg_pfl_err_name').style.display = 'none') &&(document.getElementById('pkg_pfl_err_apptime').style.display = 'none') &&(document.getElementById('pkg_pfl_err_app_time').style.display = 'none') &&(document.getElementById('pkg_pfl_err_address').style.display = 'none'))
               {
                   if((pkg_pfl_mobile_number.match(/[^0-9]/) || pkg_pfl_mobile_number.length != 10) || (!(pkg_pfl_mobile_number.charAt(0)=="9" || pkg_pfl_mobile_number.charAt(0)=="8" || pkg_pfl_mobile_number.charAt(0)=="7")))
                   {
                       	 $(pkg_pfl_mbno_element).css('display','block');
                       	 return false;
                   }//if mble
                   if(document.getElementById('pkg_pfl_err_mbno').style.display = 'block')
                   {
                       document.getElementById('pkg_pfl_err_mbno').style.display = 'none';
                   }//if err_mbno
                 }//if
                 if((document.getElementById("pkg_pfl_err_email").style.display ='none') && (document.getElementById('pkg_pfl_err_mbno').style.display = 'none') &&(document.getElementById('pkg_pfl_err_name').style.display = 'none') &&(document.getElementById('pkg_pfl_err_app_time').style.display = 'none') &&(document.getElementById('pkg_pfl_err_address').style.display = 'none'))
                 {
                      if(! ($('#pkg_pfl_app_time').val()))   
                      {
                         	$(pkg_pfl_apptime_element).css('display','block');
                           return false;
                      }//if app_time
                     var pkg_pfl_val_time = pkg_pfl_date+"-"+pkg_pfl_month+"-"+pkg_pfl_year+" "+pkg_pfl_hours +":"+ pkg_pfl_mnt+":"+pkg_pfl_sec;                         
                     var pkg_pfl_sel_month_name = pkg_pfl_appt_time.substr(3,3);
                     if (pkg_pfl_sel_month_name == 'Jan') 
                     {
    	                    var pkg_pfl_sel_month = '01';
    	               }//if mnth 1
                     if (pkg_pfl_sel_month_name == 'Feb') 
                     {             
                         var  pkg_pfl_sel_month = '02';
                     }//if mnth 2
                     if (pkg_pfl_sel_month_name == 'Mar') 
                     {
    	                  var pkg_pfl_sel_month = '03';
                     }//if mnth 3
                     if (pkg_pfl_sel_month_name == 'Apr') 
                     {
    	                  var pkg_pfl_sel_month = '04';
  	                  }//if mnth 4
                     if (pkg_pfl_sel_month_name == 'May') 
  	                  {
    		                var pkg_pfl_sel_month = '05';
    	               }//if mnth 5
                     if (pkg_pfl_sel_month_name == 'Jun') 
  	                  {
    		               var pkg_pfl_sel_month = '06';
                     }//if mnth 6
                     if (pkg_pfl_sel_month_name == 'Jul') 
                     {
    		               var pkg_pfl_sel_month = '07';
                     }//if mnth 7
                    if (pkg_pfl_sel_month_name == 'Aug') 
                    {
    		              var pkg_pfl_sel_month = '08';
     	              } //if mnth 8
                    if (pkg_pfl_sel_month_name == 'Sep') 
    	              {
    		             var pkg_pfl_sel_month = '09';
    	              }//if mnth 9
    	              if (pkg_pfl_sel_month_name == 'Oct') 
    	              {
    		               var pkg_pfl_sel_month = '10';
    	              }//if mnth 10
    	              if (pkg_pfl_sel_month_name == 'Nov') 
    	              {
    			          var pkg_pfl_sel_month = '11';
    	              }//if mnth 11
    	              if (pkg_pfl_sel_month_name == 'Dec') 
    	              {
    		            var pkg_pfl_sel_month = '12';
    	              }//if mnth 12
    	             var pkg_pfl_tday = new Date();
    	             var pkg_pfl_sel_year = pkg_pfl_appt_time.substr(7,4);
                   var pkg_pfl_sel_date = pkg_pfl_appt_time.substr(0,2);
                   var pkg_pfl_sel_hours = pkg_pfl_appt_time.substr(12,2);
                   var pkg_pfl_sel_minutes = pkg_pfl_appt_time.substr(15,2);
                   var pkg_pfl_sel_sec = addZero(pkg_pfl_tday.getSeconds());
                   var pkg_pfl_sel_meridian = pkg_pfl_appt_time.substr(18,2);
                   var  pkg_pfl_sel_hours_meridian = pkg_pfl_sel_hours +" "+ pkg_pfl_sel_meridian;
                   if (pkg_pfl_sel_meridian == "AM") 
                   {
             	        var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
             	    }//if AM
                   if (pkg_pfl_sel_hours_meridian == "12 PM")
                   {
              	       var pkg_pfl_sel_hours = "12";
              	       var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                   }//if 12
                  if (pkg_pfl_sel_hours_meridian == "01 PM")
                  {
              	       var pkg_pfl_sel_hours = "13";
              	       var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                  }//if 01
              	   if (pkg_pfl_sel_hours_meridian == "02 PM")
                  {
              	       var pkg_pfl_sel_hours = "14";
                      var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                  }//if 02
               	if (pkg_pfl_sel_hours_meridian == "03 PM")
                  {
              	      var pkg_pfl_sel_hours = "15";
                     var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                  }//if 03
                 if (pkg_pfl_sel_hours_meridian == "04 PM")
                 {
              	    var pkg_pfl_sel_hours = "16";
                   var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                 }// if 04
                 if (pkg_pfl_sel_hours_meridian == "05 PM")
                 {
              	    var pkg_pfl_sel_hours = "17";
                   var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                 }// if 05
                 if (pkg_pfl_sel_hours_meridian == "06 PM")
                 {
              	    var pkg_pfl_sel_hours = "18";
                   var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                 }// if 06
                 if (pkg_pfl_sel_hours_meridian == "07 PM")
                 {
              	    var pkg_pfl_sel_hours = "19";
                   var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                 }// if 07
                 if (pkg_pfl_sel_hours_meridian == "08 PM")
                 {
              	    var pkg_pfl_sel_hours = "20";
                   var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                 }// if 08
                 if (pkg_pfl_sel_hours_meridian == "09 PM")
                 {
              	    var pkg_pfl_sel_hours = "21";
                   var pkg_pfl_sel_time = pkg_pfl_sel_year+"-"+pkg_pfl_sel_month+"-"+pkg_pfl_sel_date+" "+pkg_pfl_sel_hours+":"+pkg_pfl_sel_minutes+":"+pkg_pfl_sel_sec;
                 }// if 09
                 if(!(pkg_pfl_sel_time.match(/\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}/)))
                 {
                     $(pkg_pfl_apptime_element).css('display','block');
                     return false;
                 }//if val time 
                 if(document.getElementById('pkg_pfl_err_apptime').style.display = 'block')
                 {
                     document.getElementById('pkg_pfl_err_apptime').style.display = 'none';
                 }
              }//if
              if((document.getElementById("pkg_pfl_err_email").style.display ='none') && (document.getElementById('pkg_pfl_err_mbno').style.display = 'none') &&(document.getElementById('pkg_pfl_err_name').style.display = 'none') &&(document.getElementById('pkg_pfl_err_apptime').style.display = 'none') &&(document.getElementById('pkg_pfl_err_address').style.display = 'none')) 
              {
                  if(pkg_pfl_current_time > pkg_pfl_sel_time)
                  {
                      $(pkg_pfl_app_time_element).css('display','block');
                       return false;
                  }//if time
                  if (document.getElementById('pkg_pfl_err_app_time').style.display = 'block') 
                  {
                      document.getElementById('pkg_pfl_err_app_time').style.display = 'none';
                  }//if err_time    
               }//if
               if(pkg_pfl_vst_type.length > 7)
               {
                   if((document.getElementById('pkg_pfl_err_name').style.display = 'none') && (document.getElementById("pkg_pfl_err_email").style.display ='none') && (document.getElementById('pkg_pfl_err_mbno').style.display = 'none') &&(document.getElementById('pkg_pfl_err_apptime').style.display = 'none') &&(document.getElementById('pkg_pfl_err_app_time').style.display = 'none'))
                   {
                       if(! ($('#pkg_pfl_address').val()))  
                       {
                          $(pkg_pfl_address_element).css('display','block');
                          return false;
                       }// if visit type
                       if (document.getElementById('pkg_pfl_err_address').style.display = 'block') 
                       {
                          document.getElementById('pkg_pfl_err_address').style.display = 'none';
                       }//if err_visittype
                      }//if display
                 }// if length*/
                 pkg_pfl_preview_handler(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type);
                           
             });//btn onclick handler
           }//form_handler 
           
 function pkg_pfl_datastore_handler()
 {
    var pkg_pfl_ptnt_name = document.getElementById("pkg_pfl_patient_name");
    var pkg_pfl_ptnt_email = document.getElementById("pkg_pfl_email");
    var pkg_pfl_ptnt_phone = document.getElementById("pkg_pfl_phone");
    var pkg_pfl_ptnt_apptime = document.getElementById("pkg_pfl_app_time");
    var pkg_pfl_ptnt_address = document.getElementById("pkg_pfl_address");
    localStorage.setItem("patient_name",pkg_pfl_ptnt_name.value);
    localStorage.setItem("patient_email" ,pkg_pfl_ptnt_email.value);
    localStorage.setItem("patient_phone" ,pkg_pfl_ptnt_phone.value);
    localStorage.setItem("patient_app_time" ,pkg_pfl_ptnt_apptime.value);
    localStorage.setItem("patient_address",pkg_pfl_ptnt_address.value);
 } //fnctn handler
 function pkg_pfl_Filling_localdata()
  {
     document.getElementById("pkg_pfl_patient_name").value = localStorage.getItem("patient_name");
     document.getElementById("pkg_pfl_email").value = localStorage.getItem("patient_email");
     document.getElementById("pkg_pfl_phone").value = localStorage.getItem("patient_phone");
     document.getElementById("pkg_pfl_app_time").value = localStorage.getItem("patient_app_time");
     document.getElementById("pkg_pfl_address").value = localStorage.getItem("patient_address");
 }//fnctn handler

function  pkg_pfl_preview_handler(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type)
 {
     var pkg_pfl_ptnt_address = localStorage.getItem("patient_address");
     var pkg_pfl_order_page = document.createElement('div');
     $(pkg_pfl_order_page).addClass("modal");
     $(pkg_pfl_order_page).attr('id','pkg_pfl_preview_modal');
     $(pkg_pfl_order_page).css('backgroundColor','#fff');
     $(pkg_pfl_order_page).css('position','relative');
     $(pkg_pfl_order_page).css('paddingRight','0px');
     $(pkg_pfl_order_page).modal().open();
     var pkg_pfl_closing_element = document.createElement('a');
     $(pkg_pfl_closing_element).addClass("close");
     $(pkg_pfl_closing_element).attr('href','#');
     $(pkg_pfl_closing_element).html("&times;");
     $(pkg_pfl_closing_element).css('marginTop' ,'-19px');
     $(pkg_pfl_closing_element).css('fontSize','26px');
     $(pkg_pfl_closing_element).css('marginRight','7px');
     $(pkg_pfl_closing_element).attr('id','modal_close');
     var pkg_pfl_preview_box = document.createElement('div');
     $(pkg_pfl_preview_box).addClass("tst_preview_details");
     $(pkg_pfl_preview_box).css('padding','10px');
     $(pkg_pfl_preview_box).css('marginRight','20px');
     $(pkg_pfl_preview_box).css('border','1px solid #ddd');
     var pkg_pfl_preview_heading = document.createElement('h4');
     $(pkg_pfl_preview_heading).html("Order Preview");
     $(pkg_pfl_preview_heading).css('textAlign','center');
     $(pkg_pfl_preview_heading).css('fontSize','18px');
     $(pkg_pfl_preview_heading).css('fontWeight','bold');
     $(pkg_pfl_preview_heading).css('color','#5cb0cf');
     var pkg_pfl_time_error = document.createElement('div');
     var pkg_pfl_preview_pkg_info = document.createElement('div');
     $(pkg_pfl_preview_pkg_info).html("Lab & Price Information");
     $(pkg_pfl_preview_pkg_info).css('background','rgb(65, 167, 179)');
     $(pkg_pfl_preview_pkg_info).css('color','white');
     $(pkg_pfl_preview_pkg_info).css('fontWeight','bold');
     $(pkg_pfl_preview_pkg_info).css('paddingLeft','6px');
     $(pkg_pfl_preview_pkg_info).css('marginTop','10px');
     $(pkg_pfl_preview_pkg_info).css('marginBottom','2px');
     $(pkg_pfl_preview_pkg_info).css('height','21px');
     var pkg_pfl_table_dealname = document.createElement('table');
     $(pkg_pfl_table_dealname).css('float','left');
     $(pkg_pfl_table_dealname).css('marginBottom','15px');
     $(pkg_pfl_table_dealname).css('width','316px');
     var pkg_pfl_tr_dealname = document.createElement('tr');
     var pkg_pfl_td_dealname = document.createElement('td');
     $(pkg_pfl_td_dealname).html("&nbsp"+"&nbsp"+"&nbsp"+pkg_pfl_labname);
     $(pkg_pfl_td_dealname).css('fontWeight','bold');
     $(pkg_pfl_td_dealname).css('paddingTop','3px');
     var pkg_pfl_tr_labname = document.createElement('tr');
     var pkg_pfl_td_labname = document.createElement('td');
     var pkg_pfl_td_loc_div = document.createElement('div');
     $(pkg_pfl_td_loc_div).css('float','left');
     $(pkg_pfl_td_loc_div).html("&nbsp"+"&nbsp"+"&nbsp");
     var pkg_pfl_td_loc_img = document.createElement('img');
     $(pkg_pfl_td_loc_img).attr('src','images/location-bi.png');
     $(pkg_pfl_td_loc_img).css('height','17px');
     $(pkg_pfl_td_loc_img).css('width','12px');
     $(pkg_pfl_td_loc_div).append(pkg_pfl_td_loc_img);
     var pkg_pfl_td_loc_detail = document.createElement('div');
     $(pkg_pfl_td_loc_detail).html("&nbsp;"+pkg_pfl_labaddress+","+pkg_pfl_labarea+","+pkg_pfl_labaddress_pin);
     $(pkg_pfl_td_loc_detail).css('float','right');
     $(pkg_pfl_td_loc_detail).css('width','290px');
     $(pkg_pfl_td_labname).append(pkg_pfl_td_loc_div);
     $(pkg_pfl_td_labname).append(pkg_pfl_td_loc_detail);
     $(pkg_pfl_tr_labname).append(pkg_pfl_td_labname);
     $(pkg_pfl_tr_dealname).append(pkg_pfl_td_dealname);
     $(pkg_pfl_table_dealname).append(pkg_pfl_tr_dealname);
     $(pkg_pfl_table_dealname).append(pkg_pfl_tr_labname);
     var pkg_pfl_ptnt_info_heading = document.createElement('div');
     if (pkg_pfl_online_rpt == "yes") 
     {
          var pkg_pfl_onlinereports_tr = document.createElement('tr');
          var pkg_pfl_onlinereports_element = document.createElement('td');
          $(pkg_pfl_onlinereports_element).addClass("err_msg");
          $(pkg_pfl_onlinereports_element).attr('id','tst_reports_msg');
          $(pkg_pfl_onlinereports_element).css('color','rgb(236,73,73)');
          $(pkg_pfl_onlinereports_element).css('textAlign','left');
          $(pkg_pfl_onlinereports_element).css('fontSize','10px');
          $(pkg_pfl_onlinereports_element).css('display','block');
          var pkg_pfl_star_onlinereports = document.createElement('span');
          $(pkg_pfl_star_onlinereports).addClass('star');
          $(pkg_pfl_star_onlinereports).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
          $(pkg_pfl_star_onlinereports).css('float','left');
          var pkg_pfl_error_onlinereports_element = document.createElement('div');
          $(pkg_pfl_error_onlinereports_element).html("Online reports  available");
          $(pkg_pfl_onlinereports_element).append(pkg_pfl_star_onlinereports);
          $(pkg_pfl_onlinereports_element).append(pkg_pfl_error_onlinereports_element);
          $(pkg_pfl_onlinereports_tr).append(pkg_pfl_onlinereports_element);
          $(pkg_pfl_table_dealname).append(pkg_pfl_onlinereports_tr);
        } 
         if(pkg_pfl_vst_type.length == "13")
         {
             var pkg_pfl_homevisit_tr_one_element = document.createElement('tr');
             var pkg_pfl_homevisit_one_element = document.createElement('td');
             $(pkg_pfl_homevisit_one_element).addClass("err_msg");
             $(pkg_pfl_homevisit_one_element).attr('id','tst_reports_msg');
             $(pkg_pfl_homevisit_one_element).css('color','rgb(236,73,73)');
             $(pkg_pfl_homevisit_one_element).css('textAlign','left');
             $(pkg_pfl_homevisit_one_element).css('fontSize','10px');
             $(pkg_pfl_homevisit_one_element).css('display','block');
             var pkg_pfl_star_homevisit_one = document.createElement('span');
             $(pkg_pfl_star_homevisit_one).addClass('star');
             $(pkg_pfl_star_homevisit_one).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
             $(pkg_pfl_star_homevisit_one).css('float','left');
             var pkg_pfl_error_homevisit_one_element = document.createElement('div');
             $(pkg_pfl_error_homevisit_one_element).html('Home visit only');
             $(pkg_pfl_homevisit_one_element).append(pkg_pfl_star_homevisit_one);
             $(pkg_pfl_homevisit_one_element).append(pkg_pfl_error_homevisit_one_element);
             $(pkg_pfl_homevisit_tr_one_element).append(pkg_pfl_homevisit_one_element);   
             $(pkg_pfl_table_dealname).append(pkg_pfl_homevisit_tr_one_element);        
          }//if home visit 
          if(pkg_pfl_vst_type.length > "13")
          {
                var pkg_pfl_labvisit_homevisit_tr_one_element = document.createElement('tr');
                var pkg_pfl_labvisit_homevisit_one_element = document.createElement('td');
                $(pkg_pfl_labvisit_homevisit_one_element).addClass("err_msg");
                $(pkg_pfl_labvisit_homevisit_one_element).attr('id','pkg_reports_msg');
                $(pkg_pfl_labvisit_homevisit_one_element).css('color','rgb(236,73,73)');
                $(pkg_pfl_labvisit_homevisit_one_element).css('textAlign','left');
                $(pkg_pfl_labvisit_homevisit_one_element).css('fontSize','10px');
                $(pkg_pfl_labvisit_homevisit_one_element).css('display','block');
                var pkg_pfl_star_labvisit_homevisit_one = document.createElement('span');
                $(pkg_pfl_star_labvisit_homevisit_one).addClass('star');
                $(pkg_pfl_star_labvisit_homevisit_one).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
                $(pkg_pfl_star_labvisit_homevisit_one).css('float','left');
                var pkg_pfl_error_labvisit_homevisit_one_element = document.createElement('div');
                $(pkg_pfl_error_labvisit_homevisit_one_element).html('Home visit and lab visit available');
                $(pkg_pfl_labvisit_homevisit_one_element).append(pkg_pfl_star_labvisit_homevisit_one);
                $(pkg_pfl_labvisit_homevisit_one_element).append(pkg_pfl_error_labvisit_homevisit_one_element);
                $(pkg_pfl_labvisit_homevisit_tr_one_element).append(pkg_pfl_labvisit_homevisit_one_element);   
                $(pkg_pfl_table_dealname).append(pkg_pfl_labvisit_homevisit_tr_one_element);   
             }//if home visit 
             var pkg_pfl_price_details = document.createElement('div');
             $(pkg_pfl_price_details).css('float','right');
             $(pkg_pfl_price_details).css('paddingTop','6px');
             $(pkg_pfl_price_details).css('paddingRight','12px');
             $(pkg_pfl_price_details).css('marginBottom','11px');
             var pkg_pfl_price_details_price = document.createElement('div');
             $(pkg_pfl_price_details_price).html("Rs."+pkg_pfl_dp);
             $(pkg_pfl_price_details_price).css('textAlign','center');
             $(pkg_pfl_price_details_price).css('fontSize','22px');
             $(pkg_pfl_price_details_price).css('color','rgb(236,73,73)');
             var pkg_pfl_price_details_mrp = document.createElement('div');
             $(pkg_pfl_price_details_mrp).css('fontSize','18px');
             var pkg_pfl_mrp_bracket_div = document.createElement('div');
             $(pkg_pfl_mrp_bracket_div).css('float','left');
             var pkg_pfl_mrp_openbracket = document.createElement('div');
             $(pkg_pfl_mrp_openbracket).html("("+"&nbsp");
             $(pkg_pfl_mrp_openbracket).css('float','left');
             var pkg_pfl_mrp_price = document.createElement('div');
             $(pkg_pfl_mrp_price).html("Rs."+"&nbsp"+pkg_pfl_mrp);
             $(pkg_pfl_mrp_price).css('textDecoration','line-through');
             $(pkg_pfl_mrp_price).css('float','left');
             var pkg_pfl_mrp_closebracket = document.createElement('div');
             $(pkg_pfl_mrp_closebracket).html("&nbsp"+")");
             $(pkg_pfl_mrp_closebracket).css('float','right');
             $(pkg_pfl_mrp_bracket_div).append(pkg_pfl_mrp_openbracket);
             $(pkg_pfl_mrp_bracket_div).append(pkg_pfl_mrp_price);
             $(pkg_pfl_mrp_bracket_div).append(pkg_pfl_mrp_closebracket);
             $(pkg_pfl_price_details_mrp).append(pkg_pfl_mrp_bracket_div);
             var pkg_pfl_discount_det = document.createElement('div');
             $(pkg_pfl_discount_det).html("&nbsp"+pkg_pfl_discount+"%");
             $(pkg_pfl_discount_det).css('float','right');
             $(pkg_pfl_price_details_mrp).append(pkg_pfl_discount_det);
             $(pkg_pfl_price_details).append(pkg_pfl_price_details_price);
             $(pkg_pfl_price_details).append(pkg_pfl_price_details_mrp);
             var pkg_pfl_testinfo_head_table = document.createElement('table');
             $(pkg_pfl_testinfo_head_table).css('width','531px');
             $(pkg_pfl_testinfo_head_table).css('marginBottom','16px');
             var pkg_pfl_testinfo_head_tr = document.createElement('tr');
             $(pkg_pfl_testinfo_head_tr).css('border','1px solid rgb(65, 167, 179)');
             var pkg_pfl_testinfo_head = document.createElement('th');
             $(pkg_pfl_testinfo_head).html("&nbsp;"+"&nbsp;"+"Package Information");
             $(pkg_pfl_testinfo_head).css('background','rgb(65, 167, 179)');
             $(pkg_pfl_testinfo_head).css('color','white');
             $(pkg_pfl_testinfo_head).css('fontWeight','bold');
             $(pkg_pfl_testinfo_head_tr).append(pkg_pfl_testinfo_head);
             var pkg_pfl_testname_tr = document.createElement('tr');
             $(pkg_pfl_testname_tr).css('border','1px solid rgb(221, 221, 221)');
             var pkg_pfl_testname  = document.createElement('td');
             $(pkg_pfl_testname).html("&nbsp;"+"&nbsp;"+"&nbsp;"+pkg_profile_pkg_name);
             $(pkg_pfl_testname).css('background', 'rgba(236,246,248,0.99)');
             $(pkg_pfl_testname_tr).append(pkg_pfl_testname);
             $(pkg_pfl_testinfo_head_table).append(pkg_pfl_testinfo_head_tr);
             $(pkg_pfl_testinfo_head_table).append(pkg_pfl_testname_tr);
             var pkg_pfl_patient_details_table = document.createElement('table');
             $(pkg_pfl_patient_details_table).css('marginBottom','30px');
             $(pkg_pfl_patient_details_table).css('width','531px');
             $(pkg_pfl_patient_details_table).addClass("tst_ptnt_details");
             var pkg_pfl_patient_table_head_tr = document.createElement('tr');
             $(pkg_pfl_patient_table_head_tr).css('background','rgb(65, 167, 179)');
             $(pkg_pfl_patient_table_head_tr).css('border','1px solid rgb(65, 167, 179)');
             $(pkg_pfl_patient_table_head_tr).css('height','21px');
             var pkg_pfl_patient_table_head_td =document.createElement('td');
             $(pkg_pfl_patient_table_head_td).html("&nbsp"+"&nbsp"+"Patient Information");
             $(pkg_pfl_patient_table_head_td).css('color','white');
             $(pkg_pfl_patient_table_head_td).css('fontWeight','bold');
             $(pkg_pfl_patient_table_head_tr).append(pkg_pfl_patient_table_head_td);
             var pkg_pfl_patient_table_head_td_2 = document.createElement('td');
             $(pkg_pfl_patient_table_head_td_2).html("-");
             $(pkg_pfl_patient_table_head_td_2).css('color','rgb(65, 167, 179)');
             $(pkg_pfl_patient_table_head_tr).append(pkg_pfl_patient_table_head_td_2);
             var pkg_pfl_tr_patient = document.createElement('tr');
             $(pkg_pfl_tr_patient).addClass("pkg_pfl_preview_info");
             $(pkg_pfl_tr_patient).css('border' ,'1px solid rgb(221, 221, 221)');
             var pkg_pfl_td_patientname = document.createElement('td');
             $(pkg_pfl_td_patientname).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Name");
             $(pkg_pfl_td_patientname).css('border','1px solid #ddd');
             $(pkg_pfl_td_patientname).css('width','265px');
             var pkg_pfl_td_patient_name = document.createElement('td');
             $(pkg_pfl_td_patient_name).html("&nbsp"+localStorage.getItem("patient_name"));
             $(pkg_pfl_td_patient_name).css('width','265px');
             var pkg_pfl_tr_email = document.createElement('tr');
             $(pkg_pfl_tr_email).addClass("pkg_pfl_preview_info");
             $(pkg_pfl_tr_email).css('border' ,'1px solid rgb(221, 221, 221)');
             var pkg_pfl_td_emailheading = document.createElement('td');
             $(pkg_pfl_td_emailheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Email");
             $(pkg_pfl_td_emailheading).css('border','1px solid #ddd');
             $(pkg_pfl_td_email_heading).css('width','265px');
             var pkg_pfl_td_email_heading = document.createElement('td');
             $(pkg_pfl_td_email_heading).html("&nbsp"+localStorage.getItem("patient_email"));
             $(pkg_pfl_td_email_heading).css('width','265px');
             var pkg_pfl_tr_phno = document.createElement('tr');
             $(pkg_pfl_tr_phno).addClass("pkg_pfl_preview_info");
             $(pkg_pfl_tr_phno).css('border' ,'1px solid rgb(221, 221, 221)');
             var pkg_pfl_td_phnoheading = document.createElement('td');
             $(pkg_pfl_td_phnoheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Mobile No");
             $(pkg_pfl_td_phnoheading).css('border','1px solid #ddd');
             $(pkg_pfl_td_phnoheading).css('width','265px');
             var pkg_pfl_td_phno_heading = document.createElement('td');
             $(pkg_pfl_td_phno_heading).html("&nbsp"+localStorage.getItem("patient_phone"));
             $(pkg_pfl_td_phno_heading).css('width','265px');
             var pkg_pfl_tr_apptime = document.createElement('tr');
             $(pkg_pfl_tr_apptime).addClass("pkg_pfl_preview_info");
             $(pkg_pfl_tr_apptime).css('border' ,'1px solid rgb(221, 221, 221)');
             var pkg_pfl_td_apptimeheading = document.createElement('td');
             $(pkg_pfl_td_apptimeheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Appointment Timing");
             $(pkg_pfl_td_apptimeheading).css('border','1px solid #ddd');
             $(pkg_pfl_td_apptimeheading).css('width','265px');
             var pkg_pfl_td_apptime_heading = document.createElement('td');
             $(pkg_pfl_td_apptime_heading).html("&nbsp"+localStorage.getItem("patient_app_time"));
             $(pkg_pfl_td_apptime_heading).css('width','265px');
             var pkg_pfl_tr_address = document.createElement('tr');
             $(pkg_pfl_tr_address).addClass("pkg_pfl_preview_info");
             $(pkg_pfl_tr_address).css('border' ,'1px solid rgb(221, 221, 221)');
             var pkg_pfl_td_address_heading = document.createElement('td');
             $(pkg_pfl_td_address_heading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Address");
             $(pkg_pfl_td_address_heading).css('border','1px solid rgb(221, 221, 221)');
             $(pkg_pfl_td_address_heading).css('width','265px');
             var pkg_pfl_td_address = document.createElement('td');
             $(pkg_pfl_td_address).html("&nbsp"+localStorage.getItem("patient_address"));
             $(pkg_pfl_td_address).css('width','265px');
             $(pkg_pfl_tr_address).append(pkg_pfl_td_address_heading);
             $(pkg_pfl_tr_address).append(pkg_pfl_td_address);
             var pkg_pfl_back_button = document.createElement('button');
             $(pkg_pfl_back_button).html("Back");
             $(pkg_pfl_back_button).css('float','left');
             $(pkg_pfl_back_button).css('backgroundColor','#ec4949');
             $(pkg_pfl_back_button).css('width','98px');
             $(pkg_pfl_back_button).css('borderRadius','3px');
             $(pkg_pfl_back_button).css('border','0px');
             $(pkg_pfl_back_button).css('marginTop','11px');
             var pkg_pfl_order_button = document.createElement('button');
             $(pkg_pfl_order_button).html("Order");
             $(pkg_pfl_order_button).css('float','right');
             $(pkg_pfl_order_button).css('backgroundColor','#ec4949');
             $(pkg_pfl_order_button).css('width','98px');
             $(pkg_pfl_order_button).css('borderRadius','3px');
             $(pkg_pfl_order_button).css('border','0px');
             $(pkg_pfl_order_button).css('marginTop','11px');
             var pkg_pfl_tmm_form_element = document.createElement('div');
             $(pkg_pfl_tmm_form_element).addClass("row");
             $(pkg_pfl_tmm_form_element).attr('id','tmm-form-wizard');
             $(pkg_pfl_tmm_form_element).css('marginTop','6px');
             var pkg_pfl_prevbtn_element = document.createElement('div');
             $(pkg_pfl_prevbtn_element).css('margin','0px');
             $(pkg_pfl_prevbtn_element).addClass('prev');
             var pkg_pfl_backbtn = document.createElement('button');
             $(pkg_pfl_backbtn).attr('id','step2_back_btn');
             $(pkg_pfl_backbtn).addClass("button button-control");
             $(pkg_pfl_backbtn).attr('type','button');
             var pkg_pfl_span_backbtn = document.createElement('span');
             $(pkg_pfl_span_backbtn).html("Back");
             var pkg_pfl_backbtn_divider = document.createElement('div');
             $(pkg_pfl_backbtn_divider).addClass("button-divider");
             var pkg_pfl_orderbtn_element = document.createElement('div');
             $(pkg_pfl_orderbtn_element).css('margin','0px');
             $(pkg_pfl_orderbtn_element).addClass('next');
             var pkg_pfl_nextbtn = document.createElement('button');
             $(pkg_pfl_nextbtn).attr('id','step2_next_btn');
             $(pkg_pfl_nextbtn).addClass("button button-control");
             $(pkg_pfl_nextbtn).attr('type','button');
             var pkg_pfl_span_nextbtn = document.createElement('span');
             $(pkg_pfl_span_nextbtn).html("Order");
             var pkg_pfl_nextbtn_divider = document.createElement('div');
             $(pkg_pfl_nextbtn_divider).addClass("button-divider");
             $(pkg_pfl_backbtn).append(pkg_pfl_span_backbtn);
             $(pkg_pfl_prevbtn_element).append(pkg_pfl_backbtn);
             $(pkg_pfl_prevbtn_element).append(pkg_pfl_backbtn_divider);
             $(pkg_pfl_nextbtn).append(pkg_pfl_span_nextbtn);
             $(pkg_pfl_orderbtn_element).append(pkg_pfl_nextbtn);
             $(pkg_pfl_orderbtn_element).append(pkg_pfl_nextbtn_divider);
             $(pkg_pfl_tr_patient).append(pkg_pfl_td_patientname);
             $(pkg_pfl_tr_patient).append(pkg_pfl_td_patient_name);
             $(pkg_pfl_tr_email).append(pkg_pfl_td_emailheading);
             $(pkg_pfl_tr_email).append(pkg_pfl_td_email_heading);
             $(pkg_pfl_tr_phno).append(pkg_pfl_td_phnoheading);
             $(pkg_pfl_tr_phno).append(pkg_pfl_td_phno_heading);
             $(pkg_pfl_tr_apptime).append(pkg_pfl_td_apptimeheading);
             $(pkg_pfl_tr_apptime).append(pkg_pfl_td_apptime_heading);
             $(pkg_pfl_patient_details_table).append(pkg_pfl_patient_table_head_tr);
             $(pkg_pfl_patient_details_table).append(pkg_pfl_tr_patient);
             $(pkg_pfl_patient_details_table).append(pkg_pfl_tr_email);
             $(pkg_pfl_patient_details_table).append(pkg_pfl_tr_phno);
             $(pkg_pfl_patient_details_table).append(pkg_pfl_tr_address);
             if (pkg_pfl_ptnt_address == "") 
      	    {
      	        $(pkg_pfl_tr_address).detach();
      	    } 
             $(pkg_pfl_patient_details_table).append(pkg_pfl_tr_apptime);
             $(pkg_pfl_tmm_form_element).append(pkg_pfl_prevbtn_element);
             $(pkg_pfl_tmm_form_element).append(pkg_pfl_orderbtn_element);
             $("#pkg_pfl_preview_modal").append(pkg_pfl_closing_element);
             $(pkg_pfl_preview_box).append(pkg_pfl_preview_heading);
             $(pkg_pfl_preview_box).append(pkg_pfl_preview_pkg_info);
             $(pkg_pfl_preview_box).append(pkg_pfl_table_dealname); 
             $(pkg_pfl_preview_box).append(pkg_pfl_price_details);
             $(pkg_pfl_preview_box).append(pkg_pfl_testinfo_head_table);
             $(pkg_pfl_preview_box).append(pkg_pfl_patient_details_table);
             $(pkg_pfl_preview_box).append(pkg_pfl_tmm_form_element);
             $("#pkg_pfl_preview_modal").append(pkg_pfl_preview_box);
             $(".close").on('click',function () 
             {
                $(pkg_pfl_order_page).modal().close();
             });//click
             $(pkg_pfl_prevbtn_element).on('click',function () 
             { 
               pkg_form_handler(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type);
              
             });
              $(pkg_pfl_orderbtn_element).on('click',function ()
              {
                   pkg_pfle_booking_handler(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type);           
              });
 }//prvw fnctn endnf
 
function pkg_pfle_booking_handler(pkg_pfl_labname,pkg_pfl_labslug,pkg_pfl_discount,pkg_pfl_mrp,pkg_pfl_dp,pkg_pfl_labarea,pkg_pfl_labaddress,pkg_pfl_labaddress_pin,pkg_pfl_online_rpt,pkg_pfl_vst_type)
{
    var pkg_pfl_book_pnt_name =localStorage.getItem("patient_name");
    var pkg_pfl_book_pnt_mobileno = localStorage.getItem("patient_phone");
    var pkg_pfl_book_pnt_mail = localStorage.getItem("patient_email");
    var pkg_pfl_book_pnt_appt_time = localStorage.getItem("patient_app_time");
    var pkg_pfl_book_pnt_address = localStorage.getItem("patient_address");
    var pkg_pfl_book_sel_month_name = pkg_pfl_book_pnt_appt_time.substr(3,3);
    if (pkg_pfl_book_sel_month_name == 'Jan') 
     {
    	 var pkg_pfl_book_sel_month = '01';
    	 
     }//if mnth 1
    if (pkg_pfl_book_sel_month_name == 'Feb') 
     {
        var  pkg_pfl_book_sel_month = '02';
     }//if mnth 2
    if (pkg_pfl_book_sel_month_name == 'Mar') 
     {
    	 var pkg_pfl_book_sel_month = '03';
     }//if mnth 3
    if (pkg_pfl_book_sel_month_name == 'Apr') 
     {
    	var pkg_pfl_book_sel_month = '04';
  	  }//if mnth 4
    if (pkg_pfl_book_sel_month_name == 'May') 
  	  {
    		var pkg_pfl_book_sel_month = '05';
    	}//if mnth 5
    if (pkg_pfl_book_sel_month_name == 'Jun') 
  	  {
    		var pkg_pfl_book_sel_month = '06';
     }//if mnth 6
    if (pkg_pfl_book_sel_month_name == 'Jul') 
     {
    		var pkg_pfl_book_sel_month = '07';
     }//if mnth 7
    if (pkg_pfl_book_sel_month_name == 'Aug') 
     {
    		var pkg_pfl_book_sel_month = '08';
     	}//if mnth 8
     if (pkg_pfl_book_sel_month_name == 'Sep') 
    	{
    		var pkg_pfl_book_sel_month = '09';
    	}//if mnth 9
    	if (pkg_pfl_book_sel_month_name == 'Oct') 
    	{
    		var pkg_pfl_book_sel_month = '10';
    	}//if mnth 10
    	if (pkg_pfl_book_sel_month_name == 'Nov') 
    	{
    			var pkg_pfl_book_sel_month = '11';
    	}//if mnth 11
    	if (pkg_pfl_book_sel_month_name == 'Dec') 
    	{
    		var pkg_pfl_book_sel_month = '12';
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
                       
    	       var pkg_pfl_book_tday = new Date();
    	       var pkg_pfl_book_sel_year = pkg_pfl_book_pnt_appt_time.substr(7,4);
             var pkg_pfl_book_sel_date = pkg_pfl_book_pnt_appt_time.substr(0,2);
             var pkg_pfl_book_sel_hours = pkg_pfl_book_pnt_appt_time.substr(12,2);
             var pkg_pfl_book_sel_minutes = pkg_pfl_book_pnt_appt_time.substr(15,2);
             var pkg_pfl_book_sel_sec = addZero(pkg_pfl_book_tday.getSeconds());
             var pkg_pfl_book_sel_meridian = pkg_pfl_book_pnt_appt_time.substr(18,2);
             var pkg_pfl_book_sel_hours_meridian = pkg_pfl_book_sel_hours +" "+ pkg_pfl_book_sel_meridian;
             if (pkg_pfl_book_sel_meridian == "AM") 
             {
             	 var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
             	
              }//if AM
              if (pkg_pfl_book_sel_hours_meridian == "12 PM")
              {
              	   var pkg_pfl_book_sel_hours = "12";
              	 var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                 
              	}//if 12
             if (pkg_pfl_book_sel_hours_meridian == "01 PM")
              {
              	   var pkg_pfl_book_sel_hours = "13";
              	 var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                 
              	}//if 01
              	if (pkg_pfl_book_sel_hours_meridian == "02 PM")
               {
              	   var pkg_pfl_book_sel_hours = "14";
                  var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                 
                }//if 02
               	if (pkg_pfl_book_sel_hours_meridian == "03 PM")
                  {
              	      var pkg_pfl_book_sel_hours = "15";
                      var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                     
                 }//if 03
                 if (pkg_pfl_book_sel_hours_meridian == "04 PM")
                 {
              	    var pkg_pfl_book_sel_hours = "16";
                   var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                  
                  }// if 04
                  if (pkg_pfl_book_sel_hours_meridian == "05 PM")
                 {
              	    var pkg_pfl_book_sel_hours = "17";
                   var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                 
                  }// if 05
                   if (pkg_pfl_book_sel_hours_meridian == "06 PM")
                 {
              	    var pkg_pfl_book_sel_hours = "18";
                   var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                  
                  }// if 06
                   if (pkg_pfl_book_sel_hours_meridian == "07 PM")
                 {
              	    var pkg_pfl_book_sel_hours = "19";
                   var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                   
                  }// if 07
                   if (pkg_pfl_book_sel_hours_meridian == "08 PM")
                 {
              	    var pkg_pfl_book_sel_hours = "20";
                   var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                   
                  }// if 08
                   if (pkg_pfl_book_sel_hours_meridian == "09 PM")
                 {
              	    var pkg_pfl_book_sel_hours = "21";
                   var pkg_pfl_book_sel_time = pkg_pfl_book_sel_year+"-"+pkg_pfl_book_sel_month+"-"+pkg_pfl_book_sel_date+" "+pkg_pfl_book_sel_hours+":"+pkg_pfl_book_sel_minutes+":"+pkg_pfl_book_sel_sec;
                   
                  }// if 09        
       $.ajax({
       url:pkg_profile_host+"/m-checkout/book-order",
       type:'POST',
       dataType:'json',
       data:{labSlug:pkg_pfl_labslug,homeVisitAddress:pkg_pfl_book_pnt_address,packageSlugs:pkg_profile_pkg_slug,patientName:pkg_pfl_book_pnt_name,patientMobile:pkg_pfl_book_pnt_mobileno,patientEmail:pkg_pfl_book_pnt_mail,apptTime:pkg_pfl_book_sel_time},
          success:function(data)
         {
         	if (data.error) 
         	{
         	      var pkg_pfl_error_page = document.createElement('div');
                  $(pkg_pfl_error_page).addClass("modal");
                  $(pkg_pfl_error_page).attr('id','pkg_pfl_modal_errorpage');
                  $(pkg_pfl_error_page).css('backgroundColor','#fff');
                  $(pkg_pfl_error_page).css('position','relative');
                  $(pkg_pfl_error_page).css('paddingRight','0px');
                  $(pkg_pfl_error_page).modal().open();
                   var pkg_pfl_error_closing = document.createElement('a');
                  $(pkg_pfl_error_closing).addClass("confirm_close");
                  $(pkg_pfl_error_closing).attr('href','#');
                  $(pkg_pfl_error_closing).html("&times;");
                  $(pkg_pfl_error_closing).css('marginTop' ,'-24px');
                  $(pkg_pfl_error_closing).css('marginRight','8px');
                  $(pkg_pfl_error_closing).css('fontSize','26px');
                  $(pkg_pfl_error_closing).css('float','right');
                  var pkg_pfl_error_heading = document.createElement('h4');
                  $(pkg_pfl_error_heading).html("Order Confirmation failed");
                   $(pkg_pfl_error_heading).css('color','#5cb0cf');
                  $(pkg_pfl_error_heading).css('textAlign','center');
                  var pkg_pfl_error_detail = document.createElement('div');
                  $(pkg_pfl_error_detail).html(data.error);
                  $(pkg_pfl_error_detail).css('marginTop','16px');
                  $(pkg_pfl_error_detail).css('marginLeft','16px');
                  var pkg_pfl_error_close = document.createElement('button');
                  $(pkg_pfl_error_close).addClass("close_modal");
                  $(pkg_pfl_error_close).attr('type','button');
                  $(pkg_pfl_error_close).html("Close");
                  $(pkg_pfl_error_close).css('float','right');
                  $(pkg_pfl_error_close).css('marginTop','8px');
                  $(pkg_pfl_error_close).css('width','80px');
                  $(pkg_pfl_error_close).css('borderRadius','5px');
                  $(pkg_pfl_error_close).css('color','white');
                  $(pkg_pfl_error_close).css('background','rgb(236,73,73)');
                  $(pkg_pfl_error_close).css('border','0px');
                  $(pkg_pfl_error_close).css('marginRight','20px');
                   $("#pkg_pfl_modal_errorpage").append(pkg_pfl_error_closing);
                   $("#pkg_pfl_modal_errorpage").append(pkg_pfl_error_heading);
                   $("#pkg_pfl_modal_errorpage").append(pkg_pfl_error_detail);
                   $("#pkg_pfl_modal_errorpage").append(pkg_pfl_error_close);
                   $(pkg_pfl_error_closing).on('click',function () 
                   {
                   	$(pkg_pfl_error_page).modal().close();
                 	});// srror click close
                   $(pkg_pfl_error_close).on('click',function () 
                   {
                   	$(pkg_pfl_error_page).modal().close();
                  });//tst error close fnctn

          	}//if error
       else 
       {
       	  var pkg_pfl_confirm_page = document.createElement('div');
           $(pkg_pfl_confirm_page).addClass("modal");
           $(pkg_pfl_confirm_page).attr('id','pkg_pfl_modal_confirmpage');
           $(pkg_pfl_confirm_page).css('backgroundColor','#fff');
           $(pkg_pfl_confirm_page).css('position','relative');
           $(pkg_pfl_confirm_page).css('paddingRight','0px');
           $(pkg_pfl_confirm_page).modal().open();
           var pkg_pfl_confirm_closing = document.createElement('a');
           $(pkg_pfl_confirm_closing).addClass("pkg_pfl_confirm_close");
           $(pkg_pfl_confirm_closing).attr('href','#');
           $(pkg_pfl_confirm_closing).html("&times;");
           $(pkg_pfl_confirm_closing).css('marginTop' ,'-23px');
           $(pkg_pfl_confirm_closing).css('fontSize','26px');
           $(pkg_pfl_confirm_closing).css('float','right');
           $(pkg_pfl_confirm_closing).css('marginRight','8px');
           var pkg_pfl_order_element = document.createElement('div');
           $(pkg_pfl_order_element).addClass("order_details");
           $(pkg_pfl_order_element).css('marginTop','9px');
           var pkg_pfl_booking_heading = document.createElement('h4');
           $(pkg_pfl_booking_heading).html("Order Confirmation");
           $(pkg_pfl_booking_heading).css('textAlign','center');
           $(pkg_pfl_booking_heading).css('fontSize','18px');
           $(pkg_pfl_booking_heading).css('fontWeight','bold');
           $(pkg_pfl_booking_heading).css('color','#5cb0cf');
          var pkg_pfl_success_element = document.createElement('div');
          $(pkg_pfl_success_element).html("Your order is successfully placed."+"&nbsp"+"&nbsp"+"Please check your mail for details.");
          $(pkg_pfl_success_element).css('marginLeft','24px');
          $(pkg_pfl_success_element).css('marginTop','8px');
          var pkg_pfl_ordered_table = document.createElement('table');
          $(pkg_pfl_ordered_table).css('marginTop','8px');
          $(pkg_pfl_ordered_table).css('width','552px');
          var pkg_pfl_labname_tr = document.createElement('tr');
          $(pkg_pfl_labname_tr).addClass("pkg_pfl_order_class");
          $(pkg_pfl_labname_tr).attr('id','tst_ordered_lab');
          var pkg_pfl_labname_td= document.createElement('td');
          $(pkg_pfl_labname_td).addClass("tst_pfl_success_det");
          $(pkg_pfl_labname_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Lab name");
          $(pkg_pfl_labname_td).css('borderRight','1px solid #ddd');
          var pkg_pfl_lab_name_td = document.createElement('td');
          $(pkg_pfl_lab_name_td).addClass("tst_pfl_success_det");
          $(pkg_pfl_lab_name_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.labName);
          var pkg_pfl_orderid_tr = document.createElement('tr');
          $(pkg_pfl_orderid_tr).addClass("pkg_pfl_order_class");
          var pkg_pfl_orderid_td = document.createElement('td');
          $(pkg_pfl_orderid_td).addClass("pkg_pfl_success_det");
          $(pkg_pfl_orderid_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"OrderId");
          $(pkg_pfl_orderid_td).css('borderRight','1px solid #ddd');
          var pkg_pfl_order_id_td = document.createElement('td');
          $(pkg_pfl_order_id_td).addClass("pkg_pfl_success_det");
          $(pkg_pfl_order_id_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.orderId);
          var pkg_pfl_ptnt_name_tr = document.createElement('tr');
          $(pkg_pfl_ptnt_name_tr).addClass("pkg_pfl_order_class");
          $(pkg_pfl_ptnt_name_tr).attr('id','order_name');
          var pkg_pfl_ptnt_name_td = document.createElement('td');
          $(pkg_pfl_ptnt_name_td).addClass("pkg_pfl_success_det");
          $(pkg_pfl_ptnt_name_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Name");
          $(pkg_pfl_ptnt_name_td).css('borderRight','1px solid #ddd');
          var pkg_pfl_ptntname_td = document.createElement('td');
          $(pkg_pfl_ptntname_td).addClass("pkg_pfl_success_det");
          $(pkg_pfl_ptntname_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.patientName);
          var pkg_pfl_apptime_tr = document.createElement('tr');
          $(pkg_pfl_apptime_tr).addClass("pkg_pfl_order_class");
          var pkg_pfl_apptime_td = document.createElement('td');
           $(pkg_pfl_apptime_td).addClass("pkg_pfl_success_det");
           $(pkg_pfl_apptime_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Appointment Timing");
           $(pkg_pfl_apptime_td).css('borderRight','1px solid #ddd');
           var pkg_pfl_appt_time_td = document.createElement('td');
           $(pkg_pfl_appt_time_td).addClass("pkg_pfl_success_det");
           $(pkg_pfl_appt_time_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.apptTime);
           var pkg_pfl_close_button = document.createElement('button');
           $(pkg_pfl_close_button).addClass("pkg_btn_pfl_close_modal");
           $(pkg_pfl_close_button).attr('type','button');
           $(pkg_pfl_close_button).html("Close");
           $(pkg_pfl_close_button).css('float','right');
           $(pkg_pfl_close_button).css('marginTop','8px');
           $(pkg_pfl_close_button).css('width','80px');
           $(pkg_pfl_close_button).css('borderRadius','5px');
           $(pkg_pfl_close_button).css('color','white');
           $(pkg_pfl_close_button).css('background','rgb(236,73,73)');
           $(pkg_pfl_close_button).css('border','0px');
           $(pkg_pfl_close_button).css('marginRight','20px');
           $(pkg_pfl_labname_tr).append(pkg_pfl_labname_td);
           $(pkg_pfl_labname_tr).append(pkg_pfl_lab_name_td);
           $(pkg_pfl_orderid_tr).append(pkg_pfl_orderid_td);
           $(pkg_pfl_orderid_tr).append(pkg_pfl_order_id_td);
           $(pkg_pfl_ptnt_name_tr).append(pkg_pfl_ptnt_name_td);
           $(pkg_pfl_ptnt_name_tr).append(pkg_pfl_ptntname_td);
           $(pkg_pfl_apptime_tr).append(pkg_pfl_apptime_td);
           $(pkg_pfl_apptime_tr).append(pkg_pfl_appt_time_td);
           $(pkg_pfl_ordered_table).append(pkg_pfl_labname_tr);
           $(pkg_pfl_ordered_table).append(pkg_pfl_orderid_tr);
           $(pkg_pfl_ordered_table).append(pkg_pfl_ptnt_name_tr);
           $(pkg_pfl_ordered_table).append(pkg_pfl_apptime_tr);
           $(pkg_pfl_order_element).append(pkg_pfl_booking_heading);
           $(pkg_pfl_order_element).append(pkg_pfl_success_element);
           $(pkg_pfl_order_element).append(pkg_pfl_ordered_table);
           $(pkg_pfl_order_element).append(pkg_pfl_close_button);
           $("#pkg_pfl_modal_confirmpage").append(pkg_pfl_confirm_closing);
           $("#pkg_pfl_modal_confirmpage").append(pkg_pfl_order_element);
           $(".pkg_pfl_confirm_close").on('click',function () 
           {
               $(pkg_pfl_confirm_page).modal().close(); 
           });//click
           $(".pkg_btn_pfl_close_modal").on('click',function () 
           {
               $(pkg_pfl_confirm_page).modal().close(); 
           });//click btn
          }//else
        }//success
        });//ajax
     }//fnctn endng  