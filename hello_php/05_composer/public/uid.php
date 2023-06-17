<?php

use Symfony\Component\Uid\Factory\UuidFactory;

require_once ("../vendor/autoload.php");

$uuidFactory = new UuidFactory();

$uuid = $uuidFactory->create()->toRfc4122();
$randomBasedUuid = $uuidFactory->randomBased()->create()->toRfc4122();
$timestampBased = $uuidFactory->timeBased()->create()->toRfc4122();

echo "uuid => $uuid <br>\n";
echo "randomBasedUuid => $randomBasedUuid <br>\n";
echo "timestampBased => $timestampBased <br>\n";
