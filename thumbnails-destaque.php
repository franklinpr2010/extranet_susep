<?php
$args = array(
    'posts_per_page' => 8,
    'category__in' => array(  3,4,5  )
);
 //permite uma cópia do loop wordpress padrão para modificar como quiser ( Posts, Categorias )
 $work = new WP_Query( $args );
 //se tiver posts
 if( $work->have_posts() ):
    ?>
    <div class="row">
        <div class="row-content">
            <?php
            while($work -> have_posts()):
                $work->the_post();
                //Construir quatro categorias no wordpress para cada sidebar
                if (in_category('thumbnails-destaque')):
                ?>
                <div class="col-xs-6 col-md-4" data-panel="">
                    <div class="tile tile-default" id="a519f127-1bae-493b-830d-3b34247f4acc">
                        <div class="nitf-basic-tile tile-content">
                            <a href="<?php the_permalink(); ?>" title="">
                                    <img src="<?php the_post_thumbnail_url()?>" width="370" height="277" class="left" alt="Programa Momento Acolhida: uma conexão Brasil-Venezuela">
                                </a>
                            <h2><a href="<?php the_permalink(); ?>"><?php echo get_the_title()?></a></h2>
                            <div class="visualClear">
                            </div>
                        </div>
                    </div>
                </div>
                <?php
            endif;    
            endwhile;
        else:    
            echo 'Não existem posts a serem mostrados';
        endif;
    ?>
        </div>
    </div>