<!DOCTYPE html>
<!-- saved from url=(0035)https://www.gov.br/casacivil/pt-br# -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
<!--Head-->
<?php include 'head.php'; ?>
    <!--configuração da página inicial -->
    <?php
    $args = array(
        'post_type' => 'noticias'
    );
    $the_query = new WP_Query($args)
    //se tiver posts
?>
        <?php while( $the_query->have_posts()) :  $the_query->the_post(); ?>
            <title>
                <?php the_title(); ?>
            </title>
            <?php endwhile; ?>

                <body onload="functionUtils()" class="default-header-template portal-institucional cover-layout-layout-vazio template-view portaltype-collective-cover-content site-pt-br section-pagina-inicial userrole-anonymous" data-base-url="https://www.gov.br/casacivil/pt-br/pagina-inicial" data-portal-url="https://www.gov.br/casacivil" dir="ltr">

                    <!-- Google Tag Manager (noscript) -->
                    <!--Tag Manager-->
                    <?php include 'tag-manager.php'; ?>
                        <!--Header-->
                        <!--Header-->
                        <?php include 'header.php'; ?>
                            <div id="wrapper">
                                <!-- Columns -->
                                <div id="main">
                                    <main id="main-content" role="main">
                                        <div id="content">
                                            <div class="container">
                                                <div class="row justify-content-md-center">
                                                    <div class="row-content">
                                                        <div style="height:40px">
                                                            <?php pietergoosen_breadcrumbs(); ?>
                                                        </div>

                                                        <div class="">
                                                            <p property="rnews:alternativeHeadline" class="nitfSubtitle"><div style="text-transform: uppercase;">
                                                                    <h5>
                                                                fronteira
                                                            </h5>
                                                                </div></p>
                                                            <h1 property="rnews:headline" class="documentFirstHeading">Portaria prorroga por 30 dias as restrições para entrada de estrangeiros da Venezuela</h1>

                                                            <div property="rnews:description" class="documentDescription">O objetivo é garantir a efetividade das medidas de saúde para resposta à pandemia do novo coronavírus e leva em conta a dificuldade do SUS</div>
                                                        </div>

                                                        <div class="">

                                                            <div id="viewlet-above-content-body">
                                                                <div class="documentByLine" id="plone-document-byline">

                                                                    <span class="documentPublished">
                                                <!-- TODO: Traduzir este label -->
                                                <span>Publicado em</span>
                                                                    <!-- TODO: Criar no arquivo de tradução uma máscara para a data aparecer no seguinte formato:
                                                    PT_BR: 15/10/2019 às 14:01 
                                                    EN   : 10/15/2019 at 14:01
                                                -->
                                                                    <span class="value">01/04/2020 18h44</span>
                                                                    </span>
                                                                    <!-- TODO: Fazer esta comparação de uma forma melhor -->

                                                                </div>
                                                                <div class="div-imagem-post" id="media">
                                                                    <img src="https://www.gov.br/pt-br/noticias/justica-e-seguranca/2020/04/portaria-prorroga-por-30-dias-as-restricoes-para-entrada-de-estrangeiros-da-venezuela/3a391e5f-79cf-4323-8568-e53ef06fbb4a.jpeg/@@images/cc3692ef-6d26-4c8c-95d4-cab4342a67c8.jpeg" alt="Portaria prorroga por 30 dias as restrições para entrada de estrangeiros da Venezuela" title="Portaria prorroga por 30 dias as restrições para entrada de estrangeiros da Venezuela" height="423" width="746" />
                                                                    <p class="discreet">
                                                                        Medida, excepcional e temporária, leva em conta a pandemia do novo coronavírus - Foto: PRF
                                                                    </p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="">
                                                            <div id="content-core">

                                                                <div id="parent-fieldname-text" class="">
                                                                    <div property="rnews:articleBody">
                                                                        <p>O Governo Federal prorrogou, por trinta dias, as restrições para entrada de estrangeiros provenientes da Venezuela por meios terrestres ou rodoviários. A Portaria nº 158 foi publicada no <a class="external-link" href="http://http//www.in.gov.br/en/web/dou/-/portaria-n-158-de-31-de-marco-de-2020-250477893" target="_self" title="" data-tippreview-enabled="false" data-tippreview-image="" data-tippreview-title="">Diário Oficial da União</a> desta segunda-feira (31). A restrição, excepcional e temporária, considera a declaração de emergência em saúde pública pela Organização Mundial da Saúde e recomendações da Agência Nacional de Vigilância Sanitária (Anvisa).</p>
                                                                        <p>O objetivo é garantir a efetividade das medidas de saúde para resposta à pandemia do novo coronavírus e leva em conta a dificuldade do Sistema Único de Saúde brasileiro de comportar o tratamento de estrangeiros infectados.</p>
                                                                        <p class=" "><span>A restrição não se aplica ao brasileiro, nato ou naturalizado; ao profissional estrangeiro em missão a serviço de organismo internacional, desde que devidamente identificado; funcionários estrangeiros acreditados junto ao Governo Brasileiro e estrangeiro cujo ingresso seja autorizado em vista do interesse público.</span></p>
                                                                        <p class=" ">O tráfego do transporte rodoviário de cargas e a execução de ações humanitárias transfronteiriças previamente autorizadas estão liberados.</p>
                                                                        <p><em>Com informações do <a class="external-link" href="http:// https//www.novo.justica.gov.br/" target="_blank" title="" data-tippreview-enabled="false" data-tippreview-image="" data-tippreview-title="">Ministério da Justiça e Segurança Pública</a></em></p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="">

                                                            <div class="field z3cformInlineValidation kssattr-fieldname-form.widgets.categoria" data-fieldname="form.widgets.categoria" id="formfield-form-widgets-categoria">
                                                                <label for="form-widgets-categoria" class="horizontal">
                                                                    Categoria

                                                                </label>

                                                                <span id="form-widgets-categoria" class="contenttree-widget relationchoice-field">
                                        <div>
                                            <a href="https://www.gov.br/pt-br/categorias/justica-e-seguranca">Justiça e Segurança</a>
                                        </div>
                                    </span>

                                                            </div>
                                                            <div>
                                                                <div id="category"><span>Tags: </span><a class="link-category" href="https://www.gov.br/pt-br/@@search?Subject%3Alist=Organiza%C3%A7%C3%A3o%20Mundial%20da%20Sa%C3%BAde">Organização Mundial da Saúde</a><a class="link-category" href="https://www.gov.br/pt-br/@@search?Subject%3Alist=Anvisa">Anvisa</a><a class="link-category" href="https://www.gov.br/pt-br/@@search?Subject%3Alist=Estrangeiro">Estrangeiro</a><a class="link-category" href="https://www.gov.br/pt-br/@@search?Subject%3Alist=Venezuela%20">Venezuela </a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>

                            <?php include 'footer.php'; ?>
                                <div id="viewlet-below-content">
                                    <div class="voltar-topo">
                                        <a href="https://www.gov.br/casacivil/pt-br#wrapper">Voltar ao topo</a>
                                    </div>
                                    <div class="texto-copyright">
                                        <span omit-tag="">Todo o conteúdo deste site está publicado sob a licença</span> <a rel="license" href="https://creativecommons.org/licenses/by-nd/3.0/deed.pt_BR">Creative Commons Atribuição-SemDerivações 3.0 Não Adaptada</a>.
                                    </div>

                                </div>
                                <!--Scripts JavaScript-->
                                <?php wp_footer(); ?>

                </body>

</html>