
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
                                   $args = array(
                                       'post_type' => 'servicos',
                                       'posts_per_page' => 6
                                   );
                                   $the_query = new WP_Query($args)
                                   //se tiver posts
                                ?>
                                   <?php
                            if( $the_query->have_posts() ): 
                                    while($the_query->have_posts()) : $the_query->the_post(); ?>
                                <a  class="list-item br-card is-large is-change-content is-arrow" href="<?php the_permalink() ?>">
                                
                                <div class="d-flex flex-row bd-highlight mb-2">
                                <div class="p-2 bd-highlight">
                                <span class="icon" style="color:#0c326f">
                                    <i class="<?php the_field('fontaewsome') ?>"></i>
                                </span>
                                </div>
                                <div class="p-2 bd-highlight">
                                <span class="title">
                                     <?php the_title() ?>
                                </span>
                                </diV>
                                </div>
                                    <p class="text"> <?php the_field('textoresumido') ?></p>
                                </a>
                                <?php endwhile; ?>
                        <?php endif; ?>
                        
                           <div class="tile tile-default" id="eaa20091-0fd2-4d09-abaf-ff2988e41367">
                    <div class="outstanding-header tile-content">
                        <a class="outstanding-link" href="mais-noticias">MAIS SERVIÇOS</a>
                    </div>
                </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
   </div>