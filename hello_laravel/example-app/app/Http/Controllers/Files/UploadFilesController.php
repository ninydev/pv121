<?php

namespace App\Http\Controllers\Files;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UploadFilesController extends Controller
{

    public function showForm(){
        return Inertia::render('Files/UploadFiles');
    }

    public function saveFile(Request $request){
        if (! $request->hasFile('someFile')) {
            return "No files in Request";
        }
        $file = $request->file('someFile');
//        $name = $file->hashName();
//        $extension = $file->extension();

        $path = $file->storePublicly('someFiles', 'public');

        // $fullPath = public_path($relativePath);
        $url = "/storage/" . $path;

        return "<a href='" . $url . "' target='_top'>Open </a>";
    }



}
