<?php
//
//
//
//require_once ("../vendor/autoload.php");
//
//use Symfony\Component\Mailer\Mailer;
//use Symfony\Component\Mailer\MailerInterface;
//use Symfony\Component\Mime\Email;
//use Symfony\Component\Mailer\Transport;
//use Symfony\Component\Mailer\Transport\Smtp\SmtpTransport;
//
//// Создание объекта Transport с настройками SMTP-сервера
//$transport = new SmtpTransport('smtp.ukr.net', 465);
//$transport->setUsername('nika_web@ukr.net');
//
//// Создание объекта Email и настройка его параметров
//$email = (new Email())
//    ->from('nika_web@ukr.net')
//    ->to('keeper@ninydev.com')
//    ->subject('Тема письма')
//    ->text('Текст письма.');
//
//// Создание объекта Mailer с использованием Transport
//$mailer = new Mailer($transport);
//
//// Отправка письма
//$mailer->send($email);
