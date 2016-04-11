# social-share

Social share widget supporting: wechat, weibo, linkedin, github, google+, rss, twitter, facebook and more.

Demo: http://harttle.com/social-share/

Dependencies [Fontawesome][font], [jQuery][jq].

## Usage

### Import

Import jQuery and Fontawesome:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
```

Import Social Share:

```html
<link rel="stylesheet" href="path/to/social-share.min.css">
<script src="path/to/social-share.min.js"></script>
```

### Mininal Usage

```javascript
$('div').socialShare({
    facebook: 'https://www.facebook.com/harttle',
    wechat: location.href,
    rss: 'http://harttle.com/feed.xml'
});
```

### Ordered Links

In case you want these links be ordered, put them into an array:

```javascript
var links = [{
    style: 'facebook',
    url: 'https://www.facebook.com/harttle'
},{
    style: 'google-plus',
    url: 'https://plus.google.com/+杨珺',
},{
    style: 'weibo', 
    url: 'http://v.t.sina.com.cn/share/share.php?url=xxx&title=xxx&appid=xxx'
}];

$('div').socialShare(links);
```

### Available Styles

These are available styles:

`qrcode`, `facebook`, `google-plus`, `weibo`, `wechat`, `linkedin`, `rss`, `github`, `twitter`.

> Feel free to contribute yours!

## Options

### $.fn.socialShare(links, options)

### links

Type: `Object`

Default: `{}`

Share buttons are set in `links` object.

### options.size

Type: `String`

Default: `"md"`

Size of the buttons, available values: 

* `"lg"`(large)
* `"md"`(medium)
* `"sm"`(small)
* `"xs"`(exteme small)

### options.blank

Type: `Boolean`

Default: `true`

Should the links open in new window? If set `true`, `target="_blank"` will be set.

## links.url

Type: `String`

The `href` attribute for the the share button. For `"wechat"`, `links.url` is the url encoded within the qrcode img.

## links.index

Type: `Number`

Optional, share buttons are sorted by `links.index`.

[font]: http://fontawesome.io/
[jq]: http://jquery.com/
