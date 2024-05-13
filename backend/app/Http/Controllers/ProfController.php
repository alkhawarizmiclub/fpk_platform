<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfRequest;
use App\Http\Requests\UpdateProfRequest;
use App\Http\Resources\ProfResource;
use App\Models\Prof;
use App\Services\ProfService;

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
        $prof = ProfResource::collection(Prof::all());
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Profs retrieved successfully',
                'data' => $prof
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

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return ($this->profService->findById($id));
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prof $prof)
    {
        //
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
