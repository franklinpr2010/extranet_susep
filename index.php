<!DOCTYPE html>
<!-- saved from url=(0035)https://www.gov.br/casacivil/pt-br# -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">

<!--Head-->
<?php include 'head.php'; ?>
<!--configuração da página inicial -->
<?php
$args = array(
    'post_type' => 'page',
    //Vai filtrar pelo slug da pagina-inicial
    'pagename' => 'pagina-inicial'
);
$the_query = new WP_Query($args)
//se tiver posts
?>
<?php while( $the_query->have_posts()) :  $the_query->the_post(); ?>
<title><?php the_title(); ?></title>
<?php endwhile; ?>

<body onload="functionUtils()" class="default-header-template portal-institucional cover-layout-layout-vazio template-view portaltype-collective-cover-content site-pt-br section-pagina-inicial userrole-anonymous" data-base-url="https://www.gov.br/casacivil/pt-br/pagina-inicial" data-portal-url="https://www.gov.br/casacivil" dir="ltr">
     <!-- Google Tag Manager (noscript) -->
    <!--Tag Manager-->
    <?php include 'tag-manager.php'; ?>
    <!--Header-->
    <?php include 'header-susep.php'; ?>
    <!--Header-->
    <?php include 'body.php'; ?>
    <?php include 'libras.php'; ?>

    <?php include 'footer.php'; ?>
    <div id="viewlet-below-content">
        <div class="voltar-topo">
            <a href="https://www.gov.br/casacivil/pt-br#wrapper">Voltar ao topo</a>
        </div>
        <div class="texto-copyright">
            <span omit-tag="">Todo o conteúdo deste site está publicado sob a licença</span> <a rel="license" href="https://creativecommons.org/licenses/by-nd/3.0/deed.pt_BR">Creative Commons Atribuição-SemDerivações 3.0 Não Adaptada</a>.
        </div>

    </div>
    <!--Scripts JavaScript-->
    <?php wp_footer(); ?>

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

    
        jQuery(function($) {
            if (typeof($.datepicker) != "undefined") {
                $.datepicker.setDefaults(
                    jQuery.extend($.datepicker.regional['pt-BR'], {
                        dateFormat: 'dd/mm/yy'
                    }));
            }
        });

