<?php

// 1. رابط البث (تأكد من تحديث الـ Token إذا توقف)
$url = "https://livetv.aflam4you.net/playerae.php?vid=68&aflam_s=1&aflam_k=9075452424972593";

// 2. إعدادات البروكسي (ضع بياناتك هنا)
$proxy = '1.2.3.4:8080'; // عنوان الـ IP والمنفذ
// $proxyAuth = 'user:password'; // إذا كان البروكسي يحتاج كلمة مرور، فك التعليق عن هذا السطر

// 3. هوية متصفح جوجل كروم (User-Agent)
$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

$ch = curl_init();

// إعدادات الطلب
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // تتبع أي تحويلات تلقائية

// إعداد البروكسي
curl_setopt($ch, CURLOPT_PROXY, $proxy);
// curl_setopt($ch, CURLOPT_PROXYUSERPWD, $proxyAuth); // فك التعليق إذا لزم الأمر

// خدعة المتصفح والمصدر
curl_setopt($ch, CURLOPT_USERAGENT, $userAgent);
curl_setopt($ch, CURLOPT_REFERER, "https://livetv.aflam4you.net/"); // إجباري لكي لا يرفض السيرفر الطلب

// تنفيذ الطلب
$response = curl_exec($ch);

// فحص الأخطاء
if(curl_errno($ch)){
    echo 'خطأ في الاتصال: ' . curl_error($ch);
} else {
    // عرض النتيجة (هنا سيظهر لك كود الصفحة كما يراها كروم)
    echo $response;
}

curl_close($ch);
?>
