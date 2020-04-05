<?php

$args = array(
    'post_type' => 'page',
    'pagename' => 'pagina-inicial'
);
$the_query = new WP_Query($args);
//se tiver posts

while( $the_query->have_posts()) :  $the_query->the_post(); ?>
<div id="portal-searchbox" >

<form id="nolivesearchGadget_form" action='<?php echo home_url('search'); ?>'>

    <div class="LSBox">
        <label class="hiddenStructure" for="nolivesearchGadget">Busca</label>
        
        <input name="SearchableText" type="text" size="500" title="O que você procura?" placeholder="produtos, notícias, seguradoras" accesskey="b" class="searchField" id="nolivesearchGadget">

        <input class="searchButton" type="submit" value="Buscar">

        <div class="LSResult" id="LSResult">
            <div class="LSShadow" id="LSShadow"></div>
        </div>
    </div>
</form>
<div id="portal-advanced-search" class="hiddenStructure">
    <a href='<?php  echo home_url('search'); ?>' accesskey="5">Busca Avançada…</a>
</div>

<button class="close" aria-label="Fechar busca"><i class="fas fa-times"></i></button>
</div>
<?php endwhile; wp_reset_query(); ?>





