alert("hey hey hey");
var globalAction='';
var targetUrl='';
var dest_space_name='';
var redirection_url='';
var source_html_url='';
var src_space_name='';
var to_place_blog_url='';
var global_blog_place_url='';
var browserName='';

var CONTENT_TYPE_DICUSSION = 'discussion';
var CONTENT_TYPE_BLOG = 'post';
var CONTENT_TYPE_POLLS = 'poll';
var CONTENT_TYPE_FILES = 'file';
var CONTENT_TYPE_DOCUMENT = 'document';
var CONTENT_TYPE_IDEA = 'idea';

var noOfFile= 0;
var noOfFileExecuted=0;
var noOfFileFailed = 0;

function movendelete(action,srcgroup_place_url,target_groupurl,Grp_file_json,Grp_doc_json,Grp_disc_json,Grp_idea_json,Grp_poll_json,Grp_blog_json,dest_space_name1,redirection_url1,source_html_url1,src_space_name1,to_place_blog_url1,browserName1) {
globalAction = action;

dest_space_name=dest_space_name1;
redirection_url=redirection_url1;
source_html_url=source_html_url1;
src_space_name=src_space_name1;
browserName=browserName1;

var	discussionSplitValue = Grp_disc_json.split(";");
var fileSplitValue = Grp_file_json.split(";");			
var documetSplitValue = Grp_doc_json.split(";");
var blogSplitValue = Grp_blog_json.split(";");
var ideaSplitValue = Grp_idea_json.split(";");
var pollSplitValue = Grp_poll_json.split(";");


noOfFile= 0;
noOfFileExecuted=0;
noOfFileFailed = 0;

//For calculating the number of files.
for (var i = 0; i <discussionSplitValue.length; i++) {
if(discussionSplitValue[i] != ''){
noOfFile = noOfFile + 1;
}
}
for (var i = 0; i <fileSplitValue.length; i++) {
if(fileSplitValue[i] != ''){
noOfFile = noOfFile + 1;
}
}
for (var i = 0; i <documetSplitValue.length; i++) {
if(documetSplitValue[i] != ''){
noOfFile = noOfFile + 1;
}
}
for (var i = 0; i <pollSplitValue.length; i++) {
if(pollSplitValue[i] != ''){
noOfFile = noOfFile + 1;
}
}
for (var i = 0; i <ideaSplitValue.length; i++) {
if(ideaSplitValue[i] != ''){
noOfFile = noOfFile + 1;
}
}
for (var i = 0; i <blogSplitValue.length; i++) {
if(blogSplitValue[i] != ''){
noOfFile = noOfFile + 1;
}
}
//alert("noOfFile = "+noOfFile);

var templateSpace='';

$("#start_copying_button").hide();
$("#change_contents").hide();
$("#button_div").hide();

if(browserName=="MSIE" && globalAction == 'move')
{
var ieSpan='<span id="ieSpan" style="font-family:Tahoma;font-size:12px;font-color:#3778C7;"></span>';
document.getElementById("selected_items").innerHTML=ieSpan; 
}
else if(browserName=="MSIE" && globalAction == 'delete')
{
var ieSpan='<span id="ieSpan" style="font-family:Tahoma;font-size:12px;font-color:#3778C7;"></span>';
document.getElementById("selected_items").innerHTML=ieSpan; 
}
else
{
var iframe = '<iframe id="frame1" src = "javascript:"&nbsp;" style="width:650px;height:90px;margin-top:0px;font-family:Tahoma"></iframe>';
document.getElementById("selected_items").innerHTML=iframe;  
$("#copyTo").text("Moving this:");
}


var str='';
var str2='';

if(globalAction == 'move')
{
str='Moving ';
str2='Intializing Moving';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Intializing Deleting';
}

if(browserName=="MSIE" && globalAction == 'move')
{
var finalurl=redirection_url+'/content';
document.getElementById("ieSpan").innerHTML = 'The selected contents are being moved. The moved contents will appear here in a short while: <a href='+finalurl+'>'+dest_space_name+' - Contents</a>';
}
else if(browserName=="MSIE" && globalAction == 'delete')
{
var finalurl=source_html_url+'/content';
document.getElementById("ieSpan").innerHTML = 'The selected contents have been deleted. This can be verified here: <a href='+finalurl+'>'+src_space_name+' - Contents</a>';
}
else
{
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = str+"in Progress.<br>Please leave this window open until the "+str+"process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str2.fontcolor("#3778C7")+"</span>";	
}

if(discussionSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving discussions';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting discussions';
}
for (var i = 0; i <discussionSplitValue.length; i++) {
templateSpace = discussionSplitValue[i];
if(discussionSplitValue[i] != ''){
getContent(discussionSplitValue[i],target_groupurl,CONTENT_TYPE_DICUSSION);
}
}
}

if(fileSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving files';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting files';
}
for (var i = 0; i <fileSplitValue.length; i++) {
templateSpace = fileSplitValue[i];
if(fileSplitValue[i] != ''){
getContent(fileSplitValue[i],target_groupurl,CONTENT_TYPE_FILES);
}
}
}

