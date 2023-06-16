<?php


$name1= "Sasha";
$name2 = "Sergey";
// ...
// Arrays * ptr
// Structs
// Objects (and class)

// List --> Stack, Queue, BTree
// C# --> ICollection

$name[0] = "Sasha";
$name[1] = "Sergey";

array_push($name, "Sveta");
$name[3] = 1;
$name[4] = 3.1426;
$name[6] = "Any type";
$name["key"] = "var";


echo "<ul>";
for ($i = 0; $i < sizeof($name); $i++) {
    echo "<li>" . $i . " - " . $name[$i] . "</li>";
}
echo "</ul>";

$c = 0;
echo "<ul>";
while (sizeof($name) > 0) {
    echo "<li>" . $c++ . " - " . array_pop($name) . "</li>";
}
echo "</ul>";
