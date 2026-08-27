<?php
// إعدادات الكاش
$cache_file = 'm3u8_cache.txt';
$cache_time = 7; // مدة التخزين بالثواني (يجب أن تكون أقل من 10 لتتناسب مع مدة البث)

// التحقق مما إذا كان ملف الكاش موجوداً وحديثاً (عمره أقل من 7 ثوانٍ)
if (file_exists($cache_file) && (time() - filemtime($cache_file)) < $cache_time) {
    // إذا كان الكاش حديثاً، جلب البيانات منه مباشرة
    $response = file_get_contents($cache_file);
} else {
    // إذا لم يكن هناك كاش أو كان قديماً، نقوم بجلب البيانات من المصدر
    $source_url = "https://bui2.buildapiplatform.cfd/s2multi/mkssolyutlxx/index.html";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $source_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
    curl_setopt($ch, CURLOPT_TIMEOUT, 5); // حد أقصى للاتصال 5 ثوانٍ حتى لا يعلق السيرفر
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "Referer: https://bui2.buildapiplatform.cfd/"
    ]);

    $raw_response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // التحقق من نجاح جلب البيانات
    if ($raw_response && $http_code == 200) {
        // ترتيب البيانات
        $response = str_replace(" #EXT", "\n#EXT", $raw_response);
        $new_base_url = "https://bui2.buildapiplatform.cfd/s2multi/mkssolyutlxx/";
        $response = preg_replace('/,\s*[a-zA-Z0-9]+_([0-9]+\-[0-9]+\.js)/', ",\n" . $new_base_url . "$1", $response);
        
        // حفظ النسخة الجديدة في ملف الكاش
        file_put_contents($cache_file, trim($response));
    } else {
        // في حال فشل جلب البيانات من المصدر لسبب ما، نحاول عرض آخر كاش متاح
        if (file_exists($cache_file)) {
            $response = file_get_contents($cache_file);
        } else {
            die("خطأ: تعذر جلب البيانات ولم يتم العثور على نسخة محفوظة.");
        }
    }
}

// إرسال الترويسات الصحيحة للتطبيق
header("Content-Type: application/vnd.apple.mpegurl");
header("Access-Control-Allow-Origin: *"); 
header("Cache-Control: no-cache, must-revalidate"); // منع التطبيق من كيشة الرابط داخلياً

echo trim($response);
?>
