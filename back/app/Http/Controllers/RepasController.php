<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repa;
use App\Categorie;
use App\Accompagner;

class RepasController extends Controller
{
    
	public function Repas()
	{
		$repas=Repa
		::join('categories', 'categories.id', '=', 'repas.categorie_id')
		->select('repas.*','categories.name as categorie_name')
		->get();
		return $repas;
	}
	public function Repa($repa_id)
	{
		$repa=Repa
		::join('categories', 'categories.id', '=', 'repas.categorie_id')
		->select('repas.*','categories.name as categorie_name')
		->where('repas.id',$repa_id)
		->first();
		return $repa;
	}


	public function Categories()
	{
		$categories=Categorie::get();
		return $categories;
	}

	public function accompagners(){
		$accompagners=Accompagner::get();
		return $accompagners;
	}

}
