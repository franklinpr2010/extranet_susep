<?php 

function load_scripts() {
    //Colocando na fila uma folha de estilo, primeiro parâmetro é um identificador, o segundo é o local
    wp_enqueue_style('bootstrap-min', get_template_directory_uri() . '/susep_files/css/bootstrap.min.css');
    wp_enqueue_style('fancybox', get_template_directory_uri() . '/susep_files/css/jquery.fancybox.css');
    wp_enqueue_style('main', get_template_directory_uri() . '/susep_files/css/main.css');
    wp_enqueue_style('responsive', get_template_directory_uri() . '/susep_files/css/responsive.css');
    wp_enqueue_style('animate-min', get_template_directory_uri() . '/susep_files/css/animate.min.css');
    wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.10.2/css/all.css');
    //wp_enqueue_style('mds', '/susep_files/css/mds-min.css');
    //wp_enqueue_style('all-css', '/susep_files/css/all.css');
    wp_enqueue_style('sunburst-theme', 'https://www.gov.br/casacivil/portal_css/Sunburst%20Theme/IEFixes-cachekey-9e6170e03a0cfc22bb302f2b78303338.css');
    //Arquivos do template da susep
    wp_enqueue_style('tippy', get_template_directory_uri() . '/susep_files/css/tippy.css');
    wp_enqueue_style('barra-brasil', get_template_directory_uri() . '/susep_files/css/barra-brasil.css');
    wp_enqueue_style('footer-brasil', get_template_directory_uri() . '/susep_files/css/footer-brasil.css');
    wp_enqueue_style('vpw-switch', get_template_directory_uri() . '/susep_files/css/vpw-switch.css');
    wp_enqueue_style('vpw-settings-btn', get_template_directory_uri() . '/susep_files/css/vpw-settings-btn.css');
    wp_enqueue_style('vpw-settings', get_template_directory_uri() . '/susep_files/css/vpw-settings.css');
    wp_enqueue_style('vpw-dictionary', get_template_directory_uri() . '/susep_files/css/vpw-dictionary.css');
    wp_enqueue_style('vpw-info-screen', get_template_directory_uri() . '/susep_files/css/vpw-info-screen.css');
    wp_enqueue_style('noui-target', get_template_directory_uri() . '/susep_files/css/noui-target.css');
    wp_enqueue_style('vpw-controls', get_template_directory_uri() . '/susep_files/css/vpw-controls.css');
    wp_enqueue_style('vpw-message-box', get_template_directory_uri() . '/susep_files/css/vpw-message-box.css');
    wp_enqueue_style('vw', get_template_directory_uri() . '/susep_files/css/vw.css');
    wp_enqueue_style('vp-libras', get_template_directory_uri() . '/susep_files/css/vp.css');
    wp_enqueue_style('resource-collective', get_template_directory_uri() . '/susep_files/css/resource-collective.css');
    wp_enqueue_style('reset-cachekey', get_template_directory_uri() . '/susep_files/css/reset-cachekey.css');
    wp_enqueue_style('base-cachekey', get_template_directory_uri() . '/susep_files/css/base-cachekey.css');
    wp_enqueue_style('resourceplone-formwidget', get_template_directory_uri() . '/susep_files/css/resourceplone.formwidget.css');
    wp_enqueue_style('govbrtheme', get_template_directory_uri() . '/susep_files/css/govbrtheme.css');
    wp_enqueue_style('brasilgovagenda', get_template_directory_uri() . '/susep_files/css/brasilgovagenda.css');
    wp_enqueue_style('brasilgovportal', get_template_directory_uri() . '/susep_files/css/brasilgovportal.css');
    wp_enqueue_style('brasilgovtiles', get_template_directory_uri() . '/susep_files/css/brasilgovtiles.css');
    wp_enqueue_style('embedder-cachekey', get_template_directory_uri() . '/susep_files/css/embedder-cachekey.css');
    wp_enqueue_style('resourcegovbr-policycanais', get_template_directory_uri() . '/susep_files/css/resourcegovbr.policycanais.css');
    wp_enqueue_style('resourcecollective.nitfnitf', 'https://www.gov.br/casacivil/portal_css/Sunburst%20Theme/resourcecollective.nitfnitf-cachekey-03309e9fe6b9d18d52df59d771e5ea75.css');
    //indicadores css
    //wp_enqueue_style('blog-single-style', get_template_directory_uri() . '/susep_files/css/indicadores/blog-single-style.css');
    //wp_enqueue_style('blog-style', get_template_directory_uri() . '/susep_files/css/indicadores/blog-style.css');
    //wp_enqueue_style('service-style',get_template_directory_uri() .  '/susep_files/css/indicadores/service-style.css');
    //wp_enqueue_style('style-style', get_template_directory_uri() . '/susep_files/css/indicadores/style.css');
    //wp_enqueue_style('font2', 'https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr');

    //wp_register_script( 'jquery-two', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
     //array(), '3.4.1',  true);
     wp_enqueue_script('jquery-two', get_template_directory_uri() . '/susep_files/js/resourceplone.app.jquery-cachekey.js', array(), null, true);
     wp_enqueue_script('collective-js', get_template_directory_uri() . '/susep_files/js/collective.js.jqueryui.custom.min-cachekey.js', array('jquery-two'), null, true);
     //antes de colocar o bootstrap-min na fila, vai colocar o outro
    //wp_enqueue_script('bootstrap-min', get_template_directory_uri() . '/susep_files/js/bootstrap.min.js', array('jquery-two'), 
    //null, true);
    wp_enqueue_script('fancybox-pack', get_template_directory_uri() . '/susep_files/js/jquery.fancybox.pack.js', array('jquery-two'), null, true);
    wp_enqueue_script('waypoints-min', get_template_directory_uri() . '/susep_files/js/jquery.waypoints.min.js', array('jquery-two'), null, true);
    wp_enqueue_script('retina-min', get_template_directory_uri() . '/susep_files/js/retina.min.js', array('jquery-two'), null, true);
    //wp_enqueue_script('modernizr', get_template_directory_uri() . '/susep_files/js/modernizr.js', array('jquery-two'), null, true);
    wp_enqueue_script('main', get_template_directory_uri() . '/susep_files/js/main.js', array('jquery-two'), null, true);
    //wp_enqueue_script('barra_2.0', get_template_directory_uri() . '/susep_files/js/barra_2.0.js', array('jquery-two'), null, true);
    wp_enqueue_script('brasilgovagenda', get_template_directory_uri() . '/susep_files/js/brasilgovagenda.js', array('jquery-two'), null, true);
    wp_enqueue_script('brasilgovportal', get_template_directory_uri() . '/susep_files/js/brasilgovportal.js', array('jquery-two'), null, true);
    wp_enqueue_script('brasilgovtiles', get_template_directory_uri() . '/susep_files/js/brasilgovtiles.js', array('jquery-two'), null, true);
    wp_enqueue_script('govbrtheme-js', get_template_directory_uri() . '/susep_files/js/govbrtheme.js', array('jquery-two'), null, true);
    //wp_enqueue_script('jquery.contact', get_template_directory_uri() . '/susep_files/js/jquery.contact.js', array('jquery-two'), null, true);
    //wp_enqueue_script('jquery.waypoints.min', get_template_directory_uri() . '/susep_files/js/jquery.waypoints.min.js', array('jquery-two'), null, true);
    /*OK*/wp_enqueue_script('resourcebrasil.gov.tilesvendorjquery.jplayer.min-cachekey', get_template_directory_uri() . '/susep_files/js/resourcebrasil.gov.tilesvendorjquery.jplayer.min-cachekey.js', array('jquery-two'), null, true);
    /*OK*/wp_enqueue_script('resourcecollective.coverjsmain-cachekey-fa', get_template_directory_uri() . '/susep_files/js/resourcecollective.coverjsmain-cachekey-fa.js', array('jquery-two'), null, true);
    /*OK*/wp_enqueue_script('resourcecollective.js.bootstrapjsbootstrap.min-cachekey', get_template_directory_uri() . '/susep_files/js/resourcecollective.js.bootstrapjsbootstrap.min-cachekey.js', array('jquery-two'), null, true);
    /*OK*/wp_enqueue_script('resourcedropdown-menu-cachekey', get_template_directory_uri() . '/susep_files/js/resourcedropdown-menu-cachekey.js', array('jquery-two'), null, true);
    wp_enqueue_script('clipboard.min', get_template_directory_uri() . '/susep_files/js/clipboard.min.js', array('jquery-two'), null, true);
    /*OK*/wp_enqueue_script('resourceplone.formwidget.recurrencejquery.tmpl-beta1-cachekey', get_template_directory_uri() . '/susep_files/js/resourceplone.formwidget.recurrencejquery.tmpl-beta1-cachekey.js', array('jquery-two'), null, true);
    //wp_enqueue_script('retina.min', get_template_directory_uri() . '/susep_files/js/retina.min.js', array('jquery-two'), null, true);
    /*OK*/wp_enqueue_script('update.min', get_template_directory_uri() . '/susep_files/js/update.min.js', array('jquery-two'), null, true);
    /*OK*/wp_enqueue_script('vlibras-plugin', get_template_directory_uri() . '/susep_files/js/vlibras-plugin.js', array('jquery-two'), null, true);
    /*OK*/wp_enqueue_script('www-widgetapi', get_template_directory_uri() . '/susep_files/js/www-widgetapi.js', array('jquery-two'), null, true);
     //wp_enqueue_script('jquery-autocomplete', 'https://www.gov.br/casacivil/portal_css/Sunburst%20Theme/jquery.autocomplete-cachekey-42b6b884e9518dc3a726c3b10060db9c.css', array('jquery-two'), null, true);
     wp_enqueue_script('social', get_template_directory_uri() . '/susep_files/js/social.js', array('jquery-two'), null, true);
    //<script async="" src="https://connect.facebook.net/pt_BR/all.js#xfbml=1"></script>
    //<script async="" src="./susep_files/gtm.js.download"></script>
    //Indicadores
    //wp_enqueue_script('social', get_template_directory_uri() . '/susep_files/js/indicadores/script.js', array('jquery-two'), null, true);
    //wp_enqueue_script('isotope', 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js', array('jquery-two'), null, true);
    //wp_enqueue_script('isotope2', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q', array('jquery-two'), null, true);

    
}


