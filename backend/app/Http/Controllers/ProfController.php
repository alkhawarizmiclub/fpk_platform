<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfRequest;
use App\Http\Requests\UpdateProfRequest;
use App\Http\Resources\ProfResource;
use App\Models\Prof;
use App\Services\ProfService;
use Illuminate\Http\Request;

class ProfController extends Controller
{
    private ProfService $profService;
    public function __construct(ProfService $profService)
    {
        $this->profService = $profService;
    }
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Profs retrieved successfully',
                'data' => ProfResource::collection(Prof::all())
            ],
            200
        ));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProfRequest $request)
    {
        return ($this->profService->save($request));
    }

    public function addResult(string $profId, Request $request)
    {
        return ($this->profService->addResult($profId, $request));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return ($this->profService->findById($id));
    }

    public function modules(string $id)
    {
        return ($this->profService->modules($id));
    }
    public function listStudents(string $profId, string $moduleId)
    {
        return ($this->profService->getListInscriptions($profId, $moduleId));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfRequest $request, Prof $prof)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prof $prof)
    {
        //
    }
}
