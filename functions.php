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
    wp_enqueue_style('barra-brasil', get_template_directory_uri() . '/susep_files/css/barra-brasil.css');
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
    wp_enqueue_style('reset-cachekey', get_template_directory_uri() . '/susep_files/reset-cachekey-4206f07a13bb708fb3e12b9bb427973e.css');
    wp_enqueue_style('base-cachekey', get_template_directory_uri() . '/susep_files/base-cachekey-6951a35dc0fc5efee83df90c456126fd.css');
    wp_enqueue_style('resourceplone', get_template_directory_uri() . '/susep_files/resourceplone.formwidget.datetimestyles-cachekey-dc6080b54d9c34390d63c57910b64ccd.css');
    wp_enqueue_style('govbrtheme', get_template_directory_uri() . '/susep_files/govbrtheme-67523be.css');
    wp_enqueue_style('brasilgovagenda', get_template_directory_uri() . '/susep_files/brasilgovagenda-37f614a.css');
    wp_enqueue_style('brasilgovportal', get_template_directory_uri() . '/susep_files/brasilgovportal-b9966f9.css');
    wp_enqueue_style('brasilgovtiles', get_template_directory_uri() . '/susep_files/brasilgovtiles-fadba58.css');

    //wp_register_script( 'jquery-two', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',
     //array(), '1.11.3',  true);
     //antes de colocar o bootstrap-min na fila, vai colocar o outro
    //wp_enqueue_script('bootstrap-min', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery-two'), 
    // null, true);
    //wp_enqueue_script('fancybox-pack', get_template_directory_uri() . '/js/jquery.fancybox.pack.js', array('jquery-two'), null, true);
   // wp_enqueue_script('waypoints-min', get_template_directory_uri() . '/js/jquery.waypoints.min.js', array('jquery-two'), null, true);
    //wp_enqueue_script('retina-min', get_template_directory_uri() . '/js/retina.min.js', array('jquery-two'), null, true);
    //wp_enqueue_script('modernizr', get_template_directory_uri() . '/js/modernizr.js', array('jquery-two'), null, true);
    //wp_enqueue_script('main', get_template_directory_uri() . '/js/main.js', array('jquery-two'), null, true);

}


add_action( 'wp_enqueue_scripts', 'load_scripts' );