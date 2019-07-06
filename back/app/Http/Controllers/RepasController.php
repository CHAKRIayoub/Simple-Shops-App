<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Repa;
use App\Categorie;
use App\Accompagner;
use App\Commande;
use App\Table;
use App\LigneCommande;
use App\CommandeAccom;

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
	public function storeCommande(Request $request)
	{
		$commande=new Commande();
		$commande->price_ttc=$request->prix_ttc;
		$commande->table_id=$request->table_id;
		$commande->state_id=1;
		$commande->client_id=$request->client_id;
		$commande->date_start= date("Y-m-d H:i:s",time() + 3600);
		$commande->save();

		foreach ($request->repas as $key => $value) {
			
			$ligne_commande=new LigneCommande();
			$ligne_commande->commande_id=$commande->id;
			$ligne_commande->repa_id=$value['id'];
			$ligne_commande->qte=$value['qte'];
			$ligne_commande->save();

		}

		foreach ($request->accompanies as $key => $value) {
			$ligne_commande_accompanies_repas=new CommandeAccom();
			$ligne_commande_accompanies_repas->id_commande=$commande->id;
			$ligne_commande_accompanies_repas->id_repas=$value['repas_id'];
			$ligne_commande_accompanies_repas->id_acc=$value['id'];
			$ligne_commande_accompanies_repas->save();
		}
		
		return $request;
		
	}

}
