<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfRequest;
use App\Http\Requests\ProfAuth\LoginRequest;
use App\Http\Resources\StudentNoteResource;
use App\Services\ProfService;
use App\Http\Requests\UpdateResultRequest;
use Illuminate\Http\Request;
use App\Http\Requests\StoreAnnouncementRequest;

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

    public function result(UpdateResultRequest $request)
    {
        return ($this->profService->result($request));
    }

    public function search(string $moduleId)
    {
        $result = $this->profService->search($moduleId);
        return (StudentNoteResource::collection($result));
    }
    public function show()
    {
        $prof = request()->user();
        return ($this->profService->profile($prof));
    }

    public function modules(Request $request)
    {
        $prof = $request->user();
        return ($this->profService->modules($prof));
    }

    public function students(string $moduleId)
    {
        return ($this->profService->students($moduleId));
    }

    public function login(LoginRequest $request)
    {
        return ($this->profService->login($request));
    }

    public function logout(Request $request)
    {
        return ($this->profService->logout($request));
    }
    public function getAnnounce()
    {
        $prof = request()->user();
        return ($this->profService->getAnnonce($prof));
    }
    public function announce(StoreAnnouncementRequest $request)
    {
        return ($this->profService->announce($request));
    }
    public function deleteAnnounce(string $id)
    {
        return ($this->profService->deleteAnnounce($id));
    }
    public function schedule()
    {
        $prof = request()->user();
        return ($this->profService->schedule($prof));
    }
    public function classes()
    {
        $prof = request()->user();
        return ($this->profService->classes($prof));
    }
    public function studentLists(string $moduleId)
    {
        $prof = request()->user();
        return ($this->profService->getStudentLists($moduleId, $prof));
    }
    public function accounts()
    {
        $prof = request()->user();
        return ($this->profService->accounts($prof));
    }

}
