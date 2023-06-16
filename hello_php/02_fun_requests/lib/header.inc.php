<?php

/**
 * Строим заголовок сайта
 * @param $title - название
 * @return string - сам заголовок
 */
function buildHeader ($title) {
    // GLOBAL $siteName;
    var_dump($GLOBALS);
    $GLOBALS['siteName'] = "Hacking";
    return "<header><h1>" . $GLOBALS['siteName'] . " - $title</h1></header>";
}
