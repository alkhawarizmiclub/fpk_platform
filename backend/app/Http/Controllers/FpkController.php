<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnnounceResource;
use App\Models\Announcement;

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
        return response()->json(AnnounceResource::collection($announcements));
    }
}
