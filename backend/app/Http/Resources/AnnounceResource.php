<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AnnounceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'thumbnail' => Storage::url($this->thumbnail_path),
            'poster_image' => $this->poster_image_path ? Storage::url($this->poster_image_path) : null,
            'Author_name' => $this->whenLoaded('author')->firstname . ' ' . $this->whenLoaded('author')->lastname,
            'publish_at' => $this->created_at->diffForHumans(),
        ];
    }
}
