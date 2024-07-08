<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnnounceResource;
use App\Models\Announcement;
use App\Services\StudentService;

class FpkController extends Controller
{
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
}