/**
 * Mostrar custom fields
 *  */ 
function showhiddencustomfields() {
    echo "<style type='text/css'>#postcustom .hidden { display: table-row; }</style>
";
}

add_action( 'admin_head', 'showhiddencustomfields' );

//Fazendo a chamada dos scripts
add_action( 'wp_enqueue_scripts', 'load_scripts' );

//criando o menu
register_nav_menus( 
    array(
        'footer-menu' => 'Footer Menu',
        'destaque-menu' => 'Destaque Menu',
        'header-menu' => 'Header Menu',
    )

);

add_action( 'widgets_init', 'extranet_sidebars' );

/**
 * Adicionando imagens e títulos dinâmicos
 */
function extranet_sidebars() {
   
        register_sidebar(array(
                'name'=>  'Título Principal',
                'id' => 'banner',
                'description' => 'Escreva algum texto aqui',
                'before_widget' => '<div class="widget-wrapper">',
                'after_widget' => '</div>',
                'before_title' => '<h2><a href="#">',
                'after_title' => '</a></h2>',
            )
        );

        register_sidebar(array(
            'name'=>  'Imagem Principal',
            'id' => 'imagem-principal',
            'before_widget' => '',
            'after_widget'  => '',
            'style' => 'display:none',
            'class' => 'img-fluid'
            )
        );

        register_sidebar(array(
            'name'=>  'Logo-Header',
            'id' => 'logo-header',
        )
        );

        register_sidebar(array(
            'name'=>  'Logo-Footer',
            'id' => 'logo-footer',
        )
        );
}




