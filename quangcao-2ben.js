var vtlai_remove_fads=false;
function vtlai_check_adswidth()
{
if(vtlai_remove_fads)
{
document.getElementById(&#8216;left_ads_float&#8217;).style.display=&#8217;none&#8217;;
document.getElementById(&#8216;right_ads_float&#8217;).style.display=&#8217;none&#8217;;
return;
}else if(document.cookie.indexOf(&#8216;vtlai_remove_float_ads&#8217;)!=-1)
{
vtlai_remove_fads=true;
vtlai_check_adswidth();
return;
}
else
{
var lwidth=parseInt(document.body.clientWidth);
if(lwidth&lt;1110)
{
document.getElementById(&#8216;left_ads_float&#8217;).style.display=&#8217;none&#8217;;
document.getElementById(&#8216;right_ads_float&#8217;).style.display=&#8217;none&#8217;;
}
else
{
document.getElementById(&#8216;left_ads_float&#8217;).style.display=&#8217;block&#8217;;
document.getElementById(&#8216;right_ads_float&#8217;).style.display=&#8217;block&#8217;;
}
setTimeout(&#8216;vtlai_check_adswidth()&#8217;,10);
}
}