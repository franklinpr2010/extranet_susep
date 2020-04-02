


   $(document).ready(function() {
                            for (let tile of $('.nitf-basic-tile')) {
                                if (!$(tile).find('.social-links').length) {
                                    var url = '#'
                                    $(tile).find('a').each(function() {
                                        url = $(this).attr('href');
                                    });
                                    var titulo = '#'
                                    $(tile).find('a').each(function() {
                                        titulo = $(this).text();
                                    });
                                    var imagem = url + '/logo.png'
                                    $(tile).find('img').each(function() {
                                        imagem = $(this).attr('src');
                                    });
                                    var link_telegram = $('<a title="Telegram" class="link-whatsapp"><i class="fab fa-telegram-plane"></i></a>');
                                    $(link_telegram).attr('href', 'https://telegram.me/share/url?url=' + url);
                                    var link_whatsapp = $('<a title="WhatsApp" class="link-whatsapp"><i class="fab fa-whatsapp"></i></a>');
                                    $(link_whatsapp).attr('href', 'https://api.whatsapp.com/send?text=' + url);
                                    var link_facebook = $('<a title="Facebook"><i class="fab fa-facebook-f"></i></a>');
                                    $(link_facebook).attr('href', 'http://www.facebook.com/sharer.php?u=' + url);
                                    var link_twitter = $('<a title="Twitter"><i class="fab fa-twitter"></i></a>');
                                    $(link_twitter).attr('href', 'https://twitter.com/share?text=' + titulo + '&url=' + url);
                                    var link_linkedin = $('<a title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>');
                                    $(link_linkedin).attr('href', 'https://www.linkedin.com/shareArticle?mini=true&title=' + titulo + '&url=' + url);
                                    var link_google = $('<a title="Google+"><i class="fab fa-google-plus-g"></i></a>');
                                    $(link_google).attr('href', 'https://plus.google.com/share?url=' + url);
                                    var link_email = $('<a title="E-mail"><i class="fas fa-at"></i></a>');
                                    $(link_email).attr('href', url + '/sendto_form');
                                    var link_pinterest = $('<a title="Pinterest"><i class="fab fa-pinterest-p"></i></a>');
                                    $(link_pinterest).attr('href', 'https://pinterest.com/pin/create/button/?url=' + url + '&media=' + imagem + '&description=' + titulo);
                                    var link_clipboard = $('<a class="link-clipboard" onclick="event.preventDefault()"><i class="fas fa-link"></i></a>');
                                    $(link_clipboard).attr('href', 'wwww.google.com');
                                    $(link_clipboard).attr('title', $('#viewlet-tileshare')[0].dataset.titleLink);
                                    var link_x = $('<a class="toggle-social-links"><i class="fas fa-share-alt"></i><i class="fas fa-times"></i></a>');
                                    var div_principal = $('<div class="social-links"></div>');
                                    $(div_principal).append(link_facebook);
                                    $(div_principal).append(link_twitter);
                                    $(div_principal).append(link_clipboard);
                                    $(div_principal).append(link_x);

                                    var container = $(tile).children('.tile-subtitle');
                                    $(container).append(div_principal);
                                }
                            }
                            new ClipboardJS('.link-clipboard', {
                                text: function(trigger) {
                                    return trigger.getAttribute('href');
                                }
                            });
                        });