/**
 * Adicionando imagem aos post-thumbnails, no caso dos posts
 */
add_theme_support( 'post-thumbnails');
add_theme_support( 'automatic-feed-links' );
add_theme_support('nav-menus');



/*
Função walker para o css
*/
class BootstrapBasicMyWalkerNavMenu extends Walker_Nav_Menu
    {
        
        //Overwrite display_element function to add has_children attribute. Not needed in >= Wordpress 3.4
        /**
         * @link https://gist.github.com/duanecilliers/1817371 copy from this url
         */
        function display_element($element, &$children_elements, $max_depth, $depth = 0, $args, &$output)
        {
            if (!$element)
                return;
            $id_field = $this->db_fields['id'];
    
            //display this element
            if (is_array($args[0]))
                $args[0]['has_children'] = !empty($children_elements[$element->$id_field]);
            else if (is_object($args[0]))
                $args[0]->has_children = !empty($children_elements[$element->$id_field]);
            $cb_args = array_merge(array(&$output, $element, $depth), $args);
            call_user_func_array(array(&$this, 'start_el'), $cb_args);
    
            $id = $element->$id_field;
    
            // descend only when the depth is right and there are childrens for this element
            if (($max_depth == 0 || $max_depth > $depth + 1) && isset($children_elements[$id])) {
    
                foreach ($children_elements[$id] as $child) {
    
                    if (!isset($newlevel)) {
                        $newlevel = true;
                        //start the child delimiter
                        $cb_args = array_merge(array(&$output, $depth), $args);
                        call_user_func_array(array(&$this, 'start_lvl'), $cb_args);
                    }
                    $this->display_element($child, $children_elements, $max_depth, $depth + 1, $args, $output);
                }
                unset($children_elements[$id]);
            }
    
            if (isset($newlevel) && $newlevel) {
                //end the child delimiter
                $cb_args = array_merge(array(&$output, $depth), $args);
                call_user_func_array(array(&$this, 'end_lvl'), $cb_args);
            }
    
            //end this element
            $cb_args = array_merge(array(&$output, $element, $depth), $args);
            call_user_func_array(array(&$this, 'end_el'), $cb_args);
        }// display_element
    
    
        /**
         * @link https://gist.github.com/duanecilliers/1817371 copy from this url
         */
        public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) 
        {
            if ((is_object($item) && $item->title == null) || (!is_object($item))) {
                return ;
            }
    
            $indent = ($depth) ? str_repeat("\t", $depth) : '';

            $li_attributes = '';
            $class_names = $value = '';
            $classes = empty($item->classes) ? array() : (array) $item->classes;
            //Add class and attribute to LI element that contains a submenu UL.
            if (is_object($args) && $args->has_children) {
                //$classes[] = 'dropdown';
                $li_attributes .= ' data-dropdown="dropdown"';
            }
            $classes[] = 'menu-item-' . $item->ID;
            //If we are on the current page, add the active class to that menu item.
            $classes[] = ($item->current) ? 'active' : '';
            //Make sure you still add all of the WordPress classes.
            $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
            $class_names = ' class="' . esc_attr($class_names) . '"';
            $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
            $id = strlen($id) ? ' id="' . esc_attr($id) . '"' : '';
            
            if (is_object($args) && $args->has_children) {
                //$classes[] = 'dropdown';
                $output .= $indent . '<li' . $id . $value . "class='plain dropdown-submenu'" . $li_attributes . '>';
            } else {
                $output .= $indent . '<li' . $id . $value . $classes . $li_attributes . '>';
            }
            //Add attributes to link element.
            $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
            $attributes .=!empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
            $attributes .=!empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
            $attributes .=!empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
            $attributes .= (is_object($args) && $args->has_children) ? ' class="dropdown-toggle" data-toggle="dropdown"' : '';
    
            $item_output = (is_object($args)) ? $args->before : '';
            $item_output .= '<a' . $attributes . '>';
            $item_output .= (is_object($args) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (is_object($args) ? $args->link_after : '');
            $item_output .= (is_object($args) && $args->has_children) ? ' <span></span> ' : '';
            $item_output .= '</a>';
            $item_output .= (is_object($args) ? $args->after : '');
    
            $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
        }// start_el
    
    
        public function start_lvl(&$output, $depth = 0, $args = array()) 
        {
            $indent = str_repeat("\t", $depth);
            $output .= "\n$indent<ul class=\"submenu\">\n";
        }
    
    
    }
