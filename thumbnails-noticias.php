<?php
?>
    
    
      <div class="row linha-discreta">
        <div class="row-content">
            
            <div class="column col-md-12" data-panel="">
                <div class="tile tile-default" id="c0f44fa3-5af3-40c3-878a-d894baba4812">
                    <div class="cover-list-tile tile-content servicos-em-destaque">
                        <h1>
                   Notícias
                    </h1>
                    </div>
                </div>
            </div>

            <?php

            // Get the selected options
            $my_acf_checkbox_field_arr = get_field('visivel');


            $args = array(
                'post_type' => 'noticias',
                'posts_per_page' => -1,
                'meta_key'   => 'visivel',
                'meta_value' => 'Sim',
                'meta_compare' => '='
              
                
            );
            $image = get_field('imagem_noticia');
            $the_query = new WP_Query($args)
            //se tiver posts
        ?>
                <?php
        if( $the_query->have_posts() ): 
                while($the_query->have_posts()) : $the_query->the_post(); ?>
                    <div class="col-md-4 tile-default"  style="z-index:1" data-panel="">
                        <div class="tile foto-sobreposta" id="a777c30b-c4a9-4ca6-9a44-540a6b2bea35">
                            <div class="nitf-basic-tile tile-content">
                                <a class="imag" href="<?php the_permalink() ?>" title="<?php the_title() ?>">
                        <img src="<?php the_post_thumbnail_url()?>" width="370" height="246" class="left" alt="<?php the_title() ?>">
                    </a>
                                <p class="tile-subtitle">
                                    <?php the_field('subtitulo') ?>
                                        <div class="social-links">
                                        <a title="Linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink()?>&title=<?php the_title() ?>&summary=  <?php echo get_the_excerpt();?>"><i class="fab fa-linkedin-in"></i></a><a class="toggle-social-links"><i class="fas fa-share-alt"></i><i class="fas fa-times"></i></a>
                                            </div>
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
          
                <div class="tile tile-default" id="eaa20091-0fd2-4d09-abaf-ff2988e41367">
                    <div class="outstanding-header tile-content">
                        <a class="outstanding-link" href="mais-noticias">MAIS NOTÍCIAS</a>
                    </div>
                </div>
            
        </div>

    
    
    
 
        </div>
        
    <script>
        var clipboard = new ClipboardJS('.link-clipboard');

        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);

            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    </script>