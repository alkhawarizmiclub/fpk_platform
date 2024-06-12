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
            'message' => 'required|string|max:4096|min:8',
        ];
    }
    public function messages(): array
    {
        return [
            'complaint_id.required' => 'complaint_id is required',
            'complaint_id.exists' => 'complaint_id does not exist',
            'message.required' => 'message is required',
            'message.string' => 'message must be a string',
            'message.max' => 'message must not exceed 4096 characters',
            'message.min' => 'message must be at least 8 characters',
        ];
    }
}
