<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreModuleRequest extends FormRequest
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
            'module_name' => 'required|string|max:64',
            'filiere' => 'required|string|max:64',
            'semester' => 'required|string|max:64',
            'prof_id' => 'integer|exists:profs,id|nullable'
        ];
    }
    public function messages(): array
    {
        return [
            'module_name.required' => 'The module name is required',
            'module_name.string' => 'The module name must be a string',
            'module_name.max' => 'The module name must not exceed 64 characters',
            'filiere.required' => 'The filiere is required',
            'filiere.string' => 'The filiere must be a string',
            'filiere.max' => 'The filiere must not exceed 64 characters',
            'prof_id.integer' => 'The prof id must be an integer',
            'prof_id.exists' => 'The prof id does not exist',
            'semester.required' => 'The semester is required',
            'semester.string' => 'The semester must be a string',
            'semester.max' => 'The semester must not exceed 64 characters'
        ];
    }
}
