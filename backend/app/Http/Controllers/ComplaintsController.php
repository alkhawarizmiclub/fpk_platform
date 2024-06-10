<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreComplaintsRequest;
use App\Http\Requests\UpdateComplaintsRequest;
use App\Models\Complaints;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Traits\JsonTemplate;

class ComplaintsController extends Controller
{
    // filiter by type
    use JsonTemplate;
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Complaints retrieved successfully',
            'data' => Complaints::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreComplaintsRequest $request)
    {
        $complaints = Complaints::create($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Complaint created successfully',
                'data' => $complaints
            ],
            201
        );
    }

    public function update(UpdateComplaintsRequest $request, string $id)
    {
        $complaint = Complaints::find($id);
        if (!$complaint)
            return ($this->NOT_FOUND('Complaint'));
        $complaint->update(array_filter($request->all(), fn ($value) => $value !== null));
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Complaint updated3 successfully',
                'data' => $complaint
            ],
            201
        );
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Complaints::destroy($id);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Complaint deleted successfully',
                'data' => null
            ],
            200
        );
    }
}
