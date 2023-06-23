<?php
session_start();
$_SESSION['myTest'] = "Hello";
$_SESSION['myCreditCart'] = "4441 1144";
$_SESSION['huck'] = "<script>alert (\"Hello hackers \")</script>";
?>
<html>
<body>
<h1>Привет</h1>
<div><?php echo session_id(); ?></div>
<div><?php echo $_SESSION['huck']  ;?></div>
</body>
</html>
<?php
header("HTTP/1.1 200");
setcookie("myTest", "myVal");


