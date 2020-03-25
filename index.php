<!DOCTYPE html>
<!-- saved from url=(0035)https://www.gov.br/casacivil/pt-br# -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">

<!--Head-->
<?php include 'head.php'; ?>
<body onload="functionUtils()" class="default-header-template portal-institucional cover-layout-layout-vazio template-view portaltype-collective-cover-content site-pt-br section-pagina-inicial userrole-anonymous" data-base-url="https://www.gov.br/casacivil/pt-br/pagina-inicial" data-portal-url="https://www.gov.br/casacivil" dir="ltr">

     <!-- Google Tag Manager (noscript) -->
    <!--Tag Manager-->
    <?php include 'tag-manager.php'; ?>
    <!--Header-->
    <?php include 'header.php'; ?>
    <!--Header-->
    <?php include 'body.php'; ?>
    <!--Scripts JavaScript-->
    <?php wp_footer(); ?>
</html>

<script>
    function functionUtils() {
        var elementImg = GetElementInsideContainer('div-imagem-principal', 'IMG');
        elementImg.removeAttribute('style'); 
    }
    function GetElementInsideContainer(containerID, tagName) {
        var elm = {};
        var elms = document.getElementById(containerID).getElementsByTagName("*");
        for (var i = 0; i < elms.length; i++) {
            if(elms[i].tagName === 'IMG') {
                elm = elms[i];
            }
        }
        return elm;
     }
</script>