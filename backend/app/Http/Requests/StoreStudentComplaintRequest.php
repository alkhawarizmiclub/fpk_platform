<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentComplaintRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'complaint_id' => 'required|exists:complaints,id',
            'description' => 'required|string|max:4096|min:8',
        ];
    }
    public function messages(): array
    {
        return [
            'complaint_id.required' => 'complaint_id is required',
            'complaint_id.exists' => 'complaint_id does not exist',
            'description.required' => 'description is required',
            'description.string' => 'description must be a string',
            'description.max' => 'description must not exceed 4096 characters',
            'description.min' => 'description must be at least 8 characters',
        ];
    }
}
