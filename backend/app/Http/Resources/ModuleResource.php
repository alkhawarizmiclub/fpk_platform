<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModuleResource extends JsonResource
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
            'module_name' => $this->module_name,
            'filiere' => $this->filiere,
            'semester' => $this->semester,
            'prof_id' => $this->prof_id,
            // 'normal' => $this->normal,
            // 'result_normal' => $this->result_normal,
            // 'ratt' => $this->ratt,
            // 'result_ratt' => $this->result_ratt
        ];
    }
}
