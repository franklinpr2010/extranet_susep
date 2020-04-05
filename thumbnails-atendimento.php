
<?php
$args = array(
    'posts_per_page' => 8,
    'category__in' => array(8)
);
 //permite uma cópia do loop wordpress padrão para modificar como quiser ( Posts, Categorias )
 $work = new WP_Query( $args );
 //se tiver posts
    if( $work->have_posts() ):
    ?>
<div class="row">
    <div class="row-content">
        <div class="column col-md-12 " data-panel="">
            <div class="tile tile-default" id="ee2e45a7-d724-4ba8-9b18-d78051c21f25">
                <div class="canais-atendimento">
                    <div class="title">
                        Canais de Atendimento
                    </div>
                    <div class="tile-header">
                        <h2>
                    Você pode fazer mais manifestações nos seguintes canais
                     </h2>
                    </div>
                    <ul class="cards">
                    <?php
                        while($work -> have_posts()):
                            $work->the_post();
                            //Construir quatro categorias no wordpress para cada sidebar
                            if (in_category('thumbnails-atendimento')):
                            ?>
                        <li>
                            <a href="<?php the_permalink(); ?>">
                                <i class="<?php echo get_post_meta(get_the_ID(), 'fontawesome', true) ?>"></i>
                                <span class="title"><?php echo get_the_title()?></span>
                            </a>
                        </li>
                        <?php
                            endif;    
                        endwhile;
    else:    
    echo 'Não existem posts a serem mostrados';
    endif;
    wp_reset_query(); ?>
                    </ul>
                </div>

            </div>

        </div>

    </div>
</div>
