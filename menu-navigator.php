<div class="header-wrapper" >
    
    <div class="menu-institucional" id="menu-institucional">
        <div class="">
            <div class="heading">
                <div class="header-icons">
                    <a class="ico-navegacao">
                            Navegação
                            <i class="fa fa-bars" aria-hidden="true"></i>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                </div>
                <div class="logo">
                    <h1><a id="portal-title-sub" href="http://www.susep.gov.br/" title="">SUSEP</a></h1>
                </div>
            </div>
            <div class="links-destaque-institucional">

            </div>
        </div>
    </div>
</div>
<!-- Main Menu -->
<div class="navigation-wrapper">
    <div class="navigation-content">
        <nav id="main-navigation" class="navigation-cell">
        <?php wp_nav_menu(array('theme_location' => 'header-menu', 'container' => false, 'menu_class' => 'list-navigation', 'walker' => new BootstrapBasicMyWalkerNavMenu())); ?> 
        </nav>
    </div>
</div>