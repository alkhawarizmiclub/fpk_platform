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
        $allowedNationality = ['Marocain', 'Etanger'];
        // $allowedFliliere = ['SMI', 'SMP', 'SVT', 'SE'];
        return [
            'firstname' => 'required|string|max:64',
            'lastname' => 'required|string|max:64',
            'firstname_ar' => 'required|string|max:64',
            'lastname_ar' => 'required|string|max:64',
            'birth_date' => 'required|date|date_format:Y-m-d',
            'birth_place' => 'required|string|max:255',
            'student_code' => 'required|string|max:20', // TODO: verfiy
            'nationality' => ['required', Rule::in($allowedNationality)],
            'num_identify' => 'required|string|max:20', // TODO: could be passport or cin
            'email' => 'required|email|unique:students|max:255',
            'phone_number' => 'required|string|unique:students', //add valiadtion
            'phone_urgent' => 'required|string', // add valiadtion
            'address' => 'required|string|max:255',
            'filiere' => 'required|string|max:64',
            'password' => 'required|string|min:8|confirmed',
            'gender' => ['required', Rule::in($allowedGenders)],
            'baccalaureat' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'releve_note' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'image_presonnal' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'identify_recto_verso' => 'required|image|mimes:jpeg,png,jpg|max:2048',

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
            'gender.in' => 'The selected gender is invalid. Please select male or female',
            'baccalaureat.required' => 'Baccalaureat is required',
            'baccalaureat.image' => 'Baccalaureat must be an image',
            'baccalaureat.mimes' => 'Baccalaureat must be a file of type: jpeg, png, jpg',
            'baccalaureat.max' => 'Baccalaureat must not be more than 2048 kilobytes',
            'releve_note.required' => 'Releve note is required',
            'releve_note.image' => 'Releve note must be an image',
            'releve_note.mimes' => 'Releve note must be a file of type: jpeg, png, jpg',
            'releve_note.max' => 'Releve note must not be more than 2048 kilobytes',
            'image_presonnal.required' => 'Personal image is required',
            'image_presonnal.image' => 'Personal image must be an image',
            'image_presonnal.mimes' => 'Personal image must be a file of type: jpeg, png, jpg',
            'image_presonnal.max' => 'Personal image must not be more than 2048 kilobytes',
            'cin_recto_verso.required' => 'CIN is required',
            'cin_recto_verso.image' => 'CIN must be an image',
            'cin_recto_verso.mimes' => 'CIN must be a file of type: jpeg, png, jpg',
            'cin_recto_verso.max' => 'CIN must not be more than 2048 kilobytes',
            'filiere.required' => 'Filiere is required',
            // 'filiere.string' => 'Filiere must be a string',
            // 'filiere.max' => 'Filiere must not be more than 64 characters',
        ];
    }
}

