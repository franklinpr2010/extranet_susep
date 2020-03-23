<?php

$args = array(
    'posts_per_page' => 8,
    'category__in' => array(7)
);

//permite uma cópia do loop wordpress padrão para modificar como quiser ( Posts, Categorias )
$work = new WP_Query( $args );

//se tiver posts
if( $work->have_posts() ):
?>
    <div class="row">
        <div class="row-content">

            <div class="column col-md-12 " data-panel="">
                <div class="tile tile-default" id="c0f44fa3-5af3-40c3-878a-d894baba4812">
                    <div class="cover-list-tile tile-content servicos-em-destaque">
                    <h1>
                    Serviços para o Cidadão
                    </h1>
                        <div class="tile-header">
                            <h2>
                        serviços em destaque
                    </h2>
                        </div>
                        <div class="itens">
                            <?php
                        while($work -> have_posts()):
                            $work->the_post();
                            //Construir quatro categorias no wordpress para cada sidebar
                            if (in_category('thumbnails-serv-cidadao')):
                                ?>
                                <a class="list-item" href="<?php the_permalink(); ?>">
                                    <span class="categoria">
                                        <?php echo get_the_title();?>	
                                    </span>
                                    <span class="texto">
                                        <!--Obtem o resumo-->
                                        <?php echo get_the_excerpt();?>	
                                    </span>
                                </a>
                                <?php
                                endif;    
                                endwhile;
                            else:    
                                echo 'Não existem posts a serem mostrados';
                            endif;
                        ?>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>