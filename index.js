var weiboConfig = {
        appid: 'xxx',
        title: document.title,
        url: encodeURIComponent(location.href)
    },
    links = {
        facebook: {
            index: 2,
            url: 'https://www.facebook.com/harttle'
        },
        'google-plus': {
            index: 1,
            url: 'https://plus.google.com/+杨珺'
        },
        weibo: {
            index: 3,
            url: 'http://v.t.sina.com.cn/share/share.php?' + $.param(weiboConfig)
        },
        wechat: {
            index: 4,
            url: location.href
        },
        linkedin: {
            index: 5,
            url: 'https://linkedin.com/in/harttle'
        },
        rss: {
            index: 6,
            url: 'http://harttle.com/feed.xml'
        },
        github: {
            index: 7,
            url: 'https://github.com/harttle'
        },
        twitter: {
            index: 8,
            url: 'https://twitter.com/harttleharttle'
        },
    };

$('section.lg').socialShare({ links: links, size: 'lg'});
$('section.md').socialShare({ links: links, size: 'md'});
$('section.sm').socialShare({ links: links, size: 'sm'});
$('section.xs').socialShare({ links: links, size: 'xs'});
