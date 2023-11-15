Collapsible Sidebar using BS4
=============================
Extension for adding collapsible Sidebar to Yii2 project with Ajax Content

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist dmk-design/yii2-offcanvas-b4 "*"
```

or add

```
"dmk-design/yii2-offcanvas-b4": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?= \dmkdesign\offcanvas\OffCanvas::widget(); ?>```

```javascript

    let sidebar = new OffCanvas('.bs-canvas-right');
    //if you want the backdrop to open and close
    sidebar.insertBackdrop()
    sidebar.setTitle("My Title");
    sidebar.setContent("<div>My Content</div>")
    sidebar.setFooter("Buttons?")
    sidebar.show();


```