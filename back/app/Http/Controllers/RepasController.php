<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repa;
use App\Categorie;
use App\Accompagner;
use App\Commande;
use App\Table;

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
	public function tables()
	{
		$today = date("Y-m-d", time() + 3600);
		$tablecommande=Commande::
		select('table_id')
		->where('created_at','>',$today)
		->get()->map(function($item, $key) {
			return $item->table_id;
		})->all();

		$tables=Table
		::whereNotIn('id',$tablecommande)
		->get();
		return $tables;
	}
	public function storeCommande()
	{

	}

}
