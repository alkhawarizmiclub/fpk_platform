<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\JsonResponse;

class UpdateResultRequest extends FormRequest
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
            'module_id' => 'required',
            'apogee' => 'required',
            'normale' => 'nullable|numeric|min:0|max:20',
            'ratt' => 'nullable|numeric|min:0|max:20',
        ];
    }
    public function messages(): array
    {
        return [
            'module_id.required' => 'module_id is required',
            'module_id.exists' => 'module_id is not found',
            'apogee.required' => 'apogee is required',
            'apogee.exists' => 'apogee is not found',
            'normal.numeric' => 'normal must be a number',
            'ratt.numeric' => 'ratt must be a number',
            'normal.min' => 'normal must be at least 0',
            'ratt.min' => 'ratt must be at least 0',
            'normal.max' => 'normal must be at most 20',
            'ratt.max' => 'ratt must be at most 20'
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
