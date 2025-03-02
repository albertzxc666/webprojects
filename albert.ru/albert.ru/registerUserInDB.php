<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <title>Document</title>
</head>

<body>
    <div id="page">
        <div id="header">
            <h1> Сайфутдинов Альберт Рамилевич (веб-разработчик) </h1>   
        </div>
            <div id="main">
                <div id="menu">
                <h2>
                    <p> <a href="index.html">Главная</a></p>
                    <p> <a href="jsexamples.html">Примеры JS</a></p>
                    <p> <a href="colorcalcform.html">Форма цвета</a></p>
                    <p> <a href="theme3.html">Тема3</a></p>
                    <p> <a href="registrationForm.html">Форма регистрации</a></p>
                </h2>
            </div>
    
            <div id="content">
                <?php
                    //echo "<h1>обработка формы регистрации</h1>";
                    if($_POST){
                        $firstName=trim($_POST['firstName']);
                        $lastName=trim($_POST['lastName']);
                        $email=trim($_POST['email']);
                        $city=trim($_POST['city']);
                        $age=trim($_POST['age']);
                        $pass=trim($_POST['pass']);
                        $gender=trim($_POST['gender']);
                        echo "<br> Данные: $firstName, $lastName, $email, $city, $age, $pass, $gender";
                        $error = false; 
                        $errortext = "<p><b><font colot='red'>При регистрации возникли следущие ошибки </font></b></p> <ul>";
                    }
                    if(empty($email)){
                        $error=true;
                        $errortext.="<li><font colot='red'> Вы не заполнили поле email! </font></li>";
                    } 
                    if(!preg_match("/^[-0-9a-z_\.]+@[-0-9a-z^\.]+\.[a-z]{2,4}$/i", $email)){
                        $error=true;
                        $errortext.="<li><font colot='red'> Поле email заполнено неверно! </font></li>";
                    }    
                    if(empty($firstName)){
                        $error=true;
                        $errortext.="<li><font colot='red'> Вы не заполнили поле имя! </font></li>";
                    }  
                    if(empty($lastName)){
                        $error=true;
                        $errortext.="<li><font colot='red'> Вы не заполнили поле фамилия! </font></li>";
                    }
                    if(empty($city)){
                        $error=true;
                        $errortext.="<li><font colot='red'> Вы не заполнили поле город! </font></li>";
                    }
                    if(empty($age)){
                        $error=true;
                        $errortext.="<li><font colot='red'> Вы не заполнили поле возраст! </font></li>";
                    }  
                    if(empty($pass)){
                        $error=true;
                        $errortext.="<li><font colot='red'> Вы не заполнили поле пароль! </font></li>";
                    }  
                    if(!preg_match("/^[a-zA-Z0-9]{3,20}$/i", $pass)){
                        $error=true;
                        $errortext.="<li><font colot='red'> Убедитесь, что пароль нормальный (от 3 до 20 символов)! </font></li>";
                    }
                    if($error){
                        echo $errortext;
                    } else{

                        //подключиться к БД
                        echo "Всё хорошо!";
                    }
                ?>  
            </div>
        </div>
        <div id="projects">
            <h2>
                Мои проекты
            </h2>
        </div>
        <div class="block"> 
                Проект1
        </div>

        <div class="block">
                Проект2
        </div>

        <div class="block">
                Проект3
        </div>
        
</body>

</html>