if(documetSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving documents';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting documents';
}

for (var i = 0; i <documetSplitValue.length; i++) {
templateSpace = documetSplitValue[i];
if(documetSplitValue[i] != ''){
getContent(documetSplitValue[i],target_groupurl,CONTENT_TYPE_DOCUMENT);
}
}
}

if(pollSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving polls';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting polls';
}

for (var i = 0; i <pollSplitValue.length; i++) {
templateSpace = pollSplitValue[i];
if(pollSplitValue[i] != ''){
getContent(pollSplitValue[i],target_groupurl,CONTENT_TYPE_POLLS);
}
}
}

if(ideaSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving ideas';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting ideas';
}

for (var i = 0; i <ideaSplitValue.length; i++) {
templateSpace = ideaSplitValue[i];
if(ideaSplitValue[i] != ''){
getContent(ideaSplitValue[i],target_groupurl,CONTENT_TYPE_IDEA);
}
}
}

if(blogSplitValue.length > 1) {
var str='';
var str2='';
global_blog_place_url=to_place_blog_url1;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving blogs';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting blogs';
}

for (var i = 0; i <blogSplitValue.length; i++) {
templateSpace = blogSplitValue[i];
if(blogSplitValue[i] != ''){
getContent(blogSplitValue[i],to_place_blog_url1,CONTENT_TYPE_BLOG);
}
}
}
}

function getContent(source,target_groupurl,contentType) {

if(CONTENT_TYPE_BLOG == contentType && (source != 'null' || source != '')){
osapi.jive.corev3.contents.get({
type : contentType,
fields: '@all',
uri: source
}).execute(onContentFetchForBlog);
}
else {
osapi.jive.corev3.contents.get({
type : contentType,
fields: '@all',
uri: source
}).execute(onContentFetch);
}
}

function onContentFetch(response) {
if (response.error) {
console.log("json "+JSON.stringify(response));
return;
}
if(globalAction == 'move'){
response.parent=targetUrl;
response.update().execute(updateResponse);
}
else if (globalAction == 'delete'){
response.destroy().execute(updateResponse);
}
}

function onContentFetchForBlog(response) {
if (response.error) {
console.log("json "+JSON.stringify(response));
return;
}

var postDisc;

if(globalAction == 'move'){
response.parent=global_blog_place_url;
response.update().execute(updateResponse);
}
else if (globalAction == 'delete'){
response.destroy().execute(updateResponse);
}
}

function updateResponse(response) {
if (response.error) {
console.log("jsonError "+JSON.stringify(response));
noOfFileFailed = noOfFileFailed + 1;
return;
}

noOfFileExecuted = noOfFileExecuted + 1;

var str='';
var str2='';
var type = response.type;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving content';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting content';
}

if(browserName=="MSIE")
{
var finalurl=redirection_url+'/content';
document.getElementById("ieSpan").innerHTML = 'The selected contents are being moved. The moved contents will appear here in a short while: <a href='+finalurl+'>'+dest_space_name+' - Contents</a>';
}
else
{
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = str+"in Progress.<br>Please leave this window open until the "+str+"process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str2.fontcolor("#3778C7")+"</span>";
}

//if(noOfFileExecuted == noOfFile) {
if(globalAction == 'move')
{
var finalurl=redirection_url+'/content';

if(browserName=="MSIE")
{
var finalurl=redirection_url+'/content';
document.getElementById("ieSpan").innerHTML = 'The selected contents are being moved. The moved contents will appear here in a short while: <a href='+finalurl+'>'+dest_space_name+' - Contents</a>';
}
else
{
alert('adsfsafdasf');
$("#from_place").show();
$("#to_place").show();
$("#cmdu").hide();
$("#button_div").show();
$("#src_place").show();
$('#selected_items').css("margin-top", "-105px");
$('#button_div').css("margin-top", "10px");
$("#select_items_button").show();
var str='Moving completed. Please click   <a href='+finalurl+'>here </a>  for the new location of your content.';
document.getElementById("frame1").contentDocument.body.innerHTML = "Note.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";
}

}
else if (globalAction == 'delete')
{

if(browserName=="MSIE")
{
var finalurl=source_html_url+'/content';
document.getElementById("ieSpan").innerHTML = 'The selected contents have been deleted. This can be verified here: <a href='+finalurl+'>'+src_space_name+' - Contents</a>';
}
else
{
alert('adsfsafdasf');
$("#cmdu").hide();
$("#src_place").show();
$('#del_place').css("margin-left", "250px");
$('#del_select_items_button').css("margin-left", "250px");
$("#del_place").show();
$("#deleteTo").show();
$("#del_select_items_button").show();

var str='Deleting completed. You will now be redirected to "'+src_space_name+'".';
document.getElementById("frame1").contentDocument.body.innerHTML = "Note.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";

/*$("#stylized").fadeOut(5000,function(){
window.location = source_html_url+'/content';   
});*/
}

}
//} 
}