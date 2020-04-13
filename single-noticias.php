<!DOCTYPE html>
<!-- saved from url=(0035)https://www.gov.br/casacivil/pt-br# -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
<!--Head-->
<?php include 'head.php'; ?>
    <!--configuração da página inicial -->

        <?php while( have_posts()) :  the_post() ?>
            <title>
                <?php the_title(); ?>
            </title>
        <?php endwhile; wp_reset_query();?>

                <body onload="functionUtils()" class="default-header-template portal-institucional cover-layout-layout-vazio template-view portaltype-collective-cover-content site-pt-br section-pagina-inicial userrole-anonymous" data-base-url="https://www.gov.br/casacivil/pt-br/pagina-inicial" data-portal-url="https://www.gov.br/casacivil" dir="ltr">

                    <!-- Google Tag Manager (noscript) -->
                    <!--Tag Manager-->
                    <?php include 'tag-manager.php'; ?>
                        <!--Header-->
                        <!--Header-->
                        <?php include 'header.php'; ?>

                    <?php while( have_posts()) : the_post(); 
                    
                    $categories = get_the_category();?>  
                    <div id="wrapper">

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
                                                        <div class="">
                                                            <p property="rnews:alternativeHeadline" class="nitfSubtitle"><div style="text-transform: uppercase;">
                                                            <h5>
                                                                    <?php the_field('subtitulo') ?>
                                                            </h5>
                                                                </div></p>
                                                            <h1 property="rnews:headline" class="documentFirstHeading"><?php the_title() ?></h1>

                                                            <div property="rnews:description" class="documentDescription"><?php the_field('texto_resumido') ?></div>
                                                        </div>

                                                        <div class="">

                                                            <div id="viewlet-above-content-body">
                                                                <div class="documentByLine" id="plone-document-byline">

                                                                    <span class="documentPublished">
                                             
                                                                    <span>Publicado em</span>
                                              
                                                                    <span class="value"><?php the_date() ?></span>
                                                                    </span>
                                                                 

                                                                </div>
                                                                <div class="div-imagem-post" id="media">
                                                                    <img src="<?php the_post_thumbnail_url()?>"  height="423" width="746" />
                                                                    <p class="discreet">
                                                                        <?php the_field('label_imagem'); ?>
                                                                    </p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="">
                                                            <div id="content-core">

                                                                <div id="parent-fieldname-text" class="">
                                                                    <div property="rnews:articleBody">
                                                                           <?php the_content(); ?>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="">

                                                        <div>
                                                        <div id="category"><span>
                                                                <div>Categoria: <a href="<?php echo esc_url( get_category_link( $categories[0]->term_id ) );  ?>"><?php echo $categories[0]->name ?></a></div>
                                                        </div>
                                                            <div>
                                                                <div id="category"><span><?php the_tags() ?></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                            <?php endwhile; wp_reset_query();?>
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