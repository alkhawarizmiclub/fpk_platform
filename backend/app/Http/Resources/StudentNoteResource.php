<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class StudentNoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if (!$this)
            return [];
        return [
            // TODO: add the student image from storage
            "student_photo" =>url(Storage::url($this->student_photo)),
            "apogee" => $this->apogee,
            "firstname" => $this->firstname,
            "lastname" => $this->lastname,
            "module_id" => $this->module_id,
            "normale" => $this->normale,
            "ratt" => $this->ratt,
            "inscrit_number" => $this->inscrit_number,
            "semester" => $this->semester,
        ];
    }
}
