<?php 
namespace dmkdesign\offcanvas;

use yii\web\AssetBundle;

/**
 * @author Aaron Kennedy <aaron@dmkdesign.ca>
 * @since 1.0
 */
class OffCanvasAsset extends AssetBundle
{
    public $sourcePath = '@dmkdesign/offcanvas/assets';

//    public $publishOptions = [
//        'forceCopy' => true,
//    ];

    public $css = [
        'offcanvas.css'
    ];

    public $js = ['offcanvas.js'];

    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap4\BootstrapAsset',
        'yii\bootstrap4\BootstrapPluginAsset',
    ];
    
   public function init() {
    //    // In dev mode use non-minified javascripts
    //    $this->js = YII_DEBUG ? [
    //        'offcanvas.js'
    //    ]:[
    //         'offcanvas.min.js',
    //    ];

       parent::init();
   }
}
