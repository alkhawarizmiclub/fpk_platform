<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
            'thumbnail_path' => 'required|mimes:jpeg,jpg,png',
            'tags' => 'string|max:1024|nullable',
            'content' => 'required|string|max:65535',
            'poster_image_path' => 'mimes:jpeg,jpg,png',
        ];
    }
    public function messages(): array
    {
        return [
            'title.required' => 'Title is required',
            'title.max' => 'Title must not exceed 255 characters',
            'thumbnail_path.max' => 'Poster image  must not exceed 8MB',
            'thumbnail_path.required' => 'Thumbnail path is required',
            'thumbnail_path.mimes' => 'Thumbnail path must be of type jpeg, jpg or png',
            'tags.max' => 'Tags must not exceed 1024 characters',
            'content.required' => 'Content is required',
            'content.max' => 'Content must not exceed 65535 characters',
            'poster_image_path.mimes' => 'Thumbnail path must be of type jpeg, jpg or png',
            'poster_image_path.max' => 'Poster image  must not exceed 8MB',
        ];
    }
}
