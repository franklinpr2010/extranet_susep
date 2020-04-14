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
<div class="row linha-discreta">
    <div class="row-content">
        <div class="column col-md-12 " data-panel="">

            <div class="tile tile-default" id="ce5a7782-de6f-41a6-b0ab-7481622bd7d5">

                <div class="cover-list-tile tile-content sortable-tile lista-servicos lista-carrossel">
                    <h1>Planos e Produtos</h1>
                    <div class="tile-header">
                        <h2>
                        Encontre detalhes sobre o produto do seu interesse:
                    </h2>
                    </div>
                    <div class="itens">
                            <?php
                                while($work -> have_posts()):
                                    $work->the_post();
                                    //Construir quatro categorias no wordpress para cada sidebar
                                    if (in_category('thumbnails-planos-produtos')):
                            ?>
                                <a class="list-item" href="<?php the_permalink(); ?>">
                                <div class="d-flex flex-column mb-3">
                                    <div id="img-planos-produtos">
                                         <img class="text-center" src="<?php the_post_thumbnail_url()?>">
                                    </div>
                                    <div id="title-planos-produtos">
                                        <span class="text-center" class="titulo"><?php echo get_the_title()?></span>
                                    </div>
                                 </div>
                                    <div class="back">
                                        <!-- <span class="titulo" tal:content="obj/title"></span> -->
                                        <span class="descricao"> <?php echo get_the_excerpt();?></span>
                                    </div>
                                </a>
                            <?php
                                    endif;    
                                endwhile;
                            else:    
                                    echo 'Não existem posts a serem mostrados';
                            endif; wp_reset_query();
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>