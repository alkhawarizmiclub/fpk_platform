<?php

namespace App\Services;

use App\Http\Resources\ModuleResource;
use App\Http\Requests\StoreModuleRequest;
use App\Models\Module;
use Illuminate\Http\Response;
use App\Traits\JsonTemplate;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

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



    public static  function insertModule($modules, string $filiere)
    {

        $v = 1;
        foreach ($modules as $module) {
            Module::create([
                'module_name' => $module,
                'semester' => $v <= 7 ? 'S1' : 'S2',
                'filiere_id' => $filiere,
                'prof_id' => rand(1, 3),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            $v += 1;
        }
    }

    public static function gnModule()
    {
        $SEG = [
            'M01- Comptabilité Générale (I)',
            'M02- Management (I)',
            'M03- Introduction à l’économie',
            'M04- Microéconomie (I)',
            'M05- Statistique descriptive',
            'M06- Analyse Mathématique',
            'M07- Langues et Terminologie (I)',

            'M08- Macroéconomie',
            'M09- Microéconomie (II)',
            'M10- Probabilités',
            'M11- Algèbre – Mathématiques Financières',
            'M12- Comptabilité Générale (II)',
            'M13- Management (II)',
            'M14- Langues et Terminologie (II)',
        ];

        $SMI = [

            'M01- Analyse 1 – Suites Numériques et Fonctions',
            'M02- ALGEBRE 1- Généralités et Arithmétique dans Z',
            'M03- ALGEBRE 2- Structures, Polynômes et Fractions Rationnelles',
            'M04- Physique 1 – Mécanique 1',
            'M05- Physique 2 – Thermodynamique',
            'M06- Informatique 1 – Introduction à l’informatique',
            'M07- LT I',

            'M08- Analyse 2- Intégration',
            'M09- Analyse 3 – Formule de Taylor, Développement Limité et Applications',
            'M10- ALGEBRE 3- Espaces Vectoriels, Matrices et Déterminants',
            'M11- Physique 3 – Electrostatique et Electrocinétique',
            'M12- Physique 4 – Optique 1',
            'M13- Informatique 2 – Algorithmique I',
            'M14- LT II',
        ];

        $SMP = [

            'M01- Mécanique du point',
            'M02- Thermodynamique I',
            'M03- Atomistique',
            'M04- Thermochimie',
            'M05- Analyse 1',
            'M06- Algèbre 1',
            'M07- LT I',

            'M08- Electrostatique et Electrocinétique',
            'M09- Optique géométrique',
            'M10- Liaisons chimiques',
            'M11- Chimie des solutions',
            'M12- Analyse 2',
            'M13- Algèbre 2',
            'M14- LT II',
        ];

        self::insertModule($SMI, 1);
        self::insertModule($SEG, 2);
        self::insertModule($SMP, 3);

        self::setDefaultModule(range(1, 14), 1);
        self::setDefaultModule(range(15, 28), 2);
        self::setDefaultModule(range(29, 42), 3);
    }

    public static function setDefaultModule($modules, $fId)
    {
        foreach ($modules as $module) {
            DB::table('module_init')->insert([
                'module_id' => $module,
                'filiere_id' => $fId,

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }
    }
}
