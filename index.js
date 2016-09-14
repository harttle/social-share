var weiboConfig = {
        appid: 'xxx',
        title: document.title,
        url: encodeURIComponent(location.href)
    },
    linkObj = {
        facebook: 'https://www.facebook.com/harttle',
        qrcode: location.href,
        'google-plus': 'https://plus.google.com/+杨珺',
        weibo: 'http://v.t.sina.com.cn/share/share.php?' + $.param(weiboConfig),
        wechat: location.href,
        linkedin: 'https://linkedin.com/in/harttle',
        rss: 'http://harttle.com/feed.xml',
        github: 'https://github.com/harttle',
        twitter: 'https://twitter.com/harttleharttle'
    },
    linkArr = [{
        style: 'facebook',
        url: 'https://www.facebook.com/harttle'
    }, {
        style: 'qrcode',
        url: location.href
    }, {
        style: 'google-plus',
        url: 'https://plus.google.com/+杨珺'
    }, {
        style: 'weibo',
        url: 'http://v.t.sina.com.cn/share/share.php?' + $.param(weiboConfig)
    }, {
        style: 'wechat',
        url: location.href
    }, {
        style: 'linkedin',
        url: 'https://linkedin.com/in/harttle'
    }, {
        style: 'rss',
        url: 'http://harttle.com/feed.xml'
    }, {
        style: 'github',
        url: 'https://github.com/harttle'
    }, {
        style: 'twitter',
        url: 'https://twitter.com/harttleharttle}'
    }];

$('section.lg').socialShare(linkObj, { size: 'lg' });
$('section.md').socialShare(linkObj);
$('section.sm').socialShare(linkArr, { size: 'sm' });
$('section.xs').socialShare(linkArr, { size: 'xs', blank: false });
