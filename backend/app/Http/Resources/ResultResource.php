<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Module;

class ResultResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */


    public function toArray(Request $request): array
    {
        return [
            'module_id' => $this->module_id,
            'module_name' => Module::find($this->module_id)->module_name,
            'inscrit_year' => $this->inscrit_year,
            'normal' => $this->normal,
            'result_normal' => $this->result_normal,
            'ratt' => $this->ratt,
            'result_ratt' => $this->result_ratt,
        ];
    }
}
