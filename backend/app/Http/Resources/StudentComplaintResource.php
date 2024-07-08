<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentComplaintResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'apogee' => $this->apogee,
            'complaint_id' => $this->complaint_id,
            'description' => $this->description,
            'created_at' => $this->created_at,
        ];
    }
}
     // {
     //        "id": 1,
     //        "type": "PFE : is problem",
     //        "is_active": 0,
     //        "created_at": "2024-06-12T08:58:37.000000Z",
     //        "updated_at": "2024-06-12T08:58:37.000000Z",
     //        "pivot": {
     //            "apogee": 1,
     //            "complaint_id": 1,
     //            "message": "plz fix me",
     //            "created_at": "2024-06-12T09:08:19.000000Z",
     //            "updated_at": "2024-06-12T09:08:19.000000Z"
     //        }
     //    },
