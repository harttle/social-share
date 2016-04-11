var weiboConfig = {
        appid: 'xxx',
        title: document.title,
        url: encodeURIComponent(location.href)
    },
    links = {
        facebook: 'https://www.facebook.com/harttle',
        qrcode: {
            url: location.href
        },
        'google-plus': {
            index: 2,
            url: 'https://plus.google.com/+杨珺'
        },
        weibo: {
            index: 1,
            url: 'http://v.t.sina.com.cn/share/share.php?' + $.param(weiboConfig)
        },
        wechat: location.href,
        linkedin: 'https://linkedin.com/in/harttle',
        rss: 'http://harttle.com/feed.xml',
        github: 'https://github.com/harttle',
        twitter: 'https://twitter.com/harttleharttle'
    };

$('section.lg').socialShare(links, {size: 'lg'});
$('section.md').socialShare(links);
$('section.sm').socialShare(links, {size: 'sm'});
$('section.xs').socialShare(links, {size: 'xs'});
