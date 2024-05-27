<?php
namespace App\Services;
use App\Http\Resources\ModuleResource;
use App\Http\Requests\StoreModuleRequest;
use App\Models\Module;
use Illuminate\Http\Response;
use App\Services\Template;
use App\Models\Prof;
use Illuminate\Http\Request;

class ModuleService
{

    public function findById(string $id)
    {
        $module = Module::find($id);
        if (!$module) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'module not found',
                    'data' => null
                ],
                Response::HTTP_NOT_FOUND
            );
        };
        $module  = new ModuleResource($module);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Module retrieved successfully',
                'data' => $module
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
    public function toJson($module)
    {
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Module retrieved successfully',
                'data' => new ModuleResource($module)
            ],
            Response::HTTP_OK
        );
    }

    public static function ADD_MODULE()
    {
        Module::create([
            'module_name' => 'M01- Analyse 1 – Suites Numériques et Fonctions',
            'semester' => 'S1',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M02- ALGEBRE 1- Généralités et Arithmétique dans Z',
            'semester' => 'S1',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M03- ALGEBRE 2- Structures, Polynômes et Fractions Rationnelles',
            'semester' => 'S1',
            'filiere' => 'SMI'
        ]);

        Module::create([
            'module_name' => 'M04- Physique 1 – Mécanique 1',
            'semester' => 'S1',
            'filiere' => 'SMI'
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
    }
}
