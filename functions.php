<?php 

function load_scripts() {
    //Colocando na fila uma folha de estilo, primeiro parâmetro é um identificador, o segundo é o local
    wp_enqueue_style('bootstrap-min', get_template_directory_uri() . '/susep_files/css/bootstrap.min.css');
    wp_enqueue_style('fancybox', get_template_directory_uri() . '/susep_files/css/jquery.fancybox.css');
    wp_enqueue_style('main', get_template_directory_uri() . '/susep_files/css/main.css');
    wp_enqueue_style('responsive', get_template_directory_uri() . '/susep_files/css/responsive.css');
    wp_enqueue_style('animate-min', get_template_directory_uri() . '/susep_files/css/animate.min.css');
    wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.10.2/css/all.css');
    wp_enqueue_style('sunburst-theme', 'https://www.gov.br/casacivil/portal_css/Sunburst%20Theme/IEFixes-cachekey-9e6170e03a0cfc22bb302f2b78303338.css');
    //Arquivos do template da susep
    wp_enqueue_style('tippy', get_template_directory_uri() . '/susep_files/css/tippy.css');
    //wp_enqueue_style('barra-brasil', get_template_directory_uri() . '/susep_files/css/barra-brasil.css');
    wp_enqueue_style('footer-brasil', get_template_directory_uri() . '/susep_files/css/footer-brasil.css');
    wp_enqueue_style('vpw-switch', get_template_directory_uri() . '/susep_files/css/vpw-switch.css');
    wp_enqueue_style('vpw-settings-btn', get_template_directory_uri() . '/susep_files/css/vpw-settings-btn.css');
    wp_enqueue_style('vpw-dictionary', get_template_directory_uri() . '/susep_files/css/vpw-dictionary.css');
    wp_enqueue_style('vpw-info-screen', get_template_directory_uri() . '/susep_files/css/vpw-info-screen.css');
    wp_enqueue_style('noui-target', get_template_directory_uri() . '/susep_files/css/noui-target.css');
    wp_enqueue_style('vpw-controls', get_template_directory_uri() . '/susep_files/css/vpw-controls.css');
    wp_enqueue_style('vpw-message-box', get_template_directory_uri() . '/susep_files/css/vpw-message-box.css');
    wp_enqueue_style('vw', get_template_directory_uri() . '/susep_files/css/vw.css');
    wp_enqueue_style('vp', get_template_directory_uri() . '/susep_files/css/vp.css');
    wp_enqueue_style('resource-collective', get_template_directory_uri() . '/susep_files/css/resource-collective.css');
    wp_enqueue_style('reset-cachekey', get_template_directory_uri() . '/susep_files/css/reset-cachekey-4206f07a13bb708fb3e12b9bb427973e.css');
    wp_enqueue_style('base-cachekey', get_template_directory_uri() . '/susep_files/css/base-cachekey-6951a35dc0fc5efee83df90c456126fd.css');
    wp_enqueue_style('resourceplone', get_template_directory_uri() . '/susep_files/css/resourceplone.formwidget.datetimestyles-cachekey-dc6080b54d9c34390d63c57910b64ccd.css');
    wp_enqueue_style('govbrtheme', get_template_directory_uri() . '/susep_files/css/govbrtheme-67523be.css');
    wp_enqueue_style('brasilgovagenda', get_template_directory_uri() . '/susep_files/css/brasilgovagenda-37f614a.css');
    wp_enqueue_style('brasilgovportal', get_template_directory_uri() . '/susep_files/css/brasilgovportal-b9966f9.css');
    wp_enqueue_style('brasilgovtiles', get_template_directory_uri() . '/susep_files/css/brasilgovtiles-fadba58.css');

    //wp_register_script( 'jquery-two', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',
     //array(), '1.11.3',  true);
     //antes de colocar o bootstrap-min na fila, vai colocar o outro
    wp_enqueue_script('bootstrap-min', get_template_directory_uri() . '/susep_files/js/bootstrap.min.js', array('jquery-two'), 
     null, true);
    wp_enqueue_script('fancybox-pack', get_template_directory_uri() . '/susep_files/js/jquery.fancybox.pack.js', array('jquery-two'), null, true);
    wp_enqueue_script('waypoints-min', get_template_directory_uri() . '/susep_files/js/jquery.waypoints.min.js', array('jquery-two'), null, true);
    wp_enqueue_script('retina-min', get_template_directory_uri() . '/susep_files/js/retina.min.js', array('jquery-two'), null, true);
    wp_enqueue_script('modernizr', get_template_directory_uri() . '/susep_files/js/modernizr.js', array('jquery-two'), null, true);
    wp_enqueue_script('main', get_template_directory_uri() . '/susep_files/js/main.js', array('jquery-two'), null, true);
    //wp_enqueue_script('barra_2.0', get_template_directory_uri() . '/susep_files/js/barra_2.0.js', array('jquery-two'), null, true);
    wp_enqueue_script('brasilgovagenda', get_template_directory_uri() . '/susep_files/js/brasilgovagenda.js', array('jquery-two'), null, true);
    wp_enqueue_script('brasilgovportal', get_template_directory_uri() . '/susep_files/js/brasilgovportal.js', array('jquery-two'), null, true);
    wp_enqueue_script('brasilgovtiles', get_template_directory_uri() . '/susep_files/js/brasilgovtiles.js', array('jquery-two'), null, true);
    wp_enqueue_script('collective.js.jqueryui.custom.min-cachekey', get_template_directory_uri() . '/susep_files/js/collective.js.jqueryui.custom.min-cachekey.js', array('jquery-two'), null, true);
    wp_enqueue_script('govbrtheme', get_template_directory_uri() . '/susep_files/js/govbrtheme.js', array('jquery-two'), null, true);
    wp_enqueue_script('jquery.contact', get_template_directory_uri() . '/susep_files/js/jquery.contact.js', array('jquery-two'), null, true);
    wp_enqueue_script('jquery.waypoints.min', get_template_directory_uri() . '/susep_files/js/jquery.waypoints.min.js', array('jquery-two'), null, true);
    wp_enqueue_script('resourcebrasil.gov.tilesvendorjquery.jplayer.min-cachekey', get_template_directory_uri() . '/susep_files/js/resourcebrasil.gov.tilesvendorjquery.jplayer.min-cachekey.js', array('jquery-two'), null, true);
    wp_enqueue_script('resourcecollective.coverjsmain-cachekey-fa', get_template_directory_uri() . '/susep_files/js/resourcecollective.coverjsmain-cachekey-fa.js', array('jquery-two'), null, true);
    wp_enqueue_script('resourcecollective.js.bootstrapjsbootstrap.min-cachekey', get_template_directory_uri() . '/susep_files/js/resourcecollective.js.bootstrapjsbootstrap.min-cachekey.js', array('jquery-two'), null, true);
    wp_enqueue_script('resourcedropdown-menu-cachekey', get_template_directory_uri() . '/susep_files/js/resourcedropdown-menu-cachekey.js', array('jquery-two'), null, true);
    wp_enqueue_script('resourceplone.app.jquery-cachekey', get_template_directory_uri() . '/susep_files/js/resourceplone.app.jquery-cachekey.js', array('jquery-two'), null, true);
    wp_enqueue_script('resourceplone.formwidget.recurrencejquery.tmpl-beta1-cachekey', get_template_directory_uri() . '/susep_files/js/resourceplone.formwidget.recurrencejquery.tmpl-beta1-cachekey.js', array('jquery-two'), null, true);
    wp_enqueue_script('retina.min', get_template_directory_uri() . '/susep_files/js/retina.min.js', array('jquery-two'), null, true);
    wp_enqueue_script('update.min', get_template_directory_uri() . '/susep_files/js/update.min.js', array('jquery-two'), null, true);
    wp_enqueue_script('vlibras-plugin', get_template_directory_uri() . '/susep_files/js/vlibras-plugin.js', array('jquery-two'), null, true);
    wp_enqueue_script('www-widgetapi', get_template_directory_uri() . '/susep_files/js/www-widgetapi.js', array('jquery-two'), null, true);
    //<script async="" src="https://connect.facebook.net/pt_BR/all.js#xfbml=1"></script>
    //<script async="" src="./susep_files/gtm.js.download"></script>
}

//Fazendo a chamada dos scripts
add_action( 'wp_enqueue_scripts', 'load_scripts' );

//criando o menu
register_nav_menus( 
    array(
        'primary' => 'Primary Menu',
        'social' => 'Social Menu'
    )

);

add_action( 'widgets_init', 'extranet_sidebars' );

function extranet_sidebars() {
        register_sidebar(array(
                'name'=>  'Banner',
                'id' => 'banner',
                'description' => 'Escreva algum texto aqui',
                'before_widget' => '<div class="widget-wrapper">',
                'after_widget' => '</div>',
                'before_title' => '<h2><a href="#">',
                'after_title' => '</a></h2>',
            )
        );
}
