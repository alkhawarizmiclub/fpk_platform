<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfRequest;
use App\Http\Requests\UpdateProfRequest;
use App\Http\Resources\ProfResource;
use App\Models\Prof;
use App\Services\ProfService;
use App\Http\Requests\UpdateResultRequest;

class ProfController extends Controller
{
    private ProfService $profService;
    public function __construct(ProfService $profService)
    {
        $this->profService = $profService;
    }

    public function index()
    {
        return ($this->profService->all());
    }


    public function store(StoreProfRequest $request)
    {
        return ($this->profService->save($request));
    }

    public function addResult(string $profId, UpdateResultRequest $request)
    {
        return ($this->profService->addResult($profId, $request));
    }


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
}
