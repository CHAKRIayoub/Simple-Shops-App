<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shop;

class ShopController extends Controller
{
    
    public function shops(Request $request)
    {

    	$list = Shop::get();
		$LikedShops = $this->getLikedShops($request->userId)  ;  	
    	$shops = [];
    	foreach ($list as $key => $value) {
    		$obj = $value;
    		$obj['liked'] = false;
    		foreach ($LikedShops as $k => $v) {
    			if ( $value->id == $v->id) {
    				$obj['liked'] = true;
    				break;
    			}
    		}
    		
    		array_push($shops, $obj);
    	}

        return $shops;
    }



    public function like(Request $request)
    {


    }


    public function dislike(Request $request)
    {


    }



    public function getLikedShops($id){
    	return Shop::leftJoin('likes', 'shops.id','=', 'likes.shop_id')
		        	->where('likes.user_id', $id)
		        	->select('shops.*')
					->get();
    }

}
