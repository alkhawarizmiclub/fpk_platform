<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException; use Illuminate\Contracts\Validation\Validator;

class StoreAnnouncementRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'thumbnail_path' => 'required|mimes:jpeg,jpg,png,gif|max:2048',
            'tags' => 'required|string|max:1024',
            'content' => 'required|string|max:65535',
            'poster_image_path' => 'required|string|max:255',
        ];
    }
    public function messages(): array
    {
        return [
            'title.required' => 'Title is required',
            'title.max' => 'Title must not exceed 255 characters',
            'thumbnail_path.max' => 'Thumbnail path must not exceed 255 characters',
            'thumbnail_path.required' => 'Thumbnail path is required',
            'tags.required' => 'Tags is required',
            'tags.max' => 'Tags must not exceed 1024 characters',
            'poster_image_path.max' => 'Poster image path must not exceed 255 characters',
            'content.required' => 'Content is required',
            'content.max' => 'Content must not exceed 65535 characters',
            'poster_image_path.required' => 'Poster image path is required',
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
