<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $total_data = Slider::all();
        $data = Slider::offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }
    public function show($id)
    {
        $data = Slider::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $data],
            200
        );
    }
    public function getSliderByPosition($position, $status = 1)
    {
        if ($position === "none") {
            $args_slider = [
                ['status', '=', $status]
            ];
        } else {
            $args_slider = [
                ['position', '=', $position],
                ['status', '=', $status]
            ];
        }

        $data = Slider::where($args_slider)->orderBy('created_at', 'ASC')->get();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $data],
            200
        );
    }
    public function store(Request $request)
    {
        $slider = new Slider();
        $slider->name = $request->name; //form
        //upload image
        $slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename = $slug . '.' . $extension;
                $slider->image = $filename;
                $files->move(public_path('images/slider'), $filename);
            }
        }


        $slider->path = $request->path; //form
        $slider->position = $request->position;
        $slider->created_at = date('Y-m-d H:i:s');
        $slider->created_by = $request->user_id;
        $slider->status = $request->status; //form
        $slider->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $slider],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $slider = Slider::find($id);
        $slider->name = $request->name; //form
        $slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            if (is_file(public_path('images/slider/' . $slider->image))) {

                unlink(public_path('images/slider/' . $slider->image));
            }
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename = $slug . '.' . $extension;
                $slider->image = $filename;
                $files->move(public_path('images/slider'), $filename);
            }
        }


        $slider->path = $request->path; //form
        $slider->position = $request->position;
        $slider->updated_at = date('Y-m-d H:i:s');
        $slider->updated_by = $request->user_id;
        $slider->status = $request->status; //form
        $slider->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $slider],
            201
        );
    }
    public function destroy($id)
    {
        $slider = Slider::find($id);
        if ($slider == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        if (is_file(public_path('images/slider/' . $slider->image))) {

            unlink(public_path('images/slider/' . $slider->image));
        }
        $slider->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $slider],
            200
        );
    }
}