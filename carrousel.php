
<!--Head-->
<?php include 'head.php'; ?>

<?php

$args = array(
    'post_type' => 'page',
    'pagename' => 'pagina-inicial'
);
$the_query = new WP_Query($args)
//se tiver posts
?>


<div class="row linha-destaquehome topo-com-degrade">
    <div class="row-content">
        <div class="column col-md-12 tile-default " data-panel="">
            <div class="tile fio-separador image-position-right linha-recuada" id="ff3b9136-ceff-4ec0-94de-a40662398989">
                <a class="imag" href="https://www.gov.br/casacivil/pt-br/assuntos/noticias/2020/marco/governo-federal-lanca-agenda-brasil-canal-direto-com-o-cidadao" title="">
                    <div id="div-imagem-principal">
                        <?php while( $the_query->have_posts()) :  $the_query->the_post(); ?>
                            <img src="<?php the_post_thumbnail_url()?>" class="img-fluid" alt="<?php the_title() ?>">
                        <?php endwhile; ?>
                    </div>
                </a>
                <div class="nitf-basic-tile tile-content">
                    <div class="widget-wrapper">
                                <?php while( $the_query->have_posts()) :  $the_query->the_post(); ?>
                                    <h2>
                                        <a href="<?php  the_field('link_do_titulo_da_logo_da_imagem_principal') ?>">
                                            <?php the_field('titulo_da_imagem') ?>
                                            </a>
                                    </h2>
                                <?php endwhile; ?>

                    </div>
            <?php
            if ( has_nav_menu( 'destaque-menu' ) ) { ?>
             <div class="assuntos-em-alta" style="position:relative">
                            <div  style="position:relative;width:215px;margin-right:auto;margin-left:auto">
                                <h2  style="text-align: center;text-transform:uppercase;font-size:1.6rem;font-weight:500;color:#fff;margin:0;padding:0 16px;position:relative">DESTAQUES</h2>
                            </div>
                            <br/>
                            <?php wp_nav_menu(array('theme_location' => 'destaque-menu', 'menu_class' => 'destaques-carrousel', 'items_wrap' => '<div style="text-align: center;"><ul id="destaques-carrousel" style="margin: 0 auto;">%3$s</ul></div>')) ?>
             </div>
            <?php wp_reset_query(); } ?>
                       
                </div>
                <div class="visualClear">
                    <!-- -->
                </div>
            </div>
        </div>
    </div>
</div>