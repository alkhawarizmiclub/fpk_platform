<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;

class StoreStudentRequest extends FormRequest
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
        $allowedGenders = ['male', 'female'];
        return [
            'firstname' => 'required|string|max:64',
            'lastname' => 'required|string|max:64',
            'email' => 'required|email|unique:students|max:255',
            'phone_number' => 'required|string|unique:students',
            'birth_date' => 'required|date|date_format:Y-m-d',
            'password' => 'required|string|min:8',
            'gender' => ['required', Rule::in($allowedGenders)]

        ];
    }
    public function messages(): array
    {
        return [
            'first_name.required' => 'First name is required',
            'first_name.string' => 'First name must be a string',
            'first_name.max' => 'First name must not be more than 64 characters',
            'last_name.required' => 'Last name is required',
            'last_name.string' => 'Last name must be a string',
            'last_name.max' => 'Last name must not be more than 64 characters',
            'email.required' => 'Email is required',
            'email.email' => 'Email must be a valid email',
            'email.unique' => 'Email is already taken',
            'phone_number.required' => 'Phone number is required',
            'phone_number.string' => 'Phone number must be a string',
            'phone_number.unique' => 'Phone number is already taken',
            'phone_number.min' => 'Phone number must be at least 10 characters',
            'phone_number.max' => 'Phone number must not be more than 10 characters',
            'password.required' => 'Password is required',
            'password.string' => 'Password must be a string',
            'password.confirmed' => 'Password does not match',
            'password.min' => 'Password must be at least 8 characters',
            'birth_date.required' => 'Date of birth is required',
            'birth_date.date' => 'Date of birth must be a valid date',
            'birth_date.date_format' => 'invalid date format. Date must be in the format YYYY-MM-DD',
            'gender.required' => 'Gender is required',
            'gender.in' => 'The selected gender is invalid. Please select male or female'
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

