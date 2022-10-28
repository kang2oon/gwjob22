---
description: 공통 사용 프로토타입 모듈
---

# 기업채용콘텐츠 제작

### 1. 기초 파일 생성

* 기업콘텐츠 제작에 사용될 기본 프레임용 HTML 파일을 다운로드 받는다.
* 파일명은 기업의 영문명으로 변경하여 작업을 시작한다.\
  (ex: inkium.html - 기업 영문명은 별도 제공)

{% code lineNumbers="true" %}
```markup
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="wclassth=device-wclassth, initial-scale=1, maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <title class="comName">기업명</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.kldp.org/fonts/Free/S-Core/css/scdream.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/billboard.js/3.1.2/billboard.min.css">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link href="https://gwjob.kgoon.pw/proto/inc/pt-common.css" rel="stylesheet">
    <style>
	/* 기업별 스타일을 추가해주세요 */
	@media all and (max-width:1024px) { }
	
	@media all and (max-width:768px) { }

	@media all and (max-width:640px) { }

	@media all and (max-width:480px) { }

    </style>
    <script src="//code.jquery.com/jquery-1.12.2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/billboard.js@1.11.0-next.1/dist/billboard.pkgd.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
</head>
<body>
	<!-- 모듈 추가 및 수정 -->
	

<script>
    $(document).ready(function(){
    // 복사한 스크립트 추가영역

    });
</script>
</body>
</html>
```
{% endcode %}
