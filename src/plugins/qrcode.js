(function(socialShare) {
    socialShare.plugin('qrcode', function(args) {
        return {
            target: '_qrcode',
            icon: 'fa-qrcode',
            background: '#555'
        };
    });
})(window.socialShare);
