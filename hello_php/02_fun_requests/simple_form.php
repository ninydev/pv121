<?php

// --- Сторона сервера (какие данные о, объекте у нас есть на backEnd
$person = [];

if(isset($_REQUEST['firstName'])) {
    $person["firstName"] = $_REQUEST['firstName'];
    $person["secondName"] = $_REQUEST['secondName'];
    ;$person["are"] = $_REQUEST['are'];
}
else {
    $person["firstName"] = "Oleksander";
    $person["secondName"] = "Nykytin";
    $person["are"] = 46;
}
?>

<p> Сторона клиента (html построен на севере)  </p>
<form method="post" action="<?= $_SERVER['PHP_SELF']?>?someVar=someVal">
    <label>First Name <input type="text" name="firstName" value="<?= $person["firstName"] ?>"></label><br>
    <label>Second Name <input type="text" name="secondName" value="<?= $person["secondName"] ?>"></label><br>
    <label>Age <input type="number" name="are" value="<?= $person["are"] ?>"></label><br>
    <input type="submit">
</form>




<hr>
<footer>
    <div>GET:
<?php
    var_dump($_GET);
?>
    </div>
    <div>POST:
<?php
    var_dump($_POST);
?>
    </div>
    <div>_REQUEST:
        <?php
        var_dump($_REQUEST);
        ?>
    </div>
    <div>_FILES:
        <?php
        var_dump($_FILES);
        ?>
    </div>
    <div>_COOKIE:
        <?php
        var_dump($_COOKIE);
        ?>
    </div>
</footer>


