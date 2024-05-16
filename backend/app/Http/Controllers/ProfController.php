<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfRequest;
use App\Http\Requests\ProfAuth\LoginRequest;
// use App\Http\Requests\UpdateProfRequest;
// use App\Http\Resources\ProfResource;
// use App\Models\Prof;
use App\Services\ProfService;
use App\Http\Requests\UpdateResultRequest;
use Illuminate\Http\Request;

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

    public function login(LoginRequest $request)
    {
        return ($this->profService->login($request));
    }

    public function logout(Request $request)
    {
        return ($this->profService->logout($request));
    }

    public function addResult(string $profId, UpdateResultRequest $request)
    {
        return ($this->profService->addResult($profId, $request));
    }


    public function show(Request $request)
    {
        return ($request->user());
    }

    public function modules(Request $request)
    {
        return ($this->profService->modules($request->user()->id));
    }

    public function listStudents(string $profId, string $moduleId)
    {
        return ($this->profService->getListInscriptions($profId, $moduleId));
    }

}
