    <?php

   $lines = file("src/word.txt", FILE_IGNORE_NEW_LINES);
   $lines = array_map(function($v){return '"'. $v . '"' . ',' . PHP_EOL;}, $lines);
   file_put_contents("src/word.txt", $lines);
    ?>