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
    public $options = [];
    //sidebar location
    //TODO add location options and width
    public function init()
    {

        parent::init();
        $this->initOptions();
        $view = $this->getView();
        $styleOverride = "";
        OffCanvasAsset::register($view);
        if($this->options["includeBackdrop"]===true)
        {
            $view->registerJs("insertCanvasBackdrop()");
        }
        if(!empty($this->options['width']))
        {
            $styleOverride = " style='width:".$this->options['width']."; margin-".$this->options['location'].":-".$this->options['width']."' ";
        }
        $content = 
            '<div id="bs-canvas-'.$this->options['location'].'" class="bs-canvas bs-canvas-'.$this->options['location'].' position-fixed bg-light h-100" '.$styleOverride.'data-width="'.$this->options['width'].'">
                <header class="modal-header bs-canvas-header p-3 overflow-auto">
                    <button type="button" class="bs-canvas-close close" aria-label="Close" aria-expanded="false"><span aria-hidden="true" >&times;</span></button>
                    <h4 class="modal-title d-inline-block mb-0 ">'.$this->options['title'].'</h4>
                </header>
                <div class="modal-body bs-canvas-content px-3 py-4"> 
                <!-- Off-canvas content -->';
        echo $content;
    }

    /**
     * Renders the side navigation menu.
     * with the heading and panel containers
     */
    public function run()
    {   

       $content = '</div></div>';
        if($this->options['footer']!= false)
        {
            $content.='<div class="bs-convas"><div class="modal-footer px-3 py-4"><!-- Off-canvas footer -->';
            if($this->options['footer']!=true && !empty($this->options['footer']))
            {
                $content.=$this->options['footer'];
            }
            $content.= "</div></div> " ;
        } 
                
        echo $content;
    } 

    /**
     * Initializes the widget options.
     * This method sets the default values for various options.
     */
    protected function initOptions()
    {
        /*
        public $width=''; //default to css
    public $includeBackdrop=true;
    public $location = self::TYPE_RIGHT; */
        $this->options = array_merge([
            'width' => '',
            'includeBackdrop' => true,
            'location' =>self::TYPE_RIGHT,
            'title'=>"Canvas Title",
            'footer'=>""
        ], $this->options);
    }
}