</script>
<script class="social-links-script">
        $(document).ready(function () {
            for (let tile of $('.nitf-basic-tile')) {
                if (!$(tile).find('.social-links').length) {
                    var url = '#'
                    $(tile).find('a').each(function(){
                        url = $(this).attr('href');
                    });
                    var titulo = '#'
                    $(tile).find('a').each(function(){
                        titulo = $(this).text();
                    });
                    var imagem = url+'/logo.png'
                    $(tile).find('img').each(function(){
                        imagem = $(this).attr('src');
                    });
                    var link_telegram = $('<a title="Telegram" class="link-whatsapp"><i class="fab fa-telegram-plane"></i></a>');
                    $(link_telegram).attr('href', 'https://telegram.me/share/url?url='+url);
                    var link_whatsapp = $('<a title="WhatsApp" class="link-whatsapp"><i class="fab fa-whatsapp"></i></a>');
                    $(link_whatsapp).attr('href', 'https://api.whatsapp.com/send?text='+url);
                    var link_facebook = $('<a title="Facebook"><i class="fab fa-facebook-f"></i></a>');
                    $(link_facebook).attr('href', 'http://www.facebook.com/sharer.php?u='+url);
                    var link_twitter = $('<a title="Twitter"><i class="fab fa-twitter"></i></a>');
                    $(link_twitter).attr('href', 'https://twitter.com/share?text='+titulo+'&url='+url);
                    var link_linkedin = $('<a title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>');
                    $(link_linkedin).attr('href', 'https://www.linkedin.com/shareArticle?mini=true&title='+titulo+'&url='+url);
                    var link_google = $('<a title="Google+"><i class="fab fa-google-plus-g"></i></a>');
                    $(link_google).attr('href', 'https://plus.google.com/share?url='+url);
                    var link_email = $('<a title="E-mail"><i class="fas fa-at"></i></a>');
                    $(link_email).attr('href', url+'/sendto_form');
                    var link_pinterest = $('<a title="Pinterest"><i class="fab fa-pinterest-p"></i></a>');
                    $(link_pinterest).attr('href', 'https://pinterest.com/pin/create/button/?url='+url+'&media='+imagem+'&description='+titulo);
                    var link_clipboard = $('<a class="link-clipboard" onclick="event.preventDefault()"><i class="fas fa-link"></i></a>');
                    $(link_clipboard).attr('href', url);
                    $(link_clipboard).attr('title', $('#viewlet-tileshare')[0].dataset.titleLink);
                    var link_x = $('<a class="toggle-social-links"><i class="fas fa-share-alt"></i><i class="fas fa-times"></i></a>');
                    var div_principal = $('<div class="social-links"></div>');
                    $(div_principal).append(link_facebook);$(div_principal).append(link_twitter);
                    $(div_principal).append(link_clipboard);
                    $(div_principal).append(link_x);

                    var container = $(tile).children('.tile-subtitle');
                    $(container).append(div_principal);
                }
            }
            new ClipboardJS('.link-clipboard', {
                text: function (trigger) {
                    return trigger.getAttribute('href');
                }
            });
        });
        </script>
    
    


    
        <script class="social-links-script">
        $(document).ready(function () {
            for (let tile of $('.nitf-basic-tile')) {
                if (!$(tile).find('.social-links').length) {
                    var url = '#'
                    $(tile).find('a').each(function(){
                        url = $(this).attr('href');
                    });
                    var titulo = '#'
                    $(tile).find('a').each(function(){
                        titulo = $(this).text();
                    });
                    var imagem = url+'/logo.png'
                    $(tile).find('img').each(function(){
                        imagem = $(this).attr('src');
                    });
                    var link_telegram = $('<a title="Telegram" class="link-whatsapp"><i class="fab fa-telegram-plane"></i></a>');
                    $(link_telegram).attr('href', 'https://telegram.me/share/url?url='+url);
                    var link_whatsapp = $('<a title="WhatsApp" class="link-whatsapp"><i class="fab fa-whatsapp"></i></a>');
                    $(link_whatsapp).attr('href', 'https://api.whatsapp.com/send?text='+url);
                    var link_facebook = $('<a title="Facebook"><i class="fab fa-facebook-f"></i></a>');
                    $(link_facebook).attr('href', 'http://www.facebook.com/sharer.php?u='+url);
                    var link_twitter = $('<a title="Twitter"><i class="fab fa-twitter"></i></a>');
                    $(link_twitter).attr('href', 'https://twitter.com/share?text='+titulo+'&url='+url);
                    var link_linkedin = $('<a title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>');
                    $(link_linkedin).attr('href', 'https://www.linkedin.com/shareArticle?mini=true&title='+titulo+'&url='+url);
                    var link_google = $('<a title="Google+"><i class="fab fa-google-plus-g"></i></a>');
                    $(link_google).attr('href', 'https://plus.google.com/share?url='+url);
                    var link_email = $('<a title="E-mail"><i class="fas fa-at"></i></a>');
                    $(link_email).attr('href', url+'/sendto_form');
                    var link_pinterest = $('<a title="Pinterest"><i class="fab fa-pinterest-p"></i></a>');
                    $(link_pinterest).attr('href', 'https://pinterest.com/pin/create/button/?url='+url+'&media='+imagem+'&description='+titulo);
                    var link_clipboard = $('<a class="link-clipboard" onclick="event.preventDefault()"><i class="fas fa-link"></i></a>');
                    $(link_clipboard).attr('href', url);
                    $(link_clipboard).attr('title', $('#viewlet-tileshare')[0].dataset.titleLink);
                    var link_x = $('<a class="toggle-social-links"><i class="fas fa-share-alt"></i><i class="fas fa-times"></i></a>');
                    var div_principal = $('<div class="social-links"></div>');
                    $(div_principal).append(link_facebook);$(div_principal).append(link_twitter);
                    $(div_principal).append(link_clipboard);
                    $(div_principal).append(link_x);

                    var container = $(tile).children('.tile-subtitle');
                    $(container).append(div_principal);
                }
            }
            new ClipboardJS('.link-clipboard', {
                text: function (trigger) {
                    return trigger.getAttribute('href');
                }
            });
        });
        </script>  
      

</body>
</html>

