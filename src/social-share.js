(function($) {
    var defaultConfig = {
        size: 'md',
        links: {},
        blank: true,
        classMapping: {}
    };

    function socialShare(config) {
        config = $.extend({}, defaultConfig, config);
        var links = parseLinks(config.links),
            $this = $(this);

        var $ul = $('<ul class="list-unstyled social-share">');
        $ul.addClass('social-share-' + config.size);
        links.map(function(link) {
            $ul.append(render(link, config));
        });
        $this.append($ul);
    }

    function render(link, config) {
        var cls = 'fa-' + (config.classMapping[link.name] || link.name),
            $li = $('<li class="social-share-item">'),
            $a = $('<a>', {
                href: link.url
            }),
            $i = $('<i>', {
                class: 'fa ' + cls
            });
        $a.append($i);
        if (config.blank) $a.attr('target', '_blank');

        $li.append($a);
        $li.addClass(link.name);

        if(link.name === 'wechat'){
            $a.removeAttr('href');
            $a.removeAttr('target');
            $li.click(function(){
                qrCodeHandler(link.url);
            });
        }

        return $li;
    }

    function parseLinks(links) {
        var res = [];
        for (var k in links) {
            if (links.hasOwnProperty(k)) {
                res.push({
                    name: k,
                    index: links[k].index,
                    url: links[k].url,
                });
            }
        }
        res.sort(function(lhs, rhs) {
            return lhs.index - rhs.index;
        });
        return res;
    }

    function qrCodeHandler(url) {
        var tml =
            '<div class="qrcode-dialog"> ' +
            '  <div class="qrcode-header">' +
            '    <span class="dismiss">&times;</span>' +
            '    <header>分享链接</header>' +
            '  </div>' +
            '  <div class="qrcode-body"> ' +
            '  </div>' +
            '</div>',
            $modal = $(tml);

        var qrcode = new QRCode($modal.find('.qrcode-body').get(0), {
            text: url,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        $modal.find('.qrcode-header .dismiss').click(function() {
            $modal.remove();
        });

        $modal.appendTo('body').addClass('show');
    }

    $.fn.socialShare = socialShare;

})(jQuery);
