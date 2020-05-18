<?php $call = curl_init();
$funcname = "picker_ajax";
curl_setopt($call, CURLOPT_URL,
	"https://www.youtube.com/".$funcname."?".$_SERVER['QUERY_STRING']);
curl_setopt($call, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($call, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
foreach (apache_request_headers() as $headers => $value)
curl_setopt($call, CURLOPT_HTTPHEADER, array($headers));
if ($_SERVER['REQUEST_METHOD'] != "GET")
eval("curl_setopt(\$call, CURLOPT_".$_SERVER['REQUEST_METHOD'].", 1);");
$data = curl_exec($call);
header("Content-Type: application/json");
header("Content-Disposition: attachment; filename=".$funcname);
die($data); ?>