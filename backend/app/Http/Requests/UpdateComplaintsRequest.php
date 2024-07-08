<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateComplaintsRequest extends FormRequest
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
            'type' => 'string|max:255|min:5|nullable',
            'is_active' => 'boolean|nullable'
        ];
    }
    public function messages()
    {
        return [
            'type.string' => 'type must be a string',
            'type.max' => 'type must not exceed 255 characters',
            'type.min' => 'type must be at least 5 characters',
            'is_active.boolean' => 'is_active must be a boolean',
        ];
    }
}
