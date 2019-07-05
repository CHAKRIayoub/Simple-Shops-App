<?php

use Illuminate\Http\Request;


Route::group(['middleware'=>'api'], function($router){

	Route::post('login', 'AuthController@login');
	Route::post('signup', 'AuthController@signup');
	Route::post('logout', 'AuthController@logout');

	Route::post('refresh', 'AuthController@refresh');
	Route::post('me', 'AuthController@me');

	Route::get('shops','ShopController@shops');
	Route::post('shops/like','ShopController@like');
	Route::post('shops/dislike','ShopController@dislike');

	//repas
	Route::get('repas','RepasController@Repas');
	Route::get('repa/{repa_id}','RepasController@Repa');
	Route::get('categories','RepasController@Categories');

	Route::get('accompagners','RepasController@accompagners');
	Route::get('tables','RepasController@tables');

});
