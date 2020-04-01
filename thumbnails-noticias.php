<?php

?>

<div class="row">
    <div class="row-content">
        

        <?php

            $args = array(
                'post_type' => 'noticias'
            );
            $image = get_field('imagem_noticia');
            $the_query = new WP_Query($args)
            //se tiver posts
        
        ?>

        <?php

        if( $the_query->have_posts() ): 
                while($the_query->have_posts()) : $the_query->the_post(); ?>

        <div class="col-md-4 tile-default" data-panel="">

            <div class="tile foto-sobreposta" id="a777c30b-c4a9-4ca6-9a44-540a6b2bea35">

                <div class="nitf-basic-tile tile-content">

                    <a class="imag" href="<?php the_permalink() ?>" title="<?php the_title() ?>">
                        <img src="<?php the_post_thumbnail_url()?>" width="370" height="246" class="left" alt="<?php the_title() ?>">
                    </a>
                    <p class="tile-subtitle"><?php the_field('subtitulo') ?>
                        <div class="social-links"><a title="Facebook" href="http://www.facebook.com/sharer.php?u=https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2020/03/infraestrutura-estabelece-malha-logistica-para-garantir-abastecimento-nacional"><i class="fab fa-facebook-f"></i></a><a title="Twitter" href="https://twitter.com/share?text=Infraestrutura%20estabece%20log%C3%ADstica%20para%20garantir%20abastecimento&amp;url=https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2020/03/infraestrutura-estabelece-malha-logistica-para-garantir-abastecimento-nacional"><i class="fab fa-twitter"></i></a><a class="link-clipboard" onclick="event.preventDefault()" href="https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2020/03/infraestrutura-estabelece-malha-logistica-para-garantir-abastecimento-nacional" title="Copiar para área de transferência"><i class="fas fa-link"></i></a><a class="toggle-social-links"><i class="fas fa-share-alt"></i><i class="fas fa-times"></i></a></div>
                    </p>
                    <h2><a href="<?php the_permalink() ?>"><?php the_title() ?></a></h2>
                    <div class="visualClear">
                        <!-- -->
                    </div>
                </div>
            </div>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>  

    </div>
</div>