<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;

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
            'prof_id' => 'integer|exists:profs,id'
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
            'prof_id.exists' => 'The prof id does not exist'
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $response = new JsonResponse([
            'success' => false,
            'message' => 'Validation errors',
            'data' => $validator->errors()
        ], 422);

        throw new ValidationException($validator, $response);
    }
}
