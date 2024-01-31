<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        // If it's an update request, the unique rule will ignore the current category ID
        $categoryId = $this->route('category') ? $this->route('category')->id : null;

        return [
            'title' => 'required|string|max:80|unique:categories,title,' . $categoryId,
        ];
    }
}
