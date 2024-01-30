<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\CategoryRequest;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->get();

        return response()->json($categories);
    }

    public function show(Category $category)
    {
        return $category;
    }

    public function store(CategoryRequest $request)
    {
        Category::create($request->validated());

        return response()->json("Category has been created.");
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $category->update($request->validated());

        return response()->json("Category has been updated.");
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json("Category has been deleted.");
    }
}
