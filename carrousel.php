<div class="row linha-destaquehome topo-com-degrade">
    <div class="row-content">
        <div class="column col-md-12 tile-default " data-panel="">
            <div class="tile fio-separador image-position-right linha-recuada" id="ff3b9136-ceff-4ec0-94de-a40662398989">
                <a class="imag" href="https://www.gov.br/casacivil/pt-br/assuntos/noticias/2020/marco/governo-federal-lanca-agenda-brasil-canal-direto-com-o-cidadao" title="">
                    <div id="div-imagem-principal">
                        <!--<img src="https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg" width="1607" height="1071" class="left" alt="Governo Federal lança Agenda + Brasil: canal direto com o cidadão">-->
                        <?php 
                    if(is_active_sidebar('imagem-principal')) {
                    dynamic_sidebar('imagem-principal');
                    }
                    ?>
                    </div>
                </a>
                <div class="nitf-basic-tile tile-content">
                    <?php 
            if(is_active_sidebar('banner')) {
            dynamic_sidebar('banner');
            }
            ?>
                        <div class="assuntos-em-alta" style="position:relative">
                            <div class="tile-header" style="position:relative;width:215px;margin-right:auto;margin-left:auto">
                                <h2>Destaques</h2>
                            </div>
                            <?php wp_nav_menu(array('theme_location' => 'destaque-menu', 'menu_class' => 'destaques-carrousel', 'items_wrap' => '<div style="text-align: center;"><ul id="destaques-carrousel" style="margin: 0 auto;">%3$s</ul></div>')) ?>
                        </div>
                </div>
                <div class="visualClear">
                    <!-- -->
                </div>
            </div>
        </div>
    </div>
</div>