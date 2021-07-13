<?php
	$name      = filter_var($_POST["name-user"], FILTER_SANITIZE_STRING);
	$email      = filter_var($_POST["mail-user"], FILTER_SANITIZE_STRING);
	$phone      = filter_var($_POST["phone-user"], FILTER_SANITIZE_STRING);
	$subject      = filter_var($_POST["subject-user"], FILTER_SANITIZE_STRING);
	$message      = filter_var($_POST["textarea-user"], FILTER_SANITIZE_STRING);
	$errors;

	

	if (empty($name)) {
			$errors .= "write your name? please!";
	} else {
$user_name = $name;
	}

	$to = "";
	$mailBody = "Заявка\n";
	$mailBody .= "Поле имя: " . $name . "\n";
	$mailBody .= "Поле почта: " . $email . "\n";
	$mailBody .= "Телефон: " . 	$phone . "\n";
	$mailBody .= "Тема письма: " . $subject . "\n";
	$mailBody .= "Сообщение: " . 	$message . "\n";

	if (mail($to, 'Заявка по сервису', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>