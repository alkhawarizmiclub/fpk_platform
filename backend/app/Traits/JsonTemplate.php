<?php

namespace App\Traits;
use Illuminate\Http\Response;

trait JsonTemplate
{
    public function NOT_FOUND(string $T)
    {
        return (response()->json(
            [
                'status' => "error",
                'message' => "$T not found",
                'data' => null
            ],
            Response::HTTP_NOT_FOUND
        ));
    }

    public function ERROR(string $T, $status = Response::HTTP_NOT_FOUND)
    {
        return (response()->json(
            [
                'status' => "error",
                'message' => "$T",
                'data' => null
            ],
            $status
        ));
    }
    public function resourceNotFound()
    {
        return (response()->json(
            [
                'status' => "error",
                'message' => " Resource not found",
                'data' => null
            ],
            Response::HTTP_NOT_FOUND
        ));
    }

    public function DATA(string $T, $data)
    {
        return (response()->json(
            [
                'status' => "success",
                'message' => "$T retrieved successfully",
                'data' => $data
            ],
            Response::HTTP_OK
        ));
    }
}
