<?php

namespace dmkdesign\offcanvas;

use dmkdesign\offcanvas\OffCanvasAsset;
/**
 * This is just an example.
 */
class OffCanvas extends \yii\base\Widget
{
    const TYPE_DEFAULT = 'default';
    const TYPE_RIGHT = 'right';
    const TYPE_LEFT = 'left';

    public $width=''; //default to css
    public $includeBackdrop=true;
    public $location = self::TYPE_RIGHT;
    //sidebar location
    
    public function init()
    {
        parent::init();
        $view = $this->getView();
        OffCanvasAsset::register($view);
        
    }

    /**
     * Renders the side navigation menu.
     * with the heading and panel containers
     */
    public function run()
    {   $styleOverride = "";
        if(!empty($this->width))
        {
            $styleOverride = " style='width:".$this->width."' ";
        }
       $content = 
            '<div id="bs-canvas-'.$this->location.'" class="bs-canvas bs-canvas-'.$this->location.' position-fixed bg-light h-100" '.$styleOverride.'>
                <header class="modal-header bs-canvas-header p-3 overflow-auto">
                    <button type="button" class="bs-canvas-close close" aria-label="Close" aria-expanded="false"><span aria-hidden="true" >&times;</span></button>
                    <h4 class="modal-title d-inline-block mb-0 ">Canvas Header</h4>
                </header>
                <div class="modal-body bs-canvas-content px-3 py-5">
                    <!-- Off-canvas content -->
                </div>   
                <div class="modal-footer  px-3 py-5">Footer Stuff</div>    
            </div>';
        echo $content;
    } 
}
