<?php
echo json_encode(array('success' => true, 'users' => array(
    array(
        "id" => 1,
        "login" => "lsudol",
        "password" => "123",
        "firstName" => "Łukasz",
        "lastName" => "Sudoł",
        "email" => "lukasz.sudol@appieweb.com",
        "age" => 25
    ),
    array(
        "id" => 2,
        "login" => "mkopec",
        "password" => "123",
        "firstName" => "Marcin",
        "lastName" => "Kopeć",
        "email" => "marcin.kopec@appieweb.com",
        "age" => 26
    ),
    array(
        "id" => 3,
        "login" => "pkowal",
        "password" => "123",
        "firstName" => "Paweł",
        "lastName" => "Kowal",
        "email" => "pawel.kowal@appieweb.com",
        "age" => 22
    ),
    array(
        "id" => 4,
        "login" => "lmazur",
        "password" => "123",
        "firstName" => "Łukasz",
        "lastName" => "Mazur",
        "email" => "lukasz.mazur@appieweb.com",
        "age" => 24
    )
)));