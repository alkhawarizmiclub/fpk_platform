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
        $announcements = Announcement::all();
        foreach ($announcements as $announcement)
            $announcement->author;
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Announcements retrieved successfully',
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
