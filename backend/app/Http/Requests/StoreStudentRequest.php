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
        return [
            'firstname' => 'required|string|max:64',
            'lastname' => 'required|string|max:64',

            'phone_number' => 'required|string|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:10|unique:students',
            'emergency_phone' => 'required|string|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:10',
            'firstname_ar' => 'required|string|max:64',
            'lastname_ar' => 'required|string|max:64',

            'birth_date' => 'required|date|date_format:Y-m-d',
            'birth_place' => 'required|string|max:255',

            'password' => 'required|string|min:8',
            'gender' => ['required', Rule::in($allowedGenders)],
            'massar_code' => 'required|string|max:20|min:8', // TODO: verfiy
            'nationality' => ['required', Rule::in($allowedNationality)],
            'id_num' => 'required|string|max:20', // TODO: could be passport or cin
            'email' => 'required|email|unique:students|max:255',
            'address' => 'required|string|max:255',
            'filiere_id' => 'required|string|max:64',
            'password' => 'required|string|min:8|confirmed',
            'baccalaureat' => 'required|mimes:pdf|max:2048',
            'releve_note' => 'required|mimes:pdf|max:2048',
            'student_photo' => 'required|image|mimes:png,jpge,jpg|max:2048',
            'identify_recto_verso' => 'required|mimes:pdf|max:2048'
        ];
    }
    public function messages(): array
    {
        return [
            'firstname.required' => 'Le nom en français est obligatoire.',
            'lastname.required' => 'Le prénom en français est obligatoire.',
            'firstname_ar.required' => 'Le nom en arabe est obligatoire.',
            'lastname_ar.required' => 'Le prénom en arabe est obligatoire.',
            'birth_date.required' => 'La date de naissance est obligatoire.',
            'birth_date.date' => 'La date doit être une date valide.',
            'birth_date.date_format' => 'La date de naissance doit être au format Y-m-d.',
            'birth_place.required' => 'Le lieu est obligatoire.',
            'massar_code.required' => 'Le massar code est obligatoire.',
            'massar_code.min' => ' massar code n\'est pas valide.',
            'massar_code.max' => ' massar code n\'est pas valide.',
            'nationality.required' => 'La nationalité est obligatoire.',
            'nationality.in' => 'La nationalité sélectionnée n\'est pas valide.',
            'id_num.required' => 'Le numéro d\'identification est obligatoire.',
            'email.required' => 'L\'email est obligatoire.',
            'email.email' => 'L\'email doit être une adresse email valide.',
            'email.unique' => 'Cet email est déjà utilisé.',
            'phone_number.required' => 'Le numéro de téléphone est obligatoire.',
            'phone_number.regex' => 'Le numéro de téléphone doit être un numéro valide.',
            'phone_number.unique' => 'Ce numéro de téléphone est déjà utilisé.',
            'phone_number.min' => 'Le numéro de téléphone doit être un numéro valide.',
            'phone_number.max' => 'Le numéro de téléphone doit être un numéro valide.',
            'emergency_phone.required' => 'Le numéro de téléphone d\'urgence est obligatoire.',
            'emergency_phone.regex' => 'Le numéro de téléphone d\'urgence doit être un numéro valide.',
            'address.required' => 'L\'adresse est obligatoire.',
            'filiere_id.required' => 'La filière est obligatoire.',
            'filiere_id.numeric' => 'La filière doit être un nombre.',
            'filiere_id.exists' => 'La filière sélectionnée n\'existe pas.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
            'password.confirmed' => 'Les mots de passe ne correspondent pas.',
            'gender.required' => 'Le genre est obligatoire.',
            'gender.in' => 'Le genre sélectionné n\'est pas valide.',
            'baccalaureat.required' => 'Le baccalauréat est obligatoire.',
            'baccalaureat.mimes' => 'Le baccalauréat doit être un fichier de type: pdf.',
            'baccalaureat.max' => 'Le baccalauréat ne doit pas dépasser 4096 Ko.',
            'releve_note.required' => 'Le relevé de notes est obligatoire.',
            'releve_note.mimes' => 'Le relevé de notes doit être un fichier de type: pdf.',
            'releve_note.max' => 'Le relevé de notes ne doit pas dépasser 4096 Ko.',
            'student_photo.required' => 'L\'image personnelle est obligatoire.',
            'student_photo.image' => 'L\'image personnelle doit être une image.',
            'student_photo.mimes' => 'L\'image personnelle doit être un fichier de type: pdf.',
            'student_photo.max' => 'L\'image personnelle ne doit pas dépasser 4096 Ko.',
            'identify_recto_verso.required' => 'L\'identification recto-verso est obligatoire.',
            'identify_recto_verso.mimes' => 'L\'identification recto-verso doit être un fichier de type: pdf.',
            'identify_recto_verso.max' => 'L\'identification recto-verso ne doit pas dépasser 4096 Ko.',
        ];
    }
}
