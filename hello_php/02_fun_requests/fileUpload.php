
<?php
// Проверяем, был ли отправлен файл
if(isset($_FILES['someFile'])) {
    $file = $_FILES['someFile'];

    // Папка, в которую нужно сохранить файл
    $targetDirectory = '/home/keeper/PhpstormProjects/pv121/hello_php/store/';

    // Полный путь к файлу
    $targetPath = $targetDirectory . $file['name'];

    // Перемещаем файл из временной директории в целевую
    if(move_uploaded_file($file['tmp_name'], $targetPath)) {
        echo "Файл успешно сохранен.";
    } else {
        echo "Ошибка при сохранении файла.";
    }
}
?>


<form action="<?= $_SERVER['PHP_SELF'] ?>" method="post" enctype="multipart/form-data">
    <input type="file" name="someFile">
    <input type="submit">
</form>

<div>_FILES:
    <?php
    var_dump($_FILES);
    ?>
</div>
