<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repa;
use App\Categorie;

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
	public function Categories()
	{
		$categories=Categorie::get();
		return $categories;
	}

}
