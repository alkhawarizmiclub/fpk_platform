<?php

namespace App\Services;

use App\Http\Resources\ModuleResource;
use App\Http\Requests\StoreModuleRequest;
use App\Models\Module;
use Illuminate\Http\Response;
use App\Traits\JsonTemplate;

class ModuleService
{
    use JsonTemplate;

    public function index()
    {
        return ModuleResource::collection(Module::all());
    }

    public function findById(string $id)
    {
        $module = Module::find($id);
        if (!$module)
            return $this->NOT_FOUND('Module');
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Module retrieved successfully',
                'data' => new ModuleResource($module)
            ],
            Response::HTTP_OK
        );
    }

    public function save(StoreModuleRequest $request)
    {
        $module = Module::create($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Module created successfully',
                'data' => new ModuleResource($module)
            ],
            Response::HTTP_CREATED
        );
    }


    public static function ADD_MODULE(string $id)
    {
        Module::create([
            'module_name' => 'M01- Analyse 1 – Suites Numériques et Fonctions',
            'semester' => 'S1',
            'filiere' => 'SMI',
            'prof_id' => $id
        ]);

        Module::create([
            'module_name' => 'M02- ALGEBRE 1- Généralités et Arithmétique dans Z',
            'semester' => 'S1',
            'filiere' => 'SMI',
            'prof_id' => $id

        ]);

        Module::create([
            'module_name' => 'M03- ALGEBRE 2- Structures, Polynômes et Fractions Rationnelles',
            'semester' => 'S1',
            'filiere' => 'SMI',
            'prof_id' => $id

        ]);

        Module::create([
            'module_name' => 'M04- Physique 1 – Mécanique 1',
            'semester' => 'S1',
            'filiere' => 'SMI',
            'prof_id' => $id

        ]);

        Module::create([
            'module_name' => 'M05- Physique 2 – Thermodynamique',
            'semester' => 'S1',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M06- Informatique 1 – Introduction à l’informatique',
            'semester' => 'S1',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M07- LT I',
            'semester' => 'S1',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M08- Analyse 2- Intégration',
            'semester' => 'S2',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => ' M09- Analyse 3 – Formule de Taylor, Développement Limité et Applications',
            'semester' => 'S2',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M10- ALGEBRE 3- Espaces Vectoriels, Matrices et Déterminants',
            'semester' => 'S2',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M11- Physique 3 – Electrostatique et Electrocinétique',
            'semester' => 'S2',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M13- Informatique 2 – Algorithmique I',
            'semester' => 'S2',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M06- Informatique 1 – Introduction à l’informatique',
            'semester' => 'S2',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M07- LT I',
            'semester' => 'S2',
            'filiere' => 'SMI'
        ]);
    }
}
