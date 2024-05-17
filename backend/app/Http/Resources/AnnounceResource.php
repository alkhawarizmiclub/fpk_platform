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
            'test' => $this->thumbnail_path,
            'Author_name' => $this->whenLoaded('author')->firstname . ' ' . $this->whenLoaded('author')->lastname,
            'updated_at' => $this->updated_at,
        ];
    }
}
