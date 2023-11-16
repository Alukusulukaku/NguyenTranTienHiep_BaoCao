<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    function index($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $total_data = Topic::all();
        $data = Topic::with('post')->offset($offset)
            ->limit($limit)->get();

        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }

    function all()
    {
        $total_data = Topic::all();


        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $total_data],
            200
        );
    }

    function show($id)
    {
        $data = Topic::with('post')->find($id);
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $data],
            200
        );
    }
    function store(Request $request)
    {
        $topic = new Topic();
        $topic->name = $request->name; //form
        $topic->slug = Str::of($request->name)->slug('-');
        $topic->description = $request->description;
        $topic->created_at = date('Y-m-d H:i:s');
        $topic->created_by = $request->user_id;
        $topic->status = $request->status; //form
        $topic->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $topic],
            201
        );
    }
    function update(Request $request, $id)
    {
        try {
            $topic = Topic::find($id);
            $topic->name = $request->name; //form
            $topic->slug = Str::of($request->name)->slug('-');
            $topic->description = $request->description; //form
            $topic->updated_at = date('Y-m-d H:i:s');
            $topic->updated_by = $request->user_id;
            $topic->status = $request->status; //form
            $topic->save(); //Luuu vao CSDL
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $topic],
                201
            );
        } catch (\Throwable $th) {
            return response()->json(
                ['success' => false, 'message' => 'Thành công', 'data' => null],
                201
            );
        }
    }
    public function destroy($id)
    {
        $post = Post::where('topic_id', $id);
        if ($post != null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        } else {
            $topic = Topic::find($id);
            $topic->delete();
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $topic],
                200
            );
        }
    }
}