//log
// error_log($current_url);

add_action('wp_head','wpklik_add_googleanalytics'); 
function wpklik_add_googleanalytics() { ?> 
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-161928965-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date()); 
    gtag('config', 'UA-161928965-1');
</script> 
<?php }


// BREADCRUMBS  --------------------------------------------------------------------------------------------------------

function pietergoosen_breadcrumbs() {
    /* === OPTIONS === */
$text['home']     = _x( 'Home', 'Home', 'pietergoosen' ); // text for the 'Home' link
$text['category'] = __( 'Archive by Category "%s"', 'pietergoosen' );  // text for a category page
$text['search']   = __( 'Search Results for "%s" Query', 'pietergoosen' ); // text for a search results page
$text['tag']      = __( 'Posts Tagged "%s"', 'pietergoosen' );  // text for a tag page
$text['author']   = __( 'Posts Posted by %s', 'pietergoosen' ); // text for an author page
$text['404']      = __( 'Error 404', 'pietergoosen' );  // text for the 404 page

$show_current   = 1; // 1 - show current post/page/category title in breadcrumbs, 0 - don't show
$show_on_home   = 0; // 1 - show breadcrumbs on the homepage, 0 - don't show
$show_home_link = 1; // 1 - show the 'Home' link, 0 - don't show
$show_title     = 1; // 1 - show the title for the links, 0 - don't show
$delimiter      = ' &raquo; '; // delimiter between crumbs
$before         = '<span class="current">'; // tag before the current crumb
$after          = '</span>'; // tag after the current crumb
/* === END OF OPTIONS === */

global $post;
$home_link    = home_url('/');
$link_before  = '<span typeof="v:Breadcrumb">';
$link_after   = '</span>';
$link_attr    = ' rel="v:url" property="v:title"';
$link         = $link_before . '<a' . $link_attr . ' href="%1$s">%2$s</a>' . $link_after;
  if (isset($post)){
      $parent_id    = $parent_id_2  = $post->post_parent;
  }
$frontpage_id = get_option('page_on_front');

if (is_home() || is_front_page()) {

      if ($show_on_home == 1) echo '<div class="breadcrumb"><a href="' . $home_link . '">' . $text['home'] . '</a></div>';

  } else {

   echo '<div class="">';
   if ($show_home_link == 1) {
       echo  '<a href="' . $home_link . '" rel="v:url" property="v:title">' . $text['home'] . '</a>';
       if ($frontpage_id == 0 || $parent_id != $frontpage_id) echo $delimiter;
   }

   if ( is_category() ) {
       $this_cat = get_category(get_query_var('cat'), false);
       if ($this_cat->parent != 0) {
           $cats = get_category_parents($this_cat->parent, TRUE, $delimiter);
           if ($show_current == 0) $cats = preg_replace("#^(.+)$delimiter$#", "$1", $cats);
           $cats = str_replace('<a', $link_before . '<a' . $link_attr, $cats);
           $cats = str_replace('</a>', '</a>' . $link_after, $cats);
           if ($show_title == 0) $cats = preg_replace('/ title="(.*?)"/', '', $cats);
           echo $cats;
       }
          if ($show_current == 1) echo $before . sprintf($text['category'], single_cat_title('', false)) . $after;

    } elseif ( is_search() ) {
        echo $before . sprintf($text['search'], get_search_query()) . $after;

    } elseif ( is_day() ) {
       echo sprintf($link, get_year_link(get_the_time('Y')), get_the_time('Y')) . $delimiter;
       echo sprintf($link, get_month_link(get_the_time('Y'),get_the_time('m')), get_the_time('F')) . $delimiter;
       echo $before . get_the_time('d') . $after;

   } elseif ( is_month() ) {
       echo sprintf($link, get_year_link(get_the_time('Y')), get_the_time('Y')) . $delimiter;
       echo $before . get_the_time('F') . $after;

    } elseif ( is_year() ) {
        echo $before . get_the_time('Y') . $after;

    } elseif ( is_single() && !is_attachment() ) {
          if ( get_post_type() != 'post' ) {
              $post_type = get_post_type_object(get_post_type());
              $slug = $post_type->rewrite;
              printf($link, $home_link . '/' . $slug['slug'] . '/', $post_type->labels->singular_name);
              if ($show_current == 1) echo $delimiter . $before . get_the_title() . $after;
          } else {
              $cat = get_the_category(); $cat = $cat[0];
              $cats = get_category_parents($cat, TRUE, $delimiter);
              if ($show_current == 0) $cats = preg_replace("#^(.+)$delimiter$#", "$1", $cats);
              $cats = str_replace('<a', $link_before . '<a' . $link_attr, $cats);
              $cats = str_replace('</a>', '</a>' . $link_after, $cats);
              if ($show_title == 0) $cats = preg_replace('/ title="(.*?)"/', '', $cats);
              echo $cats;
              if ($show_current == 1) echo $before . get_the_title() . $after;
          }

   } elseif ( !is_single() && !is_page() && get_post_type() != 'post' && !is_404() ) {
       $post_type = get_post_type_object(get_post_type());
       echo $before . $post_type->labels->singular_name . $after;

   } elseif ( is_attachment() ) {
         $parent = get_post($parent_id);
          $cat = get_the_category($parent->ID); $cat = $cat[0];
          $cats = get_category_parents($cat, TRUE, $delimiter);
          $cats = str_replace('<a', $link_before . '<a' . $link_attr, $cats);
          $cats = str_replace('</a>', '</a>' . $link_after, $cats);
          if ($show_title == 0) $cats = preg_replace('/ title="(.*?)"/', '', $cats);
          echo $cats;
        printf($link, get_permalink($parent), $parent->post_title);
        if ($show_current == 1) echo $delimiter . $before . get_the_title() . $after;

      } elseif ( is_page() && !$parent_id ) {
          if ($show_current == 1) echo $before . get_the_title() . $after;

      } elseif ( is_page() && $parent_id ) {
          if ($parent_id != $frontpage_id) {
              $breadcrumbs = array();
              while ($parent_id) {
                  $page = get_page($parent_id);
                  if ($parent_id != $frontpage_id) {
                      $breadcrumbs[] = sprintf($link, get_permalink($page->ID), get_the_title($page->ID));
                  }
                  $parent_id = $page->post_parent;
              }
             $breadcrumbs = array_reverse($breadcrumbs);
             for ($i = 0; $i < count($breadcrumbs); $i++) {
                 echo $breadcrumbs[$i];
                 if ($i != count($breadcrumbs)-1) echo $delimiter;
             }
        }
       if ($show_current == 1) {
           if ($show_home_link == 1 || ($parent_id_2 != 0 && $parent_id_2 != $frontpage_id)) echo $delimiter;
           echo $before . get_the_title() . $after;
       }

    } elseif ( is_tag() ) {
       echo $before . sprintf($text['tag'], single_tag_title('', false)) . $after;

    } elseif ( is_author() ) {
         global $author;
         $userdata = get_userdata($author);
        echo $before . sprintf($text['author'], $userdata->display_name) . $after;

     } elseif ( is_404() ) {
         echo $before . $text['404'] . $after;
     }

    if ( get_query_var('paged') ) {
        if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ' (';
       echo __('&nbsp;&raquo;&nbsp; Page', 'pietergoosen') . ' ' . get_query_var('paged');
       if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ')';
   }

     echo '</div><!-- .breadcrumbs -->';

  }
}








  
