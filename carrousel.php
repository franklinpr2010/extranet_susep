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

    <div  class="row linha-destaquehome topo-com-degrade">
        <div  class="row-content">

            <div  class="column col-md-12 tile-default " data-panel="">

                <div  class="" id="ff3b9136-ceff-4ec0-94de-a40662398989">

                <?php
echo do_shortcode('[smartslider3 slider=2]');
?>

                        <?php
                        if ( has_nav_menu( 'destaque-menu' ) ) { ?>
                            <div class="assuntos-em-alta" style="position:relative">
                                <div style="position:relative;width:215px;margin-right:auto;margin-left:auto">
                                    <h2 style="text-align: center;text-transform:uppercase;font-size:1.6rem;font-weight:500;color:#fff;margin:0;padding:0 16px;position:relative">DESTAQUES</h2>
                                </div>
                                <br/>
                                <?php wp_nav_menu(array('theme_location' => 'destaque-menu', 'menu_class' => 'destaques-carrousel', 'items_wrap' => '<div style="text-align: center;"><ul id="destaques-carrousel" style="margin: 0 auto;">%3$s</ul></div>')) ?>
                            </div>
                            <?php wp_reset_query(); } ?>

                                <div class="visualClear">
                                    <!-- -->
                                </div>

                </div>

            </div>

        </div>
    </div>




        