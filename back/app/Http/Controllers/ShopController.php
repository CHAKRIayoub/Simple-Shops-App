<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shop;

class ShopController extends Controller
{
    
    public function index()
    {
    	return Shop::get();
    }

}
