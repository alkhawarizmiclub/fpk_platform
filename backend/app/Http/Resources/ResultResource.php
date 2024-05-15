<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResultResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

// id": 64,
//             "apogee": 10,
//             "module_id": 1,
//             "normal": "2.0000",
//             "result_normal": null,
//             "ratt": "19.0000",
//             "result_ratt": null,
//             "created_at": null,
//             "updated_at": "2024-05-14T16:53:38.000000Z"
//         },
    public function toArray(Request $request): array
    {
        return [
            'module_id' => $this->module_id,
            'apogee' => $this->apogee,
            'normal' => $this->normal,
            'result_normal' => $this->result_normal,
            'ratt' => $this->ratt,
            'result_ratt' => $this->result_ratt,
        ];
    }
}
