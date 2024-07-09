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
            'nom_fr' => 'required|string|max:64',
            'prenom_fr' => 'required|string|max:64',
            'nom_ar' => 'required|string|max:64',
            'prenom_ar' => 'required|string|max:64',
            'date' => 'required|date|date_format:Y-m-d',
            'lieu' => 'required|string|max:255',
            'code' => 'required|string|max:32',
            'nationality' => ['required', Rule::in($allowedNationality)],
            'id_num' => 'required|string|max:20', // TODO: could be passport or cin
            'email' => 'required|email|unique:students|max:255',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|unique:students',
            'emergencyPhone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|string',
            'address' => 'required|string|max:255',
            'filiere' => 'required|numeric|exists:filieres,id|max:64',//            'password' => 'required|string|min:8|confirmed',
            'gender' => ['required', Rule::in($allowedGenders)],
            'baccalaureat' => 'required|mimes:pdf|max:4096',
            'releve_note' => 'required|mimes:pdf|max:4096',
            'studentPhoto' => 'required|image|mimes:png,jpge,jpg|max:4096',
            'identify_recto_verso' => 'required|mimes:pdf|max:4096',


        ];
    }
    public function messages(): array
    {
        return [
            'nom_fr.required' => 'Le nom en français est obligatoire.',
            'prenom_fr.required' => 'Le prénom en français est obligatoire.',
            'nom_ar.required' => 'Le nom en arabe est obligatoire.',
            'prenom_ar.required' => 'Le prénom en arabe est obligatoire.',
            'date.required' => 'La date est obligatoire.',
            'date.date' => 'La date doit être une date valide.',
            'date.date_format' => 'La date doit être au format Y-m-d.',
            'lieu.required' => 'Le lieu est obligatoire.',
            'code.required' => 'Le code est obligatoire.',
            'nationality.required' => 'La nationalité est obligatoire.',
            'nationality.in' => 'La nationalité sélectionnée n\'est pas valide.',
            'id_num.required' => 'Le numéro d\'identification est obligatoire.',
            'email.required' => 'L\'email est obligatoire.',
            'email.email' => 'L\'email doit être une adresse email valide.',
            'email.unique' => 'Cet email est déjà utilisé.',
            'phone.required' => 'Le numéro de téléphone est obligatoire.',
            'phone.regex' => 'Le numéro de téléphone doit être un numéro valide.',
            'phone.unique' => 'Ce numéro de téléphone est déjà utilisé.',
            'emergencyPhone.required' => 'Le numéro de téléphone d\'urgence est obligatoire.',
            'emergencyPhone.regex' => 'Le numéro de téléphone d\'urgence doit être un numéro valide.',
            'address.required' => 'L\'adresse est obligatoire.',
            'filiere.required' => 'La filière est obligatoire.',
            'filiere.numeric' => 'La filière doit être un nombre.',
            'filiere.exists' => 'La filière sélectionnée n\'existe pas.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
            'password.confirmed' => 'Les mots de passe ne correspondent pas.',
            'gender.required' => 'Le genre est obligatoire.',
            'gender.in' => 'Le genre sélectionné n\'est pas valide.',
            'baccalaureat.required' => 'Le baccalauréat est obligatoire.',
            'baccalaureat.image' => 'Le baccalauréat doit être une image.',
            'baccalaureat.mimes' => 'Le baccalauréat doit être un fichier de type: pdf.',
            'baccalaureat.max' => 'Le baccalauréat ne doit pas dépasser 4096 Ko.',
            'releve_note.required' => 'Le relevé de notes est obligatoire.',
            'releve_note.image' => 'Le relevé de notes doit être une image.',
            'releve_note.mimes' => 'Le relevé de notes doit être un fichier de type: pdf.',
            'releve_note.max' => 'Le relevé de notes ne doit pas dépasser 4096 Ko.',
            'studentPhoto.required' => 'L\'image personnelle est obligatoire.',
            'studentPhoto.image' => 'L\'image personnelle doit être une image.',
            'studentPhoto.mimes' => 'L\'image personnelle doit être un fichier de type: pdf.',
            'studentPhoto.max' => 'L\'image personnelle ne doit pas dépasser 4096 Ko.',
            'identify_recto_verso.required' => 'L\'identification recto-verso est obligatoire.',
            'identify_recto_verso.image' => 'L\'identification recto-verso doit être une image.',
            'identify_recto_verso.mimes' => 'L\'identification recto-verso doit être un fichier de type: pdf.',
            'identify_recto_verso.max' => 'L\'identification recto-verso ne doit pas dépasser 4096 Ko.',
        ];
    }
}
