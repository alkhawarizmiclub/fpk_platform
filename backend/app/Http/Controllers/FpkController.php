<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnnounceResource;
use App\Models\Announcement;
use App\Services\DBRepository;
use App\Services\StudentService;
use Illuminate\Support\Facades\DB;

class FpkController extends Controller
{
    private DBRepository $dBRepository;
    public function __construct(DBRepository $dBRepository)
    {
        $this->dBRepository = $dBRepository;
    }
    public function index()
    {
        return [
            'status' => 'success',
            'message' => 'Welcome to FPK API',
        ];
    }

    public function announce()
    {
        $pageSize = 10;
        $page = request()->query('page');
        if (!$page || $page <= 0)
            $page = 1;
        $AnnounceCount = Announcement::all()->count();
        $pageCount = ceil($AnnounceCount / $pageSize);
        if ($page > $pageCount)
            $page = $pageCount;
        $announcements = Announcement::all()->skip(($page - 1) * $pageSize)->take($pageSize);
        foreach ($announcements as $announcement)
            $announcement->author;
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Announcements retrieved successfully',
                'page_count' => $pageCount,
                'page_number' => $page,
                'data' => AnnounceResource::collection($announcements)
            ]
        );
    }
    public function acadmicYear()
    {
        return [
            'status' => 'success',
            'message' => 'Acadmic Year retrieved successfully',
            'data' => StudentService::getAcademicYear(date('Y-m-d'))
        ];
    }
    public function filiere()
    {
        $result = DB::table('filieres')
            ->select('id', 'filiere_name', 'filiere_abrv')
            ->get();
        return [
            'status' => 'success',
            'message' => 'Filiere retrieved successfully',
            'data' => $result
        ];
    }
    public function schedule()
    {
        $filiereId = request()->query('id');
            return response()->json(
                [
                    'status' => 'success',
                    'data' => $this->dBRepository->getFiliereSchedules($filiereId)
                ]
            );
    }
}
