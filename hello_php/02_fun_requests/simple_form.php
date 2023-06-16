<?php

// --- Сторона сервера (какие данные о, объекте у нас есть на backEnd
$person = [];
$person["firstName"] = "Oleksander";
$person["secondName"] = "Nykytin";
;$person["are"] = 46;
?>

<p> Сторона клиента (html построен на севере)  </p>
<form method="get" action="<?= $_SERVER['PHP_SELF']?>">
    <label>First Name <input type="text" name="firstName" value="<?= $person["firstName"] ?>"></label><br>
    <label>Second Name <input type="text" name="secondName" value="<?= $person["secondName"] ?>"></label><br>
    <label>Age <input type="number" name="are" value="<?= $person["are"] ?>"></label><br>
    <input type="submit">
</form>

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
</footer>


