<?php

require_once ("./lib/Person.php");
require_once ("./lib/Person.php");

$p = new Person();

$p->someVar = " Some Val";
echo $p->someVar;
echo $p->someVar2;
$p->echoFullName();

// echo $p->noName;

// var_dump($p);

echo "<hr>";
echo $p;
echo "<hr>";
