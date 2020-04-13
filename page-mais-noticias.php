<!DOCTYPE html>
<!-- saved from url=(0035)https://www.gov.br/casacivil/pt-br# -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
<!--Head-->
<?php include 'head.php'; ?>
    <!--configuração da página inicial -->
    <?php
        
           
            //se tiver posts
    ?>
        <?php while( have_posts()) : the_post(); ?>
            <title>
                <?php the_title(); ?>
            </title>
            <?php endwhile;  wp_reset_query();?>

                <body class="default-header-template portal-institucional cover-layout-layout-vazio template-view portaltype-collective-cover-content site-pt-br section-pagina-inicial userrole-anonymous" data-base-url="https://www.gov.br/casacivil/pt-br/pagina-inicial" data-portal-url="https://www.gov.br/casacivil" dir="ltr">

                    <!-- Google Tag Manager (noscript) -->
                    <!--Tag Manager-->
                    <?php include 'tag-manager.php'; ?>
                        <!--Header-->
                        <!--Header-->
                        <?php include 'header.php'; ?>
                                <div id="wrapper">
                                    <!-- Columns -->
                                    <!-- Columns -->
                                    <div id="main">
                                        <main id="main-content" role="main">
                                            <div id="content">
                                                <div id="breadcrumb">
                                                    <?php custom_breadcrumbs() ?>

                                                </div>
                                                <div id="noticias-post" class="container">
                                                <div id="row" class="row justify-content-md-center">
                                                    <div class="row-content">
                                                        <div>
                                                            <div style="margin-top:30px">
                                                            <h1 property="rnews:headline"  class="documentFirstHeading"><?php the_title() ?></h1>
                                                            </div>
                                                            <div style="margin-top:20px">
                                                            <h3><?php  $count = $the_query->post_count; echo $count . ' '; wp_reset_query(); ?> Resultado(s)</h3>
                                                            </div>
                                                        </div>    
                                                        <div div="resultado" class="columns is-desktop is-mobile">
                                                        <?php
                                                                    $args = array(
                                                                        'post_type' => 'noticias',
                                                                        'orderby' => 'date',
                                                                        'order'   => 'DESC'
                                                                    );
                                                                    $image = get_field('imagem_noticia');
                                                                    $the_query = new WP_Query($args)
                                                                    //se tiver posts
                                                            ?>
                                                                            
                                                                           <?php
                                                                                    while( $the_query -> have_posts()) :  $the_query -> the_post(); ?>
                                                                                    <hr/>
                                                                                    <div class="tileImage">
                                                                                        <a href="<?php the_permalink() ?>">
                                                                                        <img src="<?php the_post_thumbnail_url()?>" height="85" width="128" class="tileImage">
                                                                                        </a>
                                                                                    </div>
                                                                                    
                                                                                    <div id="titulo" class="column  is-full" style="margin: 15px">
                                                                                            <span class="subtitle"><?php the_field('subtitulo') ?></span>
                                                                                            <h5><a href="<?php the_permalink() ?>"><?php the_title() ?></a></h5>
                                                                                        
                                                                                    </div>
                                                                                    <div id="resumo" class="column  is-full">
                                                                                        <?php echo get_the_excerpt();?>	
                                                                                    </div>
                                                                                    <div id="tag" class="column  is-full">
                                                                                        <div id="category"><span><?php the_tags() ?></div>
                                                                                    </div>
                                                                                    <div id="data" class="column  is-full">
                                                                                    <?php echo get_the_date(); ?>
                                                                                    </div>
                                                                                   
                                                                                    

                                                                                <?php endwhile; wp_reset_query();?>
                                                                         </div>  
                                                                        

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                        </main>
                                        </div>
                                    </div>
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

                </body>

</html>