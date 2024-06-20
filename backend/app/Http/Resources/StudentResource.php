<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'apogee' => $this->apogee,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'firstname_ar' => $this->firstname_ar,
            'lastname_ar' => $this->lastname_ar,
            'email' => $this->email,
            'phone_number' => $this->phone_number,
            'phone_urgant' => $this->phone_urgent,
            'gender' => $this->gender,
            'birth_date' => $this->birth_date,
            'role' => 'student'
        ];
    }
}